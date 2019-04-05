import React from 'react'
import { Link } from '@reach/router'
import Header from '../components/header'
import './index.css'
import Typing from 'react-typing-animation'
import './post.css'
import { FaGithub } from 'react-icons/fa'
import { FaRss } from 'react-icons/fa'
import { Hidden } from '@material-ui/core'

class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Hidden only={['sm', 'md', 'lg']}>
            <div className="background-image" />
          </Hidden>
          <div className="Hero">
            <div className="HeroGroup" />
            <h1>
              Liuzhenyu Universe Live!
              <br />
              <Hidden only="xs">
                <span>Record Everything Around Me!</span>
              </Hidden>
            </h1>
            <p>
              Geek | Engineer | Gamer
              <Hidden only="xs">| Bodybuilder | Dreamer</Hidden>
            </p>
            <div className="Typing">
              <div>
                <span>Upcoming...... </span>
              </div>
              <Typing speed={200} loop={true} startDelay={200}>
                <span>Designer | </span>
                <span>Developer</span>
                <Typing.Reset count={18} delay={500} />
                {/* <Typing.Backspace count={2} /> */}
              </Typing>
            </div>
            <br />
            <div className="Post">
              <Link to="/postlist">Blog</Link>
            </div>
            <div className="Logos">
              <h3>
                <Link
                  className="Github"
                  to={'//github.com/LyHuiENuZ'}
                  target="_blank"
                >
                  <FaGithub />
                </Link>
              </h3>
              <h3>
                <Link
                  className="Rss"
                  to="/404"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaRss />
                </Link>
              </h3>
              {/* <img src={require('../images/logo-sketch.png')} width="50" />
                <img src={require('../images/logo-figma.png')} width="50" />
                <img src={require('../images/logo-studio.png')} width="50" />
                <img src={require('../images/logo-framer.png')} width="50" />
                <img src={require('../images/logo-react.png')} width="50" />
                <img src={require('../images/logo-swift.png')} width="50" /> */}
            </div>
            <svg
              className="Wave"
              width="100%"
              height="15vh"
              viewBox="0 0 100% 15vh"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z"
                fill="white"
              >
                <animate
                  repeatCount="indefinite"
                  fill="freeze"
                  attributeName="d"
                  dur="10s"
                  values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;
  
      M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z;
  
      M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;
   
      M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;"
                />
              </path>
            </svg>
          </div>
        </div>
      </div>
    )
  }
}

export default IndexPage
