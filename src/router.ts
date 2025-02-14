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
        component: () => import("./components/About.vue"),
        name: "About",
        meta: { title: "关于" }
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
    {
        path: "/creeper",
        component: () => import("./components/Home/Creeper.vue"),
        name: "Creeper", meta: { title: "苦力怕" }
    },
    {
        path: "/gallery",
        component: () => import("./components/Gallery.vue"),
        name: "Gallery", meta: { title: "图库" }
    }
]


const router = createRouter({

    history: createWebHistory('/TJUUS/'),
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
        document.title = to.meta.title as string + ' | TJUUS';
    } else {
        document.title = (to.name as string) + ' | TJUUS';
    }
    window.scrollTo(0, 0);
    next();
});

router.onError((error) => {
    console.error("路由错误:", error);
});

export default router;
