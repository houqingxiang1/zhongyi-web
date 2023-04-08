<template>
    <div class="wrap">        
       
        <el-card class="box-card" shadow="always" style="margin-top: 24px">
            <div slot="header">
                <span>辩证记录</span>                
            </div> 
            
            <div v-if="!history.length" style="text-align: center;">暂无数据</div>           
            <div>
                <div v-for="(o) in history" :key="o.id" style="display:flex;padding: 12px;border-bottom: 1px solid #EBEEF5;">
                   <div style="flex: 1; cursor: pointer;" @click="() => goDetail(o.id)">
                        <p>{{o.data.calculated.title }}</p>
                        <p style="font-size: 12px; color:#999">{{o.create_time }}</p>
                   </div>
                   <i class="el-icon-arrow-right"></i>
                </div>
            </div>
        </el-card>
        

    </div>
</template>

<script>
import {getQuestionList, startIdentification, getIdentificationList} from '../../api/web'
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
            this.$router.push(`/identification_detail/${id}`);
        }
    },
    async created() {
        let username = localStorage.getItem('ms_username');
        const {data: history} = await getIdentificationList(username)
        
        const historyList = history?history.list:[] 
       this.history =  historyList.map((item) => ({
            ...item,
            data: JSON.parse(item.result)
        }))
    }
    
};
</script>

<style>
.wrap {
    position: relative;
    width: 100%;
    
    
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 120px;
    overflow: scroll;
}
.box-card {
    width: 480px;
    border: none;
    
}






</style>