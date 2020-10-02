require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Malik | Front-end Developer`,
    description: `Hello I'm Malik, a web developer specializing in front-end development from India`,
    author: `@MalikBagwala`,
    siteUrl: "https://malikbagwala.dev",
    socialMedia: {
      github: "https://github.com/MalikBagwala",
      gitlab: "https://gitlab.com/MalikBagwala",
      linkedin: "https://www.linkedin.com/in/malik-bagwala-b989b5185",
      mail: "m.bagwala@outlook.com",
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-142564957-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,

      options: {
        resolve: `gatsby-remark-images`,
        options: {
          // It's important to specify the maxWidth (in pixels) of
          // the content container as this plugin uses this as the
          // base for generating different widths of each image.
          maxWidth: 590,
          withWebp: true,
          quality: 90,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Malik | Front-end Developer`,
        short_name: `Malik`,
        start_url: `/`,
        background_color: `#4e15a2`,
        theme_color: `#f4f7f6`,
        display: `minimal-ui`,
        icon: `src/favicon.ico`, // This path is relative to the root of the site.
      },
    },
  ],
}
