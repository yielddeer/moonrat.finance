<template>
    <div>
        <footer id="footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-sm-11">
                        <div class="footer-logo">
                            <a class="f-logo"><b>MoonPanda</b></a>

                            <p>MoonPanda is a community driven, fair launched DeFi project built on Binance Smart Chain
                                #BSC.
                                MoonPanda brings the most revolutionary mechanism to BSC ecosystem: Earn $BNB just by
                                holding $MPANDA token</p>

                            <div class="footer-social">
                                <a href="https://twitter.com/MoonPandaFinance" target="_blank">
                                    <i class="fa fa-twitter" aria-hidden="true"></i>
                                </a>
                                <a href="https://t.me/MoonPandaFinance" target="_blank">
                                    <i class="fa fa-telegram" aria-hidden="true"></i>
                                </a>
                                <a href="https://t.me/moonpanda_finance" target="_blank">
                                    <i class="fa fa-telegram" aria-hidden="true"></i>
                                </a>
                                <a href="https://medium.com/MoonPanda-Finance" target="_blank">
                                    <i class="fa fa-medium" aria-hidden="true"></i>
                                </a>
                                <a href="https://github.com/MoonPanda-Finance" target="_blank">
                                    <i class="fa fa-github" aria-hidden="true"></i>
                                </a>
                                <a href="mailto:hello@moonpanda.finance" target="_blank">
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
                                    <a href="https://bscscan.com/token/0x6D949f9297A522c0f97C232CC209a67Bd7CfA471"
                                       target="_blank">Contract
                                    </a>
                                </li>

                                <li>
                                    <a href="https://docs.moonpanda.finance" target="_blank">WhitePaper </a>
                                </li>
                                <li><a href="#"
                                       target="_blank">CMC</a>
                                </li>
                                <li><a href="https://www.coingecko.com/en/coins/moonpanda" target="_blank">CoinGecko</a>
                                </li>
                                <li>
                                    <a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x6d949f9297a522c0f97c232cc209a67bd7cfa471"
                                       target="_blank">PancakeSwap
                                    </a>
                                </li>
                                <li>
                                    <a href="https://dex.guru/token/0x6d949f9297a522c0f97c232cc209a67bd7cfa471"
                                       target="_blank">Dex.Guru
                                    </a>
                                </li>
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
                                <li><a href="https://medium.com/MoonPanda-Finance" target="_blank">Recent Mediums</a></li>
                                <li><a href="https://t.me/MoonPandaFinance" target="_blank">Join Telegram</a></li>
                                <li><a href="mailto:hello@moonpanda.finance">Contact Us</a></li>
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
                            <h2>Copyright © 2021. All rights reserved by <a href="https://moonpanda.fun/#">Moonpanda
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
        methods: {
            commingSoon() {
                this.$swal({
                    title: 'Coming Soon ...',
                    width: 400,
                    padding: '2em',
                    background: '#fff url(https://i.ibb.co/gwh2dbd/moon.png)',
                    backdrop: `
                                rgba(0, 0, 0, 0.5)
                                url("https://i.ibb.co/qFgF3yZ/moonpanda-02.gif")
                                left top
                                no-repeat
                              `
                });
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
