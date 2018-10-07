<template>
  <div>
    <Snackbar></Snackbar>
    <Navbar></Navbar>
    
    <nuxt/>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar'
  import Snackbar from '../components/Snackbar'
  import Menu from '../components/Menu'

  export default {
    components: {
      Navbar,
      Snackbar,
      Menu
    }
  }
</script>

<style>
  html {
    font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  }
</style>