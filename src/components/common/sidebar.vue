<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="white" unique-opened router>
            <el-menu-item index="homePage">
                    <span class="sb-cn">首页</span>
            </el-menu-item>

            <el-menu-item index="crateDom">
                <span class="sb-cn">场景建模</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>
<script>
    export default {
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }
</script>
<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 180px;
        left: 0;
        top: 66px;
        bottom:0;
        background: #ffffff !important;
    }
    .el-menu-vertical-demo{
        background: #ffffff !important;
    }
    .sidebar > ul {
        height:100%;
    }

   .el-menu-item, .el-submenu__title{
       font-size:14px;

   }

    .material-icons {font-size:12px;}
</style>
