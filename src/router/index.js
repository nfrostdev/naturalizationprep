import Vue from 'vue'
import VueRouter from 'vue-router'
import All from '../views/All'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'All',
        component: All
    },
    {
        path: '/:index',
        name: 'Question',
        component: () => import(/* webpackChunkName: "question" */ '../views/Question.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
