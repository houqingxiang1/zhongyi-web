<template>
    <div class="indet-wrap">        
       
        <el-card class="box-card" shadow="always" style="margin-top: 24px">
            <div slot="header">
                <span>临证参考</span>                
            </div> 
            
            <div v-if="!history.length" style="text-align: center;">暂无数据</div>           
            <div>
                <div v-for="(o) in history" :key="o.id" style="display:flex;padding: 12px; border-bottom: 1px solid #EBEEF5;">
                   <div style="flex: 1; cursor: pointer; " @click="() => goDetail(o.id)">
                        <p>{{o.title }}</p>
                   </div>
                   <i class="el-icon-arrow-right" ></i>
                </div>
            </div>
        </el-card>
        

    </div>
</template>

<script>
import {getReferenceList} from '../../api/web'
import questionItem from '../common/questionItem.vue';
export default {
    data: function() {
        return {
            
            history: [],
            

        };
    },
    components: {
        questionItem
    },
    methods: {        
        
        goDetail(id){
            this.$router.push(`/reference/${id}`);
        }
    },
    async created() {
        const {data: history} = await getReferenceList()
        
        const historyList = history?history.list:[] 
       this.history =  historyList.map((item) => ({
            ...item
        }))
    }
    
};
</script>

<style>

.box-card {
    width: 680px;
    border: none;
    
}






</style>