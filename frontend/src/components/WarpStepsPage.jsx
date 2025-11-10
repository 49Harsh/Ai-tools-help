import React, { useState } from 'react'

const WarpStepsPage = () => {
  const [copiedIndex, setCopiedIndex] = useState(null)
  const [selectedCleanType, setSelectedCleanType] = useState('fast') // 'fast' or 'deep'

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
      description: "Run this PowerShell command as administrator to search and remove all Warp leftovers:",
      type: "command",
      command: `# Search common locations for Warp leftovers
$searchPaths = @(
  "C:\\Program Files",
  "C:\\Program Files (x86)",
  "$env:LOCALAPPDATA",
  "$env:APPDATA",
  "C:\\Users\\Public"
)

foreach ($sp in $searchPaths) {
    Write-Output "Searching $sp for Warp files..."
    Get-ChildItem -Path $sp -Recurse -Force -ErrorAction SilentlyContinue -Include *Warp* |
        ForEach-Object {
            try {
                Write-Output "Deleting: $($_.FullName)"
                Remove-Item -Path $_.FullName -Recurse -Force
            } catch {
                Write-Output "Could not delete: $($_.FullName) - $($_.Exception.Message)"
            }
        }
}`
    },
    {
      title: "Step 4: Clean Warp Registry Entries",
      description: "Choose between Fast Clean (recommended, quick) or Deep Clean (time-consuming). Run the selected PowerShell command as Administrator:",
      type: "dualCommand",
      fastCommand: `# Run in PowerShell as Administrator
Write-Host "Starting Fast Warp Registry Cleanup..." -ForegroundColor Cyan

# Specific known locations (Fast)
$warpKeys = @(
    "HKCU:\\Software\\Warp",
    "HKLM:\\SOFTWARE\\Warp",
    "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\Warp*",
    "HKLM:\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\Warp*",
    "HKCU:\\Software\\WOW6432Node\\Warp",
    "HKLM:\\SOFTWARE\\WOW6432Node\\Warp"
)

$deleted = 0
foreach ($key in $warpKeys) {
    try {
        if (Test-Path $key) {
            Write-Host "Deleting: $key" -ForegroundColor Yellow
            Remove-Item -Path $key -Recurse -Force -ErrorAction Stop
            $deleted++
        }
    } catch {
        Write-Host "Failed to delete: $key" -ForegroundColor Red
    }
}

# Check Run keys for Warp entries
$runKeys = @(
    "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Run",
    "HKLM:\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run"
)

foreach ($runKey in $runKeys) {
    try {
        $props = Get-ItemProperty -Path $runKey -ErrorAction SilentlyContinue
        $props.PSObject.Properties | Where-Object { $_.Name -match "Warp" -and $_.Name -ne "PSPath" } | ForEach-Object {
            Write-Host "Removing Run entry: $($_.Name)" -ForegroundColor Yellow
            Remove-ItemProperty -Path $runKey -Name $_.Name -Force -ErrorAction Stop
            $deleted++
        }
    } catch {}
}

# Limited targeted search (only likely locations - Much Faster)
$targetPaths = @(
    "HKCU:\\Software",
    "HKLM:\\SOFTWARE",
    "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Uninstall",
    "HKLM:\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall"
)

Write-Host "\nSearching common locations for Warp entries..." -ForegroundColor Cyan

foreach ($path in $targetPaths) {
    try {
        Get-ChildItem -Path $path -ErrorAction SilentlyContinue -Depth 1 |
            Where-Object { $_.PSChildName -match "Warp" } |
            ForEach-Object {
                try {
                    Write-Host "Deleting: $($_.PSPath)" -ForegroundColor Yellow
                    Remove-Item -Path $_.PSPath -Recurse -Force -ErrorAction Stop
                    $deleted++
                } catch {}
            }
    } catch {}
}

Write-Host "\n=== Cleanup Complete ===" -ForegroundColor Green
Write-Host "Total items deleted: $deleted" -ForegroundColor Green`,
      deepCommand: `# Run in PowerShell as Administrator

$warpKeys = @(
  "HKCU:\\Software\\Warp",
  "HKLM:\\SOFTWARE\\Warp",
  "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\Warp*",
  "HKLM:\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\Warp*",
  "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Run",
  "HKLM:\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run"
)

foreach ($key in $warpKeys) {
    try {
        # Find matching keys
        $matches = Get-ItemProperty -Path $key -ErrorAction SilentlyContinue | Out-String
        if ($matches -match "Warp") {
            Write-Output "Deleting registry key: $key"
            Remove-Item -Path $key -Recurse -Force -ErrorAction SilentlyContinue
        }
    } catch {}
}

# Extra: search entire registry for "Warp" (this takes time)
Write-Output "Searching registry for 'Warp' entries..."
Get-ChildItem -Path HKCU:\\, HKLM:\\ -Recurse -ErrorAction SilentlyContinue |
    Where-Object { $_.Name -match "Warp" } |
    ForEach-Object {
        try {
            Write-Output "Deleting: $($_.Name)"
            Remove-Item -Path $_.PsPath -Recurse -Force -ErrorAction SilentlyContinue
        } catch {}
    }

Write-Output "Warp registry cleanup completed!"`
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

                    {/* Dual Command - Fast and Deep Clean */}
                    {step.type === "dualCommand" && (
                      <div className="space-y-4">
                        {/* Toggle Buttons */}
                        <div className="flex gap-3">
                          <button
                            onClick={() => setSelectedCleanType('fast')}
                            className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                              selectedCleanType === 'fast'
                                ? 'bg-gradient-to-r from-green-600 to-blue-700 text-white shadow-lg shadow-blue-500/50'
                                : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
                            }`}
                          >
                            ⚡ Fast Clean
                          </button>
                          <button
                            onClick={() => setSelectedCleanType('deep')}
                            className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                              selectedCleanType === 'deep'
                                ? 'bg-gradient-to-r from-yellow-600 to-orange-700 text-white shadow-lg shadow-orange-500/50'
                                : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
                            }`}
                          >
                            🔍 Deep Clean
                          </button>
                        </div>

                        {/* Command Display */}
                        <div className="bg-gray-800/50 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              {selectedCleanType === 'fast' ? (
                                <>
                                  <span className="text-blue-400 text-sm font-bold">⚡ Fast Clean (Recommended)</span>
                                  <span className="text-gray-500 text-xs">(Quick cleanup)</span>
                                </>
                              ) : (
                                <>
                                  <span className="text-orange-400 text-sm font-bold">🔍 Deep Clean (Time Taking)</span>
                                  <span className="text-gray-500 text-xs">(Thorough scan)</span>
                                </>
                              )}
                            </div>
                            <button
                              onClick={() => copyToClipboard(
                                selectedCleanType === 'fast' ? step.fastCommand : step.deepCommand,
                                `${selectedCleanType}-${index}`
                              )}
                              className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                              title="Copy to clipboard"
                            >
                              {copiedIndex === `${selectedCleanType}-${index}` ? (
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
                          <pre className={`${selectedCleanType === 'fast' ? 'text-blue-400' : 'text-orange-400'} font-mono text-sm whitespace-pre-wrap overflow-x-auto`}>
                            {selectedCleanType === 'fast' ? step.fastCommand : step.deepCommand}
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