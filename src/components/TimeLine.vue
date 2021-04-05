<template>
    <section id="timeline">
        <div class="container">
            <div class="row header-text text-center about-header pb-5">
                <div class="col-lg-12">
                    <h3>ROA<span>D</span>MAP</h3>
                </div>
            </div>

            <div class="row roadmap-content">
                <div class="col-4 roadmap-image">
                    <div sticky-container style="width: 100%; height: 100%">
                        <div class="sticky" v-sticky="stickyEnabled" sticky-offset="{top: 0, bottom: 0}"
                             sticky-side="both" on-stick="onStick" sticky-z-index="20">
                            <img :src="require('@/assets/images/emotion_02.png')" width="100%" style="padding-top: 120px">
                        </div>
                    </div>
                </div>

                <div class="col-8 roadmap-text">
                    <vue-timeline-update
                            :date="new Date('2021-01-01')"
                            title="Protocol Initialized"
                            description="We prepared the main features and completed the R&D"
                            category="Q1 2021"
                            icon="code"
                            color="green"
                            theme="light"
                    />
                    <!-- Another update -->
                    <vue-timeline-update
                            :date="new Date('2021-04-09')"
                            title="Launch on Pancakeswap"
                            description="Fair launch, 80% of token supply will be added to PancakeSwap. Liquidity will be locked for 6 months."
                            category="Q2 2021"
                            icon="code"
                            color="green"
                            theme="light"
                    />

                    <vue-timeline-update
                            :date="new Date('2021-06-10')"
                            title="Partnership"
                            description="Partnership with listing sites: CoinMarketCap, CoinGecko, Blockfolio, and exchanges like BitMart"
                            category="Q3 2021"
                            icon="code"
                            color="green"
                            theme="light"
                    />

                    <vue-timeline-update
                            :date="new Date('2021-07-15')"
                            title="Marketing"
                            description="More marketing to promote the project."
                            category="Q4 2021"
                            icon="code"
                            color="green"
                            theme="light"
                    />
                    <vue-timeline-update
                            :date="new Date('2021-09-15')"
                            title="NFT Launching"
                            description="NFT launching. We will deliver NFT with Arts-come-later model."
                            category="Q4 2021"
                            icon="code"
                            color="green"
                            theme="light"
                    />
                    <vue-timeline-update
                            :date="new Date('2021-11-15')"
                            title="Betting Game"
                            description="Betting Game launching. You can earn real money by predicting the future price of crypto assets like BTC, ETH, and BNB (more cryptocurrencies come later)."
                            category="Q4 2021"
                            icon="code"
                            color="green"
                            theme="light"
                    />
                </div>


            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'TimeLine',
        props: {},
        data() {
            return {
                stickyEnabled: true
            }
        },
        methods: {
            onStick(data) {
                console.log(data);
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
