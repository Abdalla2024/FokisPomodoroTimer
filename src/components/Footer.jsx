const Footer = ({ setCurrentPage }) => {
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
              <h3>PomodoroBird</h3>
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
                <button onClick={() => setCurrentPage('privacy')}>
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('terms')}>
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} PomodoroBird. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer