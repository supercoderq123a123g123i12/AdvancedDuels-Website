/**
 * AdvancedDuels Website — McPvP-style config
 * Point apiBase at your plugin API (default port 8080).
 */
window.AD_CONFIG = {
  apiBase: localStorage.getItem('ad_api_base') || 'http://127.0.0.1:8080',
  apiKey: localStorage.getItem('ad_api_key') || '',
  serverIP: localStorage.getItem('ad_server_ip') || 'play.yourserver.com',
  siteName: 'AdvancedDuels',
  refreshInterval: 5000,
  /** Fallback versions if /api/updates is offline */
  versions: {
    website: '1.0.0',
    client: '1.0.0',
    plugin: '1.0.0',
    launcher: '1.0.0'
  },

  regions: [
    { name: 'North America', servers: 1, flag: '🇺🇸' },
    { name: 'Europe', servers: 1, flag: '🇪🇺' },
    { name: 'Latin America', servers: 0, flag: '🇧🇷' },
    { name: 'Asia', servers: 0, flag: '🇯🇵' },
    { name: 'Oceania', servers: 0, flag: '🇦🇺' }
  ],

  news: [
    {
      tags: ['News', 'Launch'],
      title: 'Website Launch',
      body: 'The AdvancedDuels website is live — leaderboards, live matches, and player profiles connected directly to the server.',
      date: '2026-09-30'
    },
    {
      tags: ['Kits', 'Gameplay'],
      title: 'Kit & Ranked System',
      body: 'Ranked queues, BO3/BO5 series, parties, FFA, and tier rankings (LT → HT3) are fully online.',
      date: '2026-09-28'
    },
    {
      tags: ['Update'],
      title: 'Spectating & Arena Regen',
      body: 'Spectate live duels and arenas auto-clear entities between rounds.',
      date: '2026-09-28'
    }
  ],

  servers: [
    {
      name: 'AdvancedDuels',
      tagline: 'Official competitive hub — Duels · FFA · Ranked',
      ip: 'play.yourserver.com',
      version: '1.21+',
      region: 'NA/EU'
    }
  ],

  client: {
    enabled: true,
    downloadUrl: '#',
    discordUrl: '#',
    version: '1.21+',
    tagline: 'Fabric mod for competitive crystal PvP',
    modules: [
      {
        category: 'HUD',
        items: [
          { name: 'Keystrokes', desc: 'Key and click display' },
          { name: 'Totem Counter', desc: 'Totem pops per player' },
          { name: 'Armor HUD', desc: 'Armor durability display' },
          { name: 'GUI Tweaks', desc: 'Move, hide and scale HUD elements' },
          { name: 'Item Highlighter', desc: 'Outline chosen items in inventories and the hotbar' },
          { name: 'Potion HUD', desc: 'Active effect timers' }
        ]
      },
      {
        category: 'Player and misc',
        items: [
          { name: 'Optimizers', desc: 'Client-side crystal and anchor prediction' },
          { name: 'Zoom', desc: 'Hold key to zoom' },
          { name: 'Anti Alt', desc: 'Spoof your name and skin on your screen only' },
          { name: 'Screenshot', desc: 'Capture, copy and share' },
          { name: 'Sound Controller', desc: 'Retune or silence any sound in the game' },
          { name: 'Discord RPC', desc: 'Show what you are doing on Discord' }
        ]
      },
      {
        category: 'PvP',
        items: [
          { name: 'Shield Tweaks', desc: 'Shield state and colors' },
          { name: 'Crosshair Addons', desc: 'Icons around the crosshair' },
          { name: 'Crosshair', desc: 'Draw your own crosshair' },
          { name: 'Damage Tint', desc: 'Recolor the hurt flash' },
          { name: 'Crossbow Tweaks', desc: 'Show loaded arrow type' }
        ]
      },
      {
        category: 'Visuals',
        items: [
          { name: 'TierTagger', desc: 'PvP tiers on nametags' },
          { name: 'Custom End Crystals', desc: 'Restyle the crystal, part by part' },
          { name: 'Hitboxes', desc: 'Boxes on players, crystals and projectiles' },
          { name: 'Pop Chams', desc: 'A ghost where a player popped a totem' },
          { name: 'Nostalgia', desc: 'Crystals, lighting and glint as they used to look' },
          { name: 'Renders', desc: 'Hand shader and glowing players' },
          { name: 'Nametags', desc: 'Custom nametag display' }
        ]
      }
    ],
    features: [
      { title: 'One menu', desc: 'Right Shift opens modules, wardrobe and friends. Search finds any setting by name.' },
      { title: 'HUD editor', desc: 'Drag HUD elements, snap to edges, scale-independent.' },
      { title: 'Profiles', desc: 'Share your full setup as a six-character code.' },
      { title: 'Crystal PvP ready', desc: 'Prediction, hitboxes, pop chams and totem counters.' }
    ]
  }
};
