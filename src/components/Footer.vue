<template>
    <div>
        <footer id="footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-sm-11">
                        <div class="footer-logo">
                            <a class="f-logo" href="https://moonrat.fun/#banner"><b>moonrat</b></a>

                            <p>MoonRat is a community driven, fair launched DeFi project built on Binance Smart Chain
                                #BSC.
                                MoonRat brings the most revolutionary mechanism to BSC ecosystem: Earn $BNB just by
                                holding $MRAT token</p>

                            <div class="footer-social">
                                <a href="https://twitter.com/MoonRatFinance" target="_blank">
                                    <i class="fa fa-twitter" aria-hidden="true"></i>
                                </a>
                                <a href="https://t.me/MoonRatFinance" target="_blank">
                                    <i class="fa fa-telegram" aria-hidden="true"></i>
                                </a>
                                <a href="https://medium.com/moonrat-finance" target="_blank">
                                    <i class="fa fa-medium" aria-hidden="true"></i>
                                </a>
                                <a href="https://github.com/MoonRat-Finance" target="_blank">
                                    <i class="fa fa-github" aria-hidden="true"></i>
                                </a>
                                <a href="mailto:hello@moonrat.finance" target="_blank">
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2"></div>
                    <div class="col-lg-3 col-sm-4">
                        <div class="links">
                            <h3>Important Links</h3>
                            <ul>
                                <li>
                                    <a href="https://bscscan.com/address/0x0cF011A946f23a03CeFF92A4632d5f9288c6C70D#code"
                                       target="_blank">Contract</a></li>
                                <li><a href="https://docs.moonrat.finance" target="_blank">WhitePaper </a>
                                </li>
                                <li><a href="#"
                                       target="_blank">CMC</a>
                                </li>
                                <li><a href="#">CoinGecko</a></li>
                                <li>
                                    <a href="#"
                                       target="_blank">PancakeSwap</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-4">
                        <div class="links">
                            <h3>Informations</h3>
                            <ul>
                                <li><a href="#about" v-scroll-to="'#about'">About Us</a></li>
                                <li>
                                    <router-link to="/branding">
                                        Branding
                                    </router-link>
                                </li>
                                <li><a href="https://medium.com/moonrat-finance" target="_blank">Recent Mediums</a></li>
                                <li><a href="https://t.me/MoonRatFinance" target="_blank">Join Telegram</a></li>
                                <li><a href="mailto:hello@moonrat.finance">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <section id="footer-btm">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="fop-btm text-center">
                            <h2>Copyright © 2021. All rights reserved by <a href="https://MOONRAT.fun/#">Moon Rat
                                Finance</a>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'Footer',
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
