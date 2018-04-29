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
      // commit to store - newMon
      // Close add new

      let formatted_name = this.newItem.trim()
      if(this.dsMon.includes(formatted_name) || formatted_name === ''){
        this.isShow = true
        this.hasError = true
      }else{
        this.hasError = false
        this.isShow = false
        this.$store.dispatch('add_new', formatted_name)

        let postData = {
          name: this.newItem
        }

        let newPostKey = firebase.database().ref().child('dsMon').push().key
        let updates = {}
        updates['/dsMon/' + newPostKey] = postData

        firebase.database().ref().update(updates)
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
  },

  mounted(){
    var cur_el = this
    const ref_dsMon = firebase.database().ref().child('dsMon')

    ref_dsMon.on('value', function (snap) {
      var new_dsMon = []
      // user = snap.val(); // Keep the local user object synced with the Firebase userRef

      Object.values(snap.val()).forEach((element, index) => {
        new_dsMon.push(element.name)
      })

      cur_el.$store.dispatch('load_mon', new_dsMon)
    })
  }
}
</script>
