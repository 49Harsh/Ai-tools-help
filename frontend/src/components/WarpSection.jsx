import React from 'react'
import { useNavigate } from 'react-router-dom'

const WarpSection = () => {
  const navigate = useNavigate()

  const handleDownloadWarpClick = () => {
    navigate('/warp-steps')
  }

  return (
    <div id="warp" className="group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
      <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 h-full hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Warp</h3>
              <p className="text-green-400 text-sm">AI Terminal & Shell</p>
            </div>
          </div>
          <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-6 leading-relaxed">
          The modern terminal reimagined with AI. Execute commands faster, get intelligent suggestions, and collaborate seamlessly with your team in a beautiful, fast terminal experience.
        </p>

        {/* Features */}
        <div className="space-y-3 mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-gray-300 text-sm">AI command suggestions</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-gray-300 text-sm">Real-time collaboration</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-gray-300 text-sm">Built-in workflows</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-gray-300 text-sm">Cross-platform support</span>
          </div>
        </div>

        {/* CTA Button */}
        <button 
          onClick={handleDownloadWarpClick}
          className="w-full bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
        >
          Download Warp
        </button>

        {/* Stats */}
        <div className="mt-6 pt-6 border-t border-gray-800">
          <div className="flex justify-between text-sm">
            <div className="text-center">
              <div className="text-white font-semibold">500K+</div>
              <div className="text-gray-400">Users</div>
            </div>
            <div className="text-center">
              <div className="text-white font-semibold">3</div>
              <div className="text-gray-400">Platforms</div>
            </div>
            <div className="text-center">
              <div className="text-white font-semibold">4.8★</div>
              <div className="text-gray-400">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WarpSection 