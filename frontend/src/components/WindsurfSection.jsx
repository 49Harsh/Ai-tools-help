import React from 'react'

const WindsurfSection = () => {
  return (
    <div id="windsurf" className="group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
      <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 h-full hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Windsurf</h3>
              <p className="text-purple-400 text-sm">AI Data Analytics</p>
            </div>
          </div>
          <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-6 leading-relaxed">
          Transform your data into actionable insights with AI-powered analytics. Visualize complex datasets, generate reports, and discover patterns with natural language queries.
        </p>

        {/* Features */}
        <div className="space-y-3 mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span className="text-gray-300 text-sm">Natural language queries</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span className="text-gray-300 text-sm">Interactive dashboards</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span className="text-gray-300 text-sm">Real-time data processing</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span className="text-gray-300 text-sm">Predictive analytics</span>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full bg-gradient-to-r from-purple-600 to-pink-700 hover:from-purple-700 hover:to-pink-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
          Start Free Trial
        </button>

        {/* Stats */}
        <div className="mt-6 pt-6 border-t border-gray-800">
          <div className="flex justify-between text-sm">
            <div className="text-center">
              <div className="text-white font-semibold">10K+</div>
              <div className="text-gray-400">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-white font-semibold">100+</div>
              <div className="text-gray-400">Integrations</div>
            </div>
            <div className="text-center">
              <div className="text-white font-semibold">4.7★</div>
              <div className="text-gray-400">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WindsurfSection 