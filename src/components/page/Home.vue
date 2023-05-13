<template>
    <div class="home-wrap">
        <div class="search-container"> 
            <el-popover
                placement="bottom"                
                width="400"
                trigger="click">
                <el-input size="medium"  style="width: 400px;" v-model="keyword" slot="reference" />
                <div class="search-result">
                    <p v-if="!options.length">暂无数据</p>
                    <div v-for="(o, index) in options" :key="index">
                        <p style="padding: 12px 0; cursor: pointer; border-bottom: 1px solid #EBEEF5;" @click="() => go(`${o.url}${o.value}`)">{{ o.label }}</p>
                    </div>
                </div> 
            </el-popover>  
            <el-button type="primary" >搜索</el-button>         
            
            <!-- -->
        </div>
        <div class="main">
            <div class="left" @click="()=> go('/identification')">
                <p class="title">体质辨识</p>
                <p class="left-sub">九种常见体质的辨识及中医调养方法</p>
            </div>
            <div class="right" @click="()=> go('/identification')">
                <p class="title">自学中医</p>
                <!-- <p class="right-sub">临证参考，传统方剂，经络循环，穴位</p> -->
                <div class="right-wrap">
                    <div class="right-item" @click="()=> go('/zhongyaoyinpian')">
                    <div class="item-info">
                        中药饮片
                    </div>
                    <i class="el-icon-s-data"></i>
                </div>
                <div class="right-item" @click="()=> go('/food')">
                    <div class="item-info">
                        传统药膳
                    </div>
                    <i class="el-icon-brush"></i>
                </div>
                
                <div class="right-item" @click="()=> go('/zhongyao')">
                    <div class="item-info">
                        传统方剂
                    </div>
                    <i class="el-icon-brush"></i>
                </div>
                <div class="right-item" @click="()=> go('/jingluo')">
                    <div class="item-info">
                        经络循环
                    </div>
                    <i class="el-icon-collection-tag"></i>
                </div>
                <div class="right-item" @click="()=> go('/xuewei')">
                    <div class="item-info">
                        穴位
                    </div>
                    <i class="el-icon-house"></i>
                </div>
                <div class="right-item" @click="()=> go('/reference-list')">
                    <div class="item-info">
                        临证参考
                    </div>
                    <i class="el-icon-bank-card"></i>
                </div>
                </div>
            </div>
           
        </div> 
    </div>
</template>

<script>
import {search} from '../../api/web'
const searchMap = {
    food: {
        url: '/food-detail/'
    },
    jingluo: {
        url: '/jingluo-detail/'
    },
    reference: {
        url: '/reference/'
    },
    treatment: {
        url: '/zhongyao-detail/'
    },
    xuewei: {
        url: '/xuewei-detail/'
    }
}
export default {

    data: function() {
        return {
            keyword:'',
            loading: false,
            options: [],
            showSearchResult: false
        };
    },
    watch: {
        keyword: async function (cur, prev) {
            console.log(cur)
            if(cur){
                this.showSearchResult = true
            }else{
                this.showSearchResult = false
            }
            this.options = await this.searchHandle(cur)
        }
    },
    methods: {        
        goRegister(){
            this.$router.push('/register');
        },
        go(path){
            this.$router.push(path);
        },
        async searchHandle(keyword){
          if(!keyword) return
          const {data} = await search({
                keyword
          })
          const {food, treatment, xuewei,jingluo, reference } = data
          
          const foodOptions = food.map((item) => ({
            label: item.title,
            value: item.id,
            url: searchMap['food'].url
          }))

          const treatmentOptions = treatment.map((item) => ({
            label: item.title,
            value: item.id,
            url: searchMap['treatment'].url
          }))

          const referenceOptions = reference.map((item) => ({
            label: item.title,
            value: item.id,
            url: searchMap['reference'].url
          }))
          const xueweiOptions = xuewei.map((item) => ({
            label: item.title,
            value: item.id,
            url: searchMap['xuewei'].url
          }))
          const jingluoOptions = jingluo.map((item) => ({
            label: item.title,
            value: item.id,
            url: searchMap['jingluo'].url
          }))
          return foodOptions.concat(treatmentOptions,referenceOptions,xueweiOptions,jingluoOptions)
          
        }
        
    },
    
};
</script>

<style scoped>
.home-wrap {
    position: relative;
    width: 100%;
    height: 506px;    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.search-container{
    display: flex;
    position: relative;
    margin-top: 164px;
    margin-bottom: 64px;
    /* flex-direction: column; */
}
.search-result{    
    max-height: 400px;
    overflow: auto;
}
.main{
    /* width: 70%; */
    height: 300px; 
    display: flex;  
    
}
.left{
    width: 266px;
    height: 252px;
    border-radius: 4px;
    box-shadow: 0 6px 12px 0 hsl(215deg 9% 63% / 20%);
    background-image: url(../../assets/img/main.png);
    background-size: contain;
    background-repeat: no-repeat;
    padding: 16px 20px;
    box-sizing: border-box;
    background-color: #fff;
    display: block;
    cursor: pointer;
    background-position: 60px 35px;
}
.left-sub{
    font-size: 12px;
    line-height: 16px;
    color: #252a33;
    margin-top: 8px;
}
.right{
    width: 466px;
    height: 252px;
    border-radius: 4px;
    box-shadow: 0 6px 12px 0 hsl(215deg 9% 63% / 20%);
    background-color: #fff;
    padding: 16px 20px;
    box-sizing: border-box;
    margin-left: 24px;
}
.right-sub{
    font-size: 12px;
    line-height: 16px;
    color: #252a33;
    margin-top: 8px;
}
.title{
    top: 36px;
    font-size: 22px;
    font-weight: 500;
    line-height: 32px;
    color: #252a33;
}
.right-wrap{
    display: flex;
    flex-wrap: wrap;
    margin-top: 16px;
}
.right-item{
    display: flex;
    padding: 36px 20px;
    align-items: center;
    width: 126px;
    height: 60px;
    border-radius: 4px;
    box-shadow: 0 6px 12px 0 hsl(215deg 9% 63% / 20%);
    background-color: #fff;
    box-sizing: border-box;
    margin-left: 12px;
    margin-bottom: 12px;
    justify-content: space-between;
    cursor: pointer;
}
.right-item i{
    color: #00c792
}




</style>