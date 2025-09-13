import React from 'react'
import { useNavigate } from 'react-router-dom'

const WarpSection = () => {
  const navigate = useNavigate()

  const handleDownloadWarpClick = () => {
    navigate('/warp-steps')
  }

  return (
    <div 
      onClick={handleDownloadWarpClick}
      className="group relative bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8 hover:border-green-400/50 transition-all duration-300 cursor-pointer hover:transform hover:scale-105 hover:bg-gradient-to-br hover:from-green-500/30 hover:to-emerald-500/30"
    >
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-emerald-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Card content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-4xl">⚡</div>
          <div className="flex space-x-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse delay-200"></span>
            <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse delay-500"></span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-green-400 group-hover:to-emerald-400">
          Warp Terminal
        </h3>

        {/* Description */}
        <p className="text-gray-300 mb-6 leading-relaxed">
          The modern AI terminal reimagined. Execute commands faster with intelligent suggestions, real-time collaboration, and beautiful UI.
        </p>

        {/* Features preview */}
        <div className="flex items-center mb-6 space-x-3">
          <div className="text-2xl">💻</div>
          <div className="text-2xl">🤖</div>
          <div className="text-2xl">⚡</div>
          <div className="text-2xl">🌍</div>
          <div className="text-lg text-gray-400 font-medium">+8 more</div>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">500K+</div>
            <div className="text-xs text-gray-400">Users</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-400">3</div>
            <div className="text-xs text-gray-400">Platforms</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-teal-400">FREE</div>
            <div className="text-xs text-gray-400">Download</div>
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-lg p-3 text-center group-hover:from-green-600/30 group-hover:to-emerald-600/30 transition-all duration-300">
          <span className="text-white font-semibold">Download Warp Terminal →</span>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-3 h-3 bg-green-400/20 rounded-full animate-ping"></div>
      <div className="absolute bottom-4 left-4 w-2 h-2 bg-emerald-400/30 rounded-full animate-pulse delay-1000"></div>
    </div>
  )
}

export default WarpSection 