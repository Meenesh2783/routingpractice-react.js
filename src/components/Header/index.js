// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = props => {
  const {dup} = props
  return (
    <nav className="logo-and-items-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="logo"
        />
        <h1 className="logo-heading">wave</h1>
      </div>
      <ul className="nav-items-container link">
        <li>
          <Link to="/" className="components-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="components-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="components-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
