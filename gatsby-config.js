module.exports = {
  siteMetadata: {
    title: 'LyHuiENuZ (Zhenyu Liu)',
    description:
      'This is my personal blog website, I built it by Gatsby, recording what I learnt and what happend in my life. Welcome to my University! Enjoy!',
    keywords: 'Liuzhenyu, 刘振宇, LyHuiENuZ, Zhenyu Liu, gatsby, blog',
    siteUrl: 'https://liuzhenyu.me',
    // disqusShortname: siteConfig.disqusShortname,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              ignoreFileExtensions: [],
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-copy-images`],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: ['gatsby-remark-copy-linked-files'],
      },
    },
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-plugin-zopfli',
    },
    `gatsby-plugin-compression`,
    // {
    //   resolve: `gatsby-plugin-feed`,
    //   options: {
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             title
    //             description
    //             siteUrl
    //             site_url: siteUrl
    //           }
    //         }
    //       }
    //     `,
    //     feeds: [
    //       {
    //         serialize: ({ query: { site, allMarkdownRemark } }) => {
    //           return allMarkdownRemark.edges.map(edge => {
    //             return Object.assign({}, edge.node.frontmatter, {
    //               description: edge.node.excerpt,
    //               date: edge.node.frontmatter.date,
    //               url: site.siteMetadata.siteUrl + edge.node.fields.slug,
    //               guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
    //               custom_elements: [{ 'content:encoded': edge.node.html }],
    //             })
    //           })
    //         },
    //         query: `
    //           {
    //             allMarkdownRemark(
    //               sort: { order: DESC, fields: [frontmatter___date] },
    //             ) {
    //               edges {
    //                 node {
    //                   excerpt
    //                   html
    //                   fields { slug }
    //                   frontmatter {
    //                     title
    //                     date
    //                   }
    //                 }
    //               }
    //             }
    //           }
    //         `,
    //         output: '/rss.xml',
    //         title: "Your Site's RSS Feed",
    //       },
    //     ],
    //   },
    // },
  ],
}
