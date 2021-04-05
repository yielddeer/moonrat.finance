<template>
    <section id="overview">
        <div class="container">
            <div class="row header-text text-center" id="features" style="padding-top: 150px">
                <div class="col-lg-12">
                    <h3>FEA<span>T</span>URES</h3>
                </div>
            </div>
            <div class="row over-pa">
                <div class="col-lg-9 col-sm-12 m-auto">
                    <div class="row">
                        <div class="col-lg-6 col-sm-6">
                            <div class="over-item txt-right unique-style3">
                                <img :src="require('@/assets/images/icon-01.png')" alt="banner-img" class="img-fluid image-icon">
                                <div class="break"></div>
                                <h3>Fair Launch & Community Built</h3>
                                <p>Community driven & fair launch. There is no pre-sale. Dev will add 80% of the token supply to LP on PancakeSwap and participate in the fair launch with everyone else.</p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-6">
                            <div class="over-item txt-left unique-style">
                                <img :src="require('@/assets/images/icon-02.png')" alt="banner-img" class="img-fluid image-icon">
                                <div class="break"></div>
                                <h3>Automatic Liquidity Pool</h3>
                                <p>4% of every transaction contributes toward automatically generating further liquidity
                                    on Pancake Swap. Benefiting long term for $MRAT holders the most!</p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-6">
                            <div class="over-item txt-right unique-style3">
                                <img :src="require('@/assets/images/icon-03.png')" alt="banner-img" class="img-fluid image-icon">
                                <div class="break"></div>
                                <h3>Earn $BNB by hodling $MRAT</h3>
                                <p>4% of every transaction is taken and re-distributed to all MOON RAT holders in $BNB.</p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-6">
                            <div class="over-item txt-left unique-style4">
                                <img :src="require('@/assets/images/icon-04.png')" alt="banner-img" class="img-fluid image-icon">
                                <div class="break"></div>
                                <h3>Anti Pump-Dump-Exist Whales</h3>
                                <p> Transactions (sell/buy) that trade more than 0.05% of the  total supply will be rejected. Whales who make a transfer (between 2 wallets) that is larger than 0,05% of the total supply will be charged for 2 BNB.</p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-6">
                            <div class="over-item txt-right unique-style2">
                                <img :src="require('@/assets/images/icon-05.png')" alt="banner-img" class="img-fluid image-icon">
                                <div class="break"></div>
                                <h3>RFI Static Rewards</h3>
                                <p>2% of every transaction is taken and re distributed to all $MRAT holders. The burn address is also a holder thus each transaction helps deflate the supply.</p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-6">
                            <div class="over-item txt-left unique-style4">
                                <img :src="require('@/assets/images/icon-06.png')" alt="banner-img" class="img-fluid image-icon">
                                <div class="break"></div>
                                <h3>Highly Secured</h3>
                                <p>All initial liquidity provided has been locked with UniCrypt. The contract owner has
                                    been renounced, leaving the contract trustless for the MOONRAT community.</p>
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
        name: 'OverView',
        props: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
