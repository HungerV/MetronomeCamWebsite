# GitHub Pages 部署指南

## 项目概述

MetronomeCam 官网是一个纯静态网站，使用 HTML、CSS 和 JavaScript 构建，非常适合通过 GitHub Pages 免费托管。

## 文件结构验证

### ✅ 当前文件结构

```
MetronomeCamWebsite/
├── index.html              # 主页（必需）
├── privacy.html            # 隐私政策页面
├── responsive-test.html    # 响应式测试页面（可选）
├── robots.txt              # 搜索引擎爬虫配置
├── sitemap.xml             # 网站地图
├── README.md               # 项目说明
├── DEPLOYMENT.md           # 部署指南（本文件）
├── PERFORMANCE-OPTIMIZATION.md  # 性能优化指南
├── RESPONSIVE-CHECKLIST.md      # 响应式检查清单
├── css/
│   └── style.css          # 主样式文件
├── js/
│   └── main.js            # 主 JavaScript 文件
└── images/
    ├── favicon.svg        # 网站图标
    ├── favicon.ico        # 网站图标（备用）
    ├── icon-placeholder.svg           # 应用图标
    ├── icon-placeholder-large.svg     # 大尺寸应用图标
    ├── screenshot-1.png   # 截图 1
    ├── screenshot-2.png   # 截图 2
    ├── screenshot-3.png   # 截图 3
    └── README.md          # 图片资源说明
```

### ✅ GitHub Pages 要求

- [x] 仓库必须是 public（或 GitHub Pro/Team 账户的 private 仓库）
- [x] 必须有 index.html 文件在根目录
- [x] 所有资源路径使用相对路径
- [x] 无需构建步骤（纯静态文件）

## 部署步骤

### 步骤 1: GitHub 仓库信息

**仓库已创建**: https://github.com/HungerV/MetronomeCamWebsite.git

**仓库信息**:
- 仓库名称: `MetronomeCamWebsite`
- 所有者: `HungerV`
- 类型: Public
- 描述: Official website for MetronomeCam iOS app

### 步骤 2: 推送代码到 GitHub

#### 克隆现有仓库

```bash
# 克隆仓库到本地
git clone https://github.com/HungerV/MetronomeCamWebsite.git
cd MetronomeCamWebsite
```

#### 更新和推送更改

```bash
# 1. 确保所有更改已提交
git add .
git commit -m "Update website files"

# 2. 推送到 GitHub
git push origin main
```

#### 如果需要重新关联远程仓库

```bash
# 添加远程仓库
git remote add origin https://github.com/HungerV/MetronomeCamWebsite.git

# 或更新现有远程仓库
git remote set-url origin https://github.com/HungerV/MetronomeCamWebsite.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

### 步骤 3: 启用 GitHub Pages

1. **进入仓库设置**
   - 在 GitHub 仓库页面，点击 "Settings"
   - 在左侧菜单中找到 "Pages"

2. **配置 GitHub Pages**
   - **Source**: 选择 "Deploy from a branch"
   - **Branch**: 选择 `main` 分支
   - **Folder**: 选择 `/ (root)`
   - 点击 "Save"

3. **等待部署**
   - GitHub 会自动开始部署
   - 通常需要 1-2 分钟
   - 部署完成后会显示网站 URL

4. **访问网站**
   - URL 格式：`https://YOUR_USERNAME.github.io/metronomecam-website/`
   - 点击链接访问你的网站

### 步骤 4: 配置自定义域名（可选）

#### 如果你有自己的域名

1. **在 GitHub Pages 设置中**
   - 在 "Custom domain" 输入框中输入你的域名
   - 例如：`metronomecam.com` 或 `www.metronomecam.com`
   - 点击 "Save"

2. **创建 CNAME 文件**
   ```bash
   echo "metronomecam.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push origin main
   ```

