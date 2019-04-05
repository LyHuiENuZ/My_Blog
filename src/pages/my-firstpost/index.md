---
title: Liuzhenyu Universe Live！
description: 初级梦想家起航
date: '2019-03-20'
image: start.jpg
---

<br/>
似乎踏进程序设计开发领域的人们，第一件都是要搭建一个属于自己的Blog。分享也好，记录也好，这里在孕育着理科人的文科情怀。

<br/>
<br/>

## 买了 Design + Code, 就试着用 React & Gatsby 搭建了这个 Blog。

#### 同时学习 Markdown。

## Table of contents.

- Introduction to Gatsby
- Getting started with Gatsby
- Querying the data
- Adding blog posts
- Getting the posts list
- Adding images to the post
- Syntax highlighting and code blocks
- Seo in Gatsby
- Hosting the gatsby blog

## Introduction( Followed By Sai gowtham on <a href="https://codeburst.io/build-a-blog-using-gatsby-js-react-8561bfe8fc91">codeburst.io</a>)

## What is a Gatsby.js?

Gatsby.js is a static site generator for the react by using Gatsby we can build any type of modern web apps the sites built with Gatsby are high performant and blazing speed.

Gatsby.js does the code splitting so that user can only download the required number of files which needed to the particular page instead of over fetching the data.

## Why Gatsby?

- Gatsby has a rich plugin ecosystem.
- Future proof Jamstack websites.
- Everything is static.
- Code splitting out of the box.
- Speed.

## Getting started with Gatsby

We are going to set up a development environment for the blog we are building.

Nodejs is required for this project if you don’t have nodejs then go to nodejs.org and download the version which suits for your operating system.Once you installed then open your terminal and run node — v if the version number is shown then you are successfully installed.
Note: If you stuck in the middle of this tutorial please refer to the Code repository it's already on GitHub.

Let’s install the gatsby-cli which helps us to create and build new Gatsby sites right from the terminal.

Open your terminal and run below commands.

```js
npm install --global gatsby-cli
```

If you are using a mac then you need use sudo before the npm.

```js
sudo npm install --global gatsby-cli
```

Once you successfully installed gatsby-cli it’s time to see the Gatsby first look.

Open your terminal and run the following commands.

```js
gatsby new myblog
```

<br />
<div style="text-align:center">
<img src="https://cdn-images-1.medium.com/max/1600/0*nEfSYhf_OwEhzNKk.png"/>
</div>

```js
cd myblog
gatsby develop
```

`gatsby develop`
is used to start the local development server by default Gatsby uses the port 8000.

Now open your browser and type localhost:8000 you will see a Gatsby index page.
<br />

<div style="text-align:center">
<img src="https://cdn-images-1.medium.com/max/1600/0*csWXhN2zUu16hNyx.png"/>
</div>
Open the myblog folder in your favorite code editor.

Folder structure might look like these.

```js
├── node_modules
├── src
├── .gitignore
├── .prettierrc
├── gatsby-browser.js
├── gatsby-config.js
├── gatsby-node.js
├── gatsby-ssr.js
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
```

**node_modules**: The packages we are installed using npm will live in a node_modules folder.

**src**: Main code lives in src folder.

**gatsby-browser.js**: This file is related to the usage of any browser-related APIs provided by the gatsbyjs.

**gatsby-node.js** This file is related to the usage of any node related APIs provided by the gatsbyjs.

Open your pages folder any file you create in the pages folder treated as an individual page in the Gatsby.

suppose create a **new.js** file in your pages folder.

_pages/new.js_

```js
import React from 'react'
import Layout from '../components/layout'
const NewPage = () => (
  <Layout>
    <h1>I'm new page</h1>
  </Layout>
)
export default NewPage
```

Now in your browser manually type `localhost:8000/new` you will see anew route which is created by the Gatsby.
<br />

<div style="text-align:center">
<img src="https://cdn-images-1.medium.com/max/1600/0*vMoBs84KZOcBf6DJ.png"/>
</div>

## Querying the data

Gatsby uses the graphql for querying the data from the different data resources if you don’t know about graphql don’t worry we will learn something about graphql as we go.

Now open your gatsby-config.js file and just change the title of the blog as i did in the below code.

_gatsby-config.js_

```js
module.exports = {
  siteMetadata: {
    title: 'Myblog - reactgo',
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
    'gatsby-plugin-offline',
  ],
}
```

If you run a gatsby develop you will see two urls one is `localhost:8000`
and other is `localhost:8000/\_\_\_graphql`.

Now open your browser and enter `localhost:8000/\_\_\_graphql`.You will see a GraphiQL interface.

<br />

<div style="text-align:center">
<img src="https://cdn-images-1.medium.com/max/1600/0*zo3UEbQTaeXHkXWq.png"/>
</div>

