<template>
    <section id="faq">
        <div class="container" style="padding-top: 70px">
            <div class="row header-text text-center team-header">
                <div class="col-lg-12">
                    <h3>F<span>A</span>Q</h3>
                </div>
            </div>

            <div class="faq-content">
                <el-collapse v-model="activeNames" @change="handleChange">
                    <el-collapse-item v-for="(item,index) in data_faq" :title="item.title" :key="index" :name="index">
                        <div v-html="item.desc">
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </div>


        </div>
    </section>
</template>

<script>
    export default {
        name: 'FAQ',
        components: {},
        props: {},
        data() {
            return {
                activeNames: [0],
                data_faq: [
                    {
                        title: 'How many BNB can I claim?',
                        desc: 'You can claim the amount of the BNB based on the ratio of $MRAT you hold/the total BNB pool. <br> For example, you hold 1% of $MRAT, you can withdraw 1% of the BNB reward pool.'
                    },
                    {
                        title: 'What is the BNB pool?',
                        desc: '4% of every transaction is taken and re-distributed to all MOON RAT holders in $BNB. This amount of BNB called the BNB pool.'
                    },
                    {
                        title: 'What if I don’t claim BNB reward in my cycle?',
                        desc: 'If you don’t claim at your cycle and other holders claim, the BNB pool will reduce. <br> So then the ratio of your $MRAT/BNB pool reduces as well. That’s why you should claim as soon as your cycle is ready '
                    }
                ]
            }
        },
        methods: {
            handleChange(val) {
                console.log(val);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .faq-content {
        padding: 40px 100px;
        background-color: white;
        margin-top: 70px;
        border-radius: 10px;
        box-shadow: 0 31px 35px rgb(0 0 0 / 10%);
    }

</style>
