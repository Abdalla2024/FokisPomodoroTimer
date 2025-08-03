import { useState } from 'react'

const Header = ({ setCurrentPage, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    if (currentPage !== 'home') {
      setCurrentPage('home')
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
        <div 
          className="nav-logo"
          onClick={() => setCurrentPage('home')}
        >
          <div className="nav-logo-icon">
            <span>🐦</span>
          </div>
          <h2>PomodoroBird</h2>
        </div>
        
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
            <button onClick={() => setCurrentPage('privacy')}>
              Privacy
            </button>
          </li>
          <li>
            <button onClick={() => setCurrentPage('terms')}>
              Terms
            </button>
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