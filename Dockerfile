# This Dockerfile can be used to build a specific application by passing the workspace as the SCOPE build arg
# It's based on Bogdan's Dockerfile for use with TurboRepo: https://github.com/vercel/turborepo/issues/215#issuecomment-1027058056
# It should be the only Dockerfile needed as all the other specific implementations will be made in the application itself, thus in the workspace passed along

# Setting up the base image
FROM node:16-alpine AS base
RUN apk update
WORKDIR /app
ARG SCOPE
ENV SCOPE=${SCOPE}

ARG PORT
ENV PORT=${PORT}

ENV YARN_CACHE_FOLDER=.yarn-cache

# Pruning the turbo repo to the scope of the workspace
FROM base AS pruner
RUN yarn global add turbo@1.1.2
COPY . .
RUN turbo prune --scope=${SCOPE} --docker

# Installing the necessary dependencies
FROM base AS dev-deps
COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/yarn.lock ./yarn.lock
# Specifically copying over workspace-agnostic libraries and configuration
COPY ./turbo.json .
COPY ./libs ./libs
COPY ./configs ./configs
RUN yarn install --immutable --immutable-cache --ignore-scripts

FROM base AS prod-deps
COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/yarn.lock ./yarn.lock
COPY --from=dev-deps /app/${YARN_CACHE_FOLDER} /${YARN_CACHE_FOLDER}
RUN yarn install --immutable --immutable-cache --production --prefer-offline --ignore-scripts
RUN rm -rf /app/${YARN_CACHE_FOLDER}

# Building the application
FROM base AS builder
COPY --from=dev-deps /app/ .
COPY --from=pruner /app/out/full/ .
RUN yarn turbo run build --scope=${SCOPE} --include-dependencies --no-deps
RUN find . -name node_modules | xargs rm -rf

# Starting the application
FROM base AS runner
COPY --from=prod-deps /app/ .
COPY --from=builder /app/ .
EXPOSE ${PORT}
CMD yarn workspace ${SCOPE} start
