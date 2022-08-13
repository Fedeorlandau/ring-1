/** @type {import('next').NextConfig} */

const withTranspileModules = require('next-transpile-modules')(['@ring/ui', '@ring/ui-tokens']);

module.exports = withTranspileModules({
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
});
