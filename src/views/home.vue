<template>
  <div id="home">
    <img src="../assets/img/kandylogo.png">
    <div class="in">

      <label class="form-label">
        Username
        <input class="form-control">
      </label>
      <label class="form-label">
        Password
        <input type="password" class="login-input">
      </label>

      <router-link to="./index">
        <mt-button plain @click="connect">Login</mt-button>
      </router-link>
    </div>

  </div>
</template>

<script>
export default {
  methods: {
    writeSome: function () {
      this.$store.commit('isShowAlert3', true)
    },
    connect: function () {
      this.$store.dispatch('connect', {
        username: 'ravci@genband.com',
        password: 'yjke9884'
      })
    },
    goBack: function () {
      this.$router.back()
    },
    goContactDetail () {
     // this.$store.commit('SAVE_USER', contact);
      this.$router.push('./index')
    }
  }
}
</script>

<style lang="scss" scoped>
#home {
  text-align: center;
  padding-top: 1rem;
}

.in {
  width: 50%;
  margin: 0 auto;
  font-size: 0.4rem;
  button {
    border-color: green;
  }
}
</style>
