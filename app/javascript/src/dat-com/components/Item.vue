<template>
  <div class='mon-item'>
    Name: {{ item.name }}
    <button>Edit</button>
    <button @click="setMon(item.id)">Select</button>
  </div>
</template>

<script>

export default {
  props: [
    'item'
  ],

  methods: {
    setMon(item_id){
      console.log(item_id)
      let postData = {
        user: 'quyencv',
        mon: 'cha'
      }

      let updates = {};
      let newPostKey = firebase.database().ref().child('orders').push().key;
      updates['/orders/' + newPostKey] = postData;

      return firebase.database().ref().update(updates);
      // Update store selectedUser + not_selectedUser
      // Disable all other select
    }
  },

  computed: {
    current_user(){

    }
  }
}
</script>
