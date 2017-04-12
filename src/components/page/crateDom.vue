<template>
    <div >
        <v-pageTitle vtitle="create"></v-pageTitle>


        <el-row :gutter="20">
            <barChart></barChart>
        </el-row>






    </div>



</template>

<script>
    import barChart from '../charts/barChart.vue';
    import vPageTitle from '../common/pageTitle.vue';
    export default {
        components:{
          barChart,vPageTitle
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
