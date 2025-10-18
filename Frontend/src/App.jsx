import { useState, useEffect } from 'react'
import './App.css'
import LandingPage from './pages/user/LandingPage'
import Listing from './pages/user/listing'
import Order from './pages/user/order'

function App() {
  const [currentPage, setCurrentPage] = useState('landing')

  useEffect(() => {
    // Simple routing based on URL pathname
    const path = window.location.pathname
    if (path === '/listing') {
      setCurrentPage('listing')
    } else if (path === '/order') {
      setCurrentPage('order')
    } else {
      setCurrentPage('landing')
    }
  }, [])

  const renderPage = () => {
    switch (currentPage) {
      case 'listing':
        return <Listing />
      case 'order':
        return <Order />
      default:
        return <LandingPage />
    }
  }

  return (
    <>
      {renderPage()}
    </>
  )
}

export default App
