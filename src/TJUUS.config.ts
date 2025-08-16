// 配置文件类型定义
interface ProjectConfig {
  imageSrc: string;
  title: string;
  description: string;
  blueMap?: string;
}

interface CampusProjectConfig {
  title: string;
  subtitle: string;
  progress: number;
  stats: { value: string; label: string }[];
  steps: { id: string; title: string; description: string }[];
  team: { name: string; role: string; initials: string }[];
}

interface CampusConfig {
  campusType: 'beiyangyuan' | 'weijinlu';
  colorConfig: { from: string; to: string };
  contentData: CampusProjectConfig;
}

interface AppConfig {
  project: ProjectConfig[];
  carousel: string[];
  building: ProjectConfig[];
  campusProjects: {
    beiyangyuan: CampusConfig;
    weijinlu: CampusConfig;
  };
}

// 实际配置数据
const config: AppConfig = {
    project: [
        {
            imageSrc: "server/tianda1.png",
            title: "社团简介",
            description: "天津大学卫津路校区复刻项目社团介绍",
        },
        {
            imageSrc: "building/图书馆.png",
            title: "卫津路校区复刻项目",
            description: "卫津路校区标志性建筑数字化复刻工程",
        },
        {
            imageSrc: "building/北洋广场.png",
            title: "北洋园校区复刻项目",
            description: "北洋园校区核心区域三维建模与场景还原",
        },
        {
            imageSrc: "server/tianda2.png",
            title: "运营周报",
            description: "复刻项目每周进度与技术指标报告",
        },
        {
            imageSrc: "server/tianda2.png",
            title: "新闻报道",
            description: "项目进展与校园文化传承动态资讯",
        },
        {
            imageSrc: "server/tianda2.png",
            title: "财报公示",
            description: "TJUUS社团收支定期汇总报告",
        },
    ],
    carousel: [
        "eg/1.png",
        "eg/2.png",
        "eg/0.png",
        "eg/5.png",
        "eg/7.png",
        "eg/8.png",
    ],
    building: [
        {
            imageSrc: "building/eastDoor.png",
            title: "东大门",
            description: "北洋",
        },
        {
            imageSrc: "building/shiShi.png",
            title: "北洋广场",
            description: "实事求是",
            blueMap:
                "http://unioncompute.top:1896/#overworld:3179:-31:985:0:2.34:1.77:0:0:free",
        },
        {
            imageSrc: "building/胡.png",
            title: "求是亭",
            description: "求真务实",
            blueMap:
                "http://unioncompute.top:1896/#overworld:3003:-34:1032:0:0.56:1.59:0:0:free",
        },
        {
            imageSrc: "building/水塔.png",
            title: "校史馆",
            description: "百卅天大",
        },
    ],
    campusProjects: {
        beiyangyuan: {
            campusType: "beiyangyuan",
            colorConfig: { from: "#ff7e5f", to: "#feb47b" },
            contentData: {
                title: "北洋园校区复刻项目",
                subtitle: "北洋园校区核心区域三维建模与场景还原",
                progress: 85,
                stats: [
                    { value: "32", label: "建筑模型" },
                    { value: "12", label: "团队成员" },
                ],
                steps: [
                    {
                        id: "1",
                        title: "数据采集",
                        description: "无人机航拍与实地测量...",
                    },
                    {
                        id: "2",
                        title: "模型构建",
                        description: "建筑结构精细建模...",
                    },
                ],
                team: [
                    { name: "张三", role: "项目经理", initials: "ZS" },
                    { name: "李四", role: "建模师", initials: "LS" },
                ],
            },
        },
        weijinlu: {
            campusType: "weijinlu",
            colorConfig: { from: "#00b09b", to: "#96c93d" },
            contentData: {
                title: "卫津路校区复刻项目",
                subtitle: "卫津路校区标志性建筑数字化复刻工程",
                progress: 75,
                stats: [
                    { value: "28", label: "建筑模型" },
                    { value: "10", label: "团队成员" },
                ],
                steps: [
                    {
                        id: "1",
                        title: "数据采集",
                        description: "激光扫描与摄影测量技术结合...",
                    },
                    {
                        id: "2",
                        title: "模型重建",
                        description: "基于点云数据的精细建模...",
                    },
                ],
                team: [
                    { name: "王五", role: "项目经理", initials: "WW" },
                    { name: "赵六", role: "建模师", initials: "ZL" },
                ],
            },
        },
    },
};

export default config;