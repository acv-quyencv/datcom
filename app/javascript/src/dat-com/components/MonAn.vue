<template>
  <div class='ds-mon_an'>
    <h1>DS mon</h1>
    <ul>
      <li v-for="mon in dsMon" :key="mon" >
        <item :item="mon"/>
      </li>
    </ul>

    <button> Them mon </button>
  </div>
</template>

<script>

import Item from '../components/Item'
export default {
  computed: {
    dsMon(){
      return this.$store.getters.dsMon
    },
  },

  components: {
    Item
  }
}
</script>