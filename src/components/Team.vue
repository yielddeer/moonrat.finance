<template>
    <section id="about">
        <div class="container" style="padding-top: 70px">
            <div class="row header-text text-center team-header">
                <div class="col-lg-12">
                    <h3>TE<span>A</span>M</h3>
                </div>
            </div>

            <div class="row team-pa">
                <div class="m-auto team-item text-center">
                    <img :src="require('@/assets/images/thuglife.png')" alt="team-member" class="img-fluid image-team">
                    <h3>Community</h3>
                </div>
            </div>

            <div class="row team-pa" style="padding-top: 10px!important;">
                <div class="col-lg-3 col-md-3 col-sm-4 m-auto team-item text-center">
                    <img :src="require('@/assets/images/thuglife.png')" alt="team-member" class="img-fluid image-team">
                    <h3>Alan</h3>
                    <p>DApp Specialist</p>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-4 m-auto team-item text-center">
                    <img :src="require('@/assets/images/thuglife.png')" alt="team-member" class="img-fluid image-team">
                    <h3>Stoic Citium</h3>
                    <p>Head Of Marketing</p>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-4 m-auto team-item text-center">
                    <img :src="require('@/assets/images/thuglife.png')" alt="team-member" class="img-fluid image-team">
                    <h3>DeaKil</h3>
                    <p>Product Developer</p>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-4 m-auto team-item text-center">
                    <img :src="require('@/assets/images/thuglife.png')" alt="team-member" class="img-fluid image-team">
                    <h3>King</h3>
                    <p>Artist</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Team',
        components: {},
        props: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
