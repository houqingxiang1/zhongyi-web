<template>
    <div class="wrapper">
        <v-head></v-head>
        <div class="content">
            <v-back v-if="$route.path!=='/home'" />
            <transition name="move" mode="out-in">
                <keep-alive :include="tagsList">
                    <router-view></router-view>
                </keep-alive>
            </transition>
            <el-backtop target=".content"></el-backtop>
        </div>
    </div>
</template>

<script>
import vHead from './Header.vue';
import vBack from './Back.vue'
export default {
    data() {
        return {
            tagsList: [],
            collapse: false
        };
    },
    components: {
        vHead,
        vBack
    },
    created(){
        console.log(this.$route)
    }
    
};
</script>
