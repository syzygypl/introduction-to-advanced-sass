const sass = require('sass');
const sassJsonImporter = require('node-sass-json-importer');

module.exports = {
  pathPrefix: '/introduction-to-advanced-sass',
  siteMetadata: {
    title: 'Introduction to advanced Sass',
    description: 'Brief description of advanced Sass features and good practices spiced up with some explanations, examples and useful links',
    author: 'Marcin Gościcki',
    siteUrl: 'https://syzygypl.github.io/introduction-to-advanced-sass/',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: sass,
        sassOptions: {
          importer: sassJsonImporter(),
        },
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Introduction to advanced Sass',
        short_name: 'Advanced Sass',
        start_url: '/',
        background_color: '#222222',
        theme_color: '#222222',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline',
  ],
};
