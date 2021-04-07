import Vue from 'vue'
import App from './App.vue'
import router from './router';

import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/responsive.css';
import './assets/css/slick.css';
import './assets/css/style.css';
import './assets/css/sweet-alert.css';

Vue.config.productionTip = false

import Particles from "particles.vue";
import VueSplash from 'vue-splash';

var VueScrollTo = require('vue-scrollto');

import '@/assets/css/flipclock.css';

import VueTimeline from "@growthbunker/vuetimeline";
import Sticky from 'vue-sticky-directive'
import VueSweetalert2 from 'vue-sweetalert2';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(Sticky)
Vue.use(VueTimeline);
Vue.use(VueScrollTo, {
    container: "body",
    duration: 500,
    easing: "ease",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
})
Vue.use(VueSplash);
Vue.use(Particles);
Vue.use(VueSweetalert2);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
