import Vue from 'vue'
import App from './App.vue'
import VueDraggableResizable from 'vue-draggable-resizable'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faImage, faFont, faPlus, faCheck, faArrowLeft, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faImage, faFont, faPlus, faCheck, faArrowLeft, faTrashAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('vue-draggable-resizable', VueDraggableResizable)

Vue.config.productionTip = false

import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
import 'normalize.css/normalize.css'
import store from './store'

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
