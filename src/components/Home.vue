<template>
    <Header/>
    <div>
        <h1>Hello {{ name }}, welcome to home page!</h1>
    </div>
    
    <div>
        <table class="restaurant-table">
            <tr> 
                <td> Id </td>
                <td> Name </td>
                <td> Address </td>
                <td> Contact </td>
                <td> Actions </td>
            </tr>
            <tr v-for="item in restaurants" :key="item.id"> 
                <td> {{ item.id }} </td>
                <td> {{ item.name }} </td>
                <td> {{ item.address }} </td>
                <td> {{ item.contact }} </td>
                <td> 
                    <router-link :to="'/update/'+item.id">Update</router-link>
                    <button @click="deleteRestaurant(item.id)">Delete</button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
import Header from './Header.vue'

export default {
    name: 'Home',
    components: {
        Header
    },
    data() {
        return {
            name: '',
            restaurants: []
        }
    },
    async mounted() {
        
        let user = localStorage.getItem('user-info')
        if(!user) {
            this.$router.push('login');
        } else {
            this.name = JSON.parse(user).name;
        }
        let result = await this.loadRestaurants();
        this.restaurants = result.data;
    },
    methods: {
        loadRestaurants() {
            return axios.get('http://localhost:3000/restaurant');
        },
        async deleteRestaurant(id) {
            let result = await axios.delete('http://localhost:3000/restaurant/' +id);
            if(result.status == 200) {
                alert('Restaurant Deleted Successfully!');
                let result = await this.loadRestaurants();
                this.restaurants = result.data;
            }
        }
    }
}
</script>

<style>
.restaurant-table td {
    width: 220px;
    height: 40px;
    border: 1px solid;
}
</style>