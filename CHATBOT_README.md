# Chatbot-Konfiguration für landing.html

## 🚨 SICHERHEITSWARNUNG

Der aktuelle Chatbot verwendet die **unsichere Demo-Variante** mit dem API-Schlüssel direkt im JavaScript-Code.

### Für die Demo-Nutzung:

1. Öffnen Sie `landing.html` in einem Texteditor
2. Suchen Sie nach `YOUR_ANTHROPIC_API_KEY` 
3. Ersetzen Sie es durch Ihren echten Anthropic API-Schlüssel

**WICHTIG**: Diese Lösung ist NUR für private Demos geeignet! Der API-Schlüssel ist für jeden sichtbar, der den Quellcode ansieht.

### Für eine öffentliche Website:

Verwenden Sie NIEMALS den API-Schlüssel direkt im Frontend-Code! Stattdessen:

1. **Serverless Function** (Empfohlen)
   - Nutzen Sie Vercel, Netlify oder ähnliche Dienste
   - Der API-Schlüssel wird sicher auf dem Server gespeichert
   - Siehe die Anleitung im ursprünglichen Dokument

2. **Eigener Backend-Server**
   - Erstellen Sie einen API-Endpoint auf Ihrem Server
   - Der Server hält den API-Schlüssel sicher
   - Das Frontend kommuniziert nur mit Ihrem Server

## Chatbot-Features:

- Beantwortet Fragen basierend auf Patrick Kolbs Wissensdatenbank
- Streaming-Antworten für bessere UX
- Elegantes Chat-Interface
- Positive Umdeutung von potenziellen Schwächen

## Anpassungen:

Die Wissensdatenbank ist direkt in der `landing.html` eingebettet. Bei Bedarf können Sie:
- Die Daten in der `knowledgeBase`-Variable anpassen
- Den System-Prompt für andere Antwortsstile modifizieren
- Das Chat-Widget-Design über die CSS-Variablen ändern

## Test der Seite:

1. Öffnen Sie `landing.html` in einem modernen Browser
2. Klicken Sie auf den roten Chat-Button unten rechts
3. Stellen Sie Fragen wie:
   - "Was sind Patrick Kolbs Stärken?"
   - "Welche Berufserfahrung hat er?"
   - "Warum ist er manchmal ungeduldig?"
