# CORS-Fehler Lösung - Lokaler Server Setup

## 🚨 Sicherheitswarnung
Ich habe Ihren API-Schlüssel aus der HTML-Datei entfernt! **Teilen Sie niemals Ihren API-Schlüssel öffentlich.**

## 🔧 Schnelle Lösung mit lokalem Server

### Schritt 1: Node.js installieren
Falls noch nicht vorhanden, laden Sie Node.js von https://nodejs.org herunter und installieren Sie es.

### Schritt 2: Abhängigkeiten installieren
Öffnen Sie ein Terminal/Command Prompt im Ordner `C:\Patrick_GIT\bewerbung\neu` und führen Sie aus:

```bash
npm install
```

### Schritt 3: API-Schlüssel konfigurieren
1. Kopieren Sie die Datei `.env.example` zu `.env`
2. Öffnen Sie `.env` und ersetzen Sie `YOUR_ANTHROPIC_API_KEY_HERE` mit Ihrem echten API-Schlüssel

### Schritt 4: Server starten
```bash
node server.js
```

Sie sollten sehen:
```
Server läuft auf http://localhost:3000
Öffnen Sie http://localhost:3000/landing.html in Ihrem Browser
```

### Schritt 5: Webseite öffnen
Öffnen Sie http://localhost:3000/landing.html in Ihrem Browser (nicht als Datei!)

## ✅ Der Chatbot sollte jetzt funktionieren!

## Alternative Lösungen:

### Option A: Vercel Deployment (Kostenlos & Sicher)
1. Erstellen Sie ein Konto bei https://vercel.com
2. Installieren Sie Vercel CLI: `npm i -g vercel`
3. Führen Sie `vercel` im Projektordner aus
4. Folgen Sie den Anweisungen
5. Fügen Sie Ihren API-Schlüssel als Umgebungsvariable in Vercel hinzu

### Option B: Netlify Functions (Kostenlos & Sicher)
1. Erstellen Sie ein Konto bei https://netlify.com
2. Erstellen Sie einen `netlify/functions` Ordner
3. Verschieben Sie die Server-Logik in eine Netlify Function
4. Deployen Sie mit Netlify CLI oder Git

## Fehlerbehebung:

**Port bereits belegt?**
Ändern Sie in `server.js` die Zeile:
```javascript
const PORT = 3000;
```
zu einem anderen Port, z.B.:
```javascript
const PORT = 3001;
```

**CORS-Fehler trotz lokalem Server?**
Stellen Sie sicher, dass Sie die Seite über `http://localhost:3000/landing.html` öffnen, nicht als lokale Datei!

## Sicherheitshinweise:
- ✅ Der API-Schlüssel ist jetzt nur auf dem Server
- ✅ Niemand kann ihn im Browser-Code sehen
- ❌ Committen Sie niemals die `.env` Datei in Git!
- ✅ Die `.env.example` zeigt nur die Struktur ohne echte Schlüssel

## Nächste Schritte für Produktion:
1. Nutzen Sie eine der Cloud-Lösungen (Vercel/Netlify)
2. Oder hosten Sie den Node.js Server auf einem VPS
3. Fügen Sie Rate-Limiting hinzu
4. Implementieren Sie Authentifizierung wenn nötig
