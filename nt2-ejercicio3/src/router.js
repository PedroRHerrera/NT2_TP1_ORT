import { createRouter, createWebHistory } from 'vue-router'

import Formulario from './components/Formulario.vue'
import Api from './components/Api.vue'

const routes = [
    { path: '/', redirect: '/formulario' },

    { path: '/formulario', component: Formulario },
    { path: '/api', component: Api },

    { path: '/:pathmatch(.*)*', redirect: '/formulario' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,  
})

export default router