import Vue from 'vue';
import Vuex from 'vuex';
import Router from 'vue-router';
import { sync } from 'vuex-router-sync';
import App from './App.vue';
import { routes } from './router-config'

import VuexStore from './store';

Vue.use(Vuex);
Vue.use(Router);

const store = new Vuex.Store(VuexStore);
const router = new Router({
    routes,
    mode: 'history'
});

sync(store, router);

new Vue({
    store,
    router,
    el: '#app',
    render: h => h(App)
});