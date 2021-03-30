<template>
    <div class="section-md padding-top-0">
        <div class="container">
            <div class="margin-bottom-70">

                <div class="row margin-top-70">
                    <div class="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                        <h1 class="font-weight-normal text-center">Gallery</h1>
                        <p>Bull Bear Finance is collectibles collection consisting of 13337 vector pop-art graphic NFTs.
                            Use the following gallery browser to explore them all or subselect based on various traits
                            of the graphics. </p>
                    </div>
                </div>


                <div class="row align-items-center">
                    <div class="col-12 margin-0 padding-0">
                        <hr>
                        <h4 class="text-center">Filters</h4>
                    </div>

                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <label class="my-1 mr-2" for="select_hiker">
                            <h6 class="text-center">Hitchhiker</h6>
                        </label>
                        <select class="custom-select my-1 mr-sm-2" id="select_hiker">
                            <option selected="" value="*">Any</option>
                            <option value="0">Astronaut</option>
                            <option value="1">Monkey</option>
                            <option value="2">Frog</option>
                            <option value="3">Racoon</option>
                            <option value="4">Wolf</option>
                            <option value="5">Fox</option>
                            <option value="6">Cat</option>
                            <option value="7">Lion</option>
                            <option value="8">Tiger</option>
                            <option value="9">Hamster</option>
                            <option value="10">Mouse</option>
                            <option value="11">Rabbit</option>
                            <option value="12">Bear</option>
                            <option value="13">Koala</option>
                            <option value="14">Panda</option>
                            <option value="15">Owl</option>
                            <option value="16">Money Mouth</option>
                            <option value="17">Screamy</option>
                            <option value="18">Boo</option>
                            <option value="19">Alien</option>
                            <option value="20">Poo</option>
                            <option value="21">Robot</option>
                            <option value="22">See-no-evil</option>
                            <option value="23">Wizard</option>
                            <option value="24">Vampire</option>
                            <option value="25">Zombie</option>
                            <option value="26">Facepalm</option>
                            <option value="27">F U</option>
                            <option value="28">Trekkie</option>
                            <option value="29">Magic 8 Ball</option>
                            <option value="30">Taco</option>
                            <option value="31">Pineapple</option>
                            <option value="32">Steak</option>
                            <option value="33">Joker</option>
                            <option value="34">Santa</option>
                            <option value="35">Yield Farmer</option>
                            <option value="36">Sushi</option>
                            <option value="37">Eggo</option>
                            <option value="38">Rainbow</option>
                            <option value="39">Inception</option>
                            <option value="40">Chad</option>
                            <option value="41">Elong</option>
                        </select>
                    </div>

                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <label class="my-1 mr-2" for="select_rocket">
                            <h6 class="text-center">Rocket</h6>
                        </label>
                        <select class="custom-select my-1 mr-sm-2" id="select_rocket">
                            <option selected="" value="*">Any</option>
                            <option value="0">Sturdy Satoshi</option>
                            <option value="1">Feisty Finney</option>
                            <option value="2">The Bold Brrrr</option>
                            <option value="3">HMS Nakamoto</option>
                            <option value="4">Space Surfer</option>
                        </select>
                    </div>

                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <label class="my-1 mr-2" for="select_win">
                            <h6 class="text-center">Window</h6>
                        </label>
                        <select class="custom-select my-1 mr-sm-2" id="select_win">
                            <option selected="" value="*">Any</option>
                            <option value="0">Circle</option>
                            <option value="1">Square</option>
                            <option value="2">Squircle</option>
                            <option value="3">Star</option>
                            <option value="4">Polygon</option>
                        </select>
                    </div>

                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <label class="my-1 mr-2" for="select_moon">
                            <h6 class="text-center">Moon</h6>
                        </label>
                        <select class="custom-select my-1 mr-sm-2" id="select_moon">
                            <option selected="" value="*">Any</option>
                            <option value="0">Full Moon</option>
                            <option value="1">Half Moon</option>
                            <option value="2">Blood Moon</option>
                        </select>
                    </div>

                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <label class="my-1 mr-2" for="select_pattern">
                            <h6 class="text-center">Pattern</h6>
                        </label>
                        <select class="custom-select my-1 mr-sm-2" id="select_pattern">
                            <option selected="" value="*">Any</option>
                            <option value="0">Square Wave</option>
                            <option value="1">Zig Zipper</option>
                            <option value="2">Saw Zag</option>
                            <option value="3">Straight Wave</option>
                            <option value="4">Circle Wave</option>
                            <option value="5">Eyelliptical</option>
                            <option value="6">Double Zag</option>
                            <option value="7">Life Line</option>
                            <option value="8">Binary Aztec</option>
                            <option value="9">None</option>
                        </select>
                    </div>

                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <label class="my-1 mr-2" for="select_pattern_size">
                            <h6 class="text-center">Pattern size</h6>
                        </label>
                        <select class="custom-select my-1 mr-sm-2" id="select_pattern_size">
                            <option selected="" value="*">Any</option>
                            <option value="0">3XL</option>
                            <option value="1">XL</option>
                            <option value="2">5XL</option>
                        </select>
                    </div>

                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <label class="my-1 mr-2" for="select_nopattern">
                            <h6 class="text-center">Has pattern?</h6>
                        </label>
                        <select class="custom-select my-1 mr-sm-2" id="select_nopattern">
                            <option value="*">Any</option>
                            <option value="0">Yes</option>
                            <option value="1">Nope</option>
                        </select>
                    </div>

                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <label class="my-1 mr-2" for="select_color">
                            <h6 class="text-center">Basecolor</h6>
                        </label>
                        <select class="custom-select my-1 mr-sm-2" id="select_color">
                            <option selected="" value="*">Any</option>
                            <option value="0">Aqua</option>
                            <option value="1">Azure</option>
                            <option value="2">Beige</option>
                            <option value="3">Blue</option>
                            <option value="4">Brown</option>
                            <option value="5">Cyan</option>
                            <option value="6">Dark Blue</option>
                            <option value="7">Dark Cyan</option>
                            <option value="8">Dark Grey</option>
                            <option value="9">Dark Green</option>
                            <option value="10">Dark Khaki</option>
                            <option value="11">Dark Magenta</option>
                            <option value="12">Dark Olive Green</option>
                            <option value="13">Dark Orange</option>
                            <option value="14">Dark Orchid</option>
                            <option value="15">Dark Red</option>
                            <option value="16">Dark Salmon</option>
                            <option value="17">Dark Violet</option>
                            <option value="18">Fuchsia</option>
                            <option value="19">Gold</option>
                            <option value="20">Green</option>
                            <option value="21">Indigo</option>
                            <option value="22">Khaki</option>
                            <option value="23">Light Blue</option>
                            <option value="24">Light Cyan</option>
                            <option value="25">Light Green</option>
                            <option value="26">Light Grey</option>
                            <option value="27">Light Pink</option>
                            <option value="28">Light Yellow</option>
                            <option value="29">Lime</option>
                            <option value="30">Magenta</option>
                            <option value="31">Maroon</option>
                            <option value="32">Navy</option>
                            <option value="33">Olive</option>
                            <option value="34">Orange</option>
                            <option value="35">Pink</option>
                            <option value="36">Purple</option>
                            <option value="37">Violet</option>
                            <option value="38">Red</option>
                            <option value="39">Yellow</option>
                        </select>
                    </div>

                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <label class="my-1 mr-2" for="select_palette">
                            <h6 class="text-center">Palette</h6>
                        </label>
                        <select class="custom-select my-1 mr-sm-2" id="select_palette">
                            <option selected="" value="*">Any</option>
                            <option value="0">Tetrade</option>
                            <option value="1">Contrast</option>
                            <option value="2">Triade</option>
                            <option value="3">Analogic</option>
                            <option value="4">Mono</option>
                        </select>
                    </div>


                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <label class="my-1 mr-2" for="select_blackwhite">
                            <h6 class="text-center">Black/White</h6>
                        </label>
                        <select class="custom-select my-1 mr-sm-2" id="select_blackwhite">
                            <option value="*">Any</option>
                            <option value="0">Nope</option>
                            <option value="1">Yes</option>
                        </select>
                    </div>

                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <label class="my-1 mr-2" for="select_dashed">
                            <h6 class="text-center">Dashed</h6>
                        </label>
                        <select class="custom-select my-1 mr-sm-2" id="select_dashed">
                            <option value="*">Any</option>
                            <option value="0">Nope</option>
                            <option value="1">Yes</option>
                        </select>
                    </div>

                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <label class="my-1 mr-2">
                            <h6 class="text-center" id="filterresults">13337 results</h6>
                        </label>
                        <button id="resetfilters" class="button button-lg button-dark" style="display:none;"
                                onclick="resetFilters()">Reset
                        </button>
                    </div>

                    <div class="col-12">
                        <hr>
                    </div>
                </div>

                <div class="row" id="data-container" style="opacity: 100; height: 757.922px;">
                    <div class="hoverbox-1 text-center col-md-2 col-sm-3 col-4 padding-10 nftthumb" data-token="6746">
                        <img :src="require('@/assets/images/lil-moon-rocket-1-thumb.png')" width="300"
                             height="423">
                        <div class="hover-content">
                            <h5>NFT #6746</h5>
                        </div>
                    </div>
                    <div class="hoverbox-1 text-center col-md-2 col-sm-3 col-4 padding-10 nftthumb" data-token="6747">
                        <img :src="require('@/assets/images/lil-moon-rocket-2-thumb.png')" width="300"
                             height="423">
                        <div class="hover-content">
                            <h5>NFT #6747</h5>
                        </div>
                    </div>
                    <div class="hoverbox-1 text-center col-md-2 col-sm-3 col-4 padding-10 nftthumb" data-token="6748">
                        <img :src="require('@/assets/images/lil-moon-rocket-3-thumb.png')" width="300"
                             height="423">
                        <div class="hover-content">
                            <h5>NFT #6748</h5>
                        </div>
                    </div>
                    <div class="hoverbox-1 text-center col-md-2 col-sm-3 col-4 padding-10 nftthumb" data-token="6749">
                        <img :src="require('@/assets/images/lil-moon-rocket-4-thumb.png')" width="300"
                             height="423">
                        <div class="hover-content">
                            <h5>NFT #6749</h5>
                        </div>
                    </div>
                    <div class="hoverbox-1 text-center col-md-2 col-sm-3 col-4 padding-10 nftthumb" data-token="6750">
                        <img :src="require('@/assets/images/lil-moon-rocket-5-thumb.png')" width="300"
                             height="423">
                        <div class="hover-content">
                            <h5>NFT #6750</h5>
                        </div>
                    </div>
                    <div class="hoverbox-1 text-center col-md-2 col-sm-3 col-4 padding-10 nftthumb" data-token="6751">
                        <img :src="require('@/assets/images/lil-moon-rocket-6-thumb.png')" width="300"
                             height="423">
                        <div class="hover-content">
                            <h5>NFT #6751</h5>
                        </div>
                    </div>
                    <div class="hoverbox-1 text-center col-md-2 col-sm-3 col-4 padding-10 nftthumb" data-token="6752">
                        <img :src="require('@/assets/images/lil-moon-rocket-7-thumb.png')" width="300"
                             height="423">
                        <div class="hover-content">
                            <h5>NFT #6752</h5>
                        </div>
                    </div>
                    <div class="hoverbox-1 text-center col-md-2 col-sm-3 col-4 padding-10 nftthumb" data-token="6753">
                        <img :src="require('@/assets/images/lil-moon-rocket-8-thumb.png')" width="300"
                             height="423">
                        <div class="hover-content">
                            <h5>NFT #6753</h5>
                        </div>
                    </div>
                    <div class="hoverbox-1 text-center col-md-2 col-sm-3 col-4 padding-10 nftthumb" data-token="6754">
                        <img :src="require('@/assets/images/lil-moon-rocket-9-thumb.png')" width="300"
                             height="423">
                        <div class="hover-content">
                            <h5>NFT #6754</h5>
                        </div>
                    </div>
                    <div class="hoverbox-1 text-center col-md-2 col-sm-3 col-4 padding-10 nftthumb" data-token="6755">
                        <img :src="require('@/assets/images/lil-moon-rocket-10-thumb.png')" width="300"
                             height="423">
                        <div class="hover-content">
                            <h5>NFT #6755</h5>
                        </div>
                    </div>
                    <div class="hoverbox-1 text-center col-md-2 col-sm-3 col-4 padding-10 nftthumb" data-token="6756">
                        <img :src="require('@/assets/images/lil-moon-rocket-11-thumb.png')" width="300"
                             height="423">
                        <div class="hover-content">
                            <h5>NFT #6756</h5>
                        </div>
                    </div>
                    <div class="hoverbox-1 text-center col-md-2 col-sm-3 col-4 padding-10 nftthumb" data-token="6757">
                        <img :src="require('@/assets/images/lil-moon-rocket-12-thumb.png')" width="300"
                             height="423">
                        <div class="hover-content">
                            <h5>NFT #6757</h5>
                        </div>
                    </div>
                    <div class="hoverbox-1 text-center col-md-2 col-sm-3 col-4 padding-10 nftthumb" data-token="6758">
                        <img :src="require('@/assets/images/lil-moon-rocket-13-thumb.png')" width="300"
                             height="423">
                        <div class="hover-content">
                            <h5>NFT #6758</h5>
                        </div>
                    </div>
                    <div class="hoverbox-1 text-center col-md-2 col-sm-3 col-4 padding-10 nftthumb" data-token="6759">
                        <img :src="require('@/assets/images/lil-moon-rocket-14-thumb.png')" width="300"
                             height="423">
                        <div class="hover-content">
                            <h5>NFT #6759</h5>
                        </div>
                    </div>
                    <div class="hoverbox-1 text-center col-md-2 col-sm-3 col-4 padding-10 nftthumb" data-token="6760">
                        <img :src="require('@/assets/images/lil-moon-rocket-15-thumb.png')" width="300"
                             height="423">
                        <div class="hover-content">
                            <h5>NFT #6760</h5>
                        </div>
                    </div>
                    <div class="hoverbox-1 text-center col-md-2 col-sm-3 col-4 padding-10 nftthumb" data-token="6761">
                        <img :src="require('@/assets/images/lil-moon-rocket-16-thumb.png')" width="300"
                             height="423">
                        <div class="hover-content">
                            <h5>NFT #6761</h5>
                        </div>
                    </div>
                    <div class="hoverbox-1 text-center col-md-2 col-sm-3 col-4 padding-10 nftthumb" data-token="6762">
                        <img :src="require('@/assets/images/lil-moon-rocket-17-thumb.png')" width="300"
                             height="423">
                        <div class="hover-content">
                            <h5>NFT #6762</h5>
                        </div>
                    </div>
                    <div class="hoverbox-1 text-center col-md-2 col-sm-3 col-4 padding-10 nftthumb" data-token="6763">
                        <img :src="require('@/assets/images/lil-moon-rocket-18-thumb.png')" width="300"
                             height="423">
                        <div class="hover-content">
                            <h5>NFT #6763</h5>
                        </div>
                    </div>
                </div>
                <div class="row margin-top-40">
                    <div class="col-12 text-center">
                        <div id="pagination-container" class="d-inline-block">
                            <div class="paginationjs">
                                <div class="paginationjs-pages">
                                    <ul>
                                        <li class="paginationjs-prev disabled"><a>«</a></li>
                                        <li class="paginationjs-page J-paginationjs-page active" data-num="1"><a>1</a>
                                        </li>
                                        <li class="paginationjs-page J-paginationjs-page" data-num="2"><a
                                                href="https://lilmoonrockets.com/gallery.html">2</a></li>
                                        <li class="paginationjs-page J-paginationjs-page" data-num="3"><a
                                                href="https://lilmoonrockets.com/gallery.html">3</a></li>
                                        <li class="paginationjs-page J-paginationjs-page" data-num="4"><a
                                                href="https://lilmoonrockets.com/gallery.html">4</a></li>
                                        <li class="paginationjs-page J-paginationjs-page" data-num="5"><a
                                                href="https://lilmoonrockets.com/gallery.html">5</a></li>
                                        <li class="paginationjs-ellipsis disabled"><a>...</a></li>
                                        <li class="paginationjs-page paginationjs-last J-paginationjs-page"
                                            data-num="741"><a href="https://lilmoonrockets.com/gallery.html">741</a>
                                        </li>
                                        <li class="paginationjs-next J-paginationjs-next" data-num="2"
                                            title="Next page"><a href="https://lilmoonrockets.com/gallery.html">»</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="row margin-top-40">
                    <div class="col-12 col-md-8 offset-md-2">
                        <p><a class="button button-xl button-cta button-fullwidth"
                              href="https://lilmoonrockets.com/gallery.html#" onclick="getLMR()">There are still some
                            Bull Bear Finance up for minting - CLICK</a></p>
                    </div>
                </div>
            </div>

        </div><!-- end container -->
    </div>
</template>

<script>
    export default {
        name: 'GallerySite',
        components: {},
        props: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
