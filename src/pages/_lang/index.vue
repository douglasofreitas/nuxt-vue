<template>
  <div class="section">
    <div class="container has-text-centered">
      <h1 class="title">Hi, this is Nuxt website</h1>
      <h2 class="subtitle">Use SEO good pratices and differents resources .</h2>
      <button @click="setNewMessage">COUNTER: {{ this.$store.state.snackbar.counter }}</button>
    </div>
  </div>
</template>

<style lang="scss">
</style>

<script>
import { mapMutations } from 'vuex'

export default {
  data () {
    return { story: { content: {} } }
  },
  methods: {
    setNewMessage: function (snack) {
      this.setSnackbarMessage('Message test')
      // this.$router.push('/')
    },
    ...mapMutations({
      setSnackbarMessage: 'setSnackbarMessage'
    })
  },
  asyncData (context) {
    
  },
  head () {
    return {
      title: 'Index - Nuxt.js',
      meta: [
        { hid: 'description', name: 'description', content: 'Index page Nuxt.js ' }
      ]
    }
  }
}
</script>