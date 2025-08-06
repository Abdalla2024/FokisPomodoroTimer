import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = ({ currentPath }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    if (currentPath !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <div className="nav-logo-icon">
            <span>🐦</span>
          </div>
          <h2>PomodoroBird</h2>
        </Link>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <button onClick={() => scrollToSection('features')}>
              Features
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('screenshots')}>
              Screenshots
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('download')}>
              Download
            </button>
          </li>
          <li>
            <Link to="/privacy" onClick={() => setIsMenuOpen(false)}>
              Privacy
            </Link>
          </li>
          <li>
            <Link to="/terms" onClick={() => setIsMenuOpen(false)}>
              Terms
            </Link>
          </li>
        </ul>
        
        <div 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
}

export default Header