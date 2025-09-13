import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import CursorSection from './components/CursorSection'
import WarpSection from './components/WarpSection'
import WindsurfSection from './components/WindsurfSection'
import FreeAIAPIsCard from './components/FreeAIAPIsCard'
import CursorStepsPage from './components/CursorStepsPage'
import WarpStepsPage from './components/WarpStepsPage'

// Home Page Component
const HomePage = () => {
  const navigate = useNavigate()
  const [showFreeAPIsModal, setShowFreeAPIsModal] = useState(false)

  const handleCursorClick = () => {
    navigate('/cursor-steps')
  }

  const handleWarpClick = () => {
    navigate('/warp-steps')
  }

  const handleFreeAPIsClick = () => {
    document.querySelector('.free-apis-card')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
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
              <button onClick={handleFreeAPIsClick} className="text-gray-300 hover:text-green-400 transition-colors">Free APIs</button>
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Free AI API Providers 2024
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-200">
            Access GPT-4, Claude, Llama & Premium AI Models for FREE
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Discover the top 8 best free AI API providers offering OpenRouter, Groq, Together AI, Hugging Face, and more. Get started with premium artificial intelligence models without any credit card required. Perfect for developers, researchers, and AI enthusiasts.
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

      {/* SEO Content Section */}
      <section className="py-16 px-6 bg-gray-800/20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Why Choose Free AI APIs in 2024?
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Free AI API providers have revolutionized access to cutting-edge artificial intelligence. From OpenRouter's GPT-4 access to Groq's lightning-fast inference, these platforms democratize AI development for everyone.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <article className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">🚀 No Credit Card Required</h3>
              <p className="text-gray-300 text-sm">
                Start building immediately with free AI APIs from OpenRouter, Groq, Together AI, and Hugging Face. Access premium models like GPT-4, Claude 3.5 Sonnet, and Llama 3.1 without any payment information.
              </p>
            </article>
            
            <article className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30">
              <h3 className="text-xl font-semibold mb-3 text-green-400">⚡ Lightning Fast Inference</h3>
              <p className="text-gray-300 text-sm">
                Experience blazing-fast AI responses with Groq's LPU technology, Together AI's optimized infrastructure, and Replicate's efficient model serving. Perfect for real-time applications and high-throughput scenarios.
              </p>
            </article>
            
            <article className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">🤖 Premium AI Models</h3>
              <p className="text-gray-300 text-sm">
                Access state-of-the-art models including GPT-4 Turbo, Claude 3.5 Sonnet, Llama 3.1 405B, Mixtral 8x7B, Gemini Pro, and more. Build sophisticated AI applications with the latest language and multimodal models.
              </p>
            </article>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Top Free AI API Providers Comparison 2024
            </h3>
            <div className="bg-gray-800/20 backdrop-blur-sm border border-gray-700/20 rounded-xl p-6 max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-400">8+</div>
                  <div className="text-sm text-gray-300">Free AI Providers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400">50+</div>
                  <div className="text-sm text-gray-300">AI Models Available</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">100%</div>
                  <div className="text-sm text-gray-300">Free to Start</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400">24/7</div>
                  <div className="text-sm text-gray-300">API Availability</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tools Grid */}
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Free AI APIs Card */}
            <div className="free-apis-card">
              <FreeAIAPIsCard />
            </div>
            
            <CursorSection />
            <WarpSection />
            <WindsurfSection />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">AI Tools Hub</h3>
              <p className="text-gray-400 text-sm mb-4">
                Your ultimate destination for discovering the best free AI API providers in 2024. Access premium AI models without any cost.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <span className="sr-only">Twitter</span>🐦
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <span className="sr-only">GitHub</span>🐙
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-md font-semibold text-white mb-4">Free AI APIs</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://openrouter.ai" className="text-gray-400 hover:text-blue-400 transition-colors" target="_blank" rel="noopener">OpenRouter Free</a></li>
                <li><a href="https://groq.com" className="text-gray-400 hover:text-green-400 transition-colors" target="_blank" rel="noopener">Groq API Free</a></li>
                <li><a href="https://together.ai" className="text-gray-400 hover:text-purple-400 transition-colors" target="_blank" rel="noopener">Together AI Free</a></li>
                <li><a href="https://huggingface.co" className="text-gray-400 hover:text-yellow-400 transition-colors" target="_blank" rel="noopener">Hugging Face API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-md font-semibold text-white mb-4">AI Models</h4>
              <ul className="space-y-2 text-sm">
                <li><span className="text-gray-400">GPT-4 Free API</span></li>
                <li><span className="text-gray-400">Claude 3.5 Sonnet</span></li>
                <li><span className="text-gray-400">Llama 3.1 405B</span></li>
                <li><span className="text-gray-400">Mixtral 8x7B</span></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-md font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#free-apis" className="text-gray-400 hover:text-blue-400 transition-colors">Free API List</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">API Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">AI Tools Guide</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Getting Started</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm mb-4">
              © 2024 AI Tools Hub. Discover the best free AI API providers including OpenRouter, Groq, Together AI, Hugging Face, and more. Built for developers, researchers, and AI enthusiasts.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-500">
              <span>Free AI APIs</span>
              <span>•</span>
              <span>OpenRouter Free</span>
              <span>•</span>
              <span>Groq API</span>
              <span>•</span>
              <span>GPT-4 Free</span>
              <span>•</span>
              <span>Claude API</span>
              <span>•</span>
              <span>Llama Free</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// 404 Not Found Component
const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center">
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
