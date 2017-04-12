<template>
    <div class="pageTitle">
        <el-row>
            <el-col :span="24">
                <div class="grid-content dx-edit-pd bg-purple-dark">
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="{ path: '/' }"><router-link to="homePage">首页</router-link></el-breadcrumb-item>
                        <el-breadcrumb-item>{{vtitle}}</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </el-col>
        </el-row>

    </div>
</template>
<script>
    export default {
       props:['vtitle']
    }
</script>
<style scoped>
    .pageTitle{
        clear:both;
        height:55px;

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
    .pt-Home{
        font-size:20px;
    }
    .pt-line{
        color:#ccc;
    }
    a{
        color:#209e91;
    }
</style>
