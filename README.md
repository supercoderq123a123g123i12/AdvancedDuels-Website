# AdvancedDuels Website

Public test site for the McPvP-style AdvancedDuels website + plugin API.

## Live URL (GitHub Pages)

1. Open **Settings → Pages** on this repo
2. **Source:** Deploy from a branch
3. Branch: **main** / folder: **/ (root)** → Save
4. After ~1 minute open:

**https://supercoderq123a123g123i12.github.io/AdvancedDuels-Website/**

## What this page does

- **Refresh / Test API** — pings `/api/status`, loads global stats + top 10 leaderboard
- **Save API base** — set `http://YOUR_SERVER_IP:8080` (plugin must be running with `api.enabled: true`)
- **Play Now** — copies the server IP you set

## Connect your Minecraft server

1. Run AdvancedDuels with API on port **8080** (open firewall)
2. On the site, set API base to `http://YOUR_PUBLIC_IP:8080`
3. Click **Save & ping**

CORS is already enabled on the plugin (`Access-Control-Allow-Origin: *`).

## Full multi-page website

The complete site (login, tiers, client page, updates, etc.) lives in your project at:

`AdvancedDuels/website/` (`index.html`, `css/`, `js/`)

To host the full UI on Pages later, push those files into this repo (or clone and copy them in).

## Repo

https://github.com/supercoderq123a123g123i12/AdvancedDuels-Website
