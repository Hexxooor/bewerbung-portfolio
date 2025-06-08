# Elestio Deployment Guide

## Mehrere Services auf einer Maschine mit Elestio

### Option 1: Docker Compose auf Elestio (Empfohlen)

#### Schritt 1: Vorbereitung
1. Stellen Sie sicher, dass alle Dateien in Ihrem GitHub Repository sind
2. Die folgenden Dateien müssen vorhanden sein:
   - `docker-compose.yml`
   - `Dockerfile`
   - `nginx.conf`
   - `.dockerignore`

#### Schritt 2: Elestio Setup

1. **Login bei Elestio**
   - Gehen Sie zu [elest.io](https://elest.io)
   - Melden Sie sich an

2. **Neues Projekt erstellen**
   - Click "Create Service"
   - Wählen Sie "Docker Compose"
   - Oder wählen Sie "Custom Docker"

3. **Git Repository verbinden**
   - Wählen Sie "Deploy from Git"
   - Verbinden Sie Ihr GitHub Repository
   - Wählen Sie den Branch (main)

4. **Umgebungsvariablen setzen**
   ```
   ANTHROPIC_API_KEY=your_api_key_here
   ```

5. **Service Konfiguration**
   - Service Name: `patrick-bewerbung`
   - Region: Wählen Sie eine nahe Region (z.B. Frankfurt)
   - Plan: Start mit "Tiny" ($7/Monat)

### Option 2: Mehrere Separate Services

Wenn Sie verschiedene Services unabhängig verwalten möchten:

#### Service 1: Haupt-Bewerbungsseite
1. Create Service > Node.js
2. Repository: Ihr GitHub Repo
3. Port: 3000
4. Environment: `ANTHROPIC_API_KEY`

#### Service 2: Zusätzlicher Service (z.B. Analytics)
1. Create Service > Wählen Sie den Service-Typ
2. Konfigurieren Sie entsprechend

#### Verbindung der Services:
- Nutzen Sie Elestio's internes Netzwerk
- Services können sich über Service-Namen erreichen

### Option 3: Single VM mit mehreren Containern

1. **Erstellen Sie eine "Docker" Maschine**
   - Service Type: "Docker"
   - Dies gibt Ihnen vollen Zugriff auf Docker

2. **SSH Zugang einrichten**
   - Elestio stellt SSH Credentials bereit

3. **Manuelles Deployment**
   ```bash
   # SSH in die Maschine
   ssh user@your-elestio-ip

   # Clone Repository
   git clone https://github.com/Hexxooor/bewerbung-portfolio.git
   cd bewerbung-portfolio

   # Create .env file
   echo "ANTHROPIC_API_KEY=your_key" > .env

   # Start services
   docker-compose up -d
   ```

## Nginx Reverse Proxy Setup

Für mehrere Services unter einer Domain:

```nginx
# Service 1: Hauptseite
location / {
    proxy_pass http://bewerbung-web:3000;
}

# Service 2: API oder andere Services
location /api2 {
    proxy_pass http://other-service:4000;
}

# Service 3: Analytics
location /analytics {
    proxy_pass http://analytics:8000;
}
```

## SSL/HTTPS Setup

Elestio bietet automatisches SSL:
1. Gehen Sie zu Service Settings
2. Aktivieren Sie "Enable HTTPS"
3. Fügen Sie Ihre Domain hinzu
4. Elestio generiert automatisch Let's Encrypt Zertifikate

## Monitoring & Logs

1. **Elestio Dashboard**
   - Real-time Metrics
   - CPU/RAM Usage
   - Network Traffic

2. **Logs**
   ```bash
   # Über Elestio UI oder SSH:
   docker-compose logs -f bewerbung-web
   ```

## Skalierung

### Horizontal (mehrere Instanzen):
```yaml
services:
  bewerbung-web:
    deploy:
      replicas: 3
```

### Vertikal (mehr Ressourcen):
- Upgrade Elestio Plan in den Settings

## Backup Strategy

1. **Automatische Backups**
   - Elestio bietet tägliche Backups
   - In Service Settings aktivieren

2. **Manuelle Backups**
   ```bash
   docker-compose exec bewerbung-web tar -czf backup.tar.gz /app
   ```

## Kosten-Optimierung

1. **Single Machine Approach**
   - Tiny: $7/mo (1 vCPU, 1GB RAM) - für Start ausreichend
   - Small: $19/mo (2 vCPU, 2GB RAM) - für mehrere Services

2. **Resource Sharing**
   - Nutzen Sie docker-compose für mehrere Services
   - Teilen Sie Ressourcen effizient

## Troubleshooting

### Service startet nicht:
```bash
docker-compose logs bewerbung-web
docker-compose ps
```

### Port Konflikte:
- Ändern Sie Ports in docker-compose.yml
- Nutzen Sie Nginx als Reverse Proxy

### Memory Issues:
- Fügen Sie Memory Limits hinzu:
```yaml
services:
  bewerbung-web:
    mem_limit: 512m
```

## Support

- Elestio Support: support@elest.io
- Community Forum: community.elest.io
- Patrick Kolb: Patrick.Kolb@gmx.de