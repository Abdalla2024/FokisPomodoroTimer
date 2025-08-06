import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand */}
          <div>
            <div className="footer-brand">
              <div className="footer-brand-icon">
                <span>🐦</span>
              </div>
              <h3>Fokis</h3>
            </div>
            <p>
              Your trusted companion for productivity and focus management.
            </p>
          </div>

          {/* Product */}
          <div className="footer-section">
            <h4>Product</h4>
            <ul>
              <li>
                <button 
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Features
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('screenshots')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Screenshots
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Download
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li>
                <Link to="/privacy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Fokis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer