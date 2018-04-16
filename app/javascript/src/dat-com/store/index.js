import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store ({
  state: {
    users: [
      'quyencv',
      'tamht'
    ],
    current_user: 'quyencv',
    dsMon: [
      { id: 1, name: 'ca lu du' },
      { id: 2, name: 'dau hu' },
      { id: 3, name: 'ga chien' }
    ],
    selectedUsers: [
      { user: 'quyencv', mon: 1 }
    ],
    not_selectedUsers: []
  },

  mutations: {
    // FETCH_TUTORIALS(state, tutorials){
    //   state.tutorialLists = tutorials
    // },

    // SELECT_TUTORIAL(state, tutorial){
    //   console.log(tutorial)
    //   state.selectedTutorial = tutorial
    //   state.editMode = true
    // }
  },

  actions : {
    // fetch_tutorials({commit}){
    //   axios.get('api/v1/tutorials')
    //     .then(response => {
    //       console.log(response.data)
    //       commit('FETCH_TUTORIALS', response.data)
    //     })
    //     .catch(error => {
    //       console.error(error);
    //     });
    // },

    // select_tutorial({commit}, tutorial){
    //   commit('SELECT_TUTORIAL', tutorial)
    // }

  },

  getters: {
    dsMon: state => state.dsMon,
    selectedUsers: state => state.selectedUsers,
    not_selectedUsers: state => state.not_selectedUsers,
  }
})