import React from 'react'
import { useNavigate } from 'react-router-dom'

const CursorSection = () => {
  const navigate = useNavigate()

  const handleTryCursorClick = () => {
    navigate('/cursor-steps')
  }

  return (
    <div 
      onClick={handleTryCursorClick}
      className="group relative bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300 cursor-pointer hover:transform hover:scale-105 hover:bg-gradient-to-br hover:from-blue-500/30 hover:to-purple-500/30"
    >
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Card content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-4xl">💻</div>
          <div className="flex space-x-2">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-200"></span>
            <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse delay-500"></span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400">
          Cursor AI Editor
        </h3>

        {/* Description */}
        <p className="text-gray-300 mb-6 leading-relaxed">
          The next-generation AI-powered code editor. Write, debug, and ship code faster with intelligent autocomplete and built-in AI assistance.
        </p>

        {/* Features preview */}
        <div className="flex items-center mb-6 space-x-3">
          <div className="text-2xl">🤖</div>
          <div className="text-2xl">⚡</div>
          <div className="text-2xl">🔧</div>
          <div className="text-2xl">🚀</div>
          <div className="text-lg text-gray-400 font-medium">+10 more</div>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">1M+</div>
            <div className="text-xs text-gray-400">Developers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">50+</div>
            <div className="text-xs text-gray-400">Languages</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-400">FREE</div>
            <div className="text-xs text-gray-400">Download</div>
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg p-3 text-center group-hover:from-blue-600/30 group-hover:to-purple-600/30 transition-all duration-300">
          <span className="text-white font-semibold">Try Cursor AI Editor →</span>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400/20 rounded-full animate-ping"></div>
      <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400/30 rounded-full animate-pulse delay-1000"></div>
    </div>
  )
}

export default CursorSection 