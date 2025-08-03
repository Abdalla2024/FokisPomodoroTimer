import { useState, useEffect } from 'react'
import './styles.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Screenshots from './components/Screenshots'
import Download from './components/Download'
import Footer from './components/Footer'
import PrivacyPage from './components/PrivacyPage'
import TermsPage from './components/TermsPage'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const renderPage = () => {
    switch (currentPage) {
      case 'privacy':
        return <PrivacyPage />
      case 'terms':
        return <TermsPage />
      default:
        return (
          <main>
            <Hero />
            <Features />
            <Screenshots />
            <Download />
          </main>
        )
    }
  }

  return (
    <div className={isLoaded ? 'loaded' : 'loading'}>
      <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
      {renderPage()}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default App