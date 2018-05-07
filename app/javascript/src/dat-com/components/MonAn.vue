<template>
  <div class='ds-mon_an'>
    <h1>Chọn món</h1>
    <ul>
      <li v-for="mon in dsMon" :key="mon.key">
        <span class='mon-icon'><i><img src="assets/mon_an.png" alt=""></i></span>
        <item :item="mon"/>
      </li>
    </ul>
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

<style lang='scss' scoped>
.ds-mon_an{
  li{
    padding: 20px 0;
    display: list-item;
    span.mon-icon{
      display: inline-block;
      vertical-align: middle;
      img{
        width: 20px;
        height: 20px;
      }
    }
    .mon-item{
      display: inline-block;
    }
  }
}
</style>
