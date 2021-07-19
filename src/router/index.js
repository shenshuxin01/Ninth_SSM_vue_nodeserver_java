import Vue from 'vue'
import Router from 'vue-router'
import Login from "@/components/Login";
import Main from "@/components/Main";
import NodeServerIO from "@/components/NodeServerIO";

Vue.use(Router)


//刷新页面报错  重复点击导航时，控制台出现报错 ，虽然不影响功能使用，但也不能视而不见。
const VueRouterPush = Router.prototype.push
Router.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

export default new Router({
    routes: [
        {
            path: '/login',
            component: Login
        },
        {
            path:'/main',
            component:Main
        },
        {
            path:'/nodeIO',
            component:NodeServerIO
        }


    ]
})
