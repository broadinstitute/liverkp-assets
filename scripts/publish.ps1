#!/usr/bin/env pwsh
# Publish all packages to npm
# Usage: .\scripts\publish.ps1 [--dry-run]

param(
    [switch]$DryRun
)

$ErrorActionPreference = "Stop"

Write-Host "🚀 Publishing @liverkp packages..." -ForegroundColor Cyan

# Check if logged in
try {
    $user = npm whoami
    Write-Host "✓ Logged in as: $user" -ForegroundColor Green
} catch {
    Write-Host "✗ Not logged in to npm. Run 'npm login' first." -ForegroundColor Red
    exit 1
}

# Clean and build
Write-Host "`n📦 Building packages..." -ForegroundColor Cyan
pnpm clean
pnpm build

# Check if builds succeeded
if (-not (Test-Path "packages\core\dist")) {
    Write-Host "✗ Build failed - dist folders not found" -ForegroundColor Red
    exit 1
}

Write-Host "✓ Build succeeded" -ForegroundColor Green

# Publish function
function Publish-Package {
    param($PackageName, $Path)

    Write-Host "`n📤 Publishing $PackageName..." -ForegroundColor Yellow
    Push-Location $Path

    try {
        if ($DryRun) {
            npm publish --access public --dry-run
            Write-Host "✓ [DRY RUN] $PackageName would be published" -ForegroundColor Blue
        } else {
            npm publish --access public
            Write-Host "✓ Published $PackageName" -ForegroundColor Green
        }
    } catch {
        Write-Host "✗ Failed to publish $PackageName" -ForegroundColor Red
        Pop-Location
        exit 1
    } finally {
        Pop-Location
    }
}

# Publish in dependency order
Publish-Package "@liverkp/core" "packages\core"
Publish-Package "@liverkp/vue" "packages\vue"
Publish-Package "@liverkp/vue2" "packages\vue2"
Publish-Package "@liverkp/react" "packages\react"

Write-Host "`n✨ All packages published successfully!" -ForegroundColor Green

if ($DryRun) {
    Write-Host "`n💡 This was a dry run. Run without --dry-run to actually publish." -ForegroundColor Blue
}
