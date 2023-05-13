<template>
    <div class="indet-wrap">  
        <el-card class="indet-detail-box-card" shadow="always" style="margin-top: 24px">
            <div slot="header">
                <span>症候</span>                
            </div>          
            <div v-if="detail">
                <div  v-for="o in detail.record" :key="o.id" style="padding: 12px;">
                    <div style="margin-bottom: 8px"> 
                        <i class="el-icon-check" style="margin-right: 12px;color:#00c792;"  ></i> 
                        {{ o.checked }}
                    </div>
                    <el-rate
                        :value="o.rate"
                        v-if="o.level"
                    >
                    </el-rate>
                </div>
                
            </div>
        </el-card>
        <el-card class="indet-detail-box-card" shadow="always" style="margin-top: 24px" v-if="detail">
            <div slot="header">
                <span>{{ detail.result.calculated.title }}</span>                
            </div>          
            <div>
                <el-carousel trigger="click" :autoplay="false" height="500px">
                    <el-carousel-item >
                        <div id="result-bar" style="width: 400px;height:500px;margin:0 auto;"></div>
                    </el-carousel-item>
                    <el-carousel-item >
                        <div>
                            <p style="text-align: center;">证型占比</p>
                            <div v-for="o in detail.result.bodies" style="display: flex; justify-content: space-between;padding: 12px 0; border-bottom: 1px solid #EBEEF5;">
                                <p>{{ o.title }}</p>
                                <p>{{ o.percent }}</p>
                            </div>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </el-card>

        <el-card class="indet-detail-box-card" shadow="always" style="margin-top: 24px" v-if="detail">
            <div slot="header">
                <span>治疗方案</span>                
            </div>          
            <div>
                <el-tabs v-model="activeName" >
                    <el-tab-pane label="疗法" name="first">
                        <div v-for="o in nursingWay" style="margin-bottom: 12px;">
                            {{ o }}
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="临症参考" name="second">
                        <div @click="goReference">体质辨识</div>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </el-card>

    </div>
</template>

<script>
import { getIdentificationDetail} from '../../api/web'
import * as echarts from 'echarts';

export default {
    data: function() {
        return {
            detail: null,
            option: null,
            activeName: 'first',
            nursingWay: []
        };
    },
    
    methods: { 
        goReference(){
            this.$router.push(`/reference/0`);
        }   ,    
        draw() {
            console.log(echarts)
            let myChart = echarts.init(document.getElementById("result-bar"));
            const data = this.detail.result.bodies.map((item) => ({
                value: item.count,
                name: item.title
            }))
            this.option  = {
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    top: '5%',
                    left: 'center'
                },
                series: [
                    {
                        name: '体质辨识',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: null,
                        labelLine: {
                            show: false
                        },
                        data
                    }
                ]
                };
            myChart.setOption(this.option)
        }
        
    },
    async mounted(){
        let username = localStorage.getItem('ms_username');        
        const id = this.$route.params.id
        const {data = {}} = await getIdentificationDetail(id)
        this.detail = {
            ...data,
            result: JSON.parse(data.result),
            record: JSON.parse(data.record),
        }
        this.nursingWay = JSON.parse(this.detail.result.calculated.data.nursing_way || [])
        
        this.$nextTick(() => {
            this.draw()
        })
        console.log(this.detail)
    }
};
</script>

<style>

.indet-detail-box-card {
    width: 680px;
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