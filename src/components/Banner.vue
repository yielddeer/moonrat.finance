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
                <div class="col-lg-6 banner-txt">


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
                    <div class="center-in-mobile">
                        <a class="bor super" @click="launchApp()" style="cursor: pointer">Launch App</a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="banner-img">
                        <img :src="require('@/assets/images/RatBNB.png')" alt="banner-img" class="img-fluid">
                    </div>

                    <div class="banner-txt social-info">
                        <div class="row">
                            <div class="col-lg-7 col-md-7 col-sm-12 text-wrapper">
                                <h3 class="small">
                                    OFFICIAL TELEGRAM
                                </h3>
                            </div>
                            <div class="col-lg-5 col-md-5 col-sm-12 button-wrapper">
                                <a class="a-small" target="_blank"
                                   href="https://t.me/MoonRatFinance">@MoonRatFinance</a>
                            </div>

                        </div>

                        <div class="row">
                            <div class="col-lg-7 col-md-7 col-sm-12 text-wrapper">
                                <h3 class="small">
                                    OFFICIAL TELEGRAM ANNOUNCEMENTS
                                </h3>
                            </div>
                            <div class="col-lg-5 col-md-5 col-sm-12 button-wrapper">
                                <a target="_blank" class="a-small"
                                   href="https://t.me/moonrat_finance">@moonrat_finance</a>
                            </div>
                        </div>


                        <div class="row">
                            <div class="col-lg-7 col-md-7 col-sm-12 text-wrapper">
                                <h3 class="small">
                                    OFFICIAL TWITTER
                                </h3>
                            </div>
                            <div class="col-lg-5 col-md-5 col-sm-12 button-wrapper">

                                <a target="_blank" class="a-small"
                                   href="https://twitter.com/MoonRatFinance">@MoonRatFinance</a>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-7 col-md-7 col-sm-12 text-wrapper">
                                <h3 class="small">
                                    OFFICIAL SMARTCONTRACT
                                </h3>
                            </div>
                            <div class="col-lg-5 col-md-5 col-sm-12 button-wrapper">
                                <a target="_blank" class="a-small"
                                   href="https://bscscan.com/token/0x6D949f9297A522c0f97C232CC209a67Bd7CfA471">BSC Contract</a>
                            </div>
                        </div>
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
