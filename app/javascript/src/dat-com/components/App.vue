<template>
  <div class='ds-wrapper'>
    <login />
    <mon-an />
    <add-new />
    <status />
    <order />
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