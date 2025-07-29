import React, { useState } from 'react'

const WarpStepsPage = () => {
  const [copiedIndex, setCopiedIndex] = useState(null)

  const copyToClipboard = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const steps = [
    {
      title: "Step 1: Logout from Warp Website",
      description: "Logout your account from the Warp website",
      type: "text"
    },
    {
      title: "Step 2: Uninstall Warp App",
      description: "Uninstall the Warp application from your system",
      type: "text"
    },
    {
      title: "Step 3: Clean WARP Data and Services",
      description: "Run this PowerShell command as administrator to stop WARP service and remove all data:",
      type: "command",
      command: `# Stop WARP service if running
Write-Host "Stopping Cloudflare WARP service..."
Stop-Service -Name "CloudflareWARP" -ErrorAction SilentlyContinue

# Define paths to delete
$paths = @(
    "$env:ProgramData\\Cloudflare",
    "$env:ProgramData\\Cloudflare WARP",
    "$env:LOCALAPPDATA\\Cloudflare",
    "$env:APPDATA\\Cloudflare",
    "$env:ProgramFiles\\Cloudflare",
    "$env:ProgramFiles(x86)\\Cloudflare"
)

# Delete folders if they exist
foreach ($path in $paths) {
    if (Test-Path $path) {
        Write-Host "Deleting: $path"
        Remove-Item -Path $path -Recurse -Force -ErrorAction SilentlyContinue
    }
}

# Optional: Uninstall Cloudflare WARP
Write-Host "Checking for Cloudflare WARP installation..."
$warpApp = Get-WmiObject -Query "SELECT * FROM Win32_Product WHERE Name LIKE '%Cloudflare WARP%'" -ErrorAction SilentlyContinue
if ($warpApp) {
    Write-Host "Uninstalling Cloudflare WARP..."
    $warpApp.Uninstall()
} else {
    Write-Host "Cloudflare WARP not found in installed applications."
}

Write-Host "WARP data and installation removed. Restart your computer if necessary." -ForegroundColor Green`
    },
    {
      title: "Step 4: Verify Cleanup",
      description: "Check if any files are not deleted by running this verification script:",
      type: "command",
      command: `# Define common WARP data paths
$paths = @(
    "$env:ProgramData\\Cloudflare",
    "$env:ProgramData\\Cloudflare WARP",
    "$env:LOCALAPPDATA\\Cloudflare",
    "$env:APPDATA\\Cloudflare",
    "$env:ProgramFiles\\Cloudflare",
    "$env:ProgramFiles(x86)\\Cloudflare"
)

# Check each path and list files if found
foreach ($path in $paths) {
    if (Test-Path $path) {
        Write-Host "\\n[+] Data found at: $path" -ForegroundColor Yellow
        Get-ChildItem -Path $path -Recurse | Select-Object FullName
    } else {
        Write-Host "[-] No data at: $path" -ForegroundColor Green
    }
}`
    },
    {
      title: "Step 5: Get Temporary Email",
      description: "Go to the temporary email service to create a new account",
      type: "link",
      link: "https://temp-mail.org/en/",
      linkText: "Visit Temp-Mail"
    },
    {
      title: "Step 6: Create New Warp Account",
      description: "Use the temporary email to create a new Warp account. If you're already an existing user who used temp mail before, clear the local storage in the temp mail application first.",
      type: "text"
    },
    {
      title: "Step 7: Install and Login",
      description: "Install Warp again and login successfully with your new free account",
      type: "text"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <header className="relative z-10 border-b border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => window.history.back()}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold">W</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Warp Installation Guide
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Complete Warp Setup Guide
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Follow these steps to properly reinstall and configure Warp with a fresh account
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300">
                  {/* Step Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="space-y-4">
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {step.description}
                    </p>

                    {/* Download Link */}
                    {step.type === "link" && (
                      <div className="flex items-center justify-between bg-gray-800/50 rounded-lg p-4">
                        <span className="text-gray-300">Service link:</span>
                        <a
                          href={step.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                        >
                          {step.linkText}
                        </a>
                      </div>
                    )}

                    {/* Command */}
                    {step.type === "command" && (
                      <div className="space-y-3">
                        <div className="bg-gray-800/50 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-400 text-sm font-medium">PowerShell Command:</span>
                            <button
                              onClick={() => copyToClipboard(step.command, `command-${index}`)}
                              className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                              title="Copy to clipboard"
                            >
                              {copiedIndex === `command-${index}` ? (
                                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              ) : (
                                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                                  <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                                </svg>
                              )}
                            </button>
                          </div>
                          <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap overflow-x-auto">
                            {step.command}
                          </pre>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Completion Message */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-600/20 rounded-2xl p-8 border border-green-500/30">
              <h3 className="text-2xl font-bold text-green-400 mb-4">🎉 Setup Complete!</h3>
              <p className="text-gray-300 text-lg">
                After following all steps, you should have a fresh Warp installation with a new account. Make sure to restart your computer if necessary.
              </p>
            </div>
          </div>

          {/* Important Notes */}
          <div className="mt-8 bg-gradient-to-r from-yellow-500/20 to-orange-600/20 rounded-2xl p-6 border border-yellow-500/30">
            <h4 className="text-xl font-bold text-yellow-400 mb-3">⚠️ Important Notes:</h4>
            <ul className="text-gray-300 space-y-2">
              <li>• Run PowerShell commands as Administrator</li>
              <li>• If you're an existing user who used temp mail before, clear the local storage in the temp mail application</li>
              <li>• Restart your computer after running the cleanup commands</li>
              <li>• Use the temporary email only for creating the new Warp account</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WarpStepsPage 