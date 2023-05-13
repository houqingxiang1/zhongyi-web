<template>
    <div class="indet-wrap">       
       
        <el-card class="box-card" shadow="always" style="margin-top: 24px">
            <div slot="header">
                <span>中药饮片</span>                
            </div>             
            <div v-if="!list.length" style="text-align: center;">暂无数据</div>           
            <div>
                <div v-for="(o,idx) in list" :key="o.id" style="display:flex;padding: 12px;border-bottom: 1px solid #EBEEF5;">
                   <div style="flex: 1; cursor: pointer;" @click="() => goDetail(idx)">
                        <p>{{o.title }}</p>
                   </div>
                   <i class="el-icon-arrow-right"></i>
                </div>
            </div>
        </el-card>       

    </div>
</template>

<script>
import {getJingluoList} from '../../api/web'
import Zongyaoyin from '../../yaoyin'
export default {
    data: function() {
        return {           
            list: Zongyaoyin, 
        };
    },
    
    methods: {       
        
        goDetail(key){
            this.$router.push(`/Zhongyaoyinpian-detail/${key}`);
        }
    },
    async created() {
        
    }
    
};
</script>

<style>

.box-card {
    width: 480px;
    border: none;
    
}






</style>