import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },        
        {
            path: '/',
            component: () => import(/* webpackChunkName: "Wrapper" */ '../components/common/Wrapper.vue'),
            meta: { title: '中医药问询系统' },   
            children: [{
                path: '/home',
                component: () => import(/* webpackChunkName: "home" */ '../components/page/Home.vue'),
                meta: { title: '中医药问询系统' }, 
            },{
                path: '/identification',
                component: () => import(/* webpackChunkName: "identification" */ '../components/page/Identification.vue'),
                meta: { title: '中医药问询系统' }, 
            },{
                path: '/identification_detail/:id',
                component: () => import(/* webpackChunkName: "identification" */ '../components/page/IdentificationDetail.vue'),
                meta: { title: '中医药问询系统' }, 
            },{
                path: '/reference/:id',
                component: () => import(/* webpackChunkName: "identification" */ '../components/page/Reference.vue'),
                meta: { title: '中医药问询系统' }, 
            },{
                path: '/history',
                component: () => import(/* webpackChunkName: "identification" */ '../components/page/History.vue'),
                meta: { title: '中医药问询系统' }, 
            },{
                path: '/reference-list',
                component: () => import(/* webpackChunkName: "identification" */ '../components/page/ReferenceList.vue'),
                meta: { title: '中医药问询系统' }, 
            },{
                path: '/zhongyao',
                component: () => import(/* webpackChunkName: "identification" */ '../components/page/ZhongyaoCategory.vue'),
                meta: { title: '中医药问询系统' }, 
            },{
                path: '/zhongyao-category-detail/:categoryKey',
                component: () => import(/* webpackChunkName: "identification" */ '../components/page/ZhongyaoCategoryDetail.vue'),
                meta: { title: '中医药问询系统' }, 
            },{
                path: '/zhongyao-detail/:id',
                component: () => import(/* webpackChunkName: "identification" */ '../components/page/ZhongyaoDetail.vue'),
                meta: { title: '中医药问询系统' }, 
            },{
                path: '/jingluo-detail/:id',
                component: () => import(/* webpackChunkName: "identification" */ '../components/page/JingluoDetail.vue'),
                meta: { title: '中医药问询系统' }, 
            },{
                path: '/jingluo',
                component: () => import(/* webpackChunkName: "identification" */ '../components/page/Jingluo.vue'),
                meta: { title: '中医药问询系统' }, 
            },{
                path: '/xuewei',
                component: () => import(/* webpackChunkName: "identification" */ '../components/page/XueweiCategory.vue'),
                meta: { title: '中医药问询系统' }, 
            },{
                path: '/xuewei-category-detail/:categoryKey',
                component: () => import(/* webpackChunkName: "identification" */ '../components/page/XueweiCategoryDetail.vue'),
                meta: { title: '中医药问询系统' }, 
            },{
                path: '/xuewei-detail/:id',
                component: () => import(/* webpackChunkName: "identification" */ '../components/page/XueweiDetail.vue'),
                meta: { title: '中医药问询系统' }, 
            },{
                path: '/food-detail/:id',
                component: () => import(/* webpackChunkName: "identification" */ '../components/page/FoodDetail.vue'),
                meta: { title: '中医药问询系统' }, 
            },{
                path: '/food',
                component: () => import(/* webpackChunkName: "identification" */ '../components/page/Food.vue'),
                meta: { title: '中医药问询系统' }, 
            },{
                path: '/zhongyaoyinpian',
                component: () => import(/* webpackChunkName: "identification" */ '../components/page/Zhongyaoyinpian.vue'),
                meta: { title: '中医药问询系统' }, 
            },{
                path: '/zhongyaoyinpian-detail/:id',
                component: () => import(/* webpackChunkName: "identification" */ '../components/page/ZhongyaoyinpianDetail.vue'),
                meta: { title: '中医药问询系统' }, 
            }]         
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: { title: '登录' }
        },
        {
            path: '/register',
            component: () => import(/* webpackChunkName: "Register" */ '../components/page/Register.vue'),
            meta: { title: '注册' }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});
