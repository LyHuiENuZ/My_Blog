import React from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import Metatags from '../components/Metatags'
import Icon from '../images/gatsby-icon.png'
import { graphql } from 'gatsby'
import { DiscussionEmbed } from 'disqus-react'
import { Hidden } from '@material-ui/core'

function BlogPost(props) {
  const post = props.data.markdownRemark
  const url = props.data.site.siteMetadata.siteUrl
  const { title, date, description } = post.frontmatter
  const thumbnail =
    post.frontmatter.image && post.frontmatter.image.childImageSharp.resize.src
  const disqusShortname = 'yourdisqusshortname'
  const disqusConfig = {
    identifier: post.id,
    title: post.frontmatter.title,
  }
  return (
    <Layout>
      <Metatags
        title={title}
        date={date}
        description={description}
        thumbnail={thumbnail ? url + thumbnail : url + Icon}
        url={url}
        pathname={props.location.pathname}
      />
      <Hidden only={['sm', 'md', 'lg']}>
        <div>
          <h1 style={{ fontSize: '1.5em' }}>{title}</h1>
          <p style={{ fontSize: '1em' }}>{date}</p>
          {thumbnail && (
            <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
          )}
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </div>
      </Hidden>
      <Hidden only="xs">
        <div>
          <h1>{title}</h1>
          <p>{date}</p>
          {thumbnail && (
            <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
          )}
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </div>
      </Hidden>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
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
