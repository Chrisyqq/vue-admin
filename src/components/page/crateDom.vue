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
                        <draggable id="list2" :list="widgets.list2" class="dragAra Grid"  :options="{group:{name:'people', put:true }}" @change="delWidget">
                            <div
                            class="Grid-cell"
                            v-for="(element, index)  in widgets.list2"
                            name="index"
                            :key="index"
                            v-bind:style="{flex:'0' + ' 0 ' + widgets.list2[index].inputWidth + '%', height: widgets.list2[index].inputHeight + 'px' }">
                                <div class="drag-change">
                                    <div id="dragRight" class="drag-right" @mousedown="changeStyle('list2',index)"></div>
                                    <div id="dragBottom" class="drag-bottom" @mousedown="changeStyle('list2',index)"></div>
                                    <div id="dragBoth" class="drag-both" @mousedown="changeStyle('list2',index)"></div>
                                </div>
                                <div class="Grid-cell-box">
                                    <el-button class="set-btn" @click="dxAlert.dialogVisible = true" v-on:click="changeAlert('list2',index)" type="success" size="mini">设置</el-button>
                                    <keep-alive v-if="widgets.list2[index].placeholder === false">
                                      <component :is="element.name">
                                      </component>
                                    </keep-alive>
                                </div>
                            </div>
                         </draggable>
                        <draggable id="list3" :list="widgets.list3" class="dragArea Grid"  :options="{group:{name:'people', put:true }}" @change="delWidget">
                            <div
                            class="Grid-cell"
                            v-for="(element, index)  in widgets.list3"
                            name="index"
                            :key="index"
                            v-bind:style="{flex:'0' + ' 0 ' + widgets.list3[index].inputWidth + '%', height: widgets.list3[index].inputHeight + 'px' }">
                                <div class="drag-change">
                                    <div id="dragRight" class="drag-right" @mousedown="changeStyle('list3',index)"></div>
                                    <div id="dragBottom" class="drag-bottom" @mousedown="changeStyle('list3',index)"></div>
                                    <div id="dragBoth" class="drag-both" @mousedown="changeStyle('list3',index)"></div>
                                </div>
                                <div class="Grid-cell-box">
                                    <el-button class="set-btn" @click="dxAlert.dialogVisible = true" v-on:click="changeAlert('list3',index)" type="success" size="mini">设置</el-button>
                                    <keep-alive v-if="widgets.list3[index].placeholder === false">
                                        <component :is="element.name">
                                        </component>
                                    </keep-alive>
                                </div>
                            </div>
                         </draggable>
                        <draggable id="list4" :list="widgets.list4" class="dragArea Grid"  :options="{group:{name:'people', put:true }}" @change="delWidget">
                            <div
                            class="Grid-cell"
                            v-for="(element, index)  in widgets.list4"
                            name="index"
                            :key="index"
                            v-bind:style="{flex:'0' + ' 0 ' + widgets.list4[index].inputWidth + '%', height: widgets.list4[index].inputHeight + 'px' }">
                                <div class="drag-change">
                                    <div id="dragRight" class="drag-right" @mousedown="changeStyle('list4',index)"></div>
                                    <div id="dragBottom" class="drag-bottom" @mousedown="changeStyle('list4',index)"></div>
                                    <div id="dragBoth" class="drag-both" @mousedown="changeStyle('list4',index)"></div>
                                </div>
                                <div class="Grid-cell-box">
                                    <el-button class="set-btn" @click="dxAlert.dialogVisible = true" v-on:click="changeAlert('list4',index)" type="success" size="mini">设置</el-button>
                                    <keep-alive v-if="widgets.list4[index].placeholder === false">
                                      <component :is="element.name">
                                      </component>
                                    </keep-alive>
                                </div>
                            </div>
                         </draggable>
                         <dxAlertBoxSet v-bind:alert="lalertM" ref="dxAlertMethod"></dxAlertBoxSet>
                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="widget-warehouse">
                    <div class="widget-warehouse-head">
                        <span>Widget库</span>
                    </div>
                    <div class="widget-warehouse-body">
                        <el-input icon="search" v-model="widgetSearch" placeholder="请输入内容"></el-input>
                        <draggable id="list1" :list="widgets.list1" class="dragArea widget-warehouse-list" :options="{group:{name:'people', pull:'add', put:true }}" @change="backWidget">
                            <div class="widget-warehouse-list-item" v-for="(element, index) in widgets.list1"  :key="index">
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
    import { mapGetters } from 'vuex';
    import barChart from '../charts/barChart.vue';
    import todoList from '../todoList/TodoList.vue';
    import radarChart from '../charts/radarChart.vue';
    import pieChart from '../charts/pieChart.vue';
    import dxAlertBoxSet from '../alertBox/dxAlertBoxSet.vue';
    import draggable from 'vuedraggable';
    import vPageTitle from '../common/pageTitle.vue';

    export default {
        data: () => ({
            dialogVisible: false,
            listStart: 5,
            widgetSearch:"",
            lalertM:{
                listTitle: "",
                listNum: ""
            }
        }),
        components:{
          barChart,todoList,radarChart,pieChart,vPageTitle,draggable,dxAlertBoxSet
        },
        computed:
            mapGetters([
                'widgets',
                'dxAlert'
        ]),
        methods: {

            add: function(){
                this.list.push();
            },
            replace: function(){
                this.list=[{name:'Edgard'}]
            },
            clone: function(el){
                return {
                    name : el.name + ' cloned'
                }


            },
            removeJob: function(jobs,index) {

            },
            delWidget: function(evt) {
            },
            changeAlert: function(name,index) {
                this.lalertM.listNum=index;
                this.lalertM.listTitle=name;
                this.$refs.dxAlertMethod.comeIn();
            },
            backWidget: function (evt){
                if(evt.removed){
                    this.widgets.list1.splice(evt.removed.oldIndex,0,{name:evt.removed.element.name,inputHeight:"200",inputWidth:"",shrink:"",placeholder:false,byMyselfOne:"",byMyselfTwo:"",byMyselfThree:"",byMyselfFour:"",mustData:[]});
                }
                if(this.widgets.list1.length>4){
                    this.widgets.list1.splice(evt.added.newIndex,1);
                }
            },
            changeStyle: function (title,num){
                var widgets = this.widgets
                var oDiv = event.target;
                var that = this;
                oDiv.parentNode.parentNode.setAttribute('draggable','false');
                var oldHeight = oDiv.parentNode.parentNode.style.height.substring(0,oDiv.parentNode.parentNode.style.height.length-2);
                var oldWidth = oDiv.parentNode.parentNode.offsetWidth;
                var elId = oDiv.getAttribute('id');
                var disX = event.clientX;
                var disY = event.clientY;
                var fatherWidth = oDiv.parentNode.parentNode.parentNode.offsetWidth;
                document.onmousemove = function(ev){
                    var l = event.clientX-disX;
                    var t = event.clientY-disY;
                    var moveWidth = parseInt(oldWidth) + parseInt(l);
                    var moveHeight = parseInt(oldHeight) + parseInt(t);
                    if(elId=='dragRight'){
                        if(55<moveWidth && moveWidth<=fatherWidth){
                            var type = "inputWidth";
                            var value = moveWidth/fatherWidth*100;
                            var all = {title,num,type,value}
                            that.$store.commit('changeDate',all);
                        }
                    }
                    if(elId=='dragBottom'){
                        if(30<moveHeight){
                            var type = "inputHeight";
                            var value = parseInt(oldHeight) +parseInt(t);
                            var all = {title,num,type,value}
                            that.$store.commit('changeDate',all);
                        }
                    }
                    if(elId=='dragBoth'){
                        if(55<moveWidth && moveWidth<=fatherWidth && 30<moveHeight){
                            var typeOne = "inputHeight";
                            var typeTwo = "inputWidth";
                            var valueOne = parseInt(oldHeight) +parseInt(t);
                            var valueTwo = moveWidth/fatherWidth*100;
                            var allOne = {title,num,typeOne,valueOne}
                            var allTwo = {title,num,typeTwo,valueTwo}
                            that.$store.commit('changeDateBoth',allOne);
                            that.$store.commit('changeDateBoth',allTwo);
                        }
                    }
                };
                document.onmouseup = function(){
                    document.onmousemove=null;
                    document.onmouseup=null;
                };
            }
        },
        directives :{
            dragChange:{
                inserted:function(el , binding){

                },
                update: function(el, binding, vnode, oldVnode){
                }
            },
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
        position: relative;
    }
    .Grid-cell {
        position: relative;
        flex: 1;
        height: 30px;
        border-radius: 5px;
        overflow: hidden;
    }
    .drag-change{

    }
    .drag-right{
        width: 2px;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        cursor: e-resize;
        z-index: 100;
    }
    .drag-bottom{
        width: 100%;
        height: 2px;
        position: absolute;
        bottom: 0;
        right: 0;
        cursor: s-resize;
        z-index: 100;
    }
    .drag-both{
        width: 5px;
        height: 5px;
        position: absolute;
        bottom: 0;
        right: 0;
        cursor: se-resize;
        z-index: 100;
    }
    .Grid-cell-box{
        background: #ffffff;
        border-radius: 5px;
        margin-left: 10px;
        overflow: hidden;
        height: 100%;
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
        right: 5px;
        z-index: 100;
    }
    .del-btn{
        position: absolute;
        top: 5px;
        right: 5px;
    }
</style>
