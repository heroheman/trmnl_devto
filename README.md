# TRMNL Dev.to Plugin

A TRMNL plugin that displays current articles from [dev.to](https://dev.to).

## Features

- Displays popular articles from dev.to
- Filter by tags (e.g., javascript, python, webdev)
- Filter by state (all, fresh, rising, top)
- Show most popular articles from different time periods
- Supports all TRMNL layouts (Full, Half Horizontal, Half Vertical, Quadrant)

## Settings

### Tag (Optional)
Filter articles by a specific tag. Examples:
- `javascript`
- `python`
- `webdev`
- `tutorial`

### Filter (Optional)
Filter articles by state or popularity:
- **Fresh**: New, fresh articles (default)
- **Rising**: Trending articles
- **All**: All articles
- **Top (Most Popular)**: Most popular articles from a selected time period

### Time Period (Conditional)
Only visible when "Top (Most Popular)" is selected as filter. Choose from:
- **Today**: Most popular articles from today
- **Last 7 Days**: Most popular articles from the last week
- **Last 30 Days**: Most popular articles from the last month
- **Last 6 Months**: Most popular articles from the last 6 months
- **Last Year**: Most popular articles from the last year
- **All Time**: Most popular articles of all time

Can be combined with the `tag` parameter.

### Show Thumbnails (Optional)
Display article cover images as thumbnails. Only applies to Full and Half Horizontal layouts.

## API Information

The plugin uses the official [Forem/Dev.to API v1](https://developers.forem.com/api/v1):
- **Endpoint**: `GET https://dev.to/api/articles`
- **No API key required** for public articles
- **Rate Limiting**: Please respect API rate limits

## Query Parameters

Settings are automatically passed as query parameters to the API:
- `tag={your-tag}` - Filter by tag
- `state={fresh|rising|all}` - Filter by state
- `top={number-of-days}` - Top articles from the last N days

## Displayed Information

For each article, the following is displayed:
- **Title**: The full article title
- **Author**: Author name (Full layout only)
- **Published Date**: Human-readable publication date
- **Tags**: Article tags
- **Reading Time**: Estimated reading time in minutes (Full layout only)
- **Description**: Short summary of the article (when available)
- **Thumbnail**: Cover image (Full and Half Horizontal layouts when enabled)

## Layout Adaptations

The plugin automatically adapts to different TRMNL layouts:
- **Full**: Shows multiple articles with full details and optional thumbnails
- **Half Horizontal**: Shows articles with optional thumbnails
- **Half Vertical**: Shows articles without thumbnails
- **Quadrant**: Shows articles in compact view without thumbnails

## Development

### Local Testing
```bash
./bin/trmnlp preview
```

### Upload Plugin
```bash
./bin/trmnlp push
```

## Example Configurations

### Top JavaScript Articles from Last Week
- Tag: `javascript`
- Filter: `Top (Most Popular)`
- Time Period: `Last 7 Days`

### Fresh Python Tutorials
- Tag: `python`
- Filter: `Fresh`

### Trending Articles
- Filter: `Rising`

### All Time Most Popular TypeScript Content
- Tag: `typescript`
- Filter: `Top (Most Popular)`
- Time Period: `All Time`

## Links

- [Dev.to](https://dev.to)
- [Dev.to API Documentation](https://developers.forem.com/api/v1)
- [TRMNL Documentation](https://usetrmnl.com)
