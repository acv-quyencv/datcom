import Vue from 'vue'
import App from './components/App.vue'
import store from './store/index.js'

window.addEventListener('load', function () {

    var dat_com = new Vue({
      el: '#dat_com',
      store,
      render: h => h(App)
    })

}) // end window on load

