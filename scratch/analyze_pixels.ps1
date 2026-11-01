Add-Type -AssemblyName System.Drawing

$uploadedPath = "C:\Users\ASUS\.gemini\antigravity-ide\brain\d4913d2a-6e4e-415a-ad99-baf20a459e6e\.user_uploaded\media_1791454428249.png"
$bmp = New-Object System.Drawing.Bitmap($uploadedPath)

Write-Host "Width: $($bmp.Width), Height: $($bmp.Height)"

$minX = $bmp.Width
$maxX = 0
$minY = $bmp.Height
$maxY = 0

for ($y = 0; $y -lt $bmp.Height; $y++) {
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $pixel = $bmp.GetPixel($x, $y)
        if ($pixel.A -gt 10) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

Write-Host "Non-transparent bounds: minX=$minX, maxX=$maxX, minY=$minY, maxY=$maxY"
Write-Host "Content width: $($maxX - $minX + 1), Content height: $($maxY - $minY + 1)"
Write-Host "Padding: left=$minX, right=$($bmp.Width - 1 - $maxX), top=$minY, bottom=$($bmp.Height - 1 - $maxY)"

$bmp.Dispose()
