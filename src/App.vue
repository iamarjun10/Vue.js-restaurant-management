<template>
  <router-view></router-view>
</template>

<script>
  import SignUp from './components/SignUp.vue'

  export default {
    name: 'App',
    components: {
      SignUp
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  body {
    padding: 0;
    margin: 0;
  }
  .logo {
    width: 150px;
    margin-bottom: -30px;
  }

  .register input,
  .login input,
  .add-restaurant-form input {
    width: 300px;
    padding-left: 20px;
    height: 40px;
    display: block;
    margin-bottom: 15px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
  }

  .register button,
  .login button,
  .add-restaurant-form button {
    background-color: skyblue;
    width: 325px;
    height: 40px;
    border: 1px solid skyblue;
    color: #fff;
    cursor: pointer;
  }

</style>
