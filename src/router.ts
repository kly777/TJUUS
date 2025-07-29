import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("./components/Home.vue"),
        name: "Home",
        meta: { title: "首页" },
    },
    {
        path: "/about",
        component: () => import("./components/About.vue"),
        name: "About",
        meta: { title: "关于" },
    },
    {
        path: "/news",
        component: () => import("./components/News.vue"),
        name: "News",
        meta: { title: "最新消息" },
    },
    {
        path: "/news/:id",
        component: () => import("./components/News/NewsDetail.vue"),
        name: "NewsDetail",
        meta: { title: "文章" },
    },
    // {
    //     path: "/servers",
    //     component: () => import("./components/Servers.vue"),
    //     name: "Servers", meta: { title: "服务器" }
    // },
    {
        path: "/creeper",
        component: () => import("./components/Home/Creeper.vue"),
        name: "Creeper",
        meta: { title: "苦力怕" },
    },
    {
        path: "/gallery",
        component: () => import("./components/Gallery.vue"),
        name: "Gallery",
        meta: { title: "图库" },
    },
    {
        path: "/club-intro",
        component: () => import("./components/InfoPages/ClubIntro.vue"),
        name: "ClubIntro",
        meta: { title: "社团简介" },
    },
    {
        path: "/weijinlu-project",
        component: () => import("./components/InfoPages/WeijinluProject.vue"),
        name: "WeijinluProject",
        meta: { title: "卫津路校区复刻" },
    },
    {
        path: "/beiyangyuan-project",
        component: () =>
            import("./components/InfoPages/BeiyangyuanProject.vue"),
        name: "BeiyangyuanProject",
        meta: { title: "北洋园校区复刻" },
    },
    {
        path: "/weekly-report",
        component: () => import("./components/InfoPages/WeeklyReport.vue"),
        name: "WeeklyReport",
        meta: { title: "运营周报" },
    },
    {
        path: "/news-report",
        component: () => import("./components/InfoPages/NewsReport.vue"),
        name: "NewsReport",
        meta: { title: "新闻报道" },
    },
];

const router = createRouter({
    history: createWebHashHistory("/TJUUS/"),
    routes,

    scrollBehavior(to, from, savedPosition) {
        // 如果路由有 hash，滚动到对应元素
        if (to.hash) {
            return {
                el: to.hash,
                behavior: "smooth",
            };
        }
        // 如果存在保存的位置（例如后退/前进），则恢复该位置
        else if (savedPosition) {
            return savedPosition;
        } else {
            return new Promise((resolve) => {
                window.setTimeout(() => {
                    resolve({ left: 0, top: 0 });
                }, 202);
            });
        }
    },
});

router.beforeEach((to, _from, next) => {
    if (to.path === "/TJUUS/") {
        next({ name: "Home" });
    } else {
        if (to.meta.title) {
            document.title = (to.meta.title as string) + " | TJUUS";
        } else {
            document.title = (to.name as string) + " | TJUUS";
        }
        next();
    }
});

router.afterEach(() => {});

router.onError((error) => {
    console.error("路由错误:", error);
});

export default router;
