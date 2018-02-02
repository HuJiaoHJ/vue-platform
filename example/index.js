import Vue from 'vue';
import vuePlatform from '../index';
Vue.use(vuePlatform);
import router from './router.js';

new Vue({
    router,
    render (h) {
        return h('router-view');
    }
}).$mount('#app');