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
        component: () => import("./components/InfoPages/CampusProject.vue"),
        name: "WeijinluProject",
        meta: { title: "卫津路校区复刻" },
        props: {
            campusType: "weijinlu",
            colorConfig: {
                from: "#00b09b",
                to: "#96c93d"
            },
            contentData: {
                title: "卫津路校区复刻项目",
                subtitle: "卫津路校区标志性建筑数字化复刻工程",
                progress: 75,
                stats: [
                    { value: "28", label: "建筑模型" },
                    { value: "10", label: "团队成员" }
                ],
                steps: [
                    { id: "1", title: "数据采集", description: "激光扫描与摄影测量技术结合..." },
                    { id: "2", title: "模型重建", description: "基于点云数据的精细建模..." },
                    { id: "3", title: "纹理贴图", description: "高分辨率照片映射表面材质..." }
                ],
                team: [
                    { name: "王五", role: "项目经理", initials: "WW" },
                    { name: "赵六", role: "建模师", initials: "ZL" },
                    { name: "钱七", role: "纹理设计师", initials: "QQ" }
                ]
            }
        }
    },
    {
        path: "/beiyangyuan-project",
        component: () => import("./components/InfoPages/CampusProject.vue"),
        name: "BeiyangyuanProject",
        meta: { title: "北洋园校区复刻" },
        props: {
            campusType: "beiyangyuan",
            colorConfig: {
                from: "#ff7e5f",
                to: "#feb47b"
            },
            contentData: {
                title: "北洋园校区复刻项目",
                subtitle: "北洋园校区核心区域三维建模与场景还原",
                progress: 85,
                stats: [
                    { value: "32", label: "建筑模型" },
                    { value: "12", label: "团队成员" }
                ],
                steps: [
                    { id: "1", title: "数据采集", description: "无人机航拍与实地测量..." },
                    { id: "2", title: "模型构建", description: "建筑结构精细建模..." }
                ],
                team: [
                    { name: "张三", role: "项目经理", initials: "ZS" },
                    { name: "李四", role: "建模师", initials: "LS" },
                    { name: "王二", role: "场景设计师", initials: "WE" }
                ]
            }
        }
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
        if (savedPosition) {
            return new Promise((resolve) => {
                // 假设动画持续时间为 500ms
                window.setTimeout(() => {
                    resolve(savedPosition);
                }, 252);
            });
        } else if (to.hash) {
            return new Promise((resolve) => {
                window.setTimeout(() => {
                    resolve({
                        el: to.hash,
                        behavior: "smooth",
                    });
                }, 252);
            });
        } else {
            return new Promise((resolve) => {
                window.requestAnimationFrame(() => {
                    if (
                        window.history.state &&
                        window.history.state.scrollPosition
                    ) {
                        resolve(window.history.state.scrollPosition);
                    } else {
                        window.setTimeout(() => {
                            resolve({ left: 0, top: 0 });
                        }, 252); // 与动画时间一致
                    }
                });
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
