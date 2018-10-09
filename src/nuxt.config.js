module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-vue',
    titleTemplate: '%s - Main Name!',
    htmlAttrs: {
      lang: 'en',
      amp: undefined
    },
    meta: [
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Code+Pro:400,700'}
    ],
    css: [
      //{ src: 'bulma/bulma.sass', lang: 'sass' },
      // { src: './assets/scss/main.scss', lang: 'scss' },
      { src: 'font-awesome/scss/font-awesome.scss', lang: 'scss' }
    ],
    script: [
      //{ src: 'https://use.fontawesome.com/releases/v5.1.0/js/all.js' },
      //{ src: 'node_modules/jquery/dist/jquery.min.js' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#ff6969' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['vue-i18n'] // webpack vue-i18n.bundle.js
  },

  plugins: ['~/plugins/i18n.js'], // webpack plugin

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    ['nuxt-sass-resources-loader', './assets/scss/main.scss']
  ],

  serverMiddleware: [
    '~/servermiddleware/seo.js'
  ],

  axios: {
    baseURL: 'http://127.0.0.1:3333/api'
  },
  
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'login', method: 'post', propertyName: 'data.token' },
          user: { url: 'me', method: 'get', propertyName: 'data' },
          logout: false
        }
      }
    }
  },

  router: {
    extendRoutes (routes, resolve) {
      //routes.push({
      //  name: 'about-pt',
      //  path: '/sobre',
      //  component: resolve(__dirname, 'pages/about.vue')
      //})
    },
    middleware: 'i18n'
  }
}

