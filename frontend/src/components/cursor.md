# Run in PowerShell as Administrator
Write-Output "Starting Warp registry cleanup..."

# Specific paths to check (fast)
$warpPaths = @(
    "HKCU:\Software\Warp",
    "HKLM:\SOFTWARE\Warp",
    "HKLM:\SOFTWARE\WOW6432Node\Warp",
    "HKCU:\Software\Microsoft\Windows\CurrentVersion\Uninstall\*",
    "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\*",
    "HKLM:\SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall\*",
    "HKCU:\Software\Microsoft\Windows\CurrentVersion\Run",
    "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Run"
)

$found = 0

foreach ($path in $warpPaths) {
    try {
        if ($path -like "*\Uninstall\*" -or $path -like "*\Run") {
            # For Uninstall and Run keys, check properties
            $items = Get-ItemProperty -Path $path -ErrorAction SilentlyContinue
            foreach ($item in $items) {
                $props = $item | Get-Member -MemberType NoteProperty
                foreach ($prop in $props) {
                    if ($prop.Name -match "Warp" -or $item.($prop.Name) -match "Warp") {
                        Write-Output "Found Warp entry: $($item.PSPath) -> $($prop.Name)"
                        Remove-ItemProperty -Path $item.PSPath -Name $prop.Name -Force -ErrorAction SilentlyContinue
                        $found++
                    }
                }
            }
        } else {
            # Direct key deletion
            if (Test-Path $path) {
                Write-Output "Deleting: $path"
                Remove-Item -Path $path -Recurse -Force -ErrorAction SilentlyContinue
                $found++
            }
        }
    } catch {
        # Silently continue
    }
}

# Limited deep search in common areas (optional - comment out if still slow)
Write-Output "`nSearching common registry locations..."
$searchPaths = @(
    "HKCU:\Software",
    "HKLM:\SOFTWARE",
    "HKLM:\SOFTWARE\WOW6432Node"
)

foreach ($root in $searchPaths) {
    try {
        Get-ChildItem -Path $root -ErrorAction SilentlyContinue | Where-Object { $_.Name -match "Warp" } | ForEach-Object {
            Write-Output "Deleting: $($_.Name)"
            Remove-Item -Path $_.PsPath -Recurse -Force -ErrorAction SilentlyContinue
            $found++
        }
    } catch {}
}

if ($found -eq 0) {
    Write-Output "`nNo Warp registry entries found!"
} else {
    Write-Output "`nCleanup completed! Removed $found item(s)."
}