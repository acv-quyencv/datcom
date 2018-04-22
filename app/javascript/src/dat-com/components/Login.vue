<template>
  <div class='login'>
    <h1> Login </h1>
     <select v-model="user.name">
        <option v-for="(name, index) in users"
                :value="name"
                :key="index">
          {{name}}
         </option>
     </select>
     <input type="password" v-model="user.password">
     <button @click="login">Login</button>
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
  }
}
</script>
