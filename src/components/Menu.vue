<template>
  <aside class="column is-2 is-narrow-mobile is-fullheight section is-hidden-touch">
    <p class="menu-label is-hidden-touch">Hi user</p>
    <ul class="menu-list">
      <li>
        <a href="#" class="">
          <span class="icon"><i class="fa fa-home"></i></span> Home
        </a>
      </li>
      <li>
        <a href="#" class="is-active">
          <span class="icon"><i class="fa fa-table"></i></span> Links
        </a>

      </li>
      <li>
        <a href="#" class="">
          <span class="icon"><i class="fa fa-info"></i></span> About
        </a>
      </li>
    </ul>
  </aside>
</template>

<script>
import $ from 'jquery'

export default {
  data () {
    return {
      isAuthenticated: this.$store.state.auth.loggedIn,
      userName: this.$store.state.auth.loggedIn ? this.$store.state.auth.user.first_name : this.$i18n.t('general.guest')
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout();
    },
  },
}
</script>