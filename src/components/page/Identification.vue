<template>
    <div class="indet-wrap">        
        <el-card class="indet-box-card" shadow="always">
            <div slot="header">
                <span>开始辩证</span>
                <span style="float: right; padding: 3px 0; cursor: pointer;" type="text">卡片 {{ total }} <i class="el-icon-arrow-right"></i> </span>
            </div>
            <div class="indet-text">
                <i class="el-icon-star-on"></i>
                <span>
                    “开始辨证”后，请根据实际情况，认真勾选卡片中的症候及程度，如果没有则无需选择，左右滑动可向前或返回，也可以点击“跳过”切换下一卡片。人工智能双引擎系统将根据你的选择给出全面的治疗与调理方案。
                </span>
            </div>
            <div style="display:flex; justify-content: flex-end;margin: 12px 20px ;">
                <el-button @click="showListToggle" type="primary" class="toggle-btn">开始辩证</el-button>
            </div>
            
        </el-card>
        <el-card class="indet-box-card" shadow="always" style="margin-top: 24px">
            <div slot="header">
                <span>辩证记录</span>                
            </div> 
            
            <div v-if="!history.length" style="text-align: center;">暂无数据</div>           
            <div>
                <div v-for="(o) in history" :key="o.id" style="display:flex;padding: 12px">
                   <div style="flex: 1; cursor: pointer;" @click="() => goDetail(o.id)">
                        <p>{{o.data.calculated.title }}</p>
                        <p style="font-size: 12px; color:#999">{{o.create_time }}</p>
                   </div>
                   <i class="el-icon-arrow-right"></i>
                </div>
            </div>
        </el-card>
        <el-drawer
            title="症候列表"
            :visible.sync="drawer">
            <div style="display: flex; justify-content: center; align-items: center; flex-direction: column; padding-bottom:24px">
                <div v-for="(o, index) in list" :key="o.id" style="width: 100%">
                    <questionItem 
                        :questionOptions="o.options" 
                        :title="o.title" 
                        :clickHandle="(value) => clickHandle(value, index)"
                        :value="o.checked"
                        :showRate="o.level"
                        :descptions="o.description"
                        :change="(value) => rateChange(value, index)"
                        >
                    </questionItem>
                </div>
                <el-button style="width: 100px" @click="startTo" type="primary" >提交辨识</el-button>
            </div>
        </el-drawer>

    </div>
</template>

<script>
import {getQuestionList, startIdentification, getIdentificationList} from '../../api/web'
import questionItem from '../common/questionItem.vue';
export default {
    data: function() {
        return {
            total: 0,
            list: [],
            history: [],
            showList: false,
            selected: {},
            drawer:false

        };
    },
    components: {
        questionItem
    },
    methods: {        
        goRegister(){
            this.$router.push('/register');
        },
        goIdentification(){
            this.$router.push('/identification');
        },
        showListToggle(){
            this.drawer = !this.drawer
        },
        clickHandle(value, index){
            const selectQuestion = this.list[index]
            console.log(selectQuestion, value)
            // 对于已经选中的选项再次点击，表示取消选择
            const isCancel = value === selectQuestion.checked
            this.$set(this.list, index, {...selectQuestion, checked: !isCancel?value: undefined})
        },
        rateChange(value, index){
            const selectQuestion = this.list[index]
            console.log(selectQuestion, value)
            // 对于已经选中的选项再次点击，表示取消选择
            const isCancel = value === selectQuestion.checked
            console.log('------', value, index)
            this.$set(this.list, index, {...selectQuestion, rate: value })
        },
        async startTo(){
            console.log(this.list)
            const checked = []
            this.list.forEach((item) => {
                if(item.checked) checked.push(item)
            })
            if(checked.length < 5) {
                this.$message.error('选择的症候太少了，请进一步完善选项！');
            }
            let username = localStorage.getItem('ms_username');
            const {data} = await startIdentification({list: checked, user: username})            
            await getIdentificationList(username)
            console.log('data',data)
            this.showList = false
            this.$router.push(`/identification_detail/${data.id}`)
            // location.reload()

        },
        goDetail(id){
            this.$router.push(`/identification_detail/${id}`);
        }
    },
    async created(){
        let username = localStorage.getItem('ms_username');
        const {data = {}} = await getQuestionList()
        const {data: history} = await getIdentificationList(username)
        this.total = data.total || 0
        this.list = data.list || []
        const historyList = history?history.list:[] 
       this.history =  historyList.map((item) => ({
            ...item,
            data: JSON.parse(item.result)
        }))
        console.log(this.history)
    }
};
</script>

<style>
.indet-wrap {
    position: relative;
    width: 100%;  
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 120px;
    overflow: scroll;
}
.indet-box-card {
    width: 480px;
    border: none;
    
}
.indet-box-card .el-card__header{
    background-color: #00c792 !important;
    color: #fff;
}
.indet-box-card .el-card__body{
    padding: 20px 0;
}
.indet-text{
    font-size: 12px;
    padding: 12px 20px;
}
.toggle-btn{
    background-color:#00c792; 
    border: none;
}
.checked{
    color: #00c792;
}





</style>