<template>
    <div class="section-md padding-top-0">
        <div class="container">
            <div class="margin-bottom-70">

                <div class="row margin-top-70">
                    <div class="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                        <h1 class="font-weight-normal text-center">Wallet</h1>
                        <h4 class="text-center"><code id="current_account">0xLOADINGWALLETADDRESS</code><br>owns <a
                                href="https://etherscan.io/token/0x0DD5aaC633a92F50f55254cA91F98879307d92b5?a=0xLOADINGWALLETADDRESS"
                                target="_blank" class="user_lmr_supply_link"
                                title="Verify the NFT balance independently on Etherscan"><span class="user_lmr_supply"><i>loading LMR NFT balance</i></span></a>
                            and
                            <a href="https://etherscan.io/token/0x0DD5aaC633a92F50f55254cA91F98879307d92b5?a=0xLOADINGWALLETADDRESS"
                               target="_blank" class="user_nyr_supply_link"
                               title="Verify the NYR balance independently on Etherscan"><span
                                    class="user_nyr_supply"><i>loading NYR balance</i></span></a></h4>
                    </div>
                </div>

                <div class="row" id="data-container">

                </div>
                <div class="row margin-top-40">
                    <div class="col-12 text-center">
                        <div id="pagination-container" class="d-inline-block"></div>
                    </div>
                </div>

                <div class="row margin-top-40">
                    <div class="col-md-4 offset-md-2">
                        <a class="button button-xl button-cta button-fullwidth"
                           href="https://lilmoonrockets.com/wallet.html#" onclick="sendNyr()">Send NYR Tokens</a>
                    </div>
                    <div class="col-md-4">
                        <a class="button button-xl button-cta button-fullwidth"
                           href="https://lilmoonrockets.com/wallet.html#" onclick="batch_claimNYR()">Batch Claim NYR
                            Tokens</a>
                    </div>

                    <div class="col-12 col-md-8 offset-md-2">
                        <p><a class="button button-xl button-cta button-fullwidth"
                              href="https://lilmoonrockets.com/wallet.html#" onclick="getLMR()">Purchase Bull Bear Finance(s)</a></p>
                    </div>
                </div>
            </div>


        </div><!-- end container -->
    </div>
</template>

<script>
    export default {
        name: 'WalletSite',
        components: {},
        props: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
