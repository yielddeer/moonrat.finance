<template>
    <section id="banner">
        <!--        <div class="design-layer"></div>-->
        <div class="backtotop" :class="{'display': show_back_to_top}">
            <a href="#banner" v-scroll-to="'#banner'">
                <i class="fa fa-arrow-up" aria-hidden="true">
                </i>
            </a>
        </div>
        <div class="container zindex">
            <div class="row">
                <div class="col-lg-7 banner-txt">
                    <h3 class="title-main">WELCOME TO THE NEW WORLD 🐭</h3>
                    <p>MoonRat is a community driven, fair launched DeFi project built on Binance Smart Chain #BSC.
                        Three functions occur during each trade: Reflection, LP Acquisition, & Burn.
                        <br>
                        <br>
                        MoonRat brings the most revolutionary mechanism to BSC ecosystem: Earn $BNB just by holding
                        $MRAT token
                    </p>
                    <br>
                    <br>
                    <a class="bor super" @click="launchApp()" style="cursor: pointer">Launch App</a>
                </div>
                <div class="col-lg-5">
                    <div class="banner-img">
                        <img :src="require('@/assets/images/RatBNB.png')" alt="banner-img" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Banner',
        data() {
            return {
                show_back_to_top: false
            }
        },
        methods: {
            launchApp() {
               window.open("https://app.moonrat.finance/", "_blank")
            },
            onScroll() {
                if (!this.always_fixed_navbar) {
                    // Get the current scroll position
                    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
                    // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
                    if (currentScrollPosition < 30) {
                        this.show_back_to_top = false
                    } else {
                        this.show_back_to_top = true
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
