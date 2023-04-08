<template>
    <div class="wrap">  
        <el-card class="box-card" shadow="always" style="margin-top: 24px" v-if="detail">
            <div slot="header">
                <span>{{ detail.title }}</span>                
            </div>          
            <div v-if="detail">
                <div  v-for="(o,index) in detail.description" :key="index" style="padding: 12px;">
                    <div> 
                        {{ o }}
                    </div>                    
                </div>
                
            </div>
        </el-card>
    </div>
</template>

<script>
import { getReferenceDetail} from '../../api/web'


export default {
    data: function() {
        return {
            detail: null,
        };
    },
    
    methods: { 
        goReference(){
            this.$router.push(`/reference/0`);
        },    
        
        
    },
    async mounted(){
        let username = localStorage.getItem('ms_username');        
        const id = this.$route.params.id 
        const {data} = await getReferenceDetail(id)
        this.detail = {
            ...data,
            description: JSON.parse(data.description)
        }     
        
    }
};
</script>

<style scoped>
.wrap {
    position: relative;
    width: 100%;    
    
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 120px;
    padding-bottom: 120px;
    overflow: scroll;
}
.box-card {
    width: 480px;
    border: none;
    
}




</style>