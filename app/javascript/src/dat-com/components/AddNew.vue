<template>
  <div class='add-new'>
    <h1>Them mon</h1>
    <button @click="showForm">Addnew</button>

    <div class='add-form' v-if="isShow">
      <input type="text" v-model='newItem'>
      <div v-if="hasError"> Name exists! </div>
      <button @click="addMon" v-if="isShow">Submit</button>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      newItem: '',
      isShow: false,
      hasError: false
    }
  },
  methods: {
    addMon(){
      // let postData = {
      //   name: this.newItem
      // }

      // let newPostKey = firebase.database().ref().child('dsMon').push().key;
      // let updates = {};
      // updates['/dsMon/' + newPostKey] = postData;

      // return firebase.database().ref().update(updates);

      // commit to store - newMon
      // Close add new

      let formatted_name = this.newItem.trim()
      if(this.dsMon.includes(formatted_name)){
        this.isShow = true
        this.hasError = true
      }else{
        this.hasError = false
        this.isShow = false
        this.$store.dispatch('add_new', formatted_name)
      }
    },

    showForm(){
      this.isShow = true
    }

  },

  computed: {
    dsMon(){
      return this.$store.getters.dsMon
    }
  }
}
</script>
