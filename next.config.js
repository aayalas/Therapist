/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n:{
    locales: [ "es", "en" ],
    defaultLocale: "es",
    localeDetection: false // disable automatic language detection as we are using custom server-side routing to
  }
}

module.exports = nextConfig
