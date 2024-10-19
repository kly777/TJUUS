import { createRouter, createWebHistory } from "vue-router";



const routes = [
    { path: '/', component: () => import('./components/Home/Home.vue') },
    { path: '/about', component: () => import("./components/About.vue") },
    {path:'/news', component: () => import("./components/News.vue") },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});


router.beforeEach((to, _from, next) => {
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