Add-Type -AssemblyName System.Drawing

$currentPath = (Resolve-Path "images/logo.png").Path
$bmp = New-Object System.Drawing.Bitmap($currentPath)

Write-Host "Current Width: $($bmp.Width), Height: $($bmp.Height)"

$minX = $bmp.Width
$maxX = 0
$minY = $bmp.Height
$maxY = 0

# Check for non-white pixels (or non-transparent if alpha < 255)
for ($y = 0; $y -lt $bmp.Height; $y++) {
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $pixel = $bmp.GetPixel($x, $y)
        # Is it not pure white and not transparent?
        if ($pixel.A -gt 10 -and ($pixel.R -lt 250 -or $pixel.G -lt 250 -or $pixel.B -lt 250)) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

Write-Host "Current Non-white bounds: minX=$minX, maxX=$maxX, minY=$minY, maxY=$maxY"
Write-Host "Content width: $($maxX - $minX + 1), Content height: $($maxY - $minY + 1)"
Write-Host "Padding: left=$minX, right=$($bmp.Width - 1 - $maxX), top=$minY, bottom=$($bmp.Height - 1 - $maxY)"

$bmp.Dispose()
