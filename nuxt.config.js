export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '150th 開成祭',
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/icon.svg' },
    ],
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: '2021年9月18日（土）・19日（日）に開催される創立150周年記念開成祭公式のホームページです。（運営：150th開成学園文化祭準備委員会広報係）' },
      { name: "google-site-verification", content: "xptuoTgRysjAyENPya31PfgTQiGoX7A_-srp99OAemI" }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: "~assets/css/style.scss" }],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    ['@nuxtjs/google-fonts',
      {
        families: {
          'Shippori+Mincho': [400, 500, 600, 700, 800],
          'Noto+Serif+JP': true,
          'Material+Icons+Outlined': true,
        },
        display: "swap"
      }
    ]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'bootstrap-vue/nuxt',
    'cookie-universal-nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ja',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  watchers: {
    webpack: {
      poll: true
    }
  }
}
