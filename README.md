# MetronomeCam 官网

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-success)](https://hungerv.github.io/MetronomeCamWebsite/)
[![License](https://img.shields.io/badge/License-Proprietary-red.svg)](LICENSE)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/HungerV/MetronomeCamWebsite)

MetronomeCam（节拍拍）是一款专为音乐学习者设计的 iOS 应用，提供边播放节拍器边录像的功能。

## 🌟 项目简介

这是 MetronomeCam 应用的官方网站，使用纯静态技术构建，通过 GitHub Pages 免费托管。网站采用响应式设计，完美适配移动端、平板和桌面设备。

**GitHub 仓库**: https://github.com/HungerV/MetronomeCamWebsite.git

## 🚀 在线预览

- **主页**: [https://hungerv.github.io/MetronomeCamWebsite/](https://hungerv.github.io/MetronomeCamWebsite/)
- **隐私政策**: [https://hungerv.github.io/MetronomeCamWebsite/privacy.html](https://hungerv.github.io/MetronomeCamWebsite/privacy.html)

## 🛠 技术栈

- **HTML5** - 语义化标记
- **CSS3** - 现代样式和动画（使用 CSS 变量）
- **Vanilla JavaScript** - 轻量级交互（无框架依赖）
- **GitHub Pages** - 静态网站托管

## 📁 项目结构

```
MetronomeCamWebsite/
├── index.html                      # 主页
├── privacy.html                    # 隐私政策页面
├── responsive-test.html            # 响应式测试页面
├── robots.txt                      # 搜索引擎爬虫配置
├── sitemap.xml                     # 网站地图
├── .gitignore                      # Git 忽略文件
├── README.md                       # 项目说明（本文件）
├── DEPLOYMENT.md                   # 详细部署指南
├── PERFORMANCE-OPTIMIZATION.md     # 性能优化指南
├── RESPONSIVE-CHECKLIST.md         # 响应式检查清单
├── css/
│   └── style.css                  # 主样式文件（~35KB）
├── js/
│   └── main.js                    # 主交互脚本（~5KB）
└── images/
    ├── favicon.svg                # 网站图标（SVG）
    ├── favicon.ico                # 网站图标（ICO 备用）
    ├── icon-placeholder.svg       # 应用图标
    ├── icon-placeholder-large.svg # 大尺寸应用图标（512x512）
    ├── screenshot-1.png           # 截图 1
    ├── screenshot-2.png           # 截图 2
    ├── screenshot-3.png           # 截图 3
    └── README.md                  # 图片资源说明
```

## 本地开发

1. 克隆仓库到本地
2. 直接在浏览器中打开 `index.html` 文件
3. 或使用本地服务器（推荐）：
   ```bash
   # 使用 Python 3
   python3 -m http.server 8000
   
   # 或使用 Node.js
   npx serve
   ```
4. 在浏览器中访问 `http://localhost:8000`

## 📦 快速部署

### 克隆项目

```bash
# 克隆项目到本地
git clone https://github.com/HungerV/MetronomeCamWebsite.git
cd MetronomeCamWebsite
```

### 更新和推送

```bash
# 1. 修改文件后，添加更改
git add .

# 2. 提交更改
git commit -m "Update: 描述你的更改"

# 3. 推送到 GitHub
git push origin main

# 4. GitHub Pages 会自动重新部署（1-2 分钟）
```

### 详细部署指南

查看 [DEPLOYMENT.md](DEPLOYMENT.md) 获取完整的部署说明，包括：
- 自定义域名配置
- HTTPS 设置
- DNS 配置
- 常见问题解决

## 配置说明

### 更新联系邮箱

在以下文件中替换 `contact@example.com` 为实际邮箱：
- `index.html`
- `js/main.js`

### 应用上架后更新

当应用在 App Store 上架后：

1. 在 `js/main.js` 中更新配置：
   ```javascript
   const siteConfig = {
     app: {
       isLaunched: true,
       appStoreUrl: 'https://apps.apple.com/app/your-app-id',
     },
     // ...
   };
   ```

2. 在 `index.html` 中移除按钮的 `disabled` 属性

## 品牌资源

- 主色：#FFCD00（黄色）
- 辅色：#000000（黑色）
- 字体：系统默认字体栈（支持中文）

## 浏览器支持

- Safari (iOS 14+)
- Chrome (最新版本)
- Firefox (最新版本)
- Edge (最新版本)

## ⚡ 性能优化

网站已经过全面优化，预期 Lighthouse 评分：

- **Performance**: 95-100
- **Accessibility**: 95-100
- **Best Practices**: 95-100
- **SEO**: 95-100

### 已实现的优化

- ✅ 图片懒加载（loading="lazy"）
- ✅ CSS 变量减少代码重复
- ✅ 无外部依赖（零运行时开销）
- ✅ 响应式图片
- ✅ 最小化的 JavaScript
- ✅ 完整的 SEO meta 标签
- ✅ robots.txt 和 sitemap.xml

查看 [PERFORMANCE-OPTIMIZATION.md](PERFORMANCE-OPTIMIZATION.md) 获取详细的优化指南。

## 📱 响应式设计

网站完美适配所有设备：

- **移动端** (< 768px): 单列布局
- **平板** (768px - 1023px): 两列布局
- **桌面** (≥ 1024px): 三列布局

查看 [RESPONSIVE-CHECKLIST.md](RESPONSIVE-CHECKLIST.md) 获取完整的测试清单。

## 🧪 测试

### 本地测试

```bash
# 使用 Python 启动本地服务器
python3 -m http.server 8000

# 或使用 Node.js
npx serve

# 访问测试页面
open http://localhost:8000/responsive-test.html
```

### 性能测试

1. 打开 Chrome DevTools (F12)
2. 切换到 Lighthouse 标签
3. 运行性能测试
4. 查看评分和优化建议

## 📝 文档

- [DEPLOYMENT.md](DEPLOYMENT.md) - 详细部署指南
- [PERFORMANCE-OPTIMIZATION.md](PERFORMANCE-OPTIMIZATION.md) - 性能优化指南
- [RESPONSIVE-CHECKLIST.md](RESPONSIVE-CHECKLIST.md) - 响应式检查清单
- [images/README.md](images/README.md) - 图片资源说明

## 🔧 维护

### 更新网站内容

```bash
# 1. 修改文件
# 2. 提交更改
git add .
git commit -m "Update: 描述你的更改"

# 3. 推送到 GitHub
git push origin main

# 4. GitHub Pages 会自动重新部署（1-2 分钟）
```

### 应用上架后更新

当应用在 App Store 上架后，需要更新：

1. **更新配置** (`js/main.js`):
   ```javascript
   const siteConfig = {
     app: {
       isLaunched: true,
       appStoreUrl: 'https://apps.apple.com/app/your-app-id',
     },
   };
   ```

2. **启用下载按钮** (`index.html`):
   - 移除 `disabled` 属性
   - 更新按钮文字

3. **提交更改**:
   ```bash
   git add .
   git commit -m "Update: App launched on App Store"
   git push origin main
   ```

## 🎨 品牌资源

- **主色**: `#FFCD00` (黄色)
- **辅色**: `#000000` (黑色)
- **字体**: 系统默认字体栈（支持中文）
  - macOS/iOS: -apple-system, PingFang SC
  - Windows: Microsoft YaHei
  - Android: Roboto

## 🌐 浏览器支持

- ✅ Safari (iOS 14+)
- ✅ Chrome (最新版本)
- ✅ Firefox (最新版本)
- ✅ Edge (最新版本)

## 📄 许可证

Copyright © 2024 MetronomeCam. All rights reserved.

## 📧 联系方式

如有问题或建议，请发送邮件至：[contact@example.com](mailto:contact@example.com)

## 🙏 致谢

感谢所有为这个项目做出贡献的人！

---

**最后更新**: 2024年11月4日
