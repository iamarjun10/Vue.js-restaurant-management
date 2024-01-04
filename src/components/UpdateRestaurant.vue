<template>
    <Header/>
    <div>
        <h1>Hello, welcome to Update Restaurant page!</h1>
        <form class="add-restaurant-form">
            <input type="text" name="name" v-model="restaurant.name" placeholder="Enter Restaurant Name">
            <input type="text" name="address" v-model="restaurant.address" placeholder="Enter Restaurant Address">
            <input type="text" name="contact" v-model="restaurant.contact" placeholder="Enter Contact Number">
            <button type="button" @click="updateRestaurant">Update Restaurant</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
import Header from './Header.vue'

export default {
    name: 'UpdateRestaurant',
    components: {
        Header
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
    async mounted() {
        let user = localStorage.getItem('user-info')
        if(!user) {
            this.$router.push('login');
        }
        const result = await axios.get('http://localhost:3000/restaurant/' +this.$route.params.id);
        this.restaurant = result.data
    },
    methods: {
        async updateRestaurant() {
            let result = await axios.put('http://localhost:3000/restaurant/'+this.$route.params.id, this.restaurant);
            if (result.status == 200) {
                alert('Restaurant data updated Successfully!');
                this.$router.push('/')
            }
        }
    }
}
</script>

<script>

</script>