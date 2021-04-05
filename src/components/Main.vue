<template>
    <div class="padding-top-100">
        <test-paticles/>
        <banner/>
        <br>
        <div class="clock">

            <div class="title-clock">
                The Testnet Event Countdown
            </div>

            <flip-clock :options="option_clock"/>
        </div>
        <subscribe/>
        <over-view/>
        <tokenomics/>
        <subscribe2/>
        <time-line/>
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

    import {FlipClock} from '@mvpleung/flipclock';

    export default {
        name: 'Main',
        components: {
            TimeLine,
            TestPaticles,
            Team,
            Subscribe2,
            Tokenomics,
            OverView,
            Subscribe,
            Banner,
            FlipClock
        },
        props: {},
        data() {
            return {
                option_clock: {
                    time: new Date(2021, 3, 6, 14, 0, 0),
                    clockFace: 'DailyCounter',
                    countdown: true,
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

