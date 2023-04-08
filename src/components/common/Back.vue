<template>
    <div class="fix" @click="back">
        <i class="el-icon-back"></i>
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
        font-size: 44px;
        position: fixed;
        top: 120px;
        left: 220px;
        color: #fff;
        cursor: pointer;
        z-index: 1000;
    }
</style>
