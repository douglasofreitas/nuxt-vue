<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-start">
        <button @click="toggleMenu" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarMain">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      
      <a class="navbar-item" href="/">MySite</a>
      <nuxt-link class="navbar-item" to="/about">About</nuxt-link>
      <nuxt-link class="navbar-item" to="/about">About</nuxt-link>
      <nuxt-link class="navbar-item" to="/about">About</nuxt-link>
      
    </div>
    <div id="navbarMain" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item has-dropdown is-hoverable" v-if="isAuthenticated">
          <a class="navbar-link">
            {{ loggedInUser.username }}
          </a>
          <div class="navbar-dropdown">
            <nuxt-link class="navbar-item" to="/profile">My Profile</nuxt-link>
            <hr class="navbar-divider">
            <a class="navbar-item">Logout</a>
          </div>
        </div>
        <nuxt-link class="navbar-item" to="/register" v-if="!isAuthenticated">Register</nuxt-link>
        <nuxt-link class="navbar-item" to="/login" v-if="!isAuthenticated" >Log In</nuxt-link>
        <a class="navbar-item" @click="logout" v-if="isAuthenticated">Logout</a>
        <nuxt-link class="navbar-item" to="/">Home</nuxt-link>
        <nuxt-link class="navbar-item" to="/about">About</nuxt-link>
        <nuxt-link class="navbar-item" to="/projects">Projects</nuxt-link>
        <nuxt-link class="navbar-item" to="/contact">Contact</nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import $ from 'jquery'

export default {
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  methods: {
    async logout() {
      await this.$auth.logout();
    },

    toggleMenu() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
    }
  },
}
</script>