#!/usr/bin/env pwsh
# Bump version across all packages
# Usage: .\scripts\version-bump.ps1 <major|minor|patch>

param(
    [Parameter(Mandatory=$true)]
    [ValidateSet('major', 'minor', 'patch')]
    [string]$BumpType
)

$ErrorActionPreference = "Stop"
$packages = @("core", "vue", "vue2", "react")

Write-Host "🔢 Bumping $BumpType version for all packages..." -ForegroundColor Cyan

foreach ($pkg in $packages) {
    $path = "packages\$pkg"
    Write-Host "`nUpdating @liverkp/$pkg..." -ForegroundColor Yellow
    
    Push-Location $path
    try {
        npm version $BumpType --no-git-tag-version
        $newVersion = (Get-Content package.json | ConvertFrom-Json).version
        Write-Host "✓ @liverkp/$pkg -> v$newVersion" -ForegroundColor Green
    } finally {
        Pop-Location
    }
}

Write-Host "`n✨ All versions updated!" -ForegroundColor Green
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "  1. Review changes: git diff" -ForegroundColor White
Write-Host "  2. Commit: git commit -am 'chore: bump version to X.X.X'" -ForegroundColor White
Write-Host "  3. Tag: git tag vX.X.X" -ForegroundColor White
Write-Host "  4. Build: pnpm build" -ForegroundColor White
Write-Host "  5. Publish: .\scripts\publish.ps1" -ForegroundColor White
Write-Host "  6. Push: git push && git push --tags" -ForegroundColor White
