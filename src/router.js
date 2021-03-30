import Vue from 'vue';
import Router from 'vue-router';
import Main from './components/Main';
// import AboutSite from "./components/AboutSite";
// import GallerySite from "./components/GallerySite";
// import WalletSite from "./components/WalletSite";
// import TermSite from "./components/TermSite";
// import FAQSite from "./components/FAQSite";
// import ProvenanceSite from "./components/ProvenanceSite";
// import DisclaimerSite from "./components/DisclaimerSite";
// import TenensfortisSite from "./components/TenensfortisSite";

Vue.use(Router);


export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Main,
        },
        // {
        //     path: '/about',
        //     name: 'about',
        //     component: AboutSite,
        // },
        // {
        //     path: '/gallery',
        //     name: 'gallery',
        //     component: GallerySite,
        // },
        // {
        //     path: '/wallet',
        //     name: 'wallet',
        //     component: WalletSite,
        // },
        // {
        //     path: '/terms',
        //     name: 'terms',
        //     component: TermSite,
        // },
        // {
        //     path: '/faqs',
        //     name: 'faqs',
        //     component: FAQSite,
        // },
        // {
        //     path: '/provenance',
        //     name: 'provenance',
        //     component: ProvenanceSite,
        // },
        // {
        //     path: '/disclaimer',
        //     name: 'disclaimer',
        //     component: DisclaimerSite,
        // },
        // {
        //     path: '/tenensfortis',
        //     name: 'tenensfortis',
        //     component: TenensfortisSite,
        // },
    ],
    mode: 'history',
    // eslint-disable-next-line no-unused-vars
    scrollBehavior(to, from, savedPosition) {
        return {x: 0, y: 0};
    }
});
