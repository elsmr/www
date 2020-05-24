/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    name: 'Elias Meire',
    titleTemplate: '%s · Elias Meire',
    description: '',
    url: 'https://elsmr.dev',
    imageUrl: 'https://elsmr.dev/elias.png',
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
  ],
}
