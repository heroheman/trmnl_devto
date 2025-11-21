# TRMNL Dev.to Plugin

Ein TRMNL Plugin, das aktuelle Artikel von [dev.to](https://dev.to) anzeigt.

## Features

- Zeigt beliebte Artikel von dev.to an
- Filterung nach Tags (z.B. javascript, python, webdev)
- Filterung nach Status (all, fresh, rising)
- Anzeige der beliebtesten Artikel der letzten N Tage
- Unterstützt alle TRMNL Layouts (Full, Half Horizontal, Half Vertical, Quadrant)

## Settings

### Tag (Optional)
Filtert Artikel nach einem bestimmten Tag. Beispiele:
- `javascript`
- `python`
- `webdev`
- `tutorial`

### State (Optional)
Filtert Artikel nach ihrem Status:
- **All**: Alle Artikel (Standard)
- **Fresh**: Neue, frische Artikel
- **Rising**: Aufstrebende Artikel

### Top (Optional)
Zeigt die beliebtesten Artikel der letzten N Tage an (1-365 Tage).
Kann mit dem `tag` Parameter kombiniert werden.

Beispiel: `7` zeigt die beliebtesten Artikel der letzten Woche an.

## API Informationen

Das Plugin nutzt die offizielle [Forem/Dev.to API v1](https://developers.forem.com/api/v1):
- **Endpoint**: `GET https://dev.to/api/articles`
- **Keine API-Key erforderlich** für öffentliche Artikel
- **Rate Limiting**: Beachte die API Rate Limits

## Query Parameter

Die Settings werden automatisch als Query-Parameter an die API übergeben:
- `tag={dein-tag}` - Filtert nach Tag
- `state={fresh|rising|all}` - Filtert nach Status
- `top={anzahl-tage}` - Top Artikel der letzten N Tage

## Angezeigte Informationen

Für jeden Artikel wird angezeigt:
- **Titel**: Der vollständige Artikeltitel
- **Autor**: Name des Autors
- **Reactions**: Anzahl der Reactions (Likes, etc.)
- **Kommentare**: Anzahl der Kommentare
- **Lesezeit**: Geschätzte Lesezeit in Minuten
- **Beschreibung**: Kurze Zusammenfassung des Artikels

## Layout-Anpassungen

Das Plugin passt sich automatisch an verschiedene TRMNL Layouts an:
- **Full**: Zeigt bis zu 5 Artikel mit vollständigen Details
- **Half Horizontal**: Zeigt 3 Artikel kompakt
- **Half Vertical**: Zeigt 4 Artikel vertikal
- **Quadrant**: Zeigt 2 Artikel sehr kompakt

## Entwicklung

### Lokaler Test
```bash
./bin/trmnlp preview
```

### Plugin hochladen
```bash
./bin/trmnlp push
```

## Beispiel Konfigurationen

### Top JavaScript Artikel der letzten Woche
- Tag: `javascript`
- Top: `7`

### Frische Python Tutorials
- Tag: `python`
- State: `fresh`

### Allgemeine aufstrebende Artikel
- State: `rising`

## Links

- [Dev.to](https://dev.to)
- [Dev.to API Dokumentation](https://developers.forem.com/api/v1)
- [TRMNL Dokumentation](https://usetrmnl.com)
