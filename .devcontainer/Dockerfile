FROM node:18.1.0-alpine

# Ensure this docker file is built by VScode.
# Manual / user build of this Dockerfile is NOT supported.
ARG vscode
RUN if [[ -z "$vscode" ]] ; then printf "\nERROR: This Dockerfile NEEDS to be built with VScode !" && Exit 1; else printf "VScode is detected: $vscode"; fi

RUN apk update \
# Install ssh
&& apk add openssh \
# Install git
&& apk add --no-cache git \
# Install ZSH & OhMyZsh for development inside container
&& apk add --no-cache zsh \
&& sh -c "$(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" \
&& echo alias gs=\'git status\' >> ~/.zshrc
