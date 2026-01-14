@echo off
chcp 65001 >nul
echo Görseller kopyalanıyor...
xcopy /E /I /Y "özel\package\public\images\*" "public\images\"
echo.
echo Görseller kopyalandı!
pause



