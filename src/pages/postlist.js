import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Link, graphql } from 'gatsby'
import './post.css'
import Layout from '../components/layout'
import { Hidden } from '@material-ui/core'
import Img from 'gatsby-image'
import { FaHome } from 'react-icons/fa'
import { FaRss } from 'react-icons/fa'
import { GiMugShot } from 'react-icons/gi'
import { GiSpikedDragonHead } from 'react-icons/gi'
import Fab from '@material-ui/core/Fab'
import UpIcon from '@material-ui/icons/KeyboardArrowUp'
import Footer from '../components/footer'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
})

class PostList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
    }
  }

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }))
  }

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return
    }

    this.setState({ open: false })
  }

  render() {
    const postList = this.props.data.allMarkdownRemark
    const { classes } = this.props
    const { open } = this.state
    return (
      <div className="page-container">
        <Hidden only={['sm', 'md', 'lg']}>
          <Layout>
            {postList.edges.map(({ node }, i) => {
              return (
                <div className="posts">
                  {/* <div className="count">
                        <FaAngleUp />
                        <div id="number" value="0" onClick={this.handleAdd}>
                          {this.state.clicks}
                        </div>
                      </div> */}
                  <Link to={node.fields.slug} key={i} className="link">
                    <Hidden only="xs">
                      <Img
                        fluid={node.frontmatter.image.childImageSharp.fluid}
                      />
                    </Hidden>
                    <div>
                      <h1>{node.frontmatter.title}</h1>
                      <span>{node.frontmatter.date}</span>
                      <p>{node.frontmatter.description}</p>
                    </div>
                  </Link>
                </div>
              )
            })}
          </Layout>
        </Hidden>
        <Hidden only="xs">
          <Layout>
            {postList.edges.map(({ node }, i) => {
              return (
                <div className="posts">
                  {/* <div className="count">
                        <FaAngleUp />
                        <div id="number" value="0" onClick={this.handleAdd}>
                          {this.state.clicks}
                        </div>
                      </div> */}
                  <Link to={node.fields.slug} key={i} className="link">
                    <Hidden only="xs">
                      <Img
                        fluid={node.frontmatter.image.childImageSharp.fluid}
                      />
                    </Hidden>
                    <div>
                      <h1>{node.frontmatter.title}</h1>
                      <p>{node.frontmatter.description}</p>
                      <span>{node.frontmatter.date}</span>
                    </div>
                  </Link>
                </div>
              )
            })}
          </Layout>
          <Footer />
        </Hidden>
        <Hidden only="xs">
          <div className="right">
            <Link to="/">
              <FaHome />
            </Link>
            <Link to="/about">
              <GiMugShot />
            </Link>
            <Link to="/projects">
              <GiSpikedDragonHead />
            </Link>
            <FaRss />
          </div>
        </Hidden>
        <Hidden only={['sm', 'md', 'lg']}>
          <div className="Extend">
            <div className="menu">
              <Fab
                className={classes.fab}
                buttonRef={node => {
                  this.anchorEl = node
                }}
                aria-owns={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={this.handleToggle}
              >
                <UpIcon />
              </Fab>
              {/* <Button
                buttonRef={node => {
                  this.anchorEl = node
                }}
                aria-owns={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={this.handleToggle}
              >
                <MenuIcon />
              </Button> */}
              <Popper
                open={open}
                anchorEl={this.anchorEl}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    id="menu-list-grow"
                    style={{
                      transformOrigin:
                        placement === 'bottom' ? 'center top' : 'center bottom',
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={this.handleClose}>
                        <MenuList>
                          <Link to="/about">
                            <MenuItem onClick={this.handleClose}>
                              About
                            </MenuItem>
                          </Link>
                          <Link to="/projects">
                            <MenuItem onClick={this.handleClose}>
                              Projects
                            </MenuItem>
                          </Link>
                          <MenuItem onClick={this.handleClose}>More</MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
            {/* <Fab className={classes.fab}>
              <UpIcon />
            </Fab> */}
          </div>
        </Hidden>
      </div>
    )
  }
}

PostList.propTypes = {
  classes: PropTypes.object.isRequired,
}

// export default PostList
export default withStyles(styles)(PostList)

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
            date
            title
            description
            image {
              childImageSharp {
                resize(width: 200, height: 200) {
                  src
                }
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
