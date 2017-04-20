<template>
    <el-dialog title="客户信息设置" v-model="dxAlert.dialogVisible">
        <el-tabs v-model="activeName">
            <el-tab-pane label="UI" name="first">
                <el-row :gutter="20">
                    <el-col :span="8"><el-input v-model="inputHeight" placeholder="请输入高度PX"></el-input></el-col>
                    <el-col :span="8"><el-input v-model="inputWidth" placeholder="请输入宽度%"></el-input></el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="6"><el-checkbox v-model="shrink">可收缩</el-checkbox></el-col>
                    <el-col :span="6"><el-checkbox v-model="placeholder">占位显示</el-checkbox></el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="8"><el-input v-model="byMyselfOne" placeholder="自定义参数"></el-input></el-col>
                    <el-col :span="8"><el-input v-model="byMyselfTwo" placeholder="自定义参数"></el-input></el-col>
                    <el-col :span="8"><el-input v-model="byMyselfThree" placeholder="自定义参数"></el-input></el-col>
                    <el-col :span="8"><el-input v-model="byMyselfFour" placeholder="自定义参数"></el-input></el-col>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="配置管理" name="second">

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
    export default {
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
                byMyselfFour:""
            }
        },
        props: ['alert'],
        computed:
        mapGetters([
            'widgets',
            'dxAlert'
        ]),
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            changeAlert() {
                let listTitle=this.alert.listTitle;
                let listNum=this.alert.listNum;
                if(this.inputHeight !== ""){
                    this.widgets[listTitle][listNum].inputHeight = this.inputHeight;
                }
                if(this.inputWidth !== ""){
                    this.widgets[listTitle][listNum].inputWidth = this.inputWidth;
                }
                if(this.shrink !== ""){
                    this.widgets[listTitle][listNum].shrink = this.shrink;
                }
                if(this.placeholder !== ""){
                    this.widgets[listTitle][listNum].placeholder = this.placeholder;
                }
                if(this.byMyselfOne !== ""){
                    this.widgets[listTitle][listNum].byMyselfOne = this.byMyselfOne;
                }
                if(this.byMyselfTwo !== ""){
                    this.widgets[listTitle][listNum].byMyselfTwo = this.byMyselfTwo;
                }
                if(this.byMyselfThree !== ""){
                    this.widgets[listTitle][listNum].byMyselfThree = this.byMyselfThree;
                }
                if(this.byMyselfFour !== ""){
                    this.widgets[listTitle][listNum].byMyselfFour = this.byMyselfFour;
                }
            }
        }
    }



</script>

<style>
    
</style>