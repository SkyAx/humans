import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        alias: '/main',
        name: 'Main',
        component: () => import('@/components/pages/Main.vue'),
    },
    {
        path: '/history',
        name: 'History',
        component: () => import('@/components/pages/History.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router
