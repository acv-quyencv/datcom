<template>
  <div class='ds-wrapper'>
    <div class='left-section column'>
      <login />
      <mon-an />
      <add-new />
    </div>

    <div class="right-section column">
      <status />
      <order />
    </div>
  </div>
</template>

<script>

import MonAn from '../components/MonAn'
import Order from '../components/Order'
import Status from '../components/Status'
import AddNew from '../components/AddNew'
import Login from '../components/Login'

export default {
  components: {
    MonAn,
    Order,
    Status,
    AddNew,
    Login
  }
}
</script>

<style lang="scss" scoped>
.ds-wrapper:after{
  content: "";
  display: table;
  clear: both;
}
.column{
  float: left;
  width: 50%;
}
</style>