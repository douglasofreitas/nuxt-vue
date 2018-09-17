<template>
  <div v-if="show">
    {{message}}
    <button v-on:click="show = false" >Close</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      message: 'Mensagem com sucesso'
    }
  },
  created: function () {
    this.$store.watch(state => state.snackbar.message, () => {
      const msg = this.$store.state.snackbar.message
      if (msg !== '') {
        this.show = true
        this.message = this.$store.state.snackbar.message 
        this.$store.commit('snackbar/setMessage', '')
      }
    })
  }
}
</script>