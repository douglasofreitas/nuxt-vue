export const state = () => ({
  counter: 0,
  message: '',
})

export const mutations = {
  setMessage (state, message) {
    state.message = message
    state.counter++
  }
}