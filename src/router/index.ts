import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: () => import('@/components/page/Dashboard/index.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router