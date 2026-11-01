Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\ASUS\.gemini\antigravity-ide\brain\d4913d2a-6e4e-415a-ad99-baf20a459e6e\.user_uploaded\media_1791454428249.png"
$backupPath = "images\logo_backup.png"
$outputPath = "scratch\test_logo_1000.png"

# Backup existing logo if not already backed up
if (-not (Test-Path $backupPath)) {
    Copy-Item "images\logo.png" $backupPath
    Write-Host "Backed up original logo to $backupPath"
}

$srcBmp = New-Object System.Drawing.Bitmap($srcPath)

# Source bounding box for the badge
# minX=79, maxX=922 (W=844)
# minY=60, maxY=911 (H=852)
$cropX = 79
$cropY = 60
$cropW = 844
$cropH = 852

# Canvas size 1000x1000
$canvasSize = 1000
$destX = [math]::Round(($canvasSize - $cropW) / 2)
$destY = [math]::Round(($canvasSize - $cropH) / 2)

$destBmp = New-Object System.Drawing.Bitmap($canvasSize, $canvasSize, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($destBmp)
$g.Clear([System.Drawing.Color]::Transparent)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

$srcRect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)
$destRect = New-Object System.Drawing.Rectangle($destX, $destY, $cropW, $cropH)

$g.DrawImage($srcBmp, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

$destBmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$destBmp.Dispose()
$srcBmp.Dispose()

Write-Host "Successfully generated test centered logo at $outputPath (destX=$destX, destY=$destY)"
