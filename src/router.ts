import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";


const routes = [
    {
        path: '/',
        component: () => import('./components/Home.vue'),
        name: "Home",
        meta: { title: "首页" }
    },
    {
        path: '/about',
        component: () => import("./components/About.vue"), name: "About"
        , meta: { title: "关于" }
    },
    {
        path: '/news',
        component: () => import("./components/News.vue"),
        name: "News", meta: { title: "最新消息" }
    },
    {
        path: '/news/:id',
        component: () => import("./components/News/NewsDetail.vue"),
        name: "NewsDetail",
        meta: { title: "文章" }
    },
    {
        path: "/servers",
        component: () => import("./components/Servers.vue"),
        name: "Servers", meta: { title: "服务器" }
    },
]

const router = createRouter({

    history: createWebHashHistory('/TJUUS/'),
    routes,
});


router.beforeEach((to, _from, next) => {
    if (to.path === '/TJUUS/') {
        // 如果用户访问的是根路径，则重定向到首页
        next({ name: 'home' });
    } else {
        next();
    }
    if (to.meta.title) {
        document.title = 'TJUUS - ' + to.meta.title as string;
    } else {
        document.title = 'TJUUS - ' + (to.name as string);
    }
    next();
});

router.onError((error) => {
    console.error("路由错误:", error);
});

export default router;
