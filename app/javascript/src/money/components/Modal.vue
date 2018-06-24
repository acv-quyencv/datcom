<template>
  <div id="myModal" class="modal">
    <div class="modal-content">
      <span class="close" @click="close">&times;</span>
      <p>Money</p>
      <input v-model="selectedMoney">
      <select v-model="selectedMoney">
        <option value="50">50K</option>
        <option value="100">100K</option>
        <option value="200">200K</option>
        <option value="500">500K</option>
        <option value="1000">1tr</option>
      </select>

      <p>Description</p>
      <input v-model='description' type="text">
      <button @click='createMoney'>Submit</button>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  data() {
    return {
      selectedMoney: 0,
      description: ''
    }
  },

  methods: {
    close(){
      this.$emit('modal-close')
    },

    createMoney(){
      var vue = this
      axios.post('/api/money_api/v1/money', { amount: this.selectedMoney, description: this.description })
      .then(function (response) {
        vue.$emit('update-money', response.data)
        vue.close() // Don't move this outside axios
                    // https://stackoverflow.com/a/44287234
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  },

  computed: {
    money(){
      return this.selectedMoney
    }
  },
}
</script>

<style lang="scss" scoped>

.modal {
  // display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>