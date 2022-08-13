# Creating a new app

Checklist when creating a new application:

- Keep the app name consistent. For a new app with a given name `some-prefix-fe-app`
  - The folder structure should be `apps/some-prefix-fe-app` or if we are grouping some apps `apps/some-prefix/some-prefix-fe-app`. Avoid `apps/some-prefix/fe-app`, as now the app name is broken into two folders and it would make harder if they need some reestructure in the folders.
  - Name in `apps/some-prefix-fe-app/package.json` should be `@ring/some-prefix-fe-app`
  - Add the test coverage action: `.github/workflows/apps-some-prefix-fe-app-test-coverage.yml`
  - Add other app specific actions with the same prefix: `.github/workflows/apps-some-prefix-fe-app-action-name.yml`
  - In `.github/workflows/pull-request.yml`, in the job `title`, add a new scope `some-prefix-fe-app`.
  - In `.github/dependabot.yml` add a new entry for this app.
  - In the global `package.json`, add a new script as alias for your app.
