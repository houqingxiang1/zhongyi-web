<template>
    <div class="fix" @click="back">
        <el-button circle  size="medium" style="background-color: #00c792; color: #fff; font-weight: bold;"><i class="el-icon-back"></i></el-button>
        
    </div>
</template>
<script>
export default {   
   
    methods: {
        // 用户名下拉菜单选择事件
        back() {
            this.$router.go(-1)
        },        
        
    },
    mounted() {
        
    }
};
</script>
<style scoped>
    .fix{
        font-size: 64px;
        position: fixed;
        top: 130px;
        left: 24px;
        color: #fff;
        cursor: pointer;
        z-index: 1000;
        font-weight: bold;

    }
</style>
