### TJUUS.config.ts 配置文件说明

`TJUUS.config.ts` 文件用于配置网页各个部分的内容，使用 TypeScript 类型定义确保配置正确性。

#### 各部分说明

1. **项目卡片 (`project`)**
   - **用途**：配置 `ProjectCards.vue` 组件中展示的信息卡片内容
   - **字段说明**：
     - `imageSrc` (字符串)：图片资源路径
     - `title` (字符串)：卡片标题
     - `description` (字符串)：卡片描述
     - `blueMap` (字符串，可选)：BlueMap 地图链接

2. **轮播图 (`carousel`)**
   - **用途**：配置 `Carousel.vue` 组件中展示的轮播图片
   - **字段说明**：数组中的每个元素为一个图片资源路径

3. **建筑特色 (`building`)**
   - **用途**：配置 `FeaturedItems.vue` 组件中展示的建筑特色卡片
   - **字段说明**：同项目卡片字段

4. **校区项目 (`campusProjects`)**
   - **用途**：配置校区项目页面的详细内容
   - **字段说明**：
     - `campusType` (字符串)：校区标识 ('beiyangyuan' 或 'weijinlu')
     - `colorConfig` (对象)：渐变色配置 { from: 开始颜色, to: 结束颜色 }
     - `contentData` (对象)：包含以下字段：
       - `title` (字符串)：项目标题
       - `subtitle` (字符串)：项目副标题
       - `progress` (数字)：项目进度 (0-100)
       - `stats` (数组)：统计信息 [{ value: 数值, label: 标签 }]
       - `steps` (数组)：项目步骤 [{ id: ID, title: 标题, description: 描述 }]
       - `team` (数组)：团队成员 [{ name: 姓名, role: 角色, initials: 缩写 }]

#### **注意事项**

- 确保图片路径正确且文件存在,了解WEB中图片路径的逻辑
- 保持 TypeScript 类型一致性
