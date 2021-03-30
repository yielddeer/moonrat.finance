import Vue from 'vue';
import Router from 'vue-router';
import Main from './components/Main';
import Branding from "./components/Branding";

Vue.use(Router);


export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Main,
        }, {
            path: '/branding',
            name: 'branding',
            component: Branding,
        },
    ],
    mode: 'history',
    // eslint-disable-next-line no-unused-vars
    scrollBehavior(to, from, savedPosition) {
        return {x: 0, y: 0};
    }
});