Let’s write some queries now by using GraphiQL.

```js
{
   site{
    siteMetadata{
      title
    }
  }
}
```

If you hit play button now you will see the same data which we write before inside the `gatsby.config.js` file.

<br />

<div style="text-align:center">
<img src="https://cdn-images-1.medium.com/max/1600/0*3M_pGDGFJwuNa2xY.png"/>
</div>

Have you seen our blog title is changed now?

<br />

<div style="text-align:center">
<img src="https://cdn-images-1.medium.com/max/1600/0*zVo5ek13ibuoo2CC.png"/>
</div>

Now Open your components folder layout.js file you will see a StaticQuery
which is querying for the `site title`the data which comes back from the query is stored inside the `data` property.

_layout.js_

```js
import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import './layout.css'
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)
export default Layout
```

## Adding blog posts

we are adding some blog posts to our blog by using markdown format.

create a `my-firstpost/index.md` folder inside the pages directory.

`my-firstpost/index.md`

Our post should have a title, description,date, and image.

```js
---
title: "My first Blog post"
description: This post is related to the gatsbyjs
date: '2018-09-26'
image: ''
---
Don't build a website with last decade's tech. The future of the web is mobile,
 JavaScript and APIs—the
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
when an unknown printer took a galley of type and scrambled it to make a type s
pecimen book. It has survived not only five centuries, but also the leap into
electronic typesetting, remaining essentially unchanged. It was popularised in
the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
and more recently with desktop publishing software like Aldus PageMaker including
versions of Lorem Ipsum.
## Why do we use it?
It is a long established fact that a reader will be distracted by the readable
content of a page when looking at its layout. The point of using Lorem Ipsum
is that it has a more-or-less normal distribution of letters, as opposed to using
'Content here, content here', making it look like readable English.
Many desktop publishing packages and web page editors now use Lorem
Ipsum as their default model text and a search for 'lorem ipsum' will
uncover many web sites still in their infancy. Various versions have evolved
over the years, sometimes by accident, sometimes on purpose
(injected humor and the like).
```

we need to query this Markdown data by using the graphql for this first we need to install two new plugins which help us to transform the Markdown data into the html format.

- gatsby transformer remark.
- gatsby-source-filesystem

```js
npm install  gatsby-transformer-remark
npm install  gatsby-source-filesystem
```

Now we need to tell the Gatsby to use this two plugins.

Open your gatsby-config.js file and add the below config.

_gatsby-config.js_

```js
module.exports = {
  siteMetadata: {
    title: 'Myblog - reactgo',
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
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
  ],
}
```

Once you added now restart the server using `gatsby develop`

Let’s query a data using GraphiQL

You will see the same data that we added to our post.
<br />

<div style="text-align:center">
<img src="https://cdn-images-1.medium.com/max/1600/0*Fo_5P8ft5sx5AiYN.png"/>
</div>

Open _gatsby-node.js_

First, we need to add a new field to our query which is a slug field. onCreateNode API is used to create the new node fields.

_gatsby-node.js_

```js
const path = require('path')
const { createFilePath, createFileNode } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
```

<br />

<div style="text-align:center">
<img src="https://cdn-images-1.medium.com/max/1600/0*UA7x1UqFSv8Zbd5j.png"/>
</div>

## Creating pages programmatically using createPages API

\_gatsby-node.js

```js
const path = require('path')
const { createFilePath, createFileNode } = require(`gatsby-source-filesystem`)
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 1000
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors)
          return reject(result.errors)
        }
        const blogTemplate = path.resolve('./src/templates/blog-post.js')
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          createPage({
            path: node.fields.slug,
            component: blogTemplate,
            context: {
              slug: node.fields.slug,
            }, // additional data can be passed via context
          })
        })
        return
      })
    )
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
```

we need to tell the gatsby to use the particular template for the blog posts so that gatsby reuses this same template for every blog post.

Let’s create a blog post template now.

_templates/blog-post.js_

```js
import React from 'react'
import Layout from '../components/layout'
function BlogPost() {
  return (
    <Layout>
      <div>hello post</div>
    </Layout>
  )
}
export default BlogPost
```

Now delete `.cache` folder and run the `gatsby develop`

If you navigate over to the `localhost:8000/my-firstpost` you will see a Blog post template is rendered on the screen.
<br />

<div style="text-align:center">
<img src="https://cdn-images-1.medium.com/max/1600/0*Z9UIVFTCuEZoKpMT.png"/>
</div>
It’s time to add a query to our BlogPost template.

_blog-post.js_

