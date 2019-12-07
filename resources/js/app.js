import './bootstrap';
import Vue from 'vue';

import routes from '@/js/routes.js';

import App from '@/js/views/App.vue'

const app = new Vue({
    el: '#app',
    router: routes,
    render: h => h(App),
});