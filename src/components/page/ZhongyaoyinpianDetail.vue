<template>
    <div class="indet-wrap">  
        <el-card class="box-card" shadow="always" style="margin-top: 24px" v-if="detail">
            <div slot="header">
                <span>{{ detail.title }}</span>                
            </div>          
            <div v-if="detail">
                <div>
                    <img :src="detail.logo" style="width: 136px"/>
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
import Zongyaoyin from '../../yaoyin'

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
        const data = Zongyaoyin[id]
        this.detail = data           
    }
};
</script>

<style scoped>

.box-card {
    width: 680px;
    border: none;
    
}




</style>