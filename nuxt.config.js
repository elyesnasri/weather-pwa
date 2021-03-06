import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        'http-equiv': 'origin-trial',
        content:
          'AoSf+6UJeKykwgPsRo0fusjoqlCoj+J/2CROiTadTkiSp1QTrDPY2HtBo0IOmBMjIP1+j8mcHwJmA7StEqnxgw8AAABxeyJvcmlnaW4iOiJodHRwczovL2ZlcnZlbnQtaG9wcGVyLWM0NTg1ZS5uZXRsaWZ5LmNvbTo0NDMiLCJmZWF0dXJlIjoiUGVyaW9kaWNCYWNrZ3JvdW5kU3luYyIsImV4cGlyeSI6MTU3Nzg4MzAxNH0='
      },
      // for localhost
      {
        'http-equiv': 'origin-trial',
        content:
          'Av1jLTKx8gduIdfHLQKuigWSvmcmYY4XCZz5elvSfakHCzuhrkIZQNMPadorKI3OKlPQxal7ihcyhHIgjrRFsAIAAABZeyJvcmlnaW4iOiJodHRwOi8vbG9jYWxob3N0OjMwMDAiLCJmZWF0dXJlIjoiUGVyaW9kaWNCYWNrZ3JvdW5kU3luYyIsImV4cGlyeSI6MTU3Nzg4NzU1MX0='
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // {
    //   src: '~/plugins/sw.js',
    //   ssr: false
    // }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/vuetify'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/onesignal',
    '@nuxtjs/pwa',
    '@nuxtjs/localforage'
  ],

  // oneSignal Options
  oneSignal: {
    init: {
      appId: 'ca77edcc-bef0-4d33-95c6-32543caeaf6a',
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
        disable: true
      }
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  pwa: {
    manifest: {
      name: 'Progressive weather app',
      lang: 'en',
      display: 'standalone',
      orientation: 'portrait'
    }
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  workbox: {
    importScripts: ['custom-sw.js'],
    cachingExtensions: '@/plugins/workbox-range-request.js'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
