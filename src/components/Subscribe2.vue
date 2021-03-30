<template>
    <section id="subscribe1">
        <div class="container" style="padding-top: 100px">
            <div class="row">
                <div class="col-lg-8 m-auto">
                    <div class="sub-main">
                        <div class="row">
                            <div class="col-lg-8 col-md-7">
                                <h3>Burn Address Transactions</h3>
                            </div>
                            <div class="col-lg-3 col-md-5 subscripe-btn">
                                <a @click="commingSoon()">Here!</a>
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
        name: 'Subscribe2',
        components: {},
        props: {},
        methods: {
            commingSoon() {
                this.$swal({
                    title: 'Coming Soon ...',
                    width: 400,
                    padding: '2em',
                    background: '#fff url(https://i.ibb.co/gwh2dbd/moon.png)',
                    backdrop: `
                                rgba(0, 0, 0, 0.5)
                                url("https://i.ibb.co/qFgF3yZ/moonrat-02.gif")
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
