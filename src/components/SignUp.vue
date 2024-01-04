<template>
    <img class="logo" src="../assets/restaurant-logo.png"/>
    <h1>Sign up</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name">
        <input type="text" v-model="email" placeholder="Enter Email">
        <input type="password" v-model="password" placeholder="Enter Password">
        <button @click="signUp">Sign Up</button>
        <p>
            <router-link to="/login">already registered? login</router-link>
        </p>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'SignUp',
        data() {
            return {
                name: '',
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
            async signUp() {
                let result = await axios.post('http://localhost:3000/user', {
                    name: this.name,
                    email: this.email,
                    password: this.password
                })
                console.warn('result ', result)
                if (result.status == 201) {
                    alert('Successfully signed up!')
                    localStorage.setItem('user-info', JSON.stringify(result.data))
                    this.$router.push('/');
                }
            }
        }
    }

</script>

<style>
    
</style>