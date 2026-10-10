# AdvancedDuels Website

McPvP-style competitive PvP website (leaderboards, live matches, client page, login, one-click updates).

## Test this site

### Option A — GitHub Pages
1. Repo **Settings → Pages**
2. Source: **Deploy from a branch** → `main` → `/ (root)`
3. Open `https://supercoderq123a123g123i12.github.io/AdvancedDuels-Website/`

### Option B — Local
```bash
npx serve .
# or: python3 -m http.server 5500
```

### Connect to your plugin API
1. Run the AdvancedDuels plugin with `api.enabled: true` (default port **8080**).
2. On the site footer, click **Change** next to API and set e.g. `http://YOUR_SERVER_IP:8080`.
3. Or edit `js/config.js` → `apiBase`.

**CORS:** the plugin API already sends `Access-Control-Allow-Origin: *`.

### Login flow
1. In-game: `/register <password>`
2. Website: **Log in** with your Minecraft name + password
3. Confirm with `/confirmlogin` while online (if enabled)

### Update button
**Update** in the nav refreshes all live data and shows Plugin / Client / Website / Launcher versions from `/api/updates`.
