

# PWA

## Install criteria
- The web app is not already installed
- The user needs to have clicked or tapped on the page at least once
  - The user needs to have spent at least 30 seconds viewing the page
- App served over HTTPS
- Includes a web app manifest that includes:
  - short_name or name
  - icons - must include a 192px and a 512px icon
  - start_url
  - display - must be one of fullscreen, standalone, or minimal-ui
  - prefer_related_applications must ***Not*** be present, or be false

Registers a service worker with a fetch handler

``` html
<link rel="manifest" crossorigin="use-credentials" href="manifest.json" />
<link rel="icon" href="favicon.svg">
```