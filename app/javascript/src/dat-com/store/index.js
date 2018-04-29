import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store ({
  state: {
    users: [
      'quyencv',
      'tamht',
      'quy',
      'loan'
    ],
    ready_user: [],
    unready_user: [],
    current_user: '',
    selected: false,
    dsMon: [],
    orders: {},
    count_orders: {}
  },

  mutations: {
    ADD_NEW(state, mon){
      state.dsMon.push(mon)
    },

    ADD_ORDER(state, order){

      let nameMon = order['val']
      let nameUser = order['key']

      // Vue.set(state.orders, nameUser, nameMon)

      state.selected = true

      // Update status user
      if(state.ready_user.indexOf(nameUser) === -1){
        state.ready_user.push(nameUser)
      }
      state.unready_user = state.users.filter(function(x) {
        return state.ready_user.indexOf(x) < 0
      })

      // Update current_user = nil
      state.current_user = ''

    },

    LOGIN(state, user){
      state.current_user = user
      state.selected = false
    },

    LOADMON(state, dsMon){
      state.dsMon = dsMon
    },

    LOADORDER(state, orders){
      state.orders = orders || {}
      state.unready_user = state.ready_user = []

      // Update status
      state.users.forEach((el, index) => {
        console.log(Object.keys(state.orders).indexOf(el))
        if(Object.keys(state.orders).indexOf(el) > -1){
          state.ready_user.push(el)
        }
      })

      state.unready_user = state.users.filter(function(x) {
        return state.ready_user.indexOf(x) < 0
      })

      // Update count_orders
      state.count_orders = {}
      Object.values(state.orders).forEach((el, index) => {
        if(el in state.count_orders){
          Vue.set(state.count_orders, el, state.count_orders[el] + 1)
        }else{
          Vue.set(state.count_orders, el, 1)
        }
      })
    }
  },

  actions : {
    add_new({commit}, mon){
      commit('ADD_NEW', mon)
    },

    add_order({commit}, order){
      commit('ADD_ORDER', order)
    },

    login({commit}, user){
      commit('LOGIN', user)
    },

    load_mon({commit}, dsMon){
      commit('LOADMON', dsMon)
    },

    load_order({commit}, orders){
      commit('LOADORDER', orders)
    }

  },

  getters: {
    dsMon: state => state.dsMon,
    orders: state => state.orders,
    selected: state => state.selected,
    ready_user: state => state.ready_user,
    unready_user: state => state.unready_user,
    users: state => state.users,
    current_user: state => state.current_user,
    count_orders: state => state.count_orders
  }
})