import React, { useState } from 'react'

const CursorStepsPage = () => {
  const [copiedIndex, setCopiedIndex] = useState(null)
  const [activeTab, setActiveTab] = useState('automatic')

  const copyToClipboard = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  // Automatic Process Steps (default)
  const automaticSteps = [
    {
      title: "Step 1: Uninstall Cursor & Clear Local Storage",
      description: "Uninstall your Cursor software from Windows Settings or Control Panel. Then clear Cursor local storage from your browser by going to cursor.com, pressing F12, going to Application > Storage > Clear site data.",
      type: "text"
    },
    {
      title: "Step 2: Reinstall Cursor",
      description: "Download and install a fresh copy of Cursor from the official website",
      type: "link",
      link: "https://cursor.com/downloads",
      linkText: "Download Cursor"
    },
    {
      title: "Step 3: Run PowerShell Script",
      description: "Run the following script as Administrator in PowerShell to clean all Cursor data and generate a new Machine ID:",
      type: "command",
      command: "# Run PowerShell as Administrator\r\n\r\n# Define folder paths\r\n$folders = @(\r\n    \"$env:APPDATA\\\\Cursor\",\r\n    \"$env:LOCALAPPDATA\\\\cursor-updater\",\r\n    \"$env:LOCALAPPDATA\\\\Programs\\\\cursor\"\r\n)\r\n\r\n# Delete the folders if they exist\r\nforeach ($folder in $folders) {\r\n    if (Test-Path $folder) {\r\n        try {\r\n            Remove-Item -Path $folder -Recurse -Force\r\n            Write-Host \"Deleted: $folder\"\r\n        } catch {\r\n            Write-Host \"Failed to delete: $folder - $_\"\r\n        }\r\n    } else {\r\n        Write-Host \"Not found: $folder\"\r\n    }\r\n}\r\n\r\n# Generate new MachineGuid\r\n$newMachineGuid = [guid]::NewGuid().ToString()\r\nWrite-Host \"Generated new MachineGuid: $newMachineGuid\"\r\n\r\n# Update Registry MachineGuid\r\ntry {\r\n    Set-ItemProperty -Path \"HKLM:\\\\SOFTWARE\\\\Microsoft\\\\Cryptography\" `\r\n        -Name \"MachineGuid\" -Value $newMachineGuid -Type String -Force\r\n    Write-Host \"MachineGuid successfully updated.\"\r\n} catch {\r\n    Write-Host \"Failed to update MachineGuid - $_\"\r\n}"
    },
    {
      title: "Step 4: Create New Account with Temp Email",
      description: "Go to a temporary email service, copy the temporary email address. Launch Cursor, sign up with your name and the temp email. Check the temp email for the verification code and paste it into Cursor to complete account creation. Your account is now ready with free usage!",
      type: "tempmail"
    }
  ]

  // Manual Process Steps (original steps)
  const manualSteps = [
    {
      title: "Step 1: Sign Out and Uninstall",
      description: "Sign out of Cursor on both IDE and browser then Uninstall Cursor using Windows Settings or Control Panel",
      type: "text"
    },
    {
      title: "Step 2: Delete Cursor Folders",
      description: "Delete these folders:",
      type: "folders",
      folders: [
        "%APPDATA%\\Cursor",
        "%LOCALAPPDATA%\\cursor-updater", 
        "%LOCALAPPDATA%\\Programs\\cursor"
      ]
    },
    {
      title: "Step 3: Install Latest Version",
      description: "Download and install the latest version of Cursor",
      type: "link",
      link: "https://cursor.com/downloads",
      linkText: "Download Cursor"
    },
    {
      title: "Step 4: Change Windows Machine ID",
      description: "Open PowerShell as administrator and run the following command to change your Windows machine ID (this makes Windows report a new hardware identity to applications):",
      type: "command",
      command: `$newMachineGuid = [guid]::NewGuid().ToString()
Set-ItemProperty -Path "HKLM:\\SOFTWARE\\Microsoft\\Cryptography" -Name "MachineGuid" -Value $newMachineGuid -Type String -Force`
    }
  ]

  // Get current steps based on active tab
  const currentSteps = activeTab === 'automatic' ? automaticSteps : manualSteps

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
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold">AI</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Cursor Installation Guide
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Complete Cursor Setup Guide
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Follow these steps to properly install and configure Cursor AI on your Windows machine
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-2 flex space-x-2">
              <button
                onClick={() => setActiveTab('automatic')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeTab === 'automatic'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/25'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                🚀 Automatic Process
              </button>
              <button
                onClick={() => setActiveTab('manual')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeTab === 'manual'
                    ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/25'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                ⚙️ Manual Process
              </button>
            </div>
          </div>

          {/* Process Description */}
          <div className="text-center mb-8">
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 max-w-3xl mx-auto">
              {activeTab === 'automatic' ? (
                <div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-3">🚀 Automatic Process (Recommended)</h3>
                  <p className="text-gray-300">
                    Follow this streamlined 4-step process that includes automated scripts to completely reset your Cursor installation. 
                    This method includes temp email setup for account creation and ensures maximum compatibility.
                  </p>
                </div>
              ) : (
                <div>
                  <h3 className="text-2xl font-bold text-purple-400 mb-3">⚙️ Manual Process</h3>
                  <p className="text-gray-300">
                    Step-by-step manual instructions for users who prefer to handle each step individually. 
                    This gives you full control over the installation process.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {currentSteps.map((step, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300">
                  {/* Step Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
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

                    {/* Folders List */}
                    {step.type === "folders" && (
                      <div className="space-y-3">
                        {step.folders.map((folder, folderIndex) => (
                          <div key={folderIndex} className="flex items-center justify-between bg-gray-800/50 rounded-lg p-4">
                            <code className="text-blue-400 font-mono text-sm">{folder}</code>
                            <button
                              onClick={() => copyToClipboard(folder, `folder-${folderIndex}`)}
                              className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                              title="Copy to clipboard"
                            >
                              {copiedIndex === `folder-${folderIndex}` ? (
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
                        ))}
                      </div>
                    )}

                    {/* Download Link */}
                    {step.type === "link" && (
                      <div className="flex items-center justify-between bg-gray-800/50 rounded-lg p-4">
                        <span className="text-gray-300">Download link:</span>
                        <a
                          href={step.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
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

                    {/* Temp Mail Button */}
                    {step.type === "tempmail" && (
                      <div className="flex items-center justify-between bg-gray-800/50 rounded-lg p-4">
                        <span className="text-gray-300">Open Temporary Email Service:</span>
                        <a
                          href="https://temp-mail.org/en/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                          <span>📧 Open Temp-Mail</span>
                        </a>
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
              <h3 className="text-2xl font-bold text-green-400 mb-4">🎉 Installation Complete!</h3>
              <p className="text-gray-300 text-lg">
                After following all steps, restart your computer and launch Cursor. You should now have a fresh installation with a new machine ID.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CursorStepsPage 