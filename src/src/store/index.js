import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

const createStore = () => {
  return new Vuex.Store({
    state: {
      locales: ['en', 'es', 'pt'],
      locale: 'pt',
      snackbar: {
        counter: 0,
        message: ''
      },
      notification: {
        type: '',
        message: '',
        actionOk: ''
      },
      user: {},
      userAccess: {
        email: '',
        error: ''
      }
    },
    plugins: [createPersistedState({
      storage: {
        getItem: key => Cookies.getJSON(key),
        // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
        setItem: (key, value) =>
          Cookies.set(key, value, { expires: 3 }),
        removeItem: key => Cookies.remove(key),
      },
    })],
    mutations: {
      //General
      setLang (state, locale) {
        if (state.locales.indexOf(locale) !== -1) {
          state.locale = locale
        }
      },
      setSnackbarMessage (state, message) {
        state.snackbar.message = message
      },
      setNotificationMessage (state, obj) {
        state.notification.message = obj.message
        state.notification.type = obj.type || ''
        state.notification.actionOk = obj.actionOk || ''
      },
      resetNotificationMessage (state) {
        state.notification.message = ''
        state.notification.type = ''
        state.notification.actionOk = ''
      },

      //Sign
      setUserAccessMail (state, email) {
        state.userAccess.email = email
      }


    },
    actions: {
      async nuxtServerInit ({commit}, {store, isClient, isServer, route, params}) {
        
      },
      async resetPassword ({commit}, email) {
        console.log('resetPassword init: ', email)
        let {data} = await this.$axios.post(`api_user/reset_password`, {
          email
        })
        console.log('resetPassword: ', data)
        commit('setUserAccessMail', email)
        return data
      }
    }
  })
}

export default createStore
