<template>
    <div class="padding-top-100">
        <test-paticles/>
        <banner/>
        <br>
        <subscribe/>
        <over-view/>
        <tokenomics/>
        <subscribe2/>
        <team/>
    </div>
</template>

<script>
    import Banner from "./Banner";
    import Subscribe from "./Subscribe";
    import OverView from "./OverView";
    import Tokenomics from "./Tokenomics";
    import Subscribe2 from "./Subscribe2";
    import Team from "./Team";
    import TestPaticles from "./TestPaticles";

    export default {
        name: 'Main',
        components: {
            TestPaticles,
            Team,
            Subscribe2,
            Tokenomics,
            OverView,
            Subscribe,
            Banner
        },
        props: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
