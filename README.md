# Ring

The accelerator to speed-up your web development. Ring is an opinionated framework built with React and Next.js which let you focus on delivering value to your customers.

## Architecture

- Software development focused on sections.
- Each section is independent from any other section.
- High scalability, architecture designed to support any number of sections. Following the separations of concerns: markup (HTML), styling (CSS), logic (JavaScript) and data.
- Each section is reflected on each layer of Ring:
  - Ring UI: Headless UI
  - Ring CMS: Integration between the CMS and Ring UI.
  - Ring Commerce: Integration between the Commerce service and Ring UI.
  - Ring Contracts: Contracts between the APIs and the Front-end.
- Monorepo architecture with [Turborepo](https://turborepo.org/) to have an productive developer experience.

## Libraries

- [Ring UI](https://main--617beebe31c922004a50e3ca.chromatic.com): Headless UI built with [React](https://reactjs.org/) and [Tailwind CSS](https://tailwindcss.com/):

  - [x] [Figma Tokens](https://www.figma.com/community/plugin/843461159747178978/Figma-Tokens) to syncronize Figma with the front-end code.
  - [x] Components documented with [Storybook](https://storybook.js.org/).
  - [x] Design system following [atomic design](https://bradfrost.com/blog/post/atomic-web-design/).
  - [x] Best testing practices with [Testing Library](https://testing-library.com/) and [MSW](https://mswjs.io/) to achieve 100% test coverage.
  - [ ] [WCAG Level AA](https://www.w3.org/WAI/WCAG2AA-Conformance) compliant.
  - [x] Designs for mobile, tablet and desktop.
  - [ ] LTR and RTL support.

- Ring CMS: Integration of Ring UI and Ring Storefront with a selection of CMS

  - Contentful:
    - [x] Data modeling to work with Ring UI.
    - [x] Import/Export content models and content.
    - [x] Generated API types.
  - Sitecore:
    - [ ] Data modeling to work with Ring UI.

- Ring Commerce
  - Commercetools
    - [ ] Data modeling to work with Ring UI.
  - Swell
    - [x] Data modeling to work with Ring UI.

## Applications

- [Ring Storefront](https://ring-storefront.vercel.app): Storefront made with [Next.js](https://nextjs.org/), Ring UI, Ring CMS (Contentful) and Ring Commerce (Swell).

## Configs

Shared configuratino files to ensure consistency between all the applications and libraries.

- [x] Shared TypeScript and Jest configuration.
- [x] Shared ESLint configurator with an extensive set of plugins to ensure high code quality.
- [x] Semantic release for each application or library with git tags.

## DevOps

Continuous integration and continuous delivery with GitHub actions:

- [x] Workflows to deploy the applications/libraries.
- [x] Checks defined to guarantee a stable software:
  - [x] Build: Build the application and libraries, so they work as expected.
  - [x] Tests: Run unit and integration tests to deliver the software with confidence.
  - [x] ESLint: Ensure best and consistent practices accross the code.
  - [x] TypeScript: run type checks to ensure the consistency of the code and caught defects early enough.
- [ ] Run the checks before release.
- [x] Run the checks before deployment.
- [x] Run the checks to block the merge of pull requests.
- [x] Generate releases based on [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) with [Semantic Release](https://github.com/semantic-release/semantic-release).
- [x] Check Pull Requests test coverage, and block them if they are below the defined threshold.
- [x] Check Pull Requests title, as the their are used to generate the releases.
- [x] Dependabot to generate pull requests which update the dependencies, including auto approach and auto merge jobs for a full automatic setup.
- [x] Auto attach a size label to each Pull Request, to encourage small Pull Requests.

## Docs

- [Getting Started](./docs/getting-started.md)
- [Monorepo Structure](./docs/monorepo-structure.md)
- [Creating a new app](./docs/creating-a-new-app.md)
