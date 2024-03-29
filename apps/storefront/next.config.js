/** @type {import('next').NextConfig} */

const withTranspileModules = require('next-transpile-modules')([
  '@ring/contentful',
  '@ring/swell',
  '@ring/ui',
  '@ring/ui-tokens',
]);

module.exports = withTranspileModules({
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  i18n: {
    locales: ['en', 'es'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en',
  },
  images: {
    domains: ['images.ctfassets.net', 'cdn.schema.io'],
  },
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
});
