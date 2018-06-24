import Vue from 'vue'
import App from './components/App.vue'
import store from './store/index.js'

window.addEventListener('load', function () {

    var money = new Vue({
      el: '#money',
      store,
      render: h => h(App)
    })

}) // end window on load

