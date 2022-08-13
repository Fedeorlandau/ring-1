# Getting Started

> **_WARNING:_**
> All the commands must be run from the root of this repository, not from any subfolder.

## Dependencies

Based on [Yarn Workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/):

1.  Install dependencies

        yarn

2.  Add new global dependency

        yarn add my-dependency -W

3.  Add new local dependency with Yarn Workspaces

        yarn workspace @ring/storefront add my-dependency

## Development

Based on [Turborepo](https://turborepo.org/docs/core-concepts/filtering)

1.  Start development with all the applications

        yarn dev

2.  Start development of one application usign Turborepo

        yarn dev --filter=@ring/storefront

3.  Start development of one application (with dependencies) usign Turborepo

        yarn dev --filter=@ring/storefront...

These are the most useful commands to provide an idea of the 3 types (global, with Yarn Workspaces and with Turborepo) of commands, please read the `package.json` to find out which other commands are available.
