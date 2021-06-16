import Vue from 'vue'
import Vuex from 'vuex'
import Questions from './questions'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        questions: Questions
    },
    mutations: {},
    actions: {},
    modules: {}
})