3. **配置 DNS 记录**
   
   在你的域名提供商处添加以下 DNS 记录：

   **方式 1: 使用 A 记录（推荐）**
   ```
   类型: A
   名称: @
   值: 185.199.108.153
   值: 185.199.109.153
   值: 185.199.110.153
   值: 185.199.111.153
   ```

   **方式 2: 使用 CNAME 记录**
   ```
   类型: CNAME
   名称: www
   值: YOUR_USERNAME.github.io
   ```

4. **启用 HTTPS**
   - 在 GitHub Pages 设置中
   - 勾选 "Enforce HTTPS"
   - 等待 SSL 证书生成（可能需要几小时）

## 更新网站

### 本地修改后更新

```bash
# 1. 修改文件后，添加更改
git add .

# 2. 提交更改
git commit -m "Update: 描述你的更改"

# 3. 推送到 GitHub
git push origin main

# 4. GitHub Pages 会自动重新部署（1-2 分钟）
```

### 更新 URL 引用

部署后，需要更新以下文件中的 URL：

#### index.html
```html
<!-- 更新 Open Graph URL -->
<meta property="og:url" content="https://YOUR_USERNAME.github.io/metronomecam-website/">
<meta property="og:image" content="https://YOUR_USERNAME.github.io/metronomecam-website/images/icon-placeholder-large.svg">

<!-- 更新 Twitter Card -->
<meta name="twitter:image" content="https://YOUR_USERNAME.github.io/metronomecam-website/images/icon-placeholder-large.svg">

<!-- 更新 Canonical URL -->
<link rel="canonical" href="https://YOUR_USERNAME.github.io/metronomecam-website/">
```

#### sitemap.xml
```xml
<!-- 更新所有 URL -->
<loc>https://YOUR_USERNAME.github.io/metronomecam-website/</loc>
<loc>https://YOUR_USERNAME.github.io/metronomecam-website/privacy.html</loc>
```

#### robots.txt
```
# 更新 Sitemap URL
Sitemap: https://YOUR_USERNAME.github.io/metronomecam-website/sitemap.xml
```

## 验证部署

### 1. 检查网站是否可访问

```bash
# 访问主页
https://YOUR_USERNAME.github.io/metronomecam-website/

# 访问隐私政策页面
https://YOUR_USERNAME.github.io/metronomecam-website/privacy.html
```

### 2. 验证资源加载

打开浏览器开发者工具（F12）：
- 检查 Network 标签
- 确保所有资源（CSS、JS、图片）都成功加载
- 没有 404 错误

### 3. 测试响应式设计

- 使用浏览器的设备模拟器
- 测试不同屏幕尺寸
- 验证布局正常

### 4. 运行 Lighthouse 测试

1. 打开 Chrome DevTools (F12)
2. 切换到 Lighthouse 标签
3. 选择所有类别
4. 点击 "Generate report"
5. 查看评分和优化建议

### 5. 提交到搜索引擎

#### Google Search Console
1. 访问 https://search.google.com/search-console
2. 添加你的网站
3. 验证所有权
4. 提交 sitemap.xml

#### Bing Webmaster Tools
1. 访问 https://www.bing.com/webmasters
2. 添加你的网站
3. 验证所有权
4. 提交 sitemap.xml

## 常见问题

### Q1: 网站显示 404 错误

**原因**: 
- GitHub Pages 还在部署中
- 仓库不是 public
- 分支或文件夹配置错误

**解决方案**:
1. 等待 1-2 分钟让部署完成
2. 确保仓库是 public
3. 检查 Settings > Pages 中的配置

### Q2: CSS 或 JS 没有加载

**原因**: 
- 文件路径错误
- 文件名大小写不匹配

**解决方案**:
1. 检查 HTML 中的路径是否正确
2. 确保使用相对路径（不要以 / 开头）
3. 检查文件名大小写（GitHub Pages 区分大小写）

### Q3: 图片不显示

**原因**:
- 图片路径错误
- 图片文件未提交到 Git

