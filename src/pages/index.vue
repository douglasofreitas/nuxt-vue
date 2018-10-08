<template>
  <div class="section">
    <div class="container has-text-centered">
      <h1 class="title">Hi, I'm Developer</h1>
      <h2 class="subtitle">a Software Developer.</h2>
      <button @click="setNewMessage">COUNTER: {{ this.$store.state.snackbar.counter }}</button>
    </div>
  </div>
</template>

<style lang="scss">
.title {
  color: $primary;
}
</style>

<script>
import { mapMutations } from 'vuex'

export default {
  data () {
    return { story: { content: {} } }
  },
  methods: {
    setNewMessage: function (snack) {
      this.setMessage('Message test')
      // this.$router.push('/')
    },
    ...mapMutations({
      setMessage: 'snackbar/setMessage'
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