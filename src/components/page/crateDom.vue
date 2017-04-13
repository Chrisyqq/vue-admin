<template>
    <div >
        <v-pageTitle vtitle="场景建模"></v-pageTitle>
        <el-row>
            <el-col :span="24">
                <div class="grid-content dx-edit-pd grid-content-right">
                    <el-button size="small">保存</el-button>
                    <el-button type="primary" size="small">保存并发布</el-button>
                </div>
            </el-col>
        </el-row>

        <el-row :gutter="20">
            <el-col :span="18">
                <div class="create-page">
                    <div class="create-page-head">
                        <span>账单分析(bill_analysis)</span>
                        <el-button type="success" size="mini">修改名称与编码</el-button>
                    </div>
                    <div class="create-page-body">
                        <h2>List 1</h2>
                        <draggable id="list2" :list="list2" class="dragArea Grid"  :options="{group:{name:'people', put:true }}"@change="log">
                            <div class="Grid-cell" v-for="(element, index)  in list2"  :key="index">
                                {{element.name}}
                                <el-button class="set-btn" @click="dialogVisible = true" type="success" size="mini">设置</el-button>
                                <el-button class="del-btn" v-on:click="removeJob(list2,index)" type="success" size="mini">删除</el-button>
                                <keep-alive>
                                  <component :is="element.name">
                                  </component>
                                </keep-alive>
                            </div>
                         </draggable>

                        <h2>List 2</h2>
                        <draggable id="list3" :list="list3" class="dragArea Grid"  :options="{group:{name:'people', put:true }}"@change="log">
                            <div class="Grid-cell" v-for="(element, index)  in list3"  :key="index">
                                {{element.name}}
                                <el-button class="set-btn" @click="dialogVisible = true" type="success" size="mini">设置</el-button>
                                <el-button class="del-btn" v-on:click="removeJob(list3,index)" type="success" size="mini">删除</el-button>
                                <keep-alive>
                                  <component :is="element.name">
                                  </component>
                                </keep-alive>
                            </div>
                         </draggable>

                        <h2>List 3</h2>
                        <draggable id="list4" :list="list4" class="dragArea Grid"  :options="{group:{name:'people', put:true }}"@change="log">
                            <div class="Grid-cell" v-for="(element, index)  in list4"  :key="index">
                                {{element.name}}
                                <el-button class="set-btn" @click="dialogVisible = true" type="success" size="mini">设置</el-button>

                                <el-button class="del-btn" v-on:click="removeJob(list4,index)" type="success" size="mini">删除</el-button>
                                <keep-alive>
                                  <component :is="element.name">
                                  </component>
                                </keep-alive>
                            </div>
                         </draggable>

                        <el-dialog title="客户信息设置" v-model="dialogVisible" size="tiny">
                            <el-tabs v-model="activeName" @tab-click="handleClick">
                                <el-tab-pane label="UI" name="first">
                                    <el-row :gutter="20">
                                        <el-col :span="8"><el-input v-model="input" placeholder="请输入内容"></el-input></el-col>
                                        <el-col :span="8"><el-input v-model="input" placeholder="请输入内容"></el-input></el-col>
                                    </el-row>
                                    <el-row :gutter="20">
                                        <el-col :span="6"><el-checkbox v-model="checked">备选项</el-checkbox></el-col>
                                        <el-col :span="6"><el-checkbox v-model="checked">备选项</el-checkbox></el-col>
                                    </el-row>
                                    <el-row :gutter="20">
                                        <el-col :span="6"><el-color-picker v-model="color1"></el-color-picker></el-col>
                                        <el-col :span="6"><el-color-picker v-model="color1"></el-color-picker></el-col>
                                    </el-row>
                                </el-tab-pane>
                                <el-tab-pane label="配置管理" name="second">

                                </el-tab-pane>
                                <el-tab-pane label="锚点" name="third">

                                </el-tab-pane>
                            </el-tabs>
                            <span slot="footer" class="dialog-footer">
                                <el-button @click="dialogVisible = false">取 消</el-button>
                                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                            </span>
                        </el-dialog>
                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="widget-warehouse">
                    <div class="widget-warehouse-head">
                        <span>Widget库</span>
                    </div>
                    <div class="widget-warehouse-body">
                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                        <draggable id="list1" :list="list1" class="dragArea widget-warehouse-list" :options="{group:{name:'people', pull:'clone', put:false }}" @change="log">
                            <div class="widget-warehouse-list-item" v-for="(element, index) in list1"  :key="index">
                                {{element.name}} {{index}}
                            </div>
                         </draggable>
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
    import dxAlertBoxSet from '../alertBox/dxAlertBoxSet.vue';
    import draggable from 'vuedraggable';
    import vPageTitle from '../common/pageTitle.vue';
    export default {
        data: () => ({
            list1:[{name:"barChart", id:1},
                    {name:"todoList", id:2},
                    {name:"radarChart", id:3},
                    {name:"pieChart", id:4} ],
            list2:[{name:"pieChart", id:5},
                    {name:"todoList", id:6},
                    {name:"todoList", id:7} ],
            list3:[{name:"pieChart", id:8},
                    {name:"todoList", id:9},
                    {name:"todoList", id:10} ],
            list4:[{name:"todoList", id:8},
                    {name:"todoList", id:9},
                    {name:"pieChart", id:10} ],
            dialogVisible: false,
        }),
        components:{
          barChart,todoList,radarChart,pieChart,vPageTitle,draggable
        },
        methods: {
            add: function(){
                this.list.push({name:'Juan'});
            },
            replace: function(){
                this.list=[{name:'Edgard'}]
            },
            clone: function(el){
                return {
                    name : el.name + ' cloned'
                }
            },
            removeJob: function(jobs, index) {
                // Remove job from GUI
                jobs.splice(index, 1);
            },
            log: function (evt){
                console.log(evt)
            }
        }
    }
