<template>
  <div class='order'>
    <h1>Order</h1>
    <ul>
      <li v-for="(v, k) in orders" :key="k">
         {{k}} : {{v}}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  computed: {
    orders() {
      return this.$store.getters.count_orders
    }
  },

  mounted() {
    var cur_el = this
    const ref_orders = firebase.database().ref().child('orders')

    ref_orders.on('value', function (snap) {
      console.log(snap.val())
      // user = snap.val(); // Keep the local user object synced with the Firebase userRef
      cur_el.$store.dispatch('load_order', snap.val())
    })

    // #TODO:  don't remove on first time
    // Set button to reload order after login
    ref_orders.remove()
  }
}
</script>