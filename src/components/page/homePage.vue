<template>
    <div >
        <v-pageTitle vtitle="账单分析"></v-pageTitle>
        <el-row>
            <el-col :span="24">
                <div class="dx-widget-all">
                    <div class="Grid" v-for="(item, index) in widgets" v-if="index !== 'list1'">
                        <div v-for="(grid, index) in item" class="Grid-cell" v-bind:style="{height: grid.inputHeight + 'px' ,flex:'0' + ' 0 ' + grid.inputWidth + '%',}">
                            <div class="Grid-cell-box">
                                <el-button v-if="grid.shrink === true" type="primary" size="small" v-on:click="ifClick(item.length)">最小化</el-button>
                                <keep-alive v-if="grid.placeholder === false">
                                  <component :is="grid.name">
                                  </component>
                                </keep-alive>
                            </div>

                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>



</template>

<script>
    import { mapGetters } from 'vuex'
    import barChart from '../charts/barChart.vue';
    import todoList from '../todoList/TodoList.vue';
    import radarChart from '../charts/radarChart.vue';
    import pieChart from '../charts/pieChart.vue';
    import vPageTitle from '../common/pageTitle.vue';
    import homePage from '../page/homePage.vue';
    export default {
        data: () => ({
        }),
        components:{
            vPageTitle, homePage,barChart,pieChart,radarChart,todoList
        },
        computed:
            mapGetters([
                'widgets'
            ]),
        methods: {
            ifClick: function(length){
                if(length>1){
                    if(event.target.tagName=='BUTTON'){
                        if(event.target.textContent=='最大化'){
                            event.target.parentNode.className='Grid-cell';
                            event.target.textContent='最小化';
                        }else{
                            event.target.parentNode.className+=' Grid-width-none';
                            event.target.textContent='最大化';
                        }
                    }else{
                        if(event.target.textContent=='最大化'){
                            event.target.parentNode.parentNode.className='Grid-cell';
                            event.target.textContent='最小化';
                        }else{
                            event.target.parentNode.parentNode.className+=' Grid-width-none';
                            event.target.textContent='最大化';
                        }

                    }
                }else{
                    if(event.target.tagName=='BUTTON'){
                        if(event.target.textContent=='最大化'){
                            event.target.parentNode.className='Grid-cell';
                            event.target.textContent='最小化';
                        }else{
                            event.target.parentNode.className+=' Grid-height-none';
                            event.target.textContent='最大化';
                        }
                    }else{
                        if(event.target.textContent=='最大化'){
                            event.target.parentNode.parentNode.className='Grid-cell';
                            event.target.textContent='最小化';
                        }else{
                            event.target.parentNode.parentNode.className+=' Grid-height-none';
                            event.target.textContent='最大化';
                        }

                    }
                }
            }
        }
    }
</script>

<style scoped>
    .el-col{
        margin-bottom:16px;
    }
    .material-icons{
        font-size:80px;
        color:#ddd;
    }

    .cart-string{
        height:100px;
        padding-top:10px;
        font-size:1.1rem;

    }
    .bg-purple-dark {
        background: #e5e9f2;
    }
    .dx-edit-pd{
        padding: 14px;
    }
    .grid-content {
        border-radius: 4px;
    }
    .grid-content-right{
        text-align: right;
    }
    .bg-purple{
        border: 1px solid #e5e9f2;
        min-height: 300px;
    }
    .dx-edit-head{
        padding-right: 20px;
        padding-left: 20px;
        height: 40px;
        line-height: 40px;
        background: #e5e9f2;
    }
    .dx-edit-head span{
        margin-right: 10px;
        float: left;
    }
    .dx-widget-all{
        width: 100%;
        border-radius: 5px;
        border: 1px solid #e5e9f2;
        min-height: 800px;
    }
    .dx-widget-father{
        display: flex;
        display: -webkit-flex; /* Safari */
        width: 100%;
        flex-flow: row;
        flex-wrap: wrap;
    }
    .dx-widget-sun-one{
        flex-direction: column;
        flex: 4;
        background: #e5e9f2;
    }
    .dx-widget-sun-two{
        flex-direction: column;
        flex: 1;
        background: pink;
    }
    .dx-widget-sun-three{
        flex-direction: column;
        flex: 1;
        background: black;
    }
    .Grid {
        display: flex;
        flex-wrap: row wrap;
        padding-right: 10px;
        margin-top: 10px;
    }

    .Grid-cell {
        flex: 1;
        height: 30px;
        overflow: hidden;
        border-radius: 5px;
        -webkit-transition: height 0.2s ease,flex 0.2s ease; /* For Safari 3.1 to 6.0 */
        transition: height 0.2s ease,flex 0.2s ease;
    }
    .Grid-cell-box{
        background: #ffffff;
        border-radius: 5px;
        margin-left: 10px;
    }
    .Grid-width-none{
        -webkit-transition: flex 0.2s ease; /* For Safari 3.1 to 6.0 */
        transition: flex 0.2s ease;
        flex: none !important;
        width: 50px !important;
    }
    .Grid-height-none{
        -webkit-transition: height 0.2s ease; /* For Safari 3.1 to 6.0 */
        transition: height 0.2s ease;
        height: 30px!important;
    }


</style>
