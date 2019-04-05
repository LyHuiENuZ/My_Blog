import React from 'react'

import './footer.css'
import { FaReact } from 'react-icons/fa'

const Footer = () => (
  <div className="footer-content">
    <div className="footer">
      <p>
        <span>Created by</span> <FaReact />
        <img src={require('../images/gatsby-icon.png')} alt="" width="30" />
      </p>
      <p>
        <span>@刘振宇</span>
      </p>
    </div>
  </div>
)

export default Footer
