<template>
    <div class="top-nav">
        <router-link to="/">Home</router-link>
        <router-link to="add">Add Restaurant</router-link>
/        <a @click="logout" href="#">Logout</a>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        methods: {
            logout() {
                localStorage.removeItem('user-info');
                this.$router.push('/login')
            }
        }
    }
</script>

<style>
.top-nav {
    background-color: #333;
    overflow: hidden;
}
.top-nav a {
    color: #f2f2f2;
    float: left;
    text-align: center;
    padding: 16px 16px;
    text-decoration: none;
    font-size: 14px;
    margin-right: 5px;
}
.top-nav a:hover {
    background-color: #ddd;
    color: #222;
}
</style>