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
                            :date="new Date('2021-03-30')"
                            title="Protocol Initialized"
                            description="We have successfully onboarded and confirmed a DogeCoin trading pair with Bibipom. We have also successfully begun integration process with WhiteBit [Imminent] and began legal paperwork with Bitmart. Our team size has doubled and our marketing campaign has begun."
                            category="Q1 2021"
                            icon="code"
                            color="green"
                            theme="light"
                    />
                    <!-- Another update -->
                    <vue-timeline-update
                            :date="new Date('2021-06-30')"
                            title="The Initial Push"
                            description="The Whitebit tokenomics integration will be completed along with the completion of the SafeMoon App, Wallet, and Game(s). The Bitmart integration with tokenomics will also be completed in this quarter. We will begin architecting the NFT Exchange as well as video-game integrations. We will be integrating SafeMoon with African Markets in addition to setting up a Charity drive and charity vote. We will be exploring other exchanges (i.e. Binance) and begin architecting the SafeMoon Exchange. We will be expanding the team by 35% and establish a UK/Ireland office. We will be architecting a crypto educational app as well as onboarding new partners."
                            category="Q2 2021"
                            icon="code"
                            color="green"
                            theme="light"
                    />

                    <vue-timeline-update
                            :date="new Date('2021-09-30')"
                            title="Holding the Line"
                            description="We will finish our crypto educational app and begin our own charity project. We will begin a community listing donation raise for several exchanges (i.e. Coinbase, Binance, Kraken). We will finish our NFT exchange and release our first video game with SafeMoon integrated. We will be expanding the team by 25% and do a community meetup (pending covid restrictions). We will also be integrating with other large exchanges (I.e. Binance, Mandala)."
                            category="Q3 2021"
                            icon="code"
                            color="green"
                            theme="light"
                    />

                    <vue-timeline-update
                            :date="new Date('2021-12-30')"
                            title="To the Moon!"
                            description="We will finish the SafeMoon Exchange and our charity project. We will finish integrations with our first African market and begin the next integrations with additional African markets. We will create an African based SafeMoon Office and begin hiring in those markets to create jobs. We will be taking donations for our next charity project and begin a vote on the next project as well. We will be establishing a SafeMoon Scholarship in this quarter as well."
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
