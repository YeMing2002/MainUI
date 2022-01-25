import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// import Button from '../lib/button'
// import Toast from '../lib/toast'
// //
// Vue.use(Button)
// Vue.use(Toast)

// import YUI from '../packages/index'

// Vue.use(YUI)

import {Button,Toast} from '../lib/mainui.umd'
import '../lib/mainui.css'
Vue.use(Button)
Vue.use(Toast)


new Vue({
  render: h => h(App),
}).$mount('#app')
