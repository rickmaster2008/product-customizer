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
    step: 0,
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
    },
    moveToProductInfo(state) {
      state.step = 1;
    },
    moveToShirtInfo(state) {
      state.step = 0;
    }
  },
  actions: {
  },
  modules: {
  }
})
