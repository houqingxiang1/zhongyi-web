<template>
    <div class="indet-wrap">       
       
        <el-card class="box-card" shadow="always" style="margin-top: 24px">
            <div slot="header">
                <span>穴位</span>                
            </div>             
            <div v-if="!list.length" style="text-align: center;">暂无数据</div>           
            <div>
                <div v-for="(o) in list" :key="o.id" style="display:flex;padding: 12px;border-bottom: 1px solid #EBEEF5;">
                   <div style="flex: 1; cursor: pointer;" @click="() => goDetail(o.uni_key)">
                        <p>{{o.title }}</p>
                   </div>
                   <i class="el-icon-arrow-right"></i>
                </div>
            </div>
        </el-card>       

    </div>
</template>

<script>
import {getXueweiCategoryList} from '../../api/web'
export default {
    data: function() {
        return {           
            list: [], 
        };
    },
    
    methods: {       
        
        goDetail(key){
            this.$router.push(`/xuewei-category-detail/${key}`);
        }
    },
    async created() {
        const {data} = await getXueweiCategoryList()
        
        const list = data?data.list:[] 
        this.list = list
    }
    
};
</script>

<style>

.box-card {
    width: 680px;
    border: none;
    
}






</style>