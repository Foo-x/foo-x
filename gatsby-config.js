module.exports = {
  siteMetadata: {
    title: `foo-x`,
    description: `主に技術のことについて学んだ内容を記録したり、制作した作品を紹介したりするサイトです。`,
    siteUrl: `https://foo-x.com/`,
    social: {
      twitter: `f_akira_s`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`,
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-line-breaks`,
          `gatsby-remark-twemoji-shortcut`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `foo-x`,
        short_name: `foo-x`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#222933`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`,
        include_favicon: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-preload-fonts`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
