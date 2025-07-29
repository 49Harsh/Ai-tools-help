import React from 'react'

const CursorSection = () => {
  return (
    <div id="cursor" className="group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
      <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 h-full hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Cursor</h3>
              <p className="text-blue-400 text-sm">AI-Powered Code Editor</p>
            </div>
          </div>
          <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-6 leading-relaxed">
          The next-generation code editor with AI built-in. Write, edit, and debug code faster than ever with intelligent autocomplete, code generation, and real-time assistance.
        </p>

        {/* Features */}
        <div className="space-y-3 mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span className="text-gray-300 text-sm">AI-powered code completion</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span className="text-gray-300 text-sm">Built-in chat interface</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span className="text-gray-300 text-sm">Multi-language support</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span className="text-gray-300 text-sm">Git integration</span>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
          Try Cursor Free
        </button>

        {/* Stats */}
        <div className="mt-6 pt-6 border-t border-gray-800">
          <div className="flex justify-between text-sm">
            <div className="text-center">
              <div className="text-white font-semibold">1M+</div>
              <div className="text-gray-400">Developers</div>
            </div>
            <div className="text-center">
              <div className="text-white font-semibold">50+</div>
              <div className="text-gray-400">Languages</div>
            </div>
            <div className="text-center">
              <div className="text-white font-semibold">4.9★</div>
              <div className="text-gray-400">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CursorSection 