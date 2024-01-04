<template>
    <Header/>
    <div>
        <h1>Hello, welcome to Add Restaurant page!</h1>
        <form class="add-restaurant-form">
            <input type="text" name="name" v-model="restaurant.name" placeholder="Enter Restaurant Name">
            <input type="text" name="address" v-model="restaurant.address" placeholder="Enter Restaurant Address">
            <input type="text" name="contact" v-model="restaurant.contact" placeholder="Enter Contact Number">
            <button type="button" @click="addRestaurant">Add New Restaurant</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import Header from './Header.vue'

export default {
    name: 'AddRestaurant',
    components: {
        Header
    },
    mounted() {
        let user = localStorage.getItem('user-info')
        if(!user) {
            this.$router.push('login');
        }
    },
    data() {
        return {
            restaurant: {
                name: '',
                address: '',
                contact: ''
            }
        }
    },
    methods: {
        async addRestaurant() {
            // console.warn(this.restaurant)
            let result = await axios.post('http://localhost:3000/restaurant', this.restaurant);
            console.warn(result)
            if (result.status == 201) {
                alert('Restaurant Added Successfully!');
                this.$router.push('/')
            }
        }
    }
}
</script>

<script>

</script>