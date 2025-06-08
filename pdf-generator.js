// PDF Generation Utility for Patrick Kolb's Application
// This module handles dynamic PDF generation from the different layouts

class PDFGenerator {
    constructor() {
        this.jsPDF = window.jspdf?.jsPDF;
        this.html2canvas = window.html2canvas;
        
        if (!this.jsPDF || !this.html2canvas) {
            console.error('Required libraries (jsPDF, html2canvas) not loaded');
        }
    }

    // Generate PDF from current page
    async generateFromCurrentPage() {
        try {
            // Show loading indicator
            this.showLoading();
            
            // Capture the current page
            const canvas = await html2canvas(document.body, {
                scale: 2,
                logging: false,
                useCORS: true,
                allowTaint: true
            });
            
            // Create PDF
            const imgData = canvas.toDataURL('image/png');
            const pdf = new this.jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4'
            });
            
            const imgWidth = 210;
            const pageHeight = 295;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;
            
            // Add pages as needed
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
            
            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }
            
            // Add metadata
            pdf.setProperties({
                title: 'Patrick Kolb - Bewerbung als KI-Manager bei Kutter GmbH',
                subject: 'Innovative Bewerbung',
                author: 'Patrick Kolb',
                keywords: 'KI, IT-Leitung, Innovation, Digitalisierung',
                creator: 'KI-gestützte Bewerbungswebseite'
            });
            
            // Save PDF
            pdf.save('Patrick_Kolb_Bewerbung_Kutter.pdf');
            
            this.hideLoading();
            this.showSuccess();
            
        } catch (error) {
            console.error('PDF generation failed:', error);
            this.hideLoading();
            this.showError();
        }
    }

    // Generate comprehensive CV PDF
    async generateComprehensiveCV() {
        try {
            this.showLoading();
            
            const pdf = new this.jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4'
            });
            
            // Set fonts
            pdf.setFont('helvetica');
            
            // Page 1: Cover
            this.addCoverPage(pdf);
            
            // Page 2: Personal Info & Summary
            pdf.addPage();
            this.addPersonalInfo(pdf);
            
            // Page 3: Career Timeline
            pdf.addPage();
            this.addCareerTimeline(pdf);
            
            // Page 4: Skills & Competencies
            pdf.addPage();
            this.addSkillsMatrix(pdf);
            
            // Page 5: Innovations & Projects
            pdf.addPage();
            this.addInnovations(pdf);
            
            // Page 6: Vision for Kutter
            pdf.addPage();
            this.addVisionSection(pdf);
            
            // Save
            pdf.save('Patrick_Kolb_Lebenslauf_Komplett.pdf');
            
            this.hideLoading();
            this.showSuccess();
            
        } catch (error) {
            console.error('CV generation failed:', error);
            this.hideLoading();
            this.showError();
        }
    }

    // Add cover page
    addCoverPage(pdf) {
        // Background gradient effect
        pdf.setFillColor(212, 0, 36);
        pdf.rect(0, 0, 210, 297, 'F');
        
        // White text
        pdf.setTextColor(255, 255, 255);
        
        // Title
        pdf.setFontSize(48);
        pdf.text('PATRICK KOLB', 105, 100, { align: 'center' });
        
        pdf.setFontSize(24);
        pdf.text('KI-Innovator & IT-Stratege', 105, 120, { align: 'center' });
        
        pdf.setFontSize(16);
        pdf.text('Bewerbung als KI-Manager', 105, 140, { align: 'center' });
        pdf.text('bei der Kutter GmbH', 105, 150, { align: 'center' });
        
        // Quote
        pdf.setFontSize(14);
        pdf.setFont('helvetica', 'italic');
        pdf.text('"Ich blicke nicht nur über den Tellerrand –', 105, 200, { align: 'center' });
        pdf.text('ich blicke ins Universum."', 105, 210, { align: 'center' });
        
        // Date
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(12);
        const date = new Date().toLocaleDateString('de-DE', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        pdf.text(date, 105, 270, { align: 'center' });
    }

    // Add personal information
    addPersonalInfo(pdf) {
        pdf.setTextColor(0, 0, 0);
        
        // Header
        this.addSectionHeader(pdf, 'Persönliche Daten', 20);
        
        // Info grid
        const info = [
            ['Name:', 'Patrick Kolb'],
            ['Position:', 'IT-Leiter bei Prinz GmbH & Co. KG'],
            ['Erfahrung:', '20+ Jahre Berufserfahrung'],
            ['Spezialgebiet:', 'IT-Strategie, Digitalisierung, KI-Innovation'],
            ['Telefon:', '+49 1520 9893729'],
            ['E-Mail:', 'Patrick.Kolb@gmx.de'],
            ['Wohnort:', 'Lindau, Bayern']
        ];
        
        let y = 40;
        pdf.setFontSize(12);
        
        info.forEach(([label, value]) => {
            pdf.setFont('helvetica', 'bold');
            pdf.text(label, 20, y);
            pdf.setFont('helvetica', 'normal');
            pdf.text(value, 60, y);
            y += 10;
        });
        
        // Summary
        this.addSectionHeader(pdf, 'Profil', y + 10);
        
        const summary = [
            'Vom Maurerhandwerk zur IT-Führung: Mein unkonventioneller Weg ist meine Stärke.',
            'Als IT-Leiter bei Prinz orchestriere ich die digitale Transformation mit einem',
            '12-köpfigen Team und Millionen-Budget. Parallel entwickle ich als Erfinder',
            'innovative Lösungen – vom Katzengrass-System bis zum Medizintechnik-Sensor.',
            '',
            'Meine Superkraft: Abstraktes Denken und die Fähigkeit, Verbindungen zu sehen,',
            'die anderen verborgen bleiben. Ich löse Probleme kreativ und denke weit über',
            'den Tellerrand hinaus – genau wie Kutter mit seinen Patenten.'
        ];
        
        y += 30;
        pdf.setFontSize(11);
        summary.forEach(line => {
            pdf.text(line, 20, y);
            y += 6;
        });
    }

    // Add career timeline
    addCareerTimeline(pdf) {
        this.addSectionHeader(pdf, 'Beruflicher Werdegang', 20);
        
        const timeline = [
            {
                period: 'Seit 01/2024',
                title: 'IT-Leiter (Gesamtverantwortung)',
                company: 'Prinz GmbH & Co. KG',
                tasks: [
                    '• Verantwortung für komplette IT-Strategie und Infrastruktur',
                    '• Führung eines 12-köpfigen Teams',
                    '• Budgetverantwortung im Millionenbereich',
                    '• Implementierung innovativer Digitalisierungslösungen'
                ]
            },
            {
                period: '2020 - 2023',
                title: 'Head of IT Client Services',
                company: 'Grass GmbH (Würth-Gruppe)',
                tasks: [
                    '• Führung eines globalen 25-köpfigen Teams',
                    '• Migration zu Microsoft 365 für 1.200+ Geräte',
                    '• 40% Reduktion der Ticketbearbeitungszeit durch Jira',
                    '• Implementierung von FortiEDR und Microsoft Intune'
                ]
            },
            {
                period: '2016 - 2019',
                title: 'IT System Engineer',
                company: 'Grass GmbH (Würth-Gruppe)',
                tasks: [
                    '• Systemadministration für 800+ Clients',
                    '• Entwicklung von Automatisierungslösungen',
                    '• PowerShell und Python Scripting',
                    '• Erste Berührungspunkte mit Prozessoptimierung'
                ]
            },
            {
                period: '2011 - 2016',
                title: 'Technischer Angestellter',
                company: 'Glaserei Nuber, Lindau',
                tasks: [
                    '• Übergang vom Handwerk zur Technik',
                    '• Erste digitale Schritte',
                    '• Verbindung von traditionellem Handwerk und Technologie'
                ]
            },
            {
                period: '1999 - 2003',
                title: 'Ausbildung zum Maurer',
                company: 'Fa. Dietrich, Lindau',
                tasks: [
                    '• Der wahre Anfang meiner Reise',
                    '• Fundament für spätere Karriere',
                    '• Praktische Erfahrung in der Baubranche',
                    '• Präzision und handwerkliches Geschick'
                ]
            },
            {
                period: '2003 - 2007',
                title: 'Fernmeldetechniker & IT-Systemelektroniker',
                company: 'Bundeswehr / DEKRA Akademie Augsburg',
                tasks: [
                    '• Nach dem Handwerk kam die Technik',
                    '• Fundierte technische Ausbildung',
                    '• Erste Führungserfahrungen',
                    '• Entwicklung von Disziplin und strukturiertem Denken'
                ]
            }
        ];
        
        let y = 40;
        timeline.forEach(job => {
            // Period and title
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(12);
            pdf.text(job.period, 20, y);
            pdf.text(job.title, 60, y);
            
            // Company
            pdf.setFont('helvetica', 'italic');
            pdf.setFontSize(11);
            pdf.text(job.company, 60, y + 6);
            
            // Tasks
            pdf.setFont('helvetica', 'normal');
            pdf.setFontSize(10);
            y += 12;
            job.tasks.forEach(task => {
                pdf.text(task, 60, y);
                y += 5;
            });
            
            y += 8;
        });
    }

    // Add skills matrix
    addSkillsMatrix(pdf) {
        this.addSectionHeader(pdf, 'Kompetenzen & Fähigkeiten', 20);
        
        // Technical Skills
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(14);
        pdf.text('Technische Kompetenzen', 20, 40);
        
        const techSkills = [
            { name: 'IT-Strategie & Führung', level: 95 },
            { name: 'Cloud & Infrastructure', level: 85 },
            { name: 'Prozessdigitalisierung', level: 90 },
            { name: 'KI/ML Konzepte', level: 75 },
            { name: 'Projektmanagement', level: 95 },
            { name: 'Datenanalyse & BI', level: 80 }
        ];
        
        let y = 50;
        techSkills.forEach(skill => {
            this.drawSkillBar(pdf, skill.name, skill.level, 20, y);
            y += 15;
        });
        
        // Soft Skills
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(14);
        pdf.text('Soft Skills', 20, y + 10);
        
        const softSkills = [
            { name: 'Strategisches Denken', level: 95 },
            { name: 'Kommunikation', level: 95 },
            { name: 'Change Management', level: 85 },
            { name: 'Problemlösung', level: 98 },
            { name: 'Teamführung', level: 90 }
        ];
        
        y += 20;
        softSkills.forEach(skill => {
            this.drawSkillBar(pdf, skill.name, skill.level, 20, y);
            y += 15;
        });
        
        // Special Skills
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(14);
        pdf.text('Besondere Stärken', 20, y + 10);
        
        y += 20;
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(11);
        const specialSkills = [
            '• Abstraktes Denken: Erkenne Zusammenhänge, die anderen verborgen bleiben',
            '• Visionäres Denken: Blicke über den Tellerrand ins Universum',
            '• Kreativ-chaotisches Denken: Aus Chaos entstehen meine besten Ideen',
            '• Brückenbauen: Verbinde Handwerk mit High-Tech',
            '• Innovationskraft: Löse Probleme, die andere nicht einmal sehen'
        ];
        
        specialSkills.forEach(skill => {
            pdf.text(skill, 20, y);
            y += 7;
        });
    }

    // Add innovations section
    addInnovations(pdf) {
        this.addSectionHeader(pdf, 'Innovationen & Projekte', 20);
        
        const innovations = [
            {
                title: 'Katzengrass-Innovation',
                year: '2019 - heute',
                description: 'Entwicklung eines neuartigen Katzengrass-Systems mit optimierter Wachstumsumgebung. Die Innovation liegt in der speziellen Umgebung, die gesünderes und langlebigeres Gras produziert.',
                impact: 'Zeigt meine Fähigkeit, alltägliche Probleme neu zu denken'
            },
            {
                title: 'Medizintechnik-Sensor',
                year: '2020',
                description: 'Entwicklung eines spezialisierten Sensors für ein Kind mit Mukoviszidose. Diese Innovation verbessert die Lebensqualität durch kontinuierliche Überwachung wichtiger Parameter.',
                impact: 'Soziale Innovation trifft auf technische Expertise'
            },
            {
                title: 'KI-gestützte Bewerbung',
                year: '2025',
                description: 'Diese Bewerbung selbst ist eine Innovation: Erstellt mit modernsten KI-Tools und MCP-Servern in drei einzigartigen, interaktiven Layouts.',
                impact: 'Praktischer Beweis meiner KI-Kompetenz'
            }
        ];
        
        let y = 40;
        innovations.forEach(innovation => {
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(12);
            pdf.text(innovation.title, 20, y);
            pdf.text(innovation.year, 160, y);
            
            pdf.setFont('helvetica', 'normal');
            pdf.setFontSize(10);
            
            // Word wrap description
            const lines = pdf.splitTextToSize(innovation.description, 170);
            y += 6;
            lines.forEach(line => {
                pdf.text(line, 20, y);
                y += 5;
            });
            
            pdf.setFont('helvetica', 'italic');
            pdf.text(`Impact: ${innovation.impact}`, 20, y);
            
            y += 12;
        });
    }

    // Add vision section
    addVisionSection(pdf) {
        this.addSectionHeader(pdf, 'Meine Vision für Kutter', 20);
        
        pdf.setFontSize(11);
        let y = 40;
        
        const visionPoints = [
            {
                title: '🤖 KI-gestützte Bestandsoptimierung',
                desc: 'Machine Learning für präzise Materialvorhersagen. 20% weniger Lagerkosten.'
            },
            {
                title: '🔧 Predictive Maintenance',
                desc: 'IoT-Sensoren + KI = 30% weniger ungeplante Stillstände.'
            },
            {
                title: '🎯 Intelligente Projekt-Orchestrierung',
                desc: 'KI koordiniert Ressourcen in Echtzeit. 40% schnellere Planung.'
            },
            {
                title: '👁️ Computer Vision Qualitätskontrolle',
                desc: 'Automatische Erkennung von Baumängeln. 35% weniger Nacharbeiten.'
            },
            {
                title: '🚀 KI-Innovations-Lab',
                desc: 'Internes Lab für kontinuierliche Innovation. Immer einen Schritt voraus.'
            }
        ];
        
        visionPoints.forEach(point => {
            pdf.setFont('helvetica', 'bold');
            pdf.text(point.title, 20, y);
            y += 6;
            
            pdf.setFont('helvetica', 'normal');
            const lines = pdf.splitTextToSize(point.desc, 170);
            lines.forEach(line => {
                pdf.text(line, 20, y);
                y += 5;
            });
            
            y += 8;
        });
        
        // Closing statement
        y += 10;
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(12);
        pdf.text('Mein Versprechen an Kutter:', 20, y);
        
        y += 8;
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(11);
        const promise = 'Ich erfülle nicht alle klassischen Anforderungen – aber ich bringe etwas viel Wertvolleres mit: Die Fähigkeit, über Grenzen hinaus zu denken, Unmögliches möglich zu machen und Kutter zur digitalen Speerspitze der Baubranche zu entwickeln. Lassen Sie uns gemeinsam Patente der Zukunft schreiben – nur eben digital.';
        
        const promiseLines = pdf.splitTextToSize(promise, 170);
        promiseLines.forEach(line => {
            pdf.text(line, 20, y);
            y += 6;
        });
    }

    // Helper: Add section header
    addSectionHeader(pdf, title, y) {
        pdf.setFillColor(212, 0, 36);
        pdf.rect(0, y - 10, 210, 20, 'F');
        
        pdf.setTextColor(255, 255, 255);
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(18);
        pdf.text(title, 105, y, { align: 'center' });
        
        pdf.setTextColor(0, 0, 0);
    }

    // Helper: Draw skill bar
    drawSkillBar(pdf, name, level, x, y) {
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(10);
        pdf.text(name, x, y);
        
        // Draw background bar
        pdf.setFillColor(230, 230, 230);
        pdf.rect(x + 80, y - 4, 100, 6, 'F');
        
        // Draw progress bar
        pdf.setFillColor(212, 0, 36);
        pdf.rect(x + 80, y - 4, level, 6, 'F');
        
        // Add percentage
        pdf.text(level + '%', x + 185, y);
    }

    // UI Helper Methods
    showLoading() {
        const loader = document.createElement('div');
        loader.id = 'pdf-loader';
        loader.innerHTML = `
            <style>
                #pdf-loader {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.8);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 10000;
                }
                .loader-content {
                    text-align: center;
                    color: white;
                }
                .spinner {
                    width: 50px;
                    height: 50px;
                    border: 3px solid rgba(255, 255, 255, 0.3);
                    border-top-color: #d40024;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin: 0 auto 20px;
                }
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
            </style>
            <div class="loader-content">
                <div class="spinner"></div>
                <p>PDF wird generiert...</p>
            </div>
        `;
        document.body.appendChild(loader);
    }

    hideLoading() {
        const loader = document.getElementById('pdf-loader');
        if (loader) loader.remove();
    }

    showSuccess() {
        const success = document.createElement('div');
        success.innerHTML = `
            <style>
                .pdf-success {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    background: #10B981;
                    color: white;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
                    animation: slideIn 0.5s ease-out;
                }
                @keyframes slideIn {
                    from {
                        transform: translateX(100%);
                    }
                }
            </style>
            <div class="pdf-success">
                ✓ PDF erfolgreich erstellt!
            </div>
        `;
        document.body.appendChild(success.firstElementChild);
        
        setTimeout(() => {
            document.querySelector('.pdf-success')?.remove();
        }, 3000);
    }

    showError() {
        const error = document.createElement('div');
        error.innerHTML = `
            <style>
                .pdf-error {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    background: #EF4444;
                    color: white;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
                }
            </style>
            <div class="pdf-error">
                ✗ PDF-Generierung fehlgeschlagen
            </div>
        `;
        document.body.appendChild(error.firstElementChild);
        
        setTimeout(() => {
            document.querySelector('.pdf-error')?.remove();
        }, 3000);
    }
}

// Initialize PDF generator
const pdfGenerator = new PDFGenerator();

// Global functions for easy access
window.downloadPDF = () => pdfGenerator.generateFromCurrentPage();
window.downloadFullCV = () => pdfGenerator.generateComprehensiveCV();

// Auto-attach to existing PDF buttons
document.addEventListener('DOMContentLoaded', () => {
    // Find all PDF download buttons and attach handlers
    document.querySelectorAll('[onclick*="downloadPDF"], [onclick*="PDF"]').forEach(button => {
        button.onclick = (e) => {
            e.preventDefault();
            pdfGenerator.generateFromCurrentPage();
        };
    });
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PDFGenerator;
}