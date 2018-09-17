<template>
  <section class="section is-large">
    <div class="container has-text-centered">
      <h1 class="title">Hi, I'm Chimezie Enyinnaya</h1>
      <h2 class="subtitle">a Software Developer based in Lagos, Nigeria.</h2>
      <button @click="$store.commit('increment')">{{ $store.state.counter }}</button>
    </div>
  </section>
</template>

<script>

export default {
  data () {
    return { story: { content: {} } }
  },
  asyncData (context) {
    
  }
}
</script>