<template>
    <div id="app">
        <vue-splash
                :show="show_splash"
                :logo="logo"
                color="#04cd33"
                :size="150"
                :fixed="true"
        />
        <div v-if="!show_splash">
            <Header/>
            <router-view/>
            <Footer/>
        </div>
    </div>
</template>

<script>
    import Header from "./components/Header";
    import Footer from "./components/Footer";

    import YourLogo from './assets/images/MoonPanda_2x.png';

    export default {
        name: 'App',
        components: {
            Footer,
            Header
        },
        data() {
            return {
                show_splash: true
            }
        },
        computed: {
            logo() {
                return YourLogo;
            }
        },
        mounted() {
            let v = this
            setTimeout(() => {
                v.show_splash = false
            }, 1500)
        }
    }
</script>

<style>
</style>
