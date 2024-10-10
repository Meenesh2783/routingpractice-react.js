// Write your JS code here
import './index.css'

const About = props => {
  const {dup} = props
  return (
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-blog-img.png"
        className="img-logo"
        alt="about"
      />
      <h1 className="Heading">About</h1>
      <p className="Paragraph">
        I Love to Create! I am a front-end web developer
      </p>
    </div>
  )
}

export default About
