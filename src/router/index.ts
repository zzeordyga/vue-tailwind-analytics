import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: () => import('@/page/Dashboard/index.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router