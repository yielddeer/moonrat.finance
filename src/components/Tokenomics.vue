<template>

    <section id="tokenomics">
        <div class="container" style="padding-top: 100px">
            <div class="row header-text text-center about-header">
                <div class="col-lg-12">
                    <h3>TOKE<span>N</span>OMICS</h3>
                </div>
            </div>
            <div class="row about-pa">
                <div class="col-lg-10 col-md-12 m-auto about-item">
                    <div class="row">
                        <div class="col-lg-4 col-sm-8 m-sm-auto col-md-5 text-center">
                            <div class="about-img ai-one">
                                <img :src="require('@/assets/images/MoonRat_3x.png')" alt="about-img" class="img-fluid">
                            </div>
                        </div>
                        <div class="col-lg-1 col-md-1"></div>
                        <div class="col-lg-7 col-md-6 tokenomic-content">
                            <div class="about-txt">
                                <h3 style="color:#04cd33;">Token Stuff</h3>
                                <p>Total Supply: 1 Quadrillion MOON RAT<br>
                                    <!-- Circulating Supply: 973,840,412,032,907 $MRAT<br>
                                    Holders:  $MRAT<br> -->
                                </p>
                                <h3 style="color:#04cd33;" class="mt-5">Burn Schedule</h3>
                                <p>Total MOON RAT Burned:  $MRAT</p>
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
        name: 'Tokenomics',
        components: {},
        props: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
