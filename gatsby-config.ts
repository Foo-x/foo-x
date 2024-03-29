import { GatsbyConfig } from 'gatsby';
import { executablePath } from 'puppeteer';

type FeedsQuery = {
  query: Queries.Query;
};

const config: GatsbyConfig = {
  siteMetadata: {
    title: `foo-x`,
    description: `主に技術のことについて学んだ内容を記録したり、制作したものを紹介したりするサイトです。`,
    siteUrl: `https://foo-x.com/`,
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
              withWebp: true,
              linkImagesToOriginal: true,
              srcSetBreakpoints: [315, 630],
              wrapperStyle: `white-space: initial`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-mermaid`,
            options: {
              launchOptions: {
                executablePath: executablePath(),
              },
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-external-links`,
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          query Feed {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }: FeedsQuery) => {
              return allMarkdownRemark.edges.map((edge) => {
                const url = site?.siteMetadata?.siteUrl ?? '';
                const slug = edge.node.fields?.slug ?? '';
                const imageSrc =
                  edge.node.frontmatter?.header?.childImageSharp
                    ?.gatsbyImageData?.images?.fallback?.src ?? '';
                return {
                  ...edge.node.frontmatter,
                  description: edge.node.excerpt,
                  url: url + slug,
                  guid: url + slug,
                  enclosure: {
                    url: url + imageSrc,
                  },
                  header: undefined,
                };
              });
            },
            query: `
              query Feeds {
                allMarkdownRemark(
                  sort: { frontmatter: { date: DESC } },
                ) {
                  edges {
                    node {
                      excerpt
                      fields { slug }
                      frontmatter {
                        title
                        date
                        header {
                          childImageSharp {
                            gatsbyImageData(
                              placeholder: NONE
                              formats: [WEBP]
                              width: 600
                            )
                          }
                        }
                      }
                    }
                  }
                }
              }
            `,
            title: 'foo-x',
            output: '/rss.xml',
          },
        ],
      },
    },
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
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [`G-XNZ8Y97RCM`],
        pluginConfig: {
          head: true,
        },
      },
    },
  ],
  graphqlTypegen: true,
};

export default config;
