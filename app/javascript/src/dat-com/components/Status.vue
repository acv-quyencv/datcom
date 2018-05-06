<template>
  <div class='order-status'>
    <h1 class='big-title'>Status</h1>
    <p>Ready:</p>
      <ul class='ready-users'>
        <li v-for="(user, index) in ready_user"
            :key="index">
            <span><img class="user-icon" src="assets/users.png" alt=""></span>
            {{user}}
            <span class='order-mon'> - {{orders[user]}}</span>
        </li>
      </ul>
    <br>
    <p>Not ready</p>
    <ul class='not-ready-users'>
        <li v-for="(user, index) in unready_user"
            :key="index">
            <span><img class='user-icon' src="assets/users.png" alt=""></span>
            {{user}}
        </li>
    </ul>
  </div>
</template>

<script>

export default {
  computed: {
    ready_user(){
      return this.$store.getters.ready_user
    },

    unready_user(){
      return this.$store.getters.unready_user
    },

    orders() {
      return this.$store.getters.orders
    }
  }
}
</script>

<style lang='scss' scoped>
.order-status{
  li{
    padding: 5px 0;
  }
  img.user-icon{
    width: 16px;
    height: 16px;
  }
  h1.big-title{
    color: #ff9800;
    text-align: right;
  }
  p{
    text-align: right;
  }

  .ready-users{
    background: #e2f7e2;
    padding: 20px 40px;
    border-radius: 10px;
    -webkit-box-shadow: 1px 6px 5px -2px rgba(0,0,0,0.48);
    -moz-box-shadow: 1px 6px 5px -2px rgba(0,0,0,0.48);
    box-shadow: 1px 6px 5px -2px rgba(0,0,0,0.48);
    span.order-mon{
      font-weight: bold;
      color: #e8035f;
    }
  }
  .not-ready-users{
    background: #f9decd;
    padding: 20px 40px;
    border-radius: 10px;
    -webkit-box-shadow: 1px 6px 5px -2px rgba(0,0,0,0.48);
    -moz-box-shadow: 1px 6px 5px -2px rgba(0,0,0,0.48);
    box-shadow: 1px 6px 5px -2px rgba(0,0,0,0.48);
  }
}
</style>