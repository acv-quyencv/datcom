<template>
  <div class='order'>
    <h1>Order</h1>
    <ul>
      <li v-for="(k, v) in orders" :key="k">
         {{v}}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  computed: {
    orders() {
      return this.$store.getters.orders
    }
  }
}
</script>