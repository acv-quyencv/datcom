<template>

  <div>
    <ul>
      <li v-for="(money, index) in displayList" :key='index'>
       {{money.time}} : {{ money.amount}}.000 - {{money.description}}
      </li>
    </ul>

  </div>

</template>

<script>

export default {
  props: [
    'displayList'
  ],
}
</script>

<style lang="scss" scoped>
</style>