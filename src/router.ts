import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {
        path: '/',
        component: () => import('./components/Home/Home.vue'),
        name: "Home"
    },
    {
        path: '/about',
        component: () => import("./components/About.vue"), name: "About"
    },
    {
        path: '/news',
        component: () => import("./components/News.vue"),
        name: "News"
    },
    {
        path: "/servers",
        component: () => import("./components/Servers.vue"),
        name: "Servers"
    },
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
        document.title = to.meta.title as string;
    } else {
        document.title = to.name as string;
    }
    next();
});

router.onError((error) => {
    console.error("路由错误:", error);
});

export default router;