```js
import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
function BlogPost() {
  return (
    <Layout>
      <div>hello post</div>
    </Layout>
  )
}
export default BlogPost
const query = graphql`
 query PostQuery($slug: String!) {
     markdownRemark(fields: { slug: { eq: $slug } }) {
       html
       frontmatter {
        title
        description
       }
   }
`
```

We are querying the data with the help of variable called $slug the same slug field which we added in the context object inside the **createPage** method.

The data of this query is available to us in `props.data`
_blog-post.js_

```js
import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
function BlogPost(props) {
  const post = props.data.markdownRemark
  const { title } = post.frontmatter
  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export default BlogPost
export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`
```

Now you can see a post is rendered on the screen.

<br />

<div style="text-align:center">
<img src="https://cdn-images-1.medium.com/max/1600/0*luZXJnBFcuCLfIdB.png"/>
</div>

## Getting the posts list

so far we didn’t render any posts on the index page let’s write a graphql query to get the available posts.

Open your `index.js` file and add the below query to get the available posts.

_index.js_

```js
import React from 'react'
import { Link, graphql } from 'gatsby'
import './post.css'
import Layout from '../components/layout'
const IndexPage = props => {
  const postList = props.data.allMarkdownRemark
  return (
    <Layout>
      {postList.edges.map(({ node }, i) => (
        <Link to={node.fields.slug} className="link">
          <div className="post-list">
            <h1>{node.frontmatter.title}</h1>
            <span>{node.frontmatter.date}</span>
            <p>{node.excerpt}</p>
          </div>
        </Link>
      ))}
    </Layout>
  )
}
export default IndexPage
export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
          }
        }
      }
    }
  }
`
```

Now open your browser you will see a posts list on the index page.

<br />

<div style="text-align:center">
<img src="https://cdn-images-1.medium.com/max/1600/0*iLdzJWK8WZ15_DUZ.png"/>
</div>

Let’s add a second post to our blog.

_second-post/index.md_

```js
---
title: "My second Blog post"
description: This post is related to the gatsbyjs
date: '2018-09-26'
image: ''
---
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
when an unknown printer took a galley of type and scrambled it to make a type
specimen book. It has survived not only five centuries, but also the leap into
electronic typesetting, remaining essentially unchanged. It was popularised in
the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
and more recently with desktop publishing software like Aldus PageMaker
including versions of Lorem Ipsum.
## Why do we use it?
It is a long established fact that a reader will be distracted by the
readable content of a page when looking at its layout. The point of using
Lorem Ipsum is that it has a more-or-less normal distribution of letters,
as opposed to using 'Content here, content here', making it look like readable
English. Many desktop publishing packages and web page editors now use Lorem Ipsum
as their default model text, and a search for 'lorem ipsum' will uncover many web
sites still in their infancy. Various versions have evolved over the years, sometimes
by accident, sometimes on purpose (injected humor and the like).
```

Restart the development server you will see two posts on the index page.
<br />

<div style="text-align:center">
<img src="https://cdn-images-1.medium.com/max/1600/0*tzbJKQlo2khWxysO.gif"/>
</div>

## Adding images to the post

Gatsby offers us a different type of plugins to lazy load the images by adding a blur effect and also crop the images for the different device sizes.

It helps us to load the pages fastly.

## How to add images to our blog?

we need to install the three plugins which are transformer-sharp, plugin-sharp,gatsby-image

Run the below commands to install the three plugins.

```js
npm install --save gatsby-transformer-sharp gatsby-plugin-sharp
npm install --save gatsby-image
```

Let’s add an image to our blog post.

_my-first post/index.md_

```js
---
title: "My first Blog post"
description: This post is related to the gatsbyjs
date: '2018-09-26'
image: time.jpg
---
```

time.jpg is present inside the my-first post folder.

we need to add a query for that image inside the _blog-post.js_ template.

_blog-post.js_

```js
import React from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
function BlogPost(props) {
  const post = props.data.markdownRemark
  const { title } = post.frontmatter
  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export default BlogPost
export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        image {
          childImageSharp {
            resize(width: 1500, height: 1500) {
              src
            }
            fluid(maxWidth: 786) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
```

Gatsby transformer sharp and plugin sharp are used to processing the images and produce the responsive images.

restart your development server you will see an image with the blur effect and faster load timing.

<br />

<div style="text-align:center">
<img src="https://cdn-images-1.medium.com/max/1600/0*0TxFZr07PFTxJeDD.gif"/>
</div>

## Syntax highlighting to the code blocks

Run below commands to install prismjs

```js
npm install --save gatsby-remark-prismjs prismjs
```

Once you successfully installed now open gatsby-config.js and add the below configuration to the plugins array.

_gatsby-conifg.js_

```js
{
resolve: `gatsby-transformer-remark`,
options: {
plugins: [
`gatsby-remark-prismjs`,
]
}
}
```

