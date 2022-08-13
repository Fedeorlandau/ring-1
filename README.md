# Ring

The accelerator to speed-up your web development. Ring is an opinionated framework built with React and Next.js which let you focus on delivering value to your customers.

## Products

- [Ring UI](https://main--617beebe31c922004a50e3ca.chromatic.com): Headless UI built with [React](https://reactjs.org/), [Tailwind CSS](https://tailwindcss.com/) and [Figma Tokens](https://www.figma.com/community/plugin/843461159747178978/Figma-Tokens)
- [Ring Storefront](https://ring-storefront.vercel.app): Storefront made with [Next.js](https://nextjs.org/), [Contentful](https://www.contentful.com/) and Ring UI. (Commerce integration is WIP)

## Features

- Monorepo architecture with [Turborepo](https://turborepo.org/).
- [GitHub actions](https://github.com/valtech-ch/ring/tree/main/.github/workflows) to ensure the quality of the repository and to deploy your applications and libraries.
- [Shared configurations](https://github.com/valtech-ch/ring/tree/main/configs) for ESLint, Jest, Semantic Release and TypeScript.
- [Dependabot setup](https://github.com/valtech-ch/ring/blob/main/.github/dependabot.yml) with [specific GitHub Actions](https://github.com/valtech-ch/ring/blob/main/.github/workflows/dependabot.yml) to maintain your dependencies.
- [Release](https://github.com/valtech-ch/ring/tags) your packages individually.
- 100% Test Coverage [![PR Test Coverage](https://github.com/valtech-ch/ring/actions/workflows/pull-request-test-coverage.yml/badge.svg)](https://github.com/valtech-ch/ring/actions/workflows/pull-request-test-coverage.yml)

## Docs

- [Getting Started](./docs/getting-started.md)
- [Monorepo Structure](./docs/monorepo-structure.md)
- [Creating a new app](./docs/creating-a-new-app.md)
