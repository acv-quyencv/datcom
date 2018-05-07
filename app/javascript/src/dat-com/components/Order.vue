<template>
  <div class='order'>
    <h1>Order</h1>
    <!-- <p style='color: #ff9800'>Mọi người đã đặt xong !</p> -->
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
    let todayNumber = (new Date()).getDate()
    let ranTodayKey = "RAND-ORDER-" + todayNumber
    const ref_orders = firebase.database().ref().child('orders/'+ranTodayKey)

    ref_orders.on('value', function (snap) {
      // user = snap.val(); // Keep the local user object synced with the Firebase userRef
      cur_el.$store.dispatch('load_order', snap.val())
    })

    // #TODO:  don't remove on first time
    // Set button to reload order after login
    // ref_orders.remove()
    let randYTkey = "RAND-ORDER-" + (todayNumber - 1)
    const ref_orders_yesterday = firebase.database().ref().child('orders/'+randYTkey)
    ref_orders_yesterday.remove()
  }
}
</script>

<style lang="scss" scoped>
.order{
  h1{
    color: #ff9800;
    text-align: right;
  }
}
</style>
