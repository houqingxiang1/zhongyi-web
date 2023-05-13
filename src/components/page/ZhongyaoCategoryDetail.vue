<template>
    <div class="indet-wrap">       
       
        <el-card class="box-card" shadow="always" style="margin-top: 24px">
            <div slot="header">
                <span v-if="list[0]">{{ list[0].category_name || '传统方剂' }}</span>                
            </div>             
            <div v-if="!list.length" style="text-align: center;">暂无数据</div>           
            <div>
                <div v-for="(o) in list" :key="o.id" style="display:flex;padding: 12px;border-bottom: 1px solid #EBEEF5;">
                   <div style="flex: 1; cursor: pointer;" @click="() => goDetail(o.id)">
                        <p>{{o.title }}</p>
                   </div>
                   <i class="el-icon-arrow-right"></i>
                </div>
            </div>
        </el-card>       

    </div>
</template>

<script>
import {getTreatmentList} from '../../api/web'
export default {
    data: function() {
        return {           
            list: [], 
        };
    },
    
    methods: {       
        
        goDetail(id){
            this.$router.push(`/zhongyao-detail/${id}`);
        }
    },
    async created() {
        const key = this.$route.params.categoryKey
        const {data} = await getTreatmentList(key)        
        const list = data?data.list:[] 
        this.list = list
    }
    
};
</script>

<style>

.box-card {
    width: 480px;
    border: none;
    
}






</style>