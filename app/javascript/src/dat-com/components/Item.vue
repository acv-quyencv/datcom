<template>
  <div class='mon-item'>
    {{ item.name }}
    <!-- <button>Edit</button> -->
    <button v-if="isAdmin" @click="removeMon(item)">Delete</button>

    <!-- <button @click="setMon(item.name)" v-if="!selected">Select</button> -->
    <button @click="setMon(item.name)">Select</button>

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
      if(this.current_user === ''){
        alert('Please select name!')
        return
      }

      var confirmSelect = confirm("Hi -----  " + this.current_user + "\n" + "Bạn chắc muốn ăn món ----- " + item);
      if(!confirmSelect){ return false }

      let postData = {
        key: this.current_user,
        val: item
      }

      let current_user = this.current_user

      this.$store.dispatch('add_order', postData)

      let todayNumber = (new Date()).getDate()
      let ranTodayKey = "RAND-ORDER-" + todayNumber
      let order_data = {}
      let updates = {}
      let ref_order = firebase.database().ref().child('orders/'+ranTodayKey)

      order_data[current_user] = item
      ref_order.update(order_data)

      // let newPostKey = firebase.database().ref().child('orders').push().key
      // updates['/orders/' + 'list_orders'] = { 'ad' : 'sdsd'}
      // firebase.database().ref().update(updates);
    },

    editMon(){

    },

    removeMon(item){

      const ref_dsMon = firebase.database().ref().child('dsMon')
      ref_dsMon.child(item.key).remove()

      // console.log(item)

    }
  },

  computed: {
    selected(){
      return this.$store.getters.selected
    },

    current_user(){
      return this.$store.getters.current_user
    },

    isAdmin(){
      return this.$store.getters.isAdmin
    }
  }
}
</script>