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
                        <el-button type="success" size="mini">保存并发布</el-button>
                    </div>
                    <div class="create-page-body">
                        <draggable element="span" v-model="list2" :options="dragOptions" :move="onMove">
                            <transition-group name="no" class="list-group" tag="ul">
                                <li class="list-group-item" v-for="element in list2" :key="element.order">
                                    <i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fixed=! element.fixed" aria-hidden="true"></i>
                                    {{element.name}}
                                    <span class="badge">{{element.order}}</span>
                                </li>
                            </transition-group>
                        </draggable>
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
                        <draggable class="list-group" element="ul" v-model="list" :options="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                            <transition-group type="transition" :name="'flip-list'">
                                <li class="list-group-item" v-for="element in list" :key="element.order">
                                    <i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fixed=element.fixed" aria-hidden="true"></i>
                                    {{element.name}}
                                    <span class="badge">{{element.order}}</span>
                                </li>
                            </transition-group>
                        </draggable>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>



</template>

<script>
    import draggable from 'vuedraggable'
    import barChart from '../charts/barChart.vue';
    import vPageTitle from '../common/pageTitle.vue';
    const message = [ 'vue.draggable', 'draggable', 'component', 'for', 'vue.js 2.0', 'based' , 'on', 'Sortablejs' ]
    export default {
        data () {
            return {
                list: message.map( (name,index) => {return {name, order: index+1, fixed: false}; }),
                list2:[],
                editable:true,
                isDragging: false,
                delayedDragging:false
            }
        },
        components:{
          barChart,vPageTitle,draggable
        },
        methods: {
          orderList () {
              this.list = this.list.sort((one,two) =>{return one.order-two.order; })
            },
            onMove ({relatedContext, draggedContext}) {
              const relatedElement = relatedContext.element;
              const draggedElement = draggedContext.element;
              return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
            }
        },
         computed: {
            dragOptions () {
              return  {
                animation: 0,
                group: 'description',
                disabled: !this.editable,
                ghostClass: 'ghost'
              };
            },
            listString(){
              return JSON.stringify(this.list, null, 2);
            },
            list2String(){
              return JSON.stringify(this.list2, null, 2);
            }
          },
          watch: {
            isDragging (newValue) {
              if (newValue){
                this.delayedDragging= true
                return
              }
              this.$nextTick( () =>{
                   this.delayedDragging =false
              })
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
    }
    .flip-list-move {
      transition: transform 0.5s;
    }

    .no-move {
      transition: transform 0s;
    }

    .ghost {
      opacity: .5;
      background: #C8EBFB;
    }

    .list-group {
      min-height: 20px;
      border:1px solid #000;
      height: 300px;
    }

    .list-group-item {
      cursor: move;
    }

    .list-group-item i{
      cursor: pointer;
    }
</style>
