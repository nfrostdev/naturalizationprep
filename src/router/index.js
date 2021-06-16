import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/:index',
        name: 'Question',
        component: () => import(/* webpackChunkName: "question" */ '../views/Question.vue')
    },
    {
        path: '/all',
        name: 'All',
        component: () => import(/* webpackChunkName: "all" */ '../views/All.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
