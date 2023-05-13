<template>
    <div class="indet-wrap">  
        <el-card class="box-card" shadow="always" style="margin-top: 24px" v-if="detail">
            <div slot="header">
                <span>{{ detail.title }}</span>                
            </div>          
            <div v-if="detail">
                <div>
                    <p style="white-space: pre-line;"> 
                        {{ detail.description }}
                    </p>                    
                </div>
                
            </div>
        </el-card>
    </div>
</template>

<script>
import { getTreatmentDetail} from '../../api/web'


export default {
    data: function() {
        return {
            detail: null,
        };
    },
    
    methods: {         
        
        
    },
    async mounted(){     
        const id = this.$route.params.id 
        const {data} = await getTreatmentDetail(id)
        this.detail = data           
    }
};
</script>

<style scoped>

.box-card {
    width: 480px;
    border: none;
    
}




</style>