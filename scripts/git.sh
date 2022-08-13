#!/usr/bin/env bash

clean () {
    cd "$(dirname "$0")"
    cd ..

    git branch --merged | egrep -v "(^\*|main)" | xargs git branch -d
    git fetch --prune
}

# Check if the function exists (bash specific)
if declare -f "$1" > /dev/null
then
    # call arguments verbatim
    "$@"
else
    # Show a helpful error
    printf -- "'$1' is not a known function name"
    printf -- '\n\n'

    printf -- 'Usage:'
    printf -- '\n\n'
    printf -- 'yarn git clean      Remove merged branches\n'
    printf -- '\n'

    printf -- '\n'
    exit 1
fi
