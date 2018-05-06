<template>
  <div class='login'>
    <h1> Who are you ? </h1>
     <select v-model="user.name" @change="login">
        <option value=""> --- Select name --- </option>
        <option v-for="(val,key) in users"
                :value="key"
                :key="key">
          {{val}}
         </option>
     </select>
     <p>Your using name: <span class='current-user' style="color: #ff5722; font-size: 1.5em">{{current_user}}</span></p>
  </div>
</template>

<script>

export default {
  data(){
    return{
      user: {}
    }
  },

  methods: {
    login(){
      this.$store.dispatch('login', this.user['name'])
    }
  },

  computed: {
    users(){
      return this.$store.getters.users
    },

    current_user(){
      return this.$store.getters.current_user
    }
  }
}
</script>
