@echo off
echo ========================================
echo Patrick Kolb Bewerbung - Installation
echo ========================================
echo.

:: Prüfe ob Node.js installiert ist
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [FEHLER] Node.js ist nicht installiert!
    echo.
    echo Öffne Node.js Download-Seite...
    start https://nodejs.org
    echo.
    echo Bitte installieren Sie Node.js und führen Sie diese Datei erneut aus.
    pause
    exit /b 1
)

echo [OK] Node.js gefunden: 
node --version
echo.

:: Installiere Abhängigkeiten
echo [INFO] Installiere Projekt-Abhängigkeiten...
echo.
call npm install

:: Prüfe ob .env existiert
if not exist ".env" (
    echo.
    echo [INFO] Erstelle .env Datei...
    copy .env.example .env >nul
    echo.
    echo ========================================
    echo WICHTIGER NÄCHSTER SCHRITT:
    echo ========================================
    echo 1. Öffnen Sie die .env Datei
    echo 2. Ersetzen Sie YOUR_ANTHROPIC_API_KEY_HERE
    echo    mit Ihrem echten Anthropic API-Schlüssel
    echo 3. Speichern Sie die Datei
    echo 4. Führen Sie start.bat aus
    echo ========================================
    echo.
    echo Möchten Sie die .env Datei jetzt öffnen? (J/N)
    choice /C JN /N
    if %ERRORLEVEL% EQU 1 (
        notepad .env
    )
) else (
    echo [OK] .env Datei existiert bereits
)

echo.
echo ========================================
echo Installation abgeschlossen!
echo ========================================
echo.
echo Nächste Schritte:
echo 1. Stellen Sie sicher, dass Ihr API-Schlüssel in .env eingetragen ist
echo 2. Führen Sie start.bat aus, um den Server zu starten
echo.
pause