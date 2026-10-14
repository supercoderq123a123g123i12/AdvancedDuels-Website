/**
 * PhantomPvP public website config
 * Point apiBase at your plugin API (default port 8080).
 */
window.PP_CONFIG = {
  apiBase: localStorage.getItem('pp_api_base') || localStorage.getItem('ad_api_base') || 'http://127.0.0.1:8080',
  apiKey: localStorage.getItem('pp_api_key') || '',
  serverIP: localStorage.getItem('pp_server_ip') || 'play.phantompvp.com',
  siteName: 'PhantomPvP',
  siteUrl: 'phantompvp.com',
  refreshInterval: 5000,

  versions: {
    website: '1.0.0',
    client: '1.0.0',
    plugin: '1.0.0',
    launcher: '1.0.0'
  },

  client: {
    downloadUrl: '#',
    launcherUrl: '#',
    discordUrl: '#',
    platforms: [
      { id: 'windows', label: 'Download for Windows', icon: '💻' },
      { id: 'macos', label: 'Download for macOS', icon: '🍎' },
      { id: 'linux', label: 'Download for Linux', icon: '🐧' }
    ],
    features: [
      {
        title: 'Instant Crystals',
        body: 'The client works together with the server to make placing and breaking end crystals faster and more responsive than ever.'
      },
      {
        title: 'Latency Reduction',
        body: 'Built-in Client-Server tick alignment reduces your effective latency by ~25ms to any server. Feel the difference immediately.'
      },
      {
        title: 'More Trust',
        body: 'Get a Verified checkmark next to your name in-game so everyone can see you are a verified PhantomPvP player.'
      },
      {
        title: 'Beta Access',
        body: 'Automatic whitelist for Phantom Client players. Warm up before the tournaments start flowing.'
      }
    ]
  },

  cloak: {
    enabled: true,
    title: 'Beta Release Cloak',
    badge: 'LIMITED TIME',
    body: 'Get a free, limited time, PhantomPvP cloak to celebrate Beta! Redeem it in the launcher before it\'s gone.',
    cta: 'Claim Phantom Cloak',
    image: 'assets/cloak-preview.svg',
    texture: 'assets/cloak-phantom.svg'
  },

  regions: [
    { name: 'North America', servers: 1, flag: '🇺🇸' },
    { name: 'Europe', servers: 1, flag: '🇪🇺' },
    { name: 'Latin America', servers: 0, flag: '🇧🇷' },
    { name: 'Asia', servers: 0, flag: '🇯🇵' },
    { name: 'Oceania', servers: 0, flag: '🇦🇺' }
  ]
};
