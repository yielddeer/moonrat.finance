<template>

    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top" :class="{'nav-bg':have_nav}">
        <div class="container">
            <a class="navbar-brand" href="/"><b>MOON RAT</b></a>
            <img :src="require('@/assets/images/MoonRat_2x.png')" style="width: 50px">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    @click="show_nav_mobile = !show_nav_mobile"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa fa-bars" aria-hidden="true"></i>
            </button>
            <div class="collapse navbar-collapse menu-main" :class="{'show': show_nav_mobile}"
                 id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto menu-item" style="align-items: center">
                    <li class="nav-item">
                        <a class="nav-link active" href="#banner" @click="show_nav_mobile=false"
                           v-scroll-to="'#banner'">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#features"
                           @click="show_nav_mobile=false"
                           v-scroll-to="'#features'">
                            Features
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#tokenomics"
                           @click="show_nav_mobile=false"
                           v-scroll-to="'#tokenomics'">
                            Tokenomics
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#roadmap"
                           @click="show_nav_mobile=false"
                           v-scroll-to="'#timeline'">
                            Roadmap
                        </a>
                    </li>

                    <li class="nav-item">
                        <!--                        <a class="nav-link"-->
                        <!--                           href="https://bscscan.com/address/0x0cF011A946f23a03CeFF92A4632d5f9288c6C70D#code"-->
                        <!--                           target="_blank">Contract </a>-->

                        <a class="nav-link"
                           @click="commingSoon()"
                           target="_blank">Contract </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://docs.moonrat.finance/"
                           target="_blank">WhitePaper </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="https://medium.com/moonrat-finance/" target="_blank">Medium</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link bor super" @click="commingSoon">Connect</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                have_nav: false,
                always_fixed_navbar: false,
                show_nav_mobile: false
            }
        },
        methods: {
            commingSoon() {
                this.$swal({
                    title: 'Coming Soon ...',
                    width: 400,
                    padding: '2em',
                    background: '#fff url(https://i.ibb.co/gwh2dbd/moon.png)',
                    backdrop: `
                                rgba(0, 0, 0, 0.5)
                                url("https://i.ibb.co/qFgF3yZ/moonrat-02.gif")
                                left top
                                no-repeat
                              `
                });
            },
            onScroll() {
                if (!this.always_fixed_navbar) {
                    // Get the current scroll position
                    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
                    // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
                    if (currentScrollPosition < 30) {
                        this.have_nav = false
                    } else {
                        this.have_nav = true
                    }
                }
            },
        },
        mounted() {
            window.addEventListener('scroll', this.onScroll)
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.onScroll)
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