**解决方案**:
1. 检查图片路径
2. 确保图片文件已提交：`git add images/`
3. 推送更改：`git push origin main`

### Q4: 自定义域名不工作

**原因**:
- DNS 记录未生效
- CNAME 文件配置错误

**解决方案**:
1. 等待 DNS 传播（可能需要 24-48 小时）
2. 检查 CNAME 文件内容
3. 验证 DNS 记录配置

### Q5: HTTPS 证书错误

**原因**:
- SSL 证书还在生成中
- 自定义域名配置问题

**解决方案**:
1. 等待几小时让证书生成
2. 取消勾选 "Enforce HTTPS"，等待一段时间后重新勾选
3. 检查自定义域名配置

## 性能监控

### 设置 Google Analytics（可选）

1. **创建 GA 账户**
   - 访问 https://analytics.google.com
   - 创建新的 property

2. **添加跟踪代码**
   在 `index.html` 和 `privacy.html` 的 `<head>` 中添加：
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

3. **提交更改**
   ```bash
   git add .
   git commit -m "Add Google Analytics"
   git push origin main
   ```

## 备份和版本控制

### 创建标签（版本）

```bash
# 创建版本标签
git tag -a v1.0.0 -m "Initial release"
git push origin v1.0.0

# 查看所有标签
git tag

# 回退到特定版本
git checkout v1.0.0
```

### 创建分支

```bash
# 创建开发分支
git checkout -b develop

# 在开发分支上工作
git add .
git commit -m "Work in progress"
git push origin develop

# 合并到主分支
git checkout main
git merge develop
git push origin main
```

## 维护清单

### 定期任务

- [ ] 每月运行 Lighthouse 测试
- [ ] 检查 Google Search Console 中的错误
- [ ] 更新应用截图（当应用更新时）
- [ ] 检查并修复失效链接
- [ ] 更新隐私政策（如有变更）
- [ ] 备份网站文件

### 应用上架后

- [ ] 更新 `siteConfig.app.isLaunched` 为 `true`
- [ ] 添加实际的 App Store URL
- [ ] 启用下载按钮
- [ ] 更新 meta 标签中的描述
- [ ] 提交更改并推送

## 安全建议

1. **不要提交敏感信息**
   - API 密钥
   - 密码
   - 个人信息

2. **使用 .gitignore**
   ```
   # .gitignore
   .DS_Store
   Thumbs.db
   *.log
   node_modules/
   .env
   ```

3. **定期更新依赖**
   - 虽然我们没有使用外部库
   - 但要关注浏览器安全更新

## 成本

### GitHub Pages
- **免费**: 100% 免费
- **限制**: 
  - 仓库大小 < 1GB
  - 带宽 < 100GB/月
  - 构建次数 < 10次/小时

### 自定义域名（可选）
- **成本**: $10-15/年
- **推荐注册商**: 
  - Namecheap
  - Google Domains
  - Cloudflare

## 支持和帮助

### 官方文档
- [GitHub Pages 文档](https://docs.github.com/en/pages)
- [自定义域名配置](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

### 社区支持
- [GitHub Community](https://github.community/)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/github-pages)

## 部署检查清单

### 部署前
- [x] 所有文件已提交到 Git
- [x] 测试本地文件路径正确
- [x] 运行 Lighthouse 测试
- [x] 验证响应式设计
- [x] 检查所有链接

### 部署后
- [ ] 验证网站可访问
- [ ] 检查所有资源加载正常
- [ ] 测试所有功能
- [ ] 提交 sitemap 到搜索引擎
- [ ] 设置监控（如 Google Analytics）

## 结论

✅ **项目已准备好部署到 GitHub Pages**

所有必需的文件和配置都已就绪。按照本指南的步骤操作，你的网站将在几分钟内上线。

---

**最后更新**: 2024年11月4日
**状态**: ✅ 准备就绪
