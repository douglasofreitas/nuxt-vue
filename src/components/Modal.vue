<template>
  <div class="modal is-active" v-if="show">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Modal title</p>
        <button class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <!-- Content ... -->
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" v-on:click="clearNotification" >Save changes</button>
        <button class="button">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      message: ''
    }
  },
  methods: {
    async clearNotification() {
      try {
        const message = {
          message: ''
        }
        this.$store.commit('resetNotificationMessage')
        this.show = false;
      } catch (e) {
        console.log(e);
      }
    }
  },
  created: function () {
    this.$store.watch(state => state.notification.message, () => {
      const msg = this.$store.state.notification.message
      if (msg !== '') {
        this.show = true
        this.message = this.$store.state.notification.message 
      }
    })
    
  }
}
</script>