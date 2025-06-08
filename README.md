# Patrick Kolb - Interaktive Bewerbung für KI-Manager Position

## 🚀 Übersicht
Interaktive Bewerbungswebsite für Patrick Kolb als **KI-Manager** oder **Digitalisierungsexperte** bei der KUTTER AG.

## 🚀 Schnellstart

### Windows-Benutzer:

1. **Erstmalige Installation:**
   - Doppelklicken Sie auf `install.bat`
   - Folgen Sie den Anweisungen
   - Fügen Sie Ihren Anthropic API-Schlüssel in die `.env` Datei ein

2. **Server starten:**
   - Doppelklicken Sie auf `start.bat`
   - Der Browser öffnet sich automatisch

### Andere Betriebssysteme:

1. **Installation:**
   ```bash
   npm install
   cp .env.example .env
   # Bearbeiten Sie .env und fügen Sie Ihren API-Schlüssel ein
   ```

2. **Server starten:**
   ```bash
   node server.js
   ```

3. **Browser öffnen:**
   http://localhost:3000/landing.html

## 📁 Batch-Dateien (Windows)

- **`install.bat`** - Installiert alle Abhängigkeiten und richtet das Projekt ein
- **`start.bat`** - Startet den Server und öffnet die Webseite
- **`dev.bat`** - Entwicklermodus mit automatischem Neuladen bei Änderungen

## 🔧 Konfiguration

1. Kopieren Sie `.env.example` zu `.env`
2. Öffnen Sie `.env`
3. Ersetzen Sie `YOUR_ANTHROPIC_API_KEY_HERE` mit Ihrem echten API-Schlüssel

## 📂 Projektstruktur

```
neu/
├── landing.html          # Hauptseite mit Chat-Widget
├── index.html           # Gamification-Bewerbung
├── kutter-bewerbung.html # Klassische Bewerbung
├── server.js            # Node.js Proxy-Server
├── package.json         # Projekt-Dependencies
├── .env.example         # Beispiel-Umgebungsvariablen
├── .env                 # Ihre echten Umgebungsvariablen (nicht committen!)
├── install.bat          # Windows Installation
├── start.bat            # Windows Server Start
└── dev.bat              # Windows Development Mode
```

## 🔒 Sicherheitshinweise

- **Niemals** den API-Schlüssel direkt im Frontend-Code speichern
- **Niemals** die `.env` Datei in Git committen
- Für Produktionsumgebungen nutzen Sie Vercel, Netlify oder ähnliche Dienste

## 🛠️ Fehlerbehebung

**Port bereits belegt?**
- Bearbeiten Sie `server.js` und ändern Sie `const PORT = 3000;` zu einem anderen Port

**CORS-Fehler?**
- Stellen Sie sicher, dass Sie die Seite über `http://localhost:3000` aufrufen
- Nicht als lokale Datei öffnen!

**Chat funktioniert nicht?**
- Prüfen Sie, ob Ihr API-Schlüssel in `.env` korrekt eingetragen ist
- Schauen Sie in die Konsole des Servers für Fehlermeldungen

## 🆕 Neueste Updates

### Landing Page
- **Fokus auf KI & Digitalisierung**: Direkte Ansprache für die KI-Manager Position
- **Duale Bewerbungsoption**: Direkt für KI-Manager oder Initiativbewerbung Digitalisierung
- **KI-Kompetenzen hervorgehoben**: ChatGPT, Claude, Process Mining, Automation
- **KUTTER-spezifisch**: Angepasst an die ausgeschriebene Stelle
- **Modernes Design**: Subtile KI-Farbakzente (Blau/Grün)

### Navigation im Chat Widget
- **Zurück-Button**: Navigiert zur vorherigen Seite (Browser-History)
- **Home-Button**: Führt immer zur Landing Page
- **Größeres Fenster**: 450x650px für bessere Lesbarkeit
- **Responsive**: Optimale Anpassung auf allen Geräten

## 🚀 Deployment

Für eine öffentliche Website empfehlen wir:

1. **Vercel** (kostenlos)
2. **Netlify** (kostenlos)
3. **Heroku** (kostenpflichtig)

Siehe `CORS_SOLUTION.md` für detaillierte Deployment-Anleitungen.

## 📞 Support

Bei Fragen oder Problemen:
- Patrick Kolb
- Email: Patrick.Kolb@gmx.de
- Tel: +49 152 09893729
