<template>
  <div class='mon-item'>
    Name: {{ item }}
    <button>Edit</button>
    <button @click="setMon(item)" v-if="!selected">Select</button>
    <!-- <button @click="unsetMon(item)">Unselect</button> -->
  </div>
</template>

<script>

export default {
  props: [
    'item'
  ],

  methods: {
    setMon(item){
      let postData = {
        key: this.current_user,
        val: item
      }
      console.log(postData)
      this.$store.dispatch('add_order', postData)
      // let updates = {};
      // let newPostKey = firebase.database().ref().child('orders').push().key;
      // updates['/orders/' + newPostKey] = postData;
      // return firebase.database().ref().update(updates);

      // Update order store
      // Disable all other select
    }
  },

  computed: {
    selected(){
      return this.$store.getters.selected
    },

    current_user(){
      return this.$store.getters.current_user
    }
  }
}
</script>