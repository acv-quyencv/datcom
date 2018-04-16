<template>
  <div class='ds-wrapper'>
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

export default {
  components: {
    MonAn,
    Order,
    Status,
    AddNew
  }
}
</script>
