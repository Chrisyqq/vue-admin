<template>
    <el-dialog title="客户信息设置" v-model="dxAlert.dialogVisible">
        <el-tabs v-model="activeName">
            <el-tab-pane label="UI" name="first">
                <el-row :gutter="20">
                    <el-col :span="8"><el-input v-model="inputHeight" placeholder="请输入高度PX"></el-input></el-col>
                    <el-col :span="8"><el-input v-model="inputWidth" placeholder="请输入宽度%"></el-input></el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="6"><el-checkbox @change="handleShrinkChange" v-model="shrink">可收缩</el-checkbox></el-col>
                    <el-col :span="6"><el-checkbox @change="handlePlaceholderChange" v-model="placeholder">占位显示</el-checkbox></el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="8"><el-input v-model="byMyselfOne" :placeholder="'自定义参数'"></el-input></el-col>
                    <el-col :span="8"><el-input v-model="byMyselfTwo" :placeholder="'自定义参数'"></el-input></el-col>
                    <el-col :span="8"><el-input v-model="byMyselfThree" :placeholder="'自定义参数'"></el-input></el-col>
                    <el-col :span="8"><el-input v-model="byMyselfFour" :placeholder="'自定义参数'"></el-input></el-col>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="输入数据" name="second">
                <el-row :gutter="20">
                    <el-col :span="12">
                        <div class="list flip-container" v-for="(item,key) in mustData">
                            <div class="flipper">
                                <div class="front">
                                    <div class="list-head">{{item.chineseName}}</div>
                                    <div class="list-middle">{{item.englishName}}</div>
                                </div>
                                <div class="back" @click="delDate(key)">删除</div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <el-input
                          placeholder="请选择"
                          icon="search"
                          v-model="key">
                        </el-input>
                        <div class="list-all">
                            <div class="list" v-for="(item, key) in filterShoppingList" @click="selected(key)">
                                <div class="front">
                                    <div class="list-head">{{item.chineseName}}</div>
                                    <div class="list-middle">{{item.englishName}}</div>
                                </div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-tab-pane>
        </el-tabs>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dxAlert.dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dxAlert.dialogVisible = false" v-on:click="changeAlert">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
    import { mapGetters } from 'vuex';
    import todoList from '../todoList/TodoList.vue';
    export default {
        props: ['alert'],
        data() {
            return {
                activeName: "first",
                inputHeight:"",
                inputWidth:"",
                shrink:"",
                placeholder:"",
                byMyselfOne:"",
                byMyselfTwo:"",
                byMyselfThree:"",
                byMyselfFour:"",
                mustData:[],
                key: ""
            }
        },
        components:{

        },
        computed: {
            widgets () {
                return this.$store.getters.widgets
            },
            dxAlert () {
                return this.$store.getters.dxAlert
            },
            inputData () {
                return this.$store.getters.inputData
            },
            filterShoppingList: function () {
                var key = this.key;
                var inputData = this.inputData;
                return inputData.filter(function (item) {
                    return item.chineseName.toLowerCase().indexOf(key.toLowerCase()) != -1 || item.englishName.toLowerCase().indexOf(key.toLowerCase()) != -1;
                });;
            }
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },

            changeAlert() {
                let listTitle=this.alert.listTitle;
                let listNum=this.alert.listNum;

                this.widgets[listTitle][listNum].inputHeight = this.inputHeight;
                this.widgets[listTitle][listNum].inputWidth = this.inputWidth;
                this.widgets[listTitle][listNum].shrink = this.shrink;
                this.widgets[listTitle][listNum].placeholder = this.placeholder;
                this.widgets[listTitle][listNum].byMyselfOne = this.byMyselfOne;
                this.widgets[listTitle][listNum].byMyselfTwo = this.byMyselfTwo;
                this.widgets[listTitle][listNum].byMyselfThree = this.byMyselfThree;
                this.widgets[listTitle][listNum].byMyselfFour = this.byMyselfFour;
                this.widgets[listTitle][listNum].mustData = this.mustData;
                console.log(this.$store)
            },
            // 排除警告这样操作 可以排除 第一次渲染的时候 对象找不到的情况 而且分开渲染 数据 多页面的加载速度也有提升
            comeIn() {
                let listTitle=this.alert.listTitle;
                let listNum=this.alert.listNum;

                this.inputHeight = this.widgets[listTitle][listNum].inputHeight;
                this.inputWidth = this.widgets[listTitle][listNum].inputWidth;
                this.shrink = this.widgets[listTitle][listNum].shrink;
                this.placeholder = this.widgets[listTitle][listNum].placeholder;
                this.byMyselfOne = this.widgets[listTitle][listNum].byMyselfOne;
                this.byMyselfTwo = this.widgets[listTitle][listNum].byMyselfTwo;
                this.byMyselfThree = this.widgets[listTitle][listNum].byMyselfThree;
                this.byMyselfFour = this.widgets[listTitle][listNum].byMyselfFour;
                this.mustData = this.widgets[listTitle][listNum].mustData;

            },
            handleShrinkChange(event) {
                if(event.target.checked){
                    this.placeholder=false;
                }
            },
            handlePlaceholderChange(event) {
                if(event.target.checked){
                    this.shrink=false;
                }
            },
            selected(key) {
                this.mustData.push(this.inputData[key]);
            },
            delDate(key) {
                this.mustData.splice(key,1);
            }
        }
    }



</script>

<style>
    .list-all{
        width: 100%;
        height: 225px;
        margin-top: 5px;
        overflow: scroll;
    }
    .list{
        position: relative;
        width: 100%;
        height: 36px;
        float: left;
        color: #ffffff;
        margin-bottom: 5px;
        transition:all 0.5s;
        -moz-transition:all 0.5s;
        -o-transition:all 0.5s;
        -webkit-transition:all 0.5s;
    }
    .list-head{
        width: 50%;
        float: left;
        text-align: center;
        background: #475669;
    }
    .list-middle{
        width: 50%;
        float: left;
        text-align: center;
        background: #99A9BF;
    }
    .flip-container {
    	perspective: 1000;
    }
    /* flip the pane when hovered */
    .flip-container:hover .front{
        width: 80%;
    }
    .flip-container:hover .back{
        width: 20%;

    }

    /* flip speed goes here */
    .flipper {
    	position: relative;
    }

    /* hide back of pane during swap */
    .front, .back {
        height: 36px;
    	line-height: 36px;
    	border-radius: 5px;
    	overflow: hidden;
        transform: width 0.2s;
        -moz-transition: width 0.2s; /* Firefox 4 */
        -webkit-transition: width 0.2s; /* Safari 和 Chrome */
        -o-transition: width 0.2s; /* Opera */
    }

    /* front pane, placed above back */
    .front {
        width: 100%;
        float: left;
        position: absolute;
        top: 0;
        left: 0;
    }

    /* back, initially hidden pane */
    .back {
    	width: 0%;
    	position: absolute;
        top: 0;
        right: 0;
        background: red;
        text-align: center;
        cursor: pointer;
     }
</style>