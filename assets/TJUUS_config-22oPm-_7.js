const n=`### TJUUS.config.json 配置文件说明

\`TJUUS.config.json\` 文件用于配置网页各个部分的内容，包括图片路径、标题和描述等信息。

#### 文件结构

\`\`\`json
{
    "server": [
        {
            "imageSrc": "server/tianda1.png",
            "title": "文本1",
            "description": "这是文本1的描述"
        },
        ...
    ],
    "carousel": [
        "eg/1.png",
        "eg/2.png",
        "eg/0.png",
        "eg/5.png",
        "eg/7.png",
        "eg/8.png"
    ],
    "building": [
        {
            "imageSrc": "building/dongdamen.jpeg",
            "title": "天大大门",
            "description": "实事求是"
        },
        ...
    ]
}
\`\`\`

#### 各部分说明

1. **服务器列表 (\`server\`)**

   - **用途**：配置 \`InfoCards.vue\` 组件中展示的信息卡片内容。
   - **字段说明**：
     - \`imageSrc\` (字符串)：图片资源路径。
     - \`title\` (字符串)：卡片标题。
     - \`description\` (字符串)：卡片描述。

   **示例**：
   \`\`\`json
   {
       "imageSrc": "server/tianda1.png",
       "title": "文本1",
       "description": "这是文本1的描述"
   }
   \`\`\`

2. **轮播图 (\`carousel\`)**

   - **用途**：配置 \`Carousel.vue\` 组件中展示的轮播图片。
   - **字段说明**：
     - 数组中的每个元素为一个图片资源路径。

   **示例**：
   \`\`\`json
   [
       "eg/1.png",
       "eg/2.png",
       "eg/0.png",
       "eg/5.png",
       "eg/7.png",
       "eg/8.png"
   ]
   \`\`\`

3. **建筑特色 (\`building\`)**

   - **用途**：配置 \`FeaturedItems.vue\` 组件中展示的建筑特色卡片内容。
   - **字段说明**：
     - \`imageSrc\` (字符串)：图片资源路径。
     - \`title\` (字符串)：卡片标题。
     - \`description\` (字符串)：卡片描述。

   **示例**：
   \`\`\`json
   {
       "imageSrc": "building/dongdamen.jpeg",
       "title": "天大大门",
       "description": "实事求是"
   }
   \`\`\`

#### 如何修改配置文件

1. **添加或删除项目**：
   - 根据需要在相应的数组中添加或删除对象或字符串。
   - 确保每个对象的字段完整且正确。

2. **更新图片路径**：
   - 修改 \`imageSrc\` 字段中的图片路径，确保路径正确且图片存在。

3. **更新标题和描述**：
   - 修改 \`title\` 和 \`description\` 字段中的文本内容，确保内容准确且符合需求。

#### 注意事项

- **路径格式**：确保所有图片路径以相对路径的形式提供，并且图片存在于项目中。
- **字段完整性**：每个对象必须包含所有必需的字段（如 \`imageSrc\`, \`title\`, \`description\`），避免遗漏。
- **语法正确性**：确保 JSON 文件格式正确，避免语法错误。

#### 示例配置文件

\`\`\`json
{
    "server": [
        {
            "imageSrc": "server/tianda1.png",
            "title": "文本1",
            "description": "这是文本1的描述"
        },
        {
            "imageSrc": "server/tianda2.png",
            "title": "文本2",
            "description": "这是文本2的描述"
        },
        {
            "imageSrc": "server/tianda3.png",
            "title": "文本3",
            "description": "这是文本3的描述"
        }
    ],
    "carousel": [
        "eg/1.png",
        "eg/2.png",
        "eg/3.png",
        "eg/4.png",
        "eg/5.png"
    ],
    "building": [
        {
            "imageSrc": "building/dongdamen.jpeg",
            "title": "天大大门",
            "description": "实事求是"
        },
        {
            "imageSrc": "building/library.jpg",
            "title": "图书馆",
            "description": "知识的殿堂"
        },
        {
            "imageSrc": "building/stadium.png",
            "title": "体育场",
            "description": "运动的乐园"
        }
    ]
}
\`\`\``;export{n as default};
