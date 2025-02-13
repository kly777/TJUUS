const n=`---
author: 口x口
date: 2025-2-13
imageSrc: ./footer.png
---



## 如何为此网站编写文章

本网站使用 markdown 编写文章

### 如何使用 Markdown 文件：以 \`Hello, world.md\` 为例

#### 1. 理解 Front Matter（前置元数据）

在 Markdown 文件中，\`---\` 包围的部分称为 **Front Matter**，它用于定义文件的元数据，这些元数据可以被解析和使用。

\`\`\`markdown
---
author: 口x口
date: 2025-1-20
imageSrc: ./landsc.jpg
---
\`\`\`

**Front Matter 中可用的字段为：**

- \`author\`: 文章作者。
- \`date\`: 文章创建或发布的日期，格式为 \`YYYY-MM-DD\`。
- \`imageSrc\`: 封面图片的路径。

你可以根据需要添加更多自定义字段，可以联系口x口。

#### 2. 编写 Markdown 内容

Markdown 是一种轻量级的标记语言，易于阅读和编写。以下是几个常用的 Markdown 语法：

- **标题**: 使用 \`#\` 表示不同级别的标题。
  \`\`\`markdown
  # 一级标题
  ## 二级标题
  ### 三级标题
  \`\`\`

- **段落与换行**: 段落之间用空行分隔，换行只需在行尾加两个空格。
  \`\`\`markdown
  这是第一行。  
  这是第二行。
  \`\`\`

- **强调文本**: 使用 \`*\` 或 \`_\` 包围文本以实现斜体，使用 \`**\` 或 \`__\` 实现粗体。
  \`\`\`markdown
  *斜体* 或 _斜体_
  **粗体** 或 __粗体__
  \`\`\`

- **链接**: 使用 \`[链接文字](URL)\` 格式。
  \`\`\`markdown
  [Markdown 教程](https://www.markdownguide.org/basic-syntax/)
  \`\`\`

- **图片**: 使用 \`![替代文本](图片URL)\` 格式。
  \`\`\`markdown
  ![封面图](./landsc.jpg)
  \`\`\`

#### 3. 更多资源

如果你想了解更多关于 Markdown 的语法和用法，建议参考以下教程：
- [另一个教程](https://markdown.com.cn/)
- [Markdown 基本语法](https://www.markdownguide.org/basic-syntax/)
- [高级 Markdown 语法](https://www.markdownguide.org/extended-syntax/)


通过结合 Front Matter 和 Markdown 语法，你可以轻松地创建结构清晰、内容丰富的文档。希望这篇介绍能帮助你更好地理解和使用 \`Hello, world.md\` 文件！

---

如果你有任何问题或需要进一步的帮助，请随时联系我！ 😊`;export{n as default};
