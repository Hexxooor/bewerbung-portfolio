// Patrick Kolb KI-Chat Widget
// Kann auf jeder Seite eingebunden werden

(function() {
    // Konfiguration
    const USE_LOCAL_SERVER = true;
    const API_ENDPOINT = USE_LOCAL_SERVER ? 'http://localhost:3000/api/chat' : 'https://api.anthropic.com/v1/messages';
    
    // Wissensdatenbank
    const knowledgeBase = {
        "grundprofil": { "name": "Patrick Kolb", "positionierung": "Visionärer IT-Stratege und KI-Innovator mit Hands-on-Mentalität", "elevator_pitch": "Patrick Kolb ist eine seltene Kombination aus strategischem Vordenker und pragmatischem Macher. Mit über 20 Jahren Erfahrung, die vom Maurerhandwerk (1999-2003) bis zur Leitung globaler IT-Teams reicht, bringt er eine einzigartige, ganzheitliche Perspektive mit. Er transformiert nicht nur IT-Infrastrukturen, sondern inspiriert auch Kulturen zur digitalen Exzellenz. Seine Stärke liegt darin, komplexe Probleme zu erkennen, unkonventionelle Lösungen zu entwickeln und diese mit einem klaren Fokus auf den Geschäftserfolg umzusetzen. Als KI-Enthusiast treibt er die intelligente Automatisierung voran." },
        "persoenlichkeit_und_arbeitsweise": { "philosophie_kernpunkte": [ "Loyalität zur Firma steht an erster Stelle; er denkt über die IT hinaus, um das gesamte Unternehmen voranzubringen.", "Glaubt an Vereinfachung und Effizienz: 'Wir haben Maschinen erfunden, damit wir weniger arbeiten müssen'.", "Kritisiert blinden Aktionismus und fordert, den wahren Nutzen von Datensammlung und Digitalisierung zu hinterfragen.", "Verstehen ist der Schlüssel zur Optimierung: 'Du musst es verstehen, um es zu umgehen'.", "Erkennt, dass Menschen Veränderungen oft scheuen, aber sieht die Notwendigkeit, sie für den Fortschritt zu motivieren." ], "fuehrungsstil": { "typ": "Agil, teambasiert und situativ anpassbar.", "beschreibung": "Fördert Eigenverantwortung und Zusammenarbeit, um Kreativität und Flexibilität zu ermöglichen. In Krisen oder bei dringenden Themen kann er jedoch auf einen direktiven, entscheidungsstarken Stil umschalten, um schnelle Ergebnisse zu gewährleisten. Die Kommunikation über den Führungsstil ist ihm wichtig, um Transparenz im Team zu schaffen." }, "herangehensweise_an_probleme": "Er ist ein proaktiver Problemlöser, der jedem zuhört – 'wenn es sein muss, rede ich auch mit der Putzfrau, um an Wissen zu kommen'. Er analysiert Situationen tiefgreifend, um die Wurzel des Problems zu finden, statt nur Symptome zu behandeln. Seine Vorschläge sind stets durchdacht und auf Wirtschaftlichkeit und Effizienz ausgerichtet.", "staerken": [ "**Strategisches und visionäres Denken:** Liebt es, Strategien zu entwickeln und weiterzudenken. Erkennt frühzeitig Risiken und Chancen (z.B. Lock-in-Szenarien oder das Potenzial von PIM-Systemen).", "**Innovationskraft und Kreativität:** Entwickelte privat ein eigenes ERP-System, einen Fanclub und sogar technische Lösungen im Bereich Medizintechnik. Seine Bewerbungen selbst sind kreative Projekte.", "**Ehrlichkeit und Direktheit:** Spricht Probleme offen an (z.B. IT-Sicherheitsmängel, vernachlässigte Infrastruktur). Dies mag unangenehm sein, dient aber ausschließlich dem Ziel, die Firma zu schützen und zu verbessern.", "**Hohe Handlungsorientierung:** Zeigt Frustration über fehlende Entscheidungsprozesse und Budgets, weil er schnell und effizient Ergebnisse liefern will. Er hat einen 'Schlachtplan', um strukturiert vorzugehen.", "**Ganzheitliches Verständnis:** Verbindet sein tiefes IT-Wissen mit einem Verständnis für Geschäftsprozesse, von der Produktion bis zur Personalabteilung. Seine Maurerlehre gibt ihm eine einzigartige Perspektive auf die Digitalisierung in der Baubranche." ], "potenzielle_herausforderungen_positiv_gerahmt": [ { "merkmal": "Ungeduld mit Bürokratie und langsamen Entscheidungen.", "positive_deutung": "Sein hohes Maß an Eigeninitiative und sein Drang nach Effizienz führen dazu, dass er Prozesse beschleunigen und schnell sichtbare Ergebnisse für das Unternehmen erzielen möchte. Er ist kein Verwalter, sondern ein Gestalter." }, { "merkmal": "Direkte und manchmal unbequeme Kommunikation.", "positive_deutung": "Er praktiziert radikale Offenheit, weil ihm die Zukunft und Sicherheit des Unternehmens am Herzen liegen. Seine Analysen sind ungeschönt und lösungsorientiert, was langfristig Risiken minimiert und eine Kultur der kontinuierlichen Verbesserung fördert." }, { "merkmal": "Hinterfragt bestehende Strukturen und Entscheidungen der Führungsebene.", "positive_deutung": "Sein strategischer Weitblick und seine Loyalität zur Firma motivieren ihn, als konstruktiver Sparringspartner zu agieren. Er möchte sicherstellen, dass alle Entscheidungen zukunftssicher und im besten Interesse des Unternehmens sind." } ] },
        "beruflicher_werdegang": [ { "zeitraum": "01/2024 - Heute", "position": "IT-Leiter", "firma": "Prinz GmbH & Co. KG", "beschreibung": "Gesamtverantwortung für IT-Strategie, Infrastruktur, digitale Transformation und Führung eines 12-köpfigen Teams." }, { "zeitraum": "2020 - 2023", "position": "Head of IT Client Services", "firma": "Grass GmbH (Würth-Gruppe)", "beschreibung": "Führung eines globalen 25-köpfigen Teams. Erfolgreiche Projekte wie die M365-Migration, Einführung von Jira Service Management (40% Effizienzsteigerung) und Rollout von FortiEDR." }, { "zeitraum": "2016 - 2019", "position": "IT System Engineer Client Workplace", "firma": "Grass GmbH (Würth-Gruppe)", "beschreibung": "Systemadministration für über 800 Clients, Entwicklung von Automatisierungslösungen." }, { "zeitraum": "2011 - 2016", "position": "Technischer Angestellter", "firma": "Glaserei Nuber, Lindau", "beschreibung": "Brücke zwischen traditionellem Handwerk und moderner Technologie." } ],
        "ausbildung": [ { "zeitraum": "1999 - 2003 (Wendepunkt)", "abschluss": "Ausbildung zum Maurer", "institut": "Fa. Dietrich, Lindau" }, { "zeitraum": "2003 - 2010", "abschluss": "Fernmeldetechniker", "institut": "Bundeswehr, Deutschland" }, { "zeitraum": "2005 - 2007", "abschluss": "Ausbildung zum IT-Systemelektroniker", "institut": "DEKRA Akademie, Augsburg" } ],
        "kernkompetenzen": { "it_strategie_und_fuehrung": [ "Entwicklung und Umsetzung von Digitalisierungsstrategien", "Budgetplanung und -verantwortung", "Führung und Entwicklung von IT-Teams (bis 25 Personen)", "Change Management und Prozessoptimierung" ], "technologie_und_infrastruktur": [ "IT-Security (Konzept & Umsetzung, z.B. FortiEDR, Penetration Tests)", "Cloud-Services (M365, Azure AD) und Infrastruktur-Management", "ERP-Systeme (Kritische Analyse von CSB, Wissen über Pro Alpha)", "Netzwerkarchitektur (Analyse und Optimierung, z.B. Cisco Meraki vs. UniFi)", "Client Management (Baramundi, Intune)" ], "soft_skills": [ "Kommunikationsfähigkeit (auch für Nicht-ITler)", "Analytisches und abstraktes Denkvermögen", "Problemlösungskompetenz", "Eigenverantwortung und hohe Motivation" ] },
        "projekte_und_erfolge": [ { "projekt": "Implementierung Jira Service Management", "ergebnis": "Implementierung von Jira Service Management für Ticketing und CMDB bei Grass GmbH." }, { "projekt": "Einführung FortiEDR", "ergebnis": "Implementierung der Endpoint Detection and Response-Lösung FortiEDR (ehemals enSilo)." }, { "projekt": "Microsoft 365 Migration", "ergebnis": "Umzug in einen neuen Tenant des Mutterkonzerns." }, { "projekt": "Konzeption DokuHub auf SharePoint-Basis", "ergebnis": "Werkzeug zur zentralen Erstellung, Freigabe und Genehmigung von firmenweiten Dokumenten und Richtlinien." } ]
    };

    const SYSTEM_PROMPT = `Du bist ein professioneller, hilfreicher und leicht enthusiastischer KI-Assistent namens "Patrick's Digitaler Zwilling". Deine einzige Aufgabe ist es, Fragen von Recruitern über den Bewerber Patrick Kolb zu beantworten. Deine Antworten müssen AUSSCHLIESSLICH auf den Informationen aus der folgenden JSON-Wissensdatenbank basieren: ${JSON.stringify(knowledgeBase)}. Erfinde NIEMALS Informationen. WICHTIG: Wenn eine Frage eine potenzielle Schwäche anspricht (z.B. Direktheit, Ungeduld), nutze die Informationen unter 'potenzielle_herausforderungen_positiv_gerahmt', um dies als Stärke (z.B. Engagement für Verbesserung) zu deuten. Wenn die Antwort nicht im JSON steht, antworte höflich, dass die Information nicht vorliegt. Formuliere natürliche, ganze Sätze.`;

    // CSS Styles injizieren
    const styles = `
        #pk-chat-widget-container {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }

        #pk-chat-toggle-button {
            width: 60px;
            height: 60px;
            background-color: #d40024;
            border-radius: 50%;
            border: none;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: transform 0.2s ease;
        }

        #pk-chat-toggle-button:hover { transform: scale(1.1); }
        #pk-chat-toggle-button svg { width: 32px; height: 32px; stroke: white; transition: opacity 0.2s; }
        #pk-chat-toggle-button .icon-close { display: none; }

        #pk-chat-window {
            position: absolute;
            bottom: 80px;
            right: 0;
            width: 450px;
            max-width: calc(100vw - 40px);
            height: 650px;
            max-height: calc(100vh - 120px);
            background-color: #ffffff;
            border-radius: 15px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.2);
            display: flex;
            flex-direction: column;
            overflow: hidden;
            transform: scale(0);
            transform-origin: bottom right;
            transition: transform 0.3s ease;
        }
        
        #pk-chat-widget-container.open #pk-chat-window { transform: scale(1); }
        #pk-chat-widget-container.open #pk-chat-toggle-button .icon-open { display: none; }
        #pk-chat-widget-container.open #pk-chat-toggle-button .icon-close { display: block; }

        .pk-chat-header {
            background-color: #d40024;
            color: white;
            padding: 20px;
            text-align: center;
            font-weight: bold;
            flex-shrink: 0;
            position: relative;
        }
        
        .pk-chat-header-content {
            margin: 0 60px;
        }
        
        .pk-chat-header-title { font-size: 1.2rem; }
        .pk-chat-header-subtitle { font-size: 0.9rem; opacity: 0.9; }
        
        .pk-chat-nav-buttons {
            position: absolute;
            left: 15px;
            top: 50%;
            transform: translateY(-50%);
            display: flex;
            gap: 10px;
        }
        
        .pk-chat-nav-button {
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            padding: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 4px;
            transition: all 0.2s ease;
        }
        
        .pk-chat-nav-button:hover {
            background: rgba(255,255,255,0.2);
        }
        
        .pk-chat-nav-button svg {
            width: 20px;
            height: 20px;
            stroke: white;
        }
        
        .pk-chat-nav-button.home svg {
            fill: white;
            stroke: none;
        }

        .pk-chat-messages { 
            flex-grow: 1; 
            padding: 20px; 
            overflow-y: auto; 
            display: flex; 
            flex-direction: column;
            background: #f9fafb;
        }
        
        .pk-chat-message { 
            max-width: 80%; 
            padding: 12px 18px; 
            border-radius: 18px; 
            margin-bottom: 12px; 
            line-height: 1.5; 
            font-size: 1rem; 
            word-wrap: break-word;
            color: #333;
        }
        
        .pk-chat-message.user { 
            background-color: #e5e7eb; 
            color: #111827; 
            align-self: flex-end; 
            border-bottom-right-radius: 4px; 
        }
        
        .pk-chat-message.ai { 
            background-color: #d40024; 
            color: white; 
            align-self: flex-start; 
            border-bottom-left-radius: 4px; 
        }
        
        .pk-chat-message.ai.loading span { 
            display: inline-block; 
            width: 8px; 
            height: 8px; 
            border-radius: 50%; 
            background-color: rgba(255,255,255,0.7); 
            animation: pk-bounce 1s infinite; 
        }
        
        .pk-chat-message.ai.loading span:nth-child(2) { animation-delay: 0.1s; }
        .pk-chat-message.ai.loading span:nth-child(3) { animation-delay: 0.2s; }
        
        @keyframes pk-bounce { 
            0%, 80%, 100% { transform: scale(0); } 
            40% { transform: scale(1.0); } 
        }

        .pk-chat-input-form { 
            display: flex; 
            padding: 15px; 
            border-top: 1px solid #e0e0e0; 
            flex-shrink: 0;
            background: white;
        }
        
        #pk-chat-input { 
            flex-grow: 1; 
            border: 1px solid #ccc; 
            border-radius: 25px; 
            padding: 12px 20px; 
            font-size: 1rem; 
            outline: none;
            color: #333;
        }
        
        #pk-chat-input:focus { border-color: #d40024; }
        
        #pk-chat-send-button { 
            background: none; 
            border: none; 
            cursor: pointer; 
            padding: 0 10px; 
        }
        
        #pk-chat-send-button svg { 
            width: 24px; 
            height: 24px; 
            fill: #d40024; 
        }
        
        @media (max-width: 768px) {
            #pk-chat-window {
                width: calc(100vw - 40px);
                height: calc(100vh - 160px);
                right: 20px;
            }
        }
    `;

    // HTML Template
    const widgetHTML = `
        <div id="pk-chat-widget-container">
            <div id="pk-chat-window">
                <div class="pk-chat-header">
                    <div class="pk-chat-nav-buttons">
                        <button class="pk-chat-nav-button back" id="pk-chat-back-button" title="Zurück">
                            <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                        </button>
                        <button class="pk-chat-nav-button home" id="pk-chat-home-button" title="Zur Startseite">
                            <svg viewBox="0 0 24 24">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>
                        </button>
                    </div>
                    <div class="pk-chat-header-content">
                        <div class="pk-chat-header-title">Fragen zur KI-Manager Position?</div>
                        <div class="pk-chat-header-subtitle">Fragen Sie Patrick Kolbs digitalen Zwilling!</div>
                    </div>
                </div>
                <div class="pk-chat-messages" id="pk-chat-messages">
                     <div class="pk-chat-message ai">Hallo! Ich bin der KI-Assistent von Patrick Kolb. Ich kann Ihnen Fragen zu seiner Expertise im Bereich KI und Digitalisierung beantworten. Wie kann ich Ihnen helfen?</div>
                </div>
                <form class="pk-chat-input-form" id="pk-chat-form">
                    <input type="text" id="pk-chat-input" placeholder="Stellen Sie Ihre Frage..." autocomplete="off">
                    <button type="submit" id="pk-chat-send-button">
                        <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                    </button>
                </form>
            </div>
            <button id="pk-chat-toggle-button">
                <svg class="icon-open" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                <svg class="icon-close" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
        </div>
    `;

    // Initialisierung
    function initChatWidget() {
        // Styles hinzufügen
        const styleSheet = document.createElement('style');
        styleSheet.innerHTML = styles;
        document.head.appendChild(styleSheet);

        // Widget HTML hinzufügen
        const widgetContainer = document.createElement('div');
        widgetContainer.innerHTML = widgetHTML;
        document.body.appendChild(widgetContainer.firstElementChild);

        // Event Listeners
        const widgetElement = document.getElementById('pk-chat-widget-container');
        const toggleButton = document.getElementById('pk-chat-toggle-button');
        const backButton = document.getElementById('pk-chat-back-button');
        const homeButton = document.getElementById('pk-chat-home-button');
        const chatForm = document.getElementById('pk-chat-form');
        const chatInput = document.getElementById('pk-chat-input');
        const chatMessages = document.getElementById('pk-chat-messages');
        const conversationHistory = [];

        toggleButton.addEventListener('click', () => widgetElement.classList.toggle('open'));
        
        // Zurück-Button Funktionalität
        backButton.addEventListener('click', () => {
            // Browser-History zurück
            window.history.back();
        });
        
        // Home-Button Funktionalität
        homeButton.addEventListener('click', () => {
            // Immer zur Landing Page
            window.location.href = 'landing.html';
        });

        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const userMessage = chatInput.value.trim();
            if (!userMessage) return;

            addMessageToUI(userMessage, 'user');
            conversationHistory.push({ role: 'user', content: userMessage });
            chatInput.value = '';
            
            getAIResponse();
        });

        function addMessageToUI(text, sender, isLoading = false) {
            const messageElement = document.createElement('div');
            messageElement.classList.add('pk-chat-message', sender);
            if (isLoading) {
                messageElement.classList.add('loading');
                messageElement.innerHTML = '<span></span><span></span><span></span>';
            } else {
                messageElement.textContent = text;
            }
            chatMessages.appendChild(messageElement);
            chatMessages.scrollTop = chatMessages.scrollHeight;
            return messageElement;
        }

        async function getAIResponse() {
            const loadingMessage = addMessageToUI('...', 'ai', true);

            try {
                const headers = USE_LOCAL_SERVER ? {
                    'content-type': 'application/json'
                } : {
                    'x-api-key': 'YOUR_ANTHROPIC_API_KEY',
                    'anthropic-version': '2023-06-01',
                    'content-type': 'application/json'
                };

                const response = await fetch(API_ENDPOINT, {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify({
                        model: "claude-3-5-sonnet-20240620",
                        system: SYSTEM_PROMPT,
                        messages: conversationHistory,
                        max_tokens: 1024,
                        stream: true
                    })
                });

                if (!response.ok) {
                    throw new Error(`API Fehler: ${response.status} ${response.statusText}`);
                }

                loadingMessage.remove();
                const aiMessageElement = addMessageToUI('', 'ai');
                let aiResponseText = '';

                // Verarbeitung des Streams
                const reader = response.body.getReader();
                const decoder = new TextDecoder();
                while (true) {
                    const { value, done } = await reader.read();
                    if (done) break;
                    const chunk = decoder.decode(value, { stream: true });
                    
                    // SSE (Server-Sent Events) parsen
                    const lines = chunk.split('\n');
                    for (const line of lines) {
                        if (line.startsWith('data: ')) {
                            const jsonData = line.substring(6);
                            try {
                                const parsed = JSON.parse(jsonData);
                                if (parsed.type === 'content_block_delta' && parsed.delta.type === 'text_delta') {
                                    const text = parsed.delta.text;
                                    aiResponseText += text;
                                    aiMessageElement.textContent = aiResponseText;
                                    chatMessages.scrollTop = chatMessages.scrollHeight;
                                }
                            } catch (e) {
                                // Ignoriere unvollständige JSON-Chunks
                            }
                        }
                    }
                }
                conversationHistory.push({ role: 'assistant', content: aiResponseText });

            } catch (error) {
                console.error("Fehler bei der Anfrage an Claude:", error);
                loadingMessage.remove();
                addMessageToUI("Entschuldigung, es ist ein Fehler aufgetreten. Stellen Sie sicher, dass der Server läuft (start.bat).", 'ai');
            }
        }
    }

    // Warte bis DOM geladen ist
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initChatWidget);
    } else {
        initChatWidget();
    }
})();