</script>

<style scoped>
    ul{
        padding: 0;
    }
    li{
       list-style-type :none;
    }
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
    .dx-edit-pd{
        padding: 14px;
    }
    .grid-content {
        border-radius: 4px;
    }
    .grid-content-right{
        text-align: right;
    }
    .create-page{
        min-height:500px;
        border-radius: 5px;
        border: 1px solid #C0CCDA;
        overflow: hidden;
    }
    .create-page-head{
        height: 40px;
        line-height: 40px;
        background: #C0CCDA;
        padding-left: 10px;
        padding-right: 10px;
    }
    .create-page-head span{
        flow: left;
        color: #ffffff;
        font-size: 14px;
        margin-right: 10px;
    }
    .create-page-body{
        padding: 10px;
    }
    .widget-warehouse{
        min-height:500px;
        border-radius: 5px;
        border: 1px solid #99A9BF;
        overflow: hidden;
    }
    .widget-warehouse-head{
        height: 40px;
        line-height: 40px;
        background: #99A9BF;
        padding-left: 10px;
        padding-right: 10px;
    }
    .widget-warehouse-head span{
        flow: left;
        color: #ffffff;
        font-size: 14px;
    }
    .widget-warehouse-body{
        padding: 10px;
        height: 100%;
    }
    .Grid {
        display: flex;
        flex-wrap: row wrap;
        padding-right: 10px;
        margin-top: 10px;
        min-height: 200px;
    }
    .Grid-cell {
        position: relative;
        flex: 1;
        height: 30px;
        min-height: 200px;
        border-radius: 5px;
        background: #ffffff;
        overflow: hidden;
        margin-left: 10px;
        -webkit-transition: height 0.2s ease,flex 0.2s ease; /* For Safari 3.1 to 6.0 */
        transition: height 0.2s ease,flex 0.2s ease;
    }
    .widget-warehouse-list{
        min-height: 400px;
        background: #ffffff;
        border-radius: 5px;
        margin-top: 10px;
        padding: 10px;
    }
    .widget-warehouse-list-item{

        height: 40px;
        line-height: 40px;
        padding: 10px;
        background: #99A9BF;
        border-radius: 5px;
        margin-bottom: 5px;
        color: #ffffff;
    }
    .set-btn{
        position: absolute;
        top: 5px;
        right: 65px;
    }
    .del-btn{
        position: absolute;
        top: 5px;
        right: 5px;
    }
</style>
