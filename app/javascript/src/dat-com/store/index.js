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
    current_user: 'quyencv',
    selected: false,
    dsMon: [
      'ga chien',
      'ca lu du'
    ],
    orders: {},
    count_order: {}
  },

  mutations: {
    ADD_NEW(state, mon){
      state.dsMon.push(mon)
    },

    ADD_ORDER(state, order){
      // state.orders[order['key']] = order['val']
      Vue.set(state.orders, order['key'], order['val'])

      // for(obj in state.orders){
      //   if
      // }
      // state.orders.push(order)
      // Vue.set(state.orders, state.orders)
      state.selected = true

      // Update status user
      if(state.ready_user.indexOf(order['key']) === -1){
        state.ready_user.push(order['key'])
      }
      state.unready_user = state.users.filter(function(x) {
        return state.ready_user.indexOf(x) < 0
      })

    },

    LOGIN(state, user){
      state.current_user = user
      state.selected = false
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
    count_order: state => state.count_order
  }
})