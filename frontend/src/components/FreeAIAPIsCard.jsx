import React, { useState } from 'react'

const FreeAIAPIsCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const freeAIProviders = [
    {
      name: "OpenRouter",
      description: "Free access to GPT-4, Claude, and other premium models",
      features: ["GPT-4 Turbo", "Claude 3.5 Sonnet", "Llama 3.1 405B", "Gemini Pro"],
      freeLimit: "200 requests/day",
      website: "https://openrouter.ai",
      logo: "🔄",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Together AI",
      description: "Free tier for fast inference on open-source models",
      features: ["Llama 3.1 70B", "Code Llama", "Mixtral 8x7B", "Qwen 2.5"],
      freeLimit: "$5 free credits",
      website: "https://together.ai",
      logo: "🤝",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Groq",
      description: "Ultra-fast inference with free tier",
      features: ["Llama 3.1 70B", "Mixtral 8x7B", "Gemma 2 9B", "Lightning Speed"],
      freeLimit: "300K tokens/day",
      website: "https://groq.com",
      logo: "⚡",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Perplexity AI",
      description: "Free access to Perplexity's search-augmented models",
      features: ["Real-time search", "Citations", "Multi-modal", "Web browsing"],
      freeLimit: "5 searches/4hrs",
      website: "https://perplexity.ai",
      logo: "🔍",
      color: "from-purple-500 to-indigo-500"
    },
    {
      name: "Hugging Face",
      description: "Free inference API for thousands of models",
      features: ["1000+ models", "Transformers", "Diffusers", "Open source"],
      freeLimit: "1000 requests/month",
      website: "https://huggingface.co",
      logo: "🤗",
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "Replicate",
      description: "Run AI models with free credits",
      features: ["FLUX", "SDXL", "Code generation", "Image/Video AI"],
      freeLimit: "$10 free credits",
      website: "https://replicate.com",
      logo: "🔁",
      color: "from-pink-500 to-rose-500"
    },
    {
      name: "Cohere",
      description: "Free tier for language models and embeddings",
      features: ["Command R+", "Embed v3", "Rerank", "RAG capabilities"],
      freeLimit: "1000 calls/month",
      website: "https://cohere.ai",
      logo: "🧠",
      color: "from-teal-500 to-cyan-500"
    },
    {
      name: "Mistral AI",
      description: "Free access to Mistral models",
      features: ["Mistral 7B", "Mixtral 8x7B", "Code generation", "Function calling"],
      freeLimit: "1M tokens/month",
      website: "https://mistral.ai",
      logo: "🌪️",
      color: "from-violet-500 to-purple-500"
    }
  ]

  const handleProviderClick = (website) => {
    window.open(website, '_blank', 'noopener,noreferrer')
  }

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      {/* Compact Card */}
      <div 
        onClick={openModal}
        className="group relative bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8 hover:border-green-400/50 transition-all duration-300 cursor-pointer hover:transform hover:scale-105 hover:bg-gradient-to-br hover:from-green-500/30 hover:to-blue-500/30"
      >
        {/* Animated background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-blue-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Card content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="text-4xl">🚀</div>
            <div className="flex space-x-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200"></span>
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-500"></span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-green-400 group-hover:to-blue-400">
            Free AI APIs
          </h3>

          {/* Description */}
          <p className="text-gray-300 mb-6 leading-relaxed">
            Access premium AI models for FREE! Get GPT-4, Claude, Llama, and more from top providers.
          </p>

          {/* Provider logos preview */}
          <div className="flex items-center mb-6 space-x-3">
            <div className="text-2xl">🔄</div>
            <div className="text-2xl">⚡</div>
            <div className="text-2xl">🤗</div>
            <div className="text-2xl">🧠</div>
            <div className="text-lg text-gray-400 font-medium">+4 more</div>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between mb-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">8</div>
              <div className="text-xs text-gray-400">Providers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">FREE</div>
              <div className="text-xs text-gray-400">Access</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">∞</div>
              <div className="text-xs text-gray-400">Models</div>
            </div>
          </div>

          {/* Call to action */}
          <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-500/30 rounded-lg p-3 text-center group-hover:from-green-600/30 group-hover:to-blue-600/30 transition-all duration-300">
            <span className="text-white font-semibold">Click to explore all APIs →</span>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-3 h-3 bg-green-400/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse delay-1000"></div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-6 flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Top Free AI APIs
                </h2>
                <p className="text-gray-300 mt-2">Premium AI models with generous free tiers</p>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {freeAIProviders.map((provider, index) => (
                  <div
                    key={provider.name}
                    onClick={() => handleProviderClick(provider.website)}
                    className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-5 hover:border-gray-600 transition-all duration-300 cursor-pointer hover:transform hover:scale-105 hover:bg-gray-800/70"
                  >
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${provider.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
                    
                    {/* Provider Logo */}
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {provider.logo}
                    </div>

                    {/* Provider Name */}
                    <h3 className="text-lg font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300">
                      {provider.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                      {provider.description}
                    </p>

                    {/* Free Limit Badge */}
                    <div className="inline-block px-2 py-1 bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-semibold rounded-full mb-3">
                      {provider.freeLimit}
                    </div>

                    {/* Features */}
                    <div className="space-y-1 mb-3">
                      {provider.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-300">
                          <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Visit Button */}
                    <button className="w-full py-2 px-3 bg-gradient-to-r from-gray-700 to-gray-600 text-white text-sm font-semibold rounded-lg group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      Visit API →
                    </button>
                  </div>
                ))}
              </div>

              {/* Modal Footer */}
              <div className="mt-8 text-center">
                <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">
                    Start Building with Free AI APIs Today! 🚀
                  </h3>
                  <p className="text-gray-300 mb-4">
                    All providers offer generous free tiers. Perfect for testing and prototyping.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-semibold rounded-full">
                      No Credit Card Required
                    </span>
                    <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-400 text-sm font-semibold rounded-full">
                      Easy Setup
                    </span>
                    <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 text-purple-400 text-sm font-semibold rounded-full">
                      Premium Models
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default FreeAIAPIsCard