import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    image: {
      url: '',
      width: 0,
      height: 0,
    },
    chosenColor: '#ffffff',
    colors: [],
  },
  mutations: {
    addImage(state, image) {
      state.image = image
    },
    deleteImage(state) {
      state.image = {
        url: '',
        width: 0,
        height: 0,
      }
    },
    chooseColor(state, color) {
      state.chosenColor = color
    }
  },
  actions: {
  },
  modules: {
  }
})
