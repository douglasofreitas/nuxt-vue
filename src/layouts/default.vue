<template>
  <div id="app">
    <Snackbar></Snackbar>
    <Navbar></Navbar>
    
    <section class="main-content columns is-fullheight">
      <Menu></Menu>
      <div class="container column is-10">
        <nuxt/>
      </div>      
    </section>
    
    <Footer></Footer>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar'
  import Snackbar from '../components/Snackbar'
  import Menu from '../components/Menu'
  import Footer from '../components/Footer'

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