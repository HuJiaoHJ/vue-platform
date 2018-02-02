import Vue from 'vue';
import Router from 'vue-router';
import middle from './view/middle.vue';

Vue.use(Router);

const router = new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            component: middle
        },
    ],
});

export default router;
