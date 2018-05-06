<template>
  <div class='ds-wrapper'>
    <div class='left-section column'>
      <div class="inside-wrap">
        <login />
        <mon-an />
        <add-new />
      </div>
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
  },

  mounted() {
    let test_match = function(el){ return /datcom_user_id/.test(el) }
    let arr_cok = document.cookie.split(';')
    if(arr_cok.find(test_match)){
      this.$store.dispatch('check_admin', true)
    }
  }
}
</script>

<style lang="scss" scoped>
body{
  font-family: 'Josefin Sans', sans-serif;
}
.ds-wrapper{
  font-family: 'Josefin Sans', sans-serif;
}
.ds-wrapper:after{
  content: "";
  display: table;
  clear: both;
}
.column{
  float: left;
  margin-left: 2%;
  margin-right: 2%;
  width: 45%;
}
.column.left-section {
  background: #a0daa4;
  border-radius: 10px;
  -webkit-box-shadow: 5px 1px 5px -2px rgba(0,0,0,0.48);
  -moz-box-shadow: 5px 1px 5px -2px rgba(0,0,0,0.48);
  box-shadow: 5px 1px 5px -2px rgba(0,0,0,0.48);
  .inside-wrap{
    padding: 25px;
  }
}
</style>