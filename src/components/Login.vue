<template>
    <img class="logo" src="../assets/restaurant-logo.png"/>
    <h1>Login</h1>
    <div class="login">
        <input type="text" v-model="email" placeholder="Enter Email">
        <input type="password" v-model="password" placeholder="Enter Password">
        <button @click="loginUser">Login</button>
        <p>
            <router-link to="/sign-up">don't have account? create now</router-link>
        </p>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'Login',
        data() {
            return {
                email: '',
                password: ''
            }
        },
        mounted() {
            let user = localStorage.getItem('user-info')
            if(user) {
                this.$router.push('/');
            }
        },
        methods: {
            async loginUser() {
                let result = await axios.get(
                    `http://localhost:3000/user?email=${this.email}&password=${this.password}`
                )
                if(result.status == 200 && result.data.length !=0) {
                    alert('Login Success!');
                    localStorage.setItem('user-info', JSON.stringify(result.data[0]))
                    this.$router.push('/');
                }
                console.warn(result)
                
            }
        }
    }
</script>

<style>

</style>