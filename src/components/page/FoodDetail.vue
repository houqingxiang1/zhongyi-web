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
import { getFoodDetail} from '../../api/web'


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
        const {data} = await getFoodDetail(id)
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