next, we need to the choose the syntax theme provided by the prismjs

_gatsby-browser.js_

```js
require('prismjs/themes/prism-solarizedlight.css')
```

Let’s test it now by adding some code blocks to our Markdown files.

_my-firstpost/index.md_

```js
{
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    }
```

<br />

<div style="text-align:center">
<img src="https://cdn-images-1.medium.com/max/1600/0*0LL87fjdvy8P6UUQ.png"/>
</div>

## Seo in Gatsby

Search engine optimization is very important to every site it’s bad behavior if we show the same title and description on every page of our site.We are using the react helmet library which is used to control the meta tags.

Let’s create a new component for handling the meta tags so that we can reuse it whenever it’s is required.

Create a new file called Metatags.js in your components folder.

_components/Metatags.js_

```js
import React from 'react'
import Helmet from 'react-helmet'
function Metatags(props) {
  return (
    <Helmet
      title={props.title}
      meta={[
        { name: 'title', content: props.title },
        { name: 'description', content: props.description },
        {
          property: 'og:title',
          content: props.title,
        },
        {
          property: 'og:url',
          content: props.pathname ? props.url + props.pathname : props.url,
        },
        {
          property: 'og:image',
          content: props.thumbnail && props.thumbnail,
        },
        {
          property: 'og:image:secure_url',
          content: props.thumbnail && props.thumbnail,
        },
        {
          property: 'og:description',
          content: props.description,
        },
        {
          property: 'og:image:width',
          content: '1200',
        },
        {
          property: 'og:image:height',
          content: '630',
        },
        {
          property: 'og:locale',
          content: 'en',
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: props.title },
        {
          name: 'twitter:description',
          content: props.description,
        },
        {
          name: 'twitter:image',
          content: props.thumbnail && props.thumbnail,
        },
        { property: 'og:type', content: 'website' },
        { name: 'robots', content: 'index, follow' },
        { name: 'twitter:creator', content: '@saigowthamr' },
        { property: 'og:site_name', content: 'yoursitename' },
      ]}
    >
      <html lang="en" />
    </Helmet>
  )
}
export default Metatags
```

Now we can ready to use this Meta tags component inside the BlogPost template.

_templates/blog-post.js_

```js
import React from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import Metatags from '../components/Metatags'
import { graphql } from 'gatsby'
function BlogPost(props) {
  const post = props.data.markdownRemark
  const url = props.data.site.siteMetadata.siteUrl
  const { title, description } = post.frontmatter
  const thumbnail = post.frontmatter.image.childImageSharp.resize.src
  return (
    <Layout>
      <Metatags
        title={title}
        description={description}
        thumbnail={url + thumbnail}
        url={url}
        pathname={props.location.pathname}
      />
      <div>
        <h1>{title}</h1>
        <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        image {
          childImageSharp {
            resize(width: 1500, height: 1500) {
              src
            }
            fluid(maxWidth: 786) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
```

Let’s test it now by using Mozilla dev tools.

<br />

<div style="text-align:center">
<img src="https://cdn-images-1.medium.com/max/2000/0*Vcyd4Ahz6mxsH9Io.png"/>
</div>

## Hosting the gatsby blog

We are using the netlify to host our blog because netlify offers a free tier for the personal blogs and projects with the custom domain support, HTTPS and continuous deployment from the private or public repositories.

Netlify is the best option to host the static sites its global CDN helps to serve the pages and assets quickly.

First, we need to create the account in netlify once you signed in you will see a button **new site from git** click on that button and select your code repository.

My code is already on the GitHub so that i will choose the GitHub option for the continuous deployment then you need to select a code repository as i showed in the below image.

<br />

<div style="text-align:center">
<img src="https://cdn-images-1.medium.com/max/1600/0*HYVbr_aEx_nFwu1_.png"/>
</div>

The last step click on the deploy site button then netlify robots start deploying your site.
<br />

<div style="text-align:center">
<img src="https://cdn-images-1.medium.com/max/1600/0*r5rPe-iDWhRjwJCL.png"/>
</div>

we are auditing our blog now by using chrome dev tools open your site in the Chrome browser and open the dev tools by hitting cmd+opt+i in mac or just right click and choose to inspect and select the audits tab then click on run audits button.

<br />

<div style="text-align:center">
<img src="https://cdn-images-1.medium.com/max/1600/0*qkzM-VzqpCsIfeqz.png"/>
</div>
Have you seen everything is 100% performance, accessibility, best practices and seo hope you enjoyed and learned something new?

<br />
<a href="">Code repository</a>

<a href="https://github.com/LyHuiENuZ/My_Blog">Live Blog</a>

This post is originally published at <a href="reactgo.com">reactgo.com
</a>

搬运自<a href="reactgo.com">reactgo.com</a>
