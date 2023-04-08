<template>
    <div class="question-wrapper">
        <div class="question-title">
            {{ title }}
        </div>
        <div  class="question-list">
            <div v-for="(opt,index) in questionOptions" 
            :key="index"             
            style="cursor: pointer;"
        >            
            <div class="option-item">
                <div @click="()=>clickHandle(opt)" :class="[value===opt?'checked': '']" >
                    <i class="el-icon-check" style="margin-right: 12px;"  ></i>
                     {{ opt }}
                </div>
                <div v-if="descptions"  @click="dialogVisible = true">
                    <i class="el-icon-question" style="color:#ddd"></i>
                </div>
            </div>
        </div> 
            <el-rate
                v-if="showRate && !!value" v-model="rate" @change="change">
            </el-rate> 
        </div> 
        <el-dialog
        title="图示"
        :visible.sync="dialogVisible"
        width="70%">
        <div class="content">
            <div v-html="descptions"></div>
        </div>
        <!-- <span slot="footer" class="dialog-footer"> -->
            <!-- <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span> -->
        </el-dialog>     
    </div>
</template>
<script>
export default {
    data() {
        return {
            dialogVisible: false,
            rate: 0
        };
    },
    computed: {
        rateValue: function(){
            return this.rate || 0
        }
    },
    props: {
        questionOptions: [],
        showRate: false,
        title: '',
        value: '',
        descptions: '',
        clickHandle: Function,
        change: Function
    },
    methods: {
        // clickHandle(){
        //     console.log('------')
        //     this.props.clickHandle()
        // } 
        
    },
    mounted() {
        
    }
};
</script>
<style scoped>
.question-wrapper{
    padding:  0 12px;
    margin-bottom: 12px;
}
.question-list{   
    border-bottom: 1px solid #e8e9eb;
    padding-bottom: 12px;
}
.question-title{
    display: flex;
    padding: 12px 0;
    position: relative;
    /* background-color: #00c792; */
    /* color: #fff; */
}
.question-title::after{
    content: '';
    display: block;
    width: 480px;
    height: 2px;
    background-color: #00c792;
    position: absolute;
    bottom: 0px;
    border-radius: 4px;
}
.option-item{
    display: flex;
    height: 48px;
    align-items: center;
    justify-content: space-between;
    /* padding: 0 12px; */
}
</style>
