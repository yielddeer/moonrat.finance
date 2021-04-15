<template>
    <section id="branding">
        <div class="container">

            <div class="part-1 mt-5">
                <h3>
                    Branding
                </h3>
                <p class="mt-2">
                    Please do not edit, change, distort, recolor, or reconfigure the moonpanda logo. Adjusting the size
                    is fine as long as the original aspect ratio is maintained. These may be used to promote moonpanda on
                    your website, social media, and other platforms.
                </p>
            </div>

            <div class="part-2 mt-5">
                <h3>
                    moonpanda logo
                </h3>
                <div class="mt-2">
                    <div class="img-wrapper">
                        <img :src="require('@/assets/images/MoonPanda_2x.png')">
                    </div>
                </div>
            </div>

            <div class="part-2 mt-5">
                <h3>
                    Moon logo
                </h3>
                <div class="mt-2">
                    <div class="img-wrapper">
                        <img :src="require('@/assets/images/moon.png')">
                    </div>
                </div>
            </div>

            <div class="part-2 mt-5">
                <h3>
                    moonpanda & BNB 
                </h3>
                <div class="mt-2" style="display: flex; flex-wrap: wrap; justify-content: space-between">
                    <div class="img-wrapper mb-2">
                        <img :src="require('@/assets/images/RatBNB.png')">
                    </div>

                    <div class="img-wrapper mb-2">
                        <img :src="require('@/assets/images/RatBNB2.png')">
                    </div>

                    <div class="img-wrapper mb-2">
                        <img :src="require('@/assets/images/RatBNB3.png')">
                    </div>

                </div>
            </div>

            <div class="part-2 mt-5">
                <h3>
                    Our Colors
                </h3>
                <div class="mt-2" style="display: flex; flex-wrap: wrap; justify-content: space-between">
                    <div class="img-wrapper color-1 mb-2">
                        <h2 style="color: white">#00CAC4</h2>
                    </div>

                    <div class="img-wrapper color-2 mb-2">
                        <h2 style="color: white">#46ABF8</h2>
                    </div>

                    <div class="img-wrapper color-3 mb-2">
                        <h2 style="color: white">#04CD33</h2>
                    </div>

                </div>
            </div>


        </div>
    </section>
</template>

<script>
    export default {
        name: 'Branding',
        components: {},
        props: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
