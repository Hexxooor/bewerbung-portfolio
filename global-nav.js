// Global Navigation Button
// Fügt einen "Zur Startseite" Button auf allen Seiten hinzu (außer Landing Page)

(function() {
    // Prüfe ob wir auf der Landing Page sind
    if (window.location.pathname.includes('landing.html')) {
        return; // Kein Button auf der Landing Page
    }
    
    // Erstelle den Button
    const navButton = document.createElement('button');
    navButton.className = 'global-nav-button';
    navButton.innerHTML = `
        <svg viewBox="0 0 24 24">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        <span>Zur Startseite</span>
    `;
    
    // Event Listener
    navButton.addEventListener('click', () => {
        window.location.href = 'landing.html';
    });
    
    // Füge den Button zum Body hinzu
    document.addEventListener('DOMContentLoaded', () => {
        document.body.appendChild(navButton);
    });
})();