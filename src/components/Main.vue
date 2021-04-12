<template>
    <div class="padding-top-100">
        <test-paticles/>
        <banner/>
        <br>
<!--        <div class="clock">-->

<!--            <div class="title-clock">-->
<!--                The Mainnet Event Countdown-->
<!--            </div>-->

<!--&lt;!&ndash;            <flip-clock ref="flipclock" :options="option_clock"/>&ndash;&gt;-->
<!--        </div>-->
        <subscribe/>
        <over-view/>
        <tokenomics/>
        <subscribe2/>
        <time-line/>
        <f-a-q/>
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
    import TimeLine from "./TimeLine";
    import FAQ from "./FAQ";

    // import {FlipClock} from '@mvpleung/flipclock';

    export default {
        name: 'Main',
        components: {
            FAQ,
            TimeLine,
            TestPaticles,
            Team,
            Subscribe2,
            Tokenomics,
            OverView,
            Subscribe,
            Banner
            // FlipClock
        },
        props: {},
        data() {
            return {
                option_clock: {
                    time: 0,
                    clockFace: 'DailyCounter',
                    countdown: true,
                }
            }
        },
        mounted() {
            let now = new Date()

            let y = now.getUTCFullYear()
            let m = now.getUTCMonth()
            let d = now.getUTCDate()
            let h = now.getUTCHours()
            let mi = now.getUTCMinutes()
            let s = now.getUTCSeconds()

            var current_date = new Date(Date.UTC(y, m, d, h, mi, s))
            let target_date = new Date(Date.UTC(2021, 3, 12, 7, 0, 0))

            let diff = target_date.getTime() - current_date.getTime()

            if (diff > 0) {
                this.option_clock.time = diff / 1000
                this.$forceUpdate()
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

