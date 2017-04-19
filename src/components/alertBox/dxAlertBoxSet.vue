<template>
    <el-dialog title="客户信息设置" v-model="dxAlert.dialogVisible">
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
            <el-button @click="dxAlert.dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dxAlert.dialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        data() {
            return {
                activeName: first
            }
    },
    computed:
    mapGetters([
        'dxAlert'
    ]),
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
  }



</script>

<style>
    
</style>