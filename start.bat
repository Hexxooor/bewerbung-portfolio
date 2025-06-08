@echo off
echo ========================================
echo Patrick Kolb Bewerbung - KI-Manager
echo ========================================
echo.

:: Prüfe ob Node.js installiert ist
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [FEHLER] Node.js ist nicht installiert!
    echo Bitte installieren Sie Node.js von https://nodejs.org
    echo.
    pause
    exit /b 1
)

:: Prüfe ob node_modules existiert
if not exist "node_modules" (
    echo [INFO] Installiere Abhängigkeiten...
    echo.
    call npm install
    echo.
)

:: Prüfe ob .env existiert
if not exist ".env" (
    echo [WARNUNG] .env Datei nicht gefunden!
    echo.
    echo Erstelle .env aus .env.example...
    copy .env.example .env >nul
    echo.
    echo WICHTIG: Bitte öffnen Sie die .env Datei und fügen Sie Ihren
    echo          Anthropic API-Schlüssel ein!
    echo.
    pause
)

:: Starte den Server
echo [INFO] Starte Server auf http://localhost:3000
echo.
echo 🆕 NEUE FEATURES:
echo  - Landing Page für KI-Manager Position bei KUTTER
echo  - Dual: Direkt oder Initiativbewerbung Digitalisierung
echo  - KI-Kompetenzen im Fokus
echo  - Chat Widget auf allen Seiten
echo.
echo Die Bewerbungsseite wird in 3 Sekunden im Browser geöffnet...
echo.
echo Drücken Sie Ctrl+C um den Server zu beenden.
echo ========================================
echo.

:: Warte 3 Sekunden
timeout /t 3 /nobreak >nul

:: Öffne Browser
start http://localhost:3000/landing.html

:: Starte Node.js Server
node server.js

:: Falls der Server beendet wird
echo.
echo Server wurde beendet.
pause