# PhantomPvP Website

Public McPvP-style site for the **PhantomPvP** network (PhantomDuels plugin).

## Live demo (GitHub Pages)
https://supercoderq123a123g123i12.github.io/AdvancedDuels-Website/

## Features
- Top Players podium + home list
- Full leaderboard with kit tabs
- Player stats (W/L, KDR, streaks, skill %, match history)
- Client / Launcher advertising
- Limited-time **Phantom Beta Cloak** claim
- Live data from the plugin HTTP API (port 8080)

## Setup
1. Open the site (Pages URL or local `npx serve .`).
2. Footer → **Change** → set API to `http://YOUR_SERVER_IP:8080`.
3. Ensure the PhantomDuels plugin has `api.enabled: true`.

## Config
Edit `js/config.js`:
- `apiBase` — plugin API
- `client.downloadUrl` / `launcherUrl` — real download links
- `serverIP` — play address
