@echo off
echo ========================================
echo Patrick Kolb Bewerbung - Development Mode
echo ========================================
echo.

:: Prüfe ob nodemon installiert ist
where nodemon >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [INFO] Installiere nodemon für automatisches Neuladen...
    call npm install -g nodemon
)

:: Prüfe ob .env existiert
if not exist ".env" (
    echo [FEHLER] .env Datei nicht gefunden!
    echo Bitte führen Sie erst install.bat aus.
    pause
    exit /b 1
)

echo [INFO] Starte Server im Development-Modus
echo [INFO] Der Server startet automatisch neu bei Änderungen
echo.
echo Server läuft auf http://localhost:3000
echo.

:: Öffne Browser
start http://localhost:3000/landing.html

:: Starte mit nodemon
nodemon server.js

pause