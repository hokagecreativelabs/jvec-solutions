import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './App.css'
import Navbar from './components/layout/Navbar'
import Home from './templates/pages/Home'
import Footer from './components/layout/Footer'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  )
}

export default App
