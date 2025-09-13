import React from 'react'

const FreeAIAPIsSection = () => {
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

  return (
    <section id="free-apis" className="py-16 px-6 relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Top Free AI APIs
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Access premium AI models for free! These providers offer generous free tiers for the most advanced and fastest AI models in the market.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full"></div>
        </div>

        {/* Providers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {freeAIProviders.map((provider, index) => (
            <div
              key={provider.name}
              onClick={() => handleProviderClick(provider.website)}
              className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 cursor-pointer hover:transform hover:scale-105 hover:bg-gray-800/70"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${provider.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
              
              {/* Provider Logo */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {provider.logo}
              </div>

              {/* Provider Name */}
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300">
                {provider.name}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {provider.description}
              </p>

              {/* Free Limit Badge */}
              <div className="inline-block px-3 py-1 bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-semibold rounded-full mb-4">
                {provider.freeLimit}
              </div>

              {/* Features */}
              <div className="space-y-2 mb-4">
                {provider.features.slice(0, 3).map((feature, idx) => (
                  <div key={idx} className="flex items-center text-xs text-gray-300">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                    {feature}
                  </div>
                ))}
              </div>

              {/* Visit Button */}
              <button className="w-full mt-auto py-2 px-4 bg-gradient-to-r from-gray-700 to-gray-600 text-white text-sm font-semibold rounded-lg group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                Visit API →
              </button>

              {/* Decorative elements */}
              <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"></div>
              <div className="absolute bottom-2 left-2 w-1 h-1 bg-purple-400/30 rounded-full animate-pulse delay-1000"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Start Building with Free AI APIs Today! 🚀
            </h3>
            <p className="text-gray-300 mb-6">
              All these providers offer generous free tiers. Perfect for testing, prototyping, and small-scale projects.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-semibold rounded-full">
                No Credit Card Required
              </span>
              <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 text-blue-400 text-sm font-semibold rounded-full">
                Easy Setup
              </span>
              <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 text-purple-400 text-sm font-semibold rounded-full">
                Premium Models
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
    </section>
  )
}

export default FreeAIAPIsSection