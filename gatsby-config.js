module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  pathPrefix: "/The-Magic",
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#0069D9`,
        theme_color: `#0069D9`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        useResolveUrlLoader: true,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-load-script',
    //   options: {
    //     disable: !process.env.SENTRY_DSN, // When do you want to disable it ?
    //     src: 'https://browser.sentry-cdn.com/5.15.4/bundle.min.js',
    //     integrity:
    //       'sha384-Nrg+xiw+qRl3grVrxJtWazjeZmUwoSt0FAVsbthlJ5OMpx0G08bqIq3b/v0hPjhB',
    //     crossorigin: 'anonymous',
    //     onLoad: `() => Sentry.init({dsn:"${process.env.SENTRY_DSN}"})`,
    //   },
    // },
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        src:
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/TweenLite.min.js",
      },
    },
    // this (optional) plugin enables rogressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
