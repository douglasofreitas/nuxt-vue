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
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.0/css/bulma.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Code+Pro:400,700'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
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
    }
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
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
      routes.push({
        name: 'about-pt',
        path: '/sobre',
        component: resolve(__dirname, 'pages/about.vue')
      })
    }
  }
}
