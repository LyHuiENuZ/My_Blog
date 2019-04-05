import React from 'react'
import Card from '../components/card'
import './projects.css'

const Projects = () => (
  <div className="Cards">
    <h2>My Projects, More coming</h2>
    <div className="CardGroup">
      <a href="https://www.yedo.app/" target="_blank" rel="noopener noreferrer">
        <Card
          title="Yedo | 一道"
          text="Wechat Miniprogram"
          image={require('../images/yedo.png')}
        />
      </a>
      <Card
        title="My Blog"
        text="Gatsby Starter"
        image={require('../images/my_blog.png')}
      />
      <Card
        title="My Resume"
        text="Simple HTML"
        image={require('../images/my_resume.png')}
      />
      <div className="Upcoming">
        <Card
          title="Upcoming"
          text="surprise"
          image={require('../images/wallpaper4.jpg')}
        />
      </div>
      <div />
    </div>
  </div>
)

export default Projects
