<template>
  <div class='add-new'>
    <h1>Them mon</h1>
    <button @click="showForm">Addnew</button>

    <div class='add-form' v-if="isShow">
      <input type="text" v-model='newItem'>
      <button @click="addMon" v-if="isShow">Submit</button>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      newItem: '',
      isShow: false
    }
  },
  methods: {
    addMon(){
      let postData = {
        name: this.newItem
      }

      let newPostKey = firebase.database().ref().child('dsMon').push().key;
      let updates = {};
      updates['/dsMon/' + newPostKey] = postData;

      return firebase.database().ref().update(updates);

      // commit to store - newMon
      // Close add new
      this.isShow = false
    },

    showForm(){
      this.isShow = true
    }

  },

  computed: {
    dsMon(){

    }
  }
}
</script>
