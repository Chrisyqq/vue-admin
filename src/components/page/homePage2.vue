<template>
    <div >
        <v-pageTitle vtitle="show">show</v-pageTitle>

        <el-row>
            <el-col :span="24">
                <div class="dx-widget-all">
                    <div class="Grid">
                        <div class="Grid-cell" v-for="item in widget" v-bind:style="{height: item.height + 'px' ,width: item.width + '%'}">

                                    <el-button v-if="item.singerSmall === 'true'" type="primary" size="small" @click.active="singerSmallClick">最小化</el-button>
                                    <el-button v-if="item.multipleSmall === 'true'" type="primary" size="small" @click.active="multipleSmallClick">最小化</el-button>
                                    <keep-alive>
                                      <component :is="item.name">
                                      </component>
                                    </keep-alive>

                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>


    </div>



</template>

<script>
    import barChart from '../charts/barChart.vue';
    import todoList from '../todoList/TodoList.vue';
    import radarChart from '../charts/radarChart.vue';
    import pieChart from '../charts/pieChart.vue';
    import vPageTitle from '../common/pageTitle.vue';
    import homePage from '../page/homePage.vue';
    export default {
        data: () => ({
            widget: [
                {
                    width : '30',
                    height : '450',
                    singerSmall : 'false',
                    multipleSmall : 'false',
                    color: "green",
                    name: "todoList"
                },
                {
                    width : '30',
                    height : '450',
                    singerSmall : 'false',
                    multipleSmall : 'true',
                    color: "pink",
                    name: "radarChart"

                },
                {
                    width : '30',
                    height : '450',
                    singerSmall : 'false',
                    multipleSmall : 'true',
                    color: "green",
                    name: "radarChart"
                },
                {
                    width : '30',
                    height : '450',
                    singerSmall : 'false',
                    multipleSmall : 'true',
                    color: "pink",
                    name: "pieChart"
                },
                {
                    width : '50',
                    height : '450',
                    singerSmall : 'true',
                    multipleSmall : 'false',
                    color: "green",
                    name: "barChart"
                }
            ]
        }),
        components:{
            vPageTitle, homePage,barChart,pieChart,radarChart,todoList
        },
        methods: {
            singerSmallClick: function (event) {
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
            },
            multipleSmallClick: function (event) {
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
        flex-flow: row wrap;
        margin-top: 10px;
    }

    .Grid-cell {
        margin-top: 10px;
        height: 30px;
        overflow: hidden;
        -webkit-transition: height 0.2s ease,flex 0.2s ease; /* For Safari 3.1 to 6.0 */
        transition: height 0.2s ease,flex 0.2s ease;
    }
    .Grid-cell-all{
        height: 100%;
        padding-left: 5px;
        padding-right: 5px;
        overflow: hidden;
    }
    .Grid-cell-all-background{
        padding-left: 5px;
        padding-right: 5px;
        background: #ffffff;
        border-radius: 5px;
        height: 100%;
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
