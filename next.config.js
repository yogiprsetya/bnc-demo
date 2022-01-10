/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = {
  ...withBundleAnalyzer(),
  env: {
    APP_DOMAIN: process.env.APP_DOMAIN,
    API_HOST: process.env.API_HOST,
  },
};
