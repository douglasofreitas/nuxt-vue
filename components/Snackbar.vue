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
  }
}
</script>