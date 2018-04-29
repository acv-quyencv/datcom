<template>
  <div class='order-status'>
    <h1>Status</h1>
    <p>Ready:</p>
      <ul>
        <li v-for="(user, index) in ready_user" :key="index"> {{user}}({{orders[user]}})</li>
      </ul>
    <br>
    <p>Not ready</p>
    <ul>
        <li v-for="(user, index) in unready_user" :key="index"> {{user}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  computed: {
    ready_user(){
      return this.$store.getters.ready_user
    },

    unready_user(){
      return this.$store.getters.unready_user
    },

    orders() {
      return this.$store.getters.orders
    }
  }
}
</script>
