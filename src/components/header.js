import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import './header.css'
import Button from '@material-ui/core/Button'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'
import MenuIcon from '@material-ui/icons/Menu'
import { withStyles } from '@material-ui/core/styles'
import { Hidden } from '@material-ui/core'

const styles = theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing.unit * 2,
  },
})

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      // hasScrolled: false,
      open: false,
    }
  }

  // componentDidMount() {
  //   window.addEventListener('scroll', this.handleScroll)
  // }

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }))
  }

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return
    }

    this.setState({ open: false })
  }

  // handleScroll = event => {
  //   const scrollTop = window.pageYOffset

  //   if (scrollTop > 50) {
  //     this.setState({ hasScrolled: true })
  //   } else {
  //     this.setState({ hasScrolled: false })
  //   }
  // }

  render() {
    // const { classes } = this.props
    const { open } = this.state

    return (
      <div
        className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}
      >
        <Hidden only="xs">
          <div className="HeaderGroup">
            {/* <Link to="/">
            <img width="30" src={require('../images/logo-designcode.svg')} />
          </Link> */}
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/404">More</Link>
            {/* <Link to="/buy">
              <button>Buy</button>
            </Link> */}
          </div>
        </Hidden>
        {/* Dropdown appearing on mobile only */}
        <Hidden only={['sm', 'md', 'lg']}>
          <div className="menu">
            <Button
              buttonRef={node => {
                this.anchorEl = node
              }}
              aria-owns={open ? 'menu-list-grow' : undefined}
              aria-haspopup="true"
              onClick={this.handleToggle}
            >
              <MenuIcon />
            </Button>
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
                          <MenuItem onClick={this.handleClose}>About</MenuItem>
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
        </Hidden>
      </div>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)
