<template>
  <section class="section is-large">
    <div class="container has-text-centered">
      <h1 class="title">Hi, I'm Chimezie Enyinnaya</h1>
      <h2 class="subtitle">a Software Developer based in Lagos, Nigeria.</h2>
      <button @click="setNewMessage">COUNTER: {{ this.$store.state.snackbar.counter }}</button>
    </div>
  </section>
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