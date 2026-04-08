## Why

Readers benefit from knowing how long an article will take to read before committing to it. An estimated reading time badge helps users make informed decisions about which articles to read based on their available time, improving the overall user experience.

## What Changes

- Add a reusable Angular pipe that calculates estimated reading time based on word count (200 words per minute)
- Display reading time badge on article preview cards in both global and personal feeds
- Display reading time badge on the main article details view
- Ensure the badge is visually consistent and non-intrusive

## Capabilities

### New Capabilities

- `reading-time-calculation`: Calculate and display estimated reading time for articles based on word count with a 200 WPM reading speed

### Modified Capabilities

<!-- No existing capabilities are being modified -->

## Impact

- **Components Modified**:
  - Article preview component (template and potentially logic)
  - Article detail component (template and potentially logic)
- **New Files**:
  - Reading time pipe in `src/app/shared/pipes/`
- **User Experience**: Enhanced article browsing with time estimates
- **No Breaking Changes**: This is purely additive functionality
