<template>
    <div >
        <v-pageTitle vtitle="show">show</v-pageTitle>


        <el-row :gutter="20">

        </el-row>

    </div>



</template>

<script>

    import vPageTitle from '../common/pageTitle.vue';
    import homePage from '../page/homePage.vue';
    export default {
        components:{
          vPageTitle, homePage
        },
        methods: {
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



</style>
