import { createRouter, createWebHashHistory } from 'vue-router'

const router = [
    {
        path: '/',
        name: 'Dashboard',
        component: () => import('/')
    }
]