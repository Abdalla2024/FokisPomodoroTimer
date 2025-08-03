const Hero = () => {
  const scrollToDownload = () => {
    const element = document.getElementById('download')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToFeatures = () => {
    const element = document.getElementById('features')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Focus and Achieve <span className="gradient-text">More</span>
          </h1>
          <p className="hero-description">
            PomodoroBird is the ultimate iOS productivity app that helps you focus better, 
            manage tasks efficiently, and track your progress with beautiful analytics.
          </p>
          <div className="hero-buttons">
            <button onClick={scrollToDownload} className="btn btn-primary">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L12 15M12 15L8 11M12 15L16 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L2 19C2 20.1046 2.89543 21 4 21L20 21C21.1046 21 22 20.1046 22 19L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Download for iOS
            </button>
            <button onClick={scrollToFeatures} className="btn btn-secondary">
              Learn More
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="phone-mockup">
            <div className="phone-screen">
              <div className="mock-status-bar">
                <span>9:41</span>
                <span>📶 🔋</span>
              </div>
              <div className="mock-app-content">
                <div className="mock-app-icon">
                  <span>🐦</span>
                </div>
                <h3>PomodoroBird</h3>
                <p>Focus Timer</p>
                <div className="mock-timer">
                  <span>25:00</span>
                </div>
                <div className="mock-button">
                  Start Focus
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero