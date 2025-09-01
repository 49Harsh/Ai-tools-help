import React from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import CursorSection from './components/CursorSection'
import WarpSection from './components/WarpSection'
import WindsurfSection from './components/WindsurfSection'
import CursorStepsPage from './components/CursorStepsPage'
import WarpStepsPage from './components/WarpStepsPage'

// Home Page Component
const HomePage = () => {
  const navigate = useNavigate()

  const handleCursorClick = () => {
    navigate('/cursor-steps')
  }

  const handleWarpClick = () => {
    navigate('/warp-steps')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <header className="relative z-10">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold">AI</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Tools Hub
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button onClick={handleCursorClick} className="text-gray-300 hover:text-blue-400 transition-colors">Cursor</button>
              <button onClick={handleWarpClick} className="text-gray-300 hover:text-green-400 transition-colors">Warp</button>
              <a href="#windsurf" className="text-gray-300 hover:text-purple-400 transition-colors">Windsurf</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Discover the Future of AI
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Explore cutting-edge AI tools that revolutionize how you code, create, and collaborate
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
              Get Started
            </button>
            <button className="px-8 py-4 border border-gray-600 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-400 transition-all">
              Learn More
            </button>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
      </section>

      {/* AI Tools Grid */}
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div onClick={handleCursorClick} className="cursor-pointer">
              <CursorSection />
            </div>
            <div onClick={handleWarpClick} className="cursor-pointer">
              <WarpSection />
            </div>
            <WindsurfSection />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2024 AI Tools Hub. Built with modern technologies and AI innovation.
          </p>
        </div>
      </footer>
    </div>
  )
}

// 404 Not Found Component
const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-400 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-gray-300 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          Go Back Home
        </button>
      </div>
    </div>
  )
}

// Main App Component with Routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cursor-steps" element={<CursorStepsPage />} />
        <Route path="/warp-steps" element={<WarpStepsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
