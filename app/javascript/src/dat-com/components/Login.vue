<template>
  <div class='login'>
    <h1> Login </h1>
     <select v-model="user.name">
        <option value=""> --- Select name --- </option>
        <option v-for="(name, index) in users"
                :value="name"
                :key="index">
          {{name}}
         </option>
     </select>
     <input type="password" v-model="user.password">
     <button @click="login">Login</button>

     <h1>Current User</h1>
     <p>{{current_user}}</p>
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
      this.user = {}
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
