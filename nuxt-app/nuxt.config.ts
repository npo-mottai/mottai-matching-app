import * as devServiceAccountKey from './confidential/dev_firebase_service_key.json'
import * as prodServiceAccountKey from './confidential/prod_firebase_service_key.json'

const devFirebaseServiceKey = devServiceAccountKey
const prodFirebaseServiceKey = prodServiceAccountKey

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'mottai-matching-app',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt-hero-icons/outline/nuxt',
    '@nuxt-hero-icons/solid/nuxt',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://firebase.nuxtjs.org/guide/getting-started
    '@nuxtjs/firebase',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // https://firebase.nuxtjs.org/guide/options/#config
  firebase: {
    config: {
      dev: devFirebaseServiceKey,
      prod: prodFirebaseServiceKey,
    },
    customEnv: true,
    services: {
      firestore: true,
      functions: true,
      storage: true,
      analytics: true,
    },
    onFirebaseHosting: true,
  },

  env: {
    FIRE_ENV: process.env.FIRE_ENV,
  },
}
