import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store.js';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./views/Home.vue'),
        },
        {
            path: '/sign-in',
            name: 'login',
            component: () => import('./views/Login.vue')
        },

        {
            path: '/repor',
            name: 'Repositorios',
            component: () => import('./views/Repositorios.vue'),
            meta: {
                authRequired: true
            }
        },

        {
            path: '/teste1',
            name: 'Teste1',
            component: () => import('./views/Test1.vue'),
            meta: {
                authRequired: true
            }
        },

        {
            path: '/teste2',
            name: 'Teste2',
            component: () => import('./views/Test2.vue'),
            meta: {
                authRequired: true
            }
        },

    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authRequired)) {
        if (!store.state.isAuthenticated) {
            next({
                path: '/sign-in'
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;