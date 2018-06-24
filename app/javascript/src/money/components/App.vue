<template>

  <div>
    <h2>Money</h2>
    <button @click="showModal" data-money='50'> Add money </button>

    <modal v-if="isDisplay" @modal-close="modalClose" :selectedMoney='selectedMoney' @update-money="handleAdd"> </modal>
    <display-list :displayList.sync='listMoney'> </display-list>
  </div>

</template>

<script>

import axios from 'axios'
import Modal from '../components/Modal'
import DisplayList from '../components/DisplayList'


export default {
  data() {
    return{
      isDisplay: false,
      selectedMoney: '',
      listMoney: []
    }
  },

  components: {
    Modal,
    DisplayList
  },

  methods: {
    showModal(){
      this.isDisplay = true
    },
    modalClose(){
      this.isDisplay = false
    },
    handleAdd(item){
      this.listMoney.push(item)
    }
  },

  mounted(){
    var vue = this
    axios.get('/api/money_api/v1/money')
      .then(function (response) {
        vue.listMoney = response.data
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
</script>

<style lang="scss" scoped>
</style>