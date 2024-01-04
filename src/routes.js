import { createRouter, createWebHistory } from "vue-router";
import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import AddRestaurant from './components/AddRestaurant.vue'
import UpdateRestaurant from './components/UpdateRestaurant.vue'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'SignUp',
        path: '/sign-up',
        component: SignUp
    },
    {
        name: 'Login',
        path: '/login',
        component: Login
    },
    {
        name: 'Add',
        path: '/add',
        component: AddRestaurant
    },
    {
        name: 'Update',
        path: '/update/:id',
        component: UpdateRestaurant
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;