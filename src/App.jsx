import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './styles.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Screenshots from './components/Screenshots'
import Download from './components/Download'
import Footer from './components/Footer'
import PrivacyPage from './components/PrivacyPage'
import TermsPage from './components/TermsPage'

function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <Screenshots />
      <Download />
    </main>
  )
}

function AppContent() {
  const [isLoaded, setIsLoaded] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={isLoaded ? 'loaded' : 'loading'}>
      <Header currentPath={location.pathname} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router basename="/FokisPomodoroTimer">
      <AppContent />
    </Router>
  )
}

export default App