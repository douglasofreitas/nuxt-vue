<template>
  <section class="section">
    <div class="container">
      <h2 class="title">My Profile</h2>
      <div class="content">
        <p>
          <strong>Username:</strong>
          {{ loggedInUser.username }}
        </p>
        <p>
          <strong>Email:</strong>
          {{ loggedInUser.email }}
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
</style>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: 'auth',
  computed: {
    ...mapGetters(['loggedInUser'])
  },
  head () {
    let user = this.$store.getters.loggedInUser;
    
    return {
      title: `${user.username} @(${user.email}) - Nuxt.js`,
      meta: [{
        hid: `iOSUrl`,
        property: 'al:ios:url',
        content: `myapp://user?screen_name=${user.username}`
      },
      {
        hid: `description`,
        name: 'description',
        content: `${user.username}'s public profile at Nuxt.js`
      }]
    }
  }
}
</script>