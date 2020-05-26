/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    name: 'Elias Meire',
    titleTemplate: '%s · Elias Meire',
    description:
      "Frontend developer based in Ghent, Belgium. I love JavaScript, React and Open Source. Currently I'm obsessing over: animation, a11y, theme-ui and Canvas/WebGL.",
    url: 'https://elsmr.dev',
    imageUrl: '/elias.jpg',
    imageHeight: 720,
    imageWidth: 720,
    email: 'elias@meire.dev',
    twitter: '@elsmr_',
    github: 'elsmr',
    job: 'Frontend Engineer',
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Elias Meire`,
        short_name: `elsmr`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#7F5AF0`,
        display: `standalone`,
        icon: 'static/favicon.png',
      },
    },
  ],
}
