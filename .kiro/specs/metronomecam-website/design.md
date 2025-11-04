# Design Document

## Project Information

**GitHub Repository**: https://github.com/HungerV/MetronomeCamWebsite.git  
**Live URL**: https://hungerv.github.io/MetronomeCamWebsite/  
**Owner**: HungerV  
**Status**: ✅ Core Development Complete

## Overview

MetronomeCam 官网将采用现代、简洁的单页设计，使用纯静态技术构建，通过 GitHub Pages 部署。网站将以品牌色（黄色 #FFCD00 和黑色 #000000）为主视觉，提供流畅的用户体验和清晰的信息架构。

### Technology Stack

- **HTML5**: 语义化标记
- **CSS3**: 现代样式和动画（使用原生 CSS，无预处理器）
- **Vanilla JavaScript**: 轻量级交互（无框架依赖）
- **GitHub Pages**: 静态网站托管

**选择理由**: 
- 纯静态技术确保最快的加载速度和最简单的部署流程
- 无构建工具依赖，直接推送即可部署
- 无运行时依赖，减少维护成本
- 完全符合 GitHub Pages 的托管要求

## Architecture

### Site Structure

```
MetronomeCamWebsite/
├── index.html              # 主页
├── privacy.html            # 隐私政策页面
├── css/
│   └── style.css          # 主样式文件
├── js/
│   └── main.js            # 主交互脚本
├── images/
│   ├── icon-placeholder.png       # 应用图标占位符
│   ├── screenshot-1.png           # 截图占位符 1
│   ├── screenshot-2.png           # 截图占位符 2
│   ├── screenshot-3.png           # 截图占位符 3
│   └── favicon.ico                # 网站图标
└── README.md              # 项目说明文档
```

### Page Layout

#### 主页 (index.html)

单页滚动式布局，包含以下区块：

1. **Hero Section（首屏区）**
   - 应用图标
   - 应用名称（中英文）
   - 简短标语
   - 主要 CTA 按钮（下载/即将上架）

2. **Features Section（功能特色区）**
   - 核心功能说明
   - 3 个特色功能卡片
   - 图标 + 标题 + 描述

3. **Screenshots Section（截图展示区）**
   - 3 张应用截图
   - 轮播或网格展示
   - 每张截图配有说明文字

4. **Download Section（下载区）**
   - App Store 下载按钮
   - "即将上架"状态提示
   - 二维码（可选）

5. **Footer（页脚）**
   - 联系邮箱
   - 隐私政策链接
   - 版权信息

#### 隐私政策页面 (privacy.html)

- 简洁的文档布局
- 返回首页链接
- 结构化的隐私政策内容
- 最后更新日期

## Components and Interfaces

### 1. Navigation Component

**功能**: 固定顶部导航栏（可选，根据内容长度决定）

**结构**:
```html
<nav class="navbar">
  <div class="nav-brand">MetronomeCam</div>
  <div class="nav-links">
    <a href="#features">功能</a>
    <a href="#screenshots">截图</a>
    <a href="#download">下载</a>
  </div>
</nav>
```

**样式特点**:
- 半透明背景，滚动时变为实色
- 品牌色强调
- 移动端汉堡菜单

### 2. Hero Component

**功能**: 首屏展示核心信息

**结构**:
```html
<section class="hero">
  <img src="images/icon-placeholder.png" alt="MetronomeCam Icon" class="app-icon">
  <h1>MetronomeCam</h1>
  <h2>节拍拍</h2>
  <p class="tagline">边练琴，边录像，节奏更精准</p>
  <button class="cta-button">即将上架 App Store</button>
</section>
```

**样式特点**:
- 居中对齐
- 大号字体
- 黄色 CTA 按钮配黑色文字
- 渐变或纯色背景

### 3. Feature Cards Component

**功能**: 展示应用特色功能

**结构**:
```html
<section class="features" id="features">
  <h2>核心功能</h2>
  <div class="feature-grid">
    <div class="feature-card">
      <div class="feature-icon">🎵</div>
      <h3>专业节拍器</h3>
      <p>精准的节拍器功能，支持多种节拍模式</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon">📹</div>
      <h3>同步录像</h3>
      <p>边播放节拍器边录像，记录每次练习</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon">🎯</div>
      <h3>简单易用</h3>
      <p>专为音乐学习者设计，操作简单直观</p>
    </div>
  </div>
</section>
```

**样式特点**:
- 3 列网格布局（移动端单列）
- 卡片悬停效果
- 图标使用 emoji 或 SVG

### 4. Screenshots Gallery Component

**功能**: 展示应用界面截图

**结构**:
```html
<section class="screenshots" id="screenshots">
  <h2>应用截图</h2>
  <div class="screenshot-grid">
    <div class="screenshot-item">
      <img src="images/screenshot-1.png" alt="主界面">
      <p>主界面 - 简洁直观</p>
    </div>
    <div class="screenshot-item">
      <img src="images/screenshot-2.png" alt="节拍器设置">
      <p>节拍器设置 - 灵活配置</p>
    </div>
    <div class="screenshot-item">
      <img src="images/screenshot-3.png" alt="录像功能">
      <p>录像功能 - 同步记录</p>
    </div>
  </div>
</section>
```

**样式特点**:
- 手机框架样式（可选）
- 阴影效果
- 响应式网格

### 5. Download Section Component

**功能**: 提供下载入口

**结构**:
```html
<section class="download" id="download">
  <h2>立即下载</h2>
  <p class="download-status">即将在 App Store 上架，敬请期待</p>
  <button class="app-store-button" disabled>
    <span class="button-icon">🍎</span>
    <span class="button-text">
      <small>Download on the</small>
      <strong>App Store</strong>
    </span>
  </button>
  <p class="download-note">目前仅支持 iOS 设备</p>
</section>
```

**样式特点**:
- 仿 App Store 官方按钮样式
- 未上架时显示禁用状态
- 居中布局

### 6. Footer Component

**功能**: 页脚信息和链接

**结构**:
```html
<footer class="footer">
  <div class="footer-content">
    <div class="footer-section">
      <h4>联系我们</h4>
      <p>Email: <a href="mailto:contact@example.com">contact@example.com</a></p>
    </div>
    <div class="footer-section">
      <h4>法律信息</h4>
      <a href="privacy.html">隐私政策</a>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2024 MetronomeCam. All rights reserved.</p>
  </div>
</footer>
```

**样式特点**:
- 深色背景（黑色）
- 黄色链接
- 两列布局（移动端单列）

## Data Models

### Configuration Object

用于管理网站配置信息：

```javascript
const siteConfig = {
  app: {
    name: 'MetronomeCam',
    nameCN: '节拍拍',
    tagline: '边练琴，边录像，节奏更精准',
    description: '专为音乐学习者设计的节拍器录像应用',
    isLaunched: false, // 是否已上架
    appStoreUrl: '', // App Store 链接（上架后填写）
  },
  contact: {
    email: 'contact@example.com', // 需要替换为实际邮箱
  },
  colors: {
    primary: '#FFCD00',
    secondary: '#000000',
  },
  features: [
    {
      icon: '🎵',
      title: '专业节拍器',
      description: '精准的节拍器功能，支持多种节拍模式',
    },
    {
      icon: '📹',
      title: '同步录像',
      description: '边播放节拍器边录像，记录每次练习',
    },
    {
      icon: '🎯',
      title: '简单易用',
      description: '专为音乐学习者设计，操作简单直观',
    },
  ],
};
```

## Design System

### Color Palette

```css
:root {
  /* Brand Colors */
  --color-primary: #FFCD00;      /* 品牌黄 */
  --color-secondary: #000000;    /* 品牌黑 */
  
  /* Neutral Colors */
  --color-white: #FFFFFF;
  --color-gray-light: #F5F5F5;
  --color-gray: #CCCCCC;
  --color-gray-dark: #333333;
  
  /* Semantic Colors */
  --color-text: #333333;
  --color-text-light: #666666;
  --color-background: #FFFFFF;
  --color-background-alt: #F9F9F9;
}
```

### Typography

```css
:root {
  /* Font Families */
  --font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 
                  'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
  
  /* Font Sizes */
  --font-size-xs: 0.75rem;    /* 12px */
  --font-size-sm: 0.875rem;   /* 14px */
  --font-size-base: 1rem;     /* 16px */
  --font-size-lg: 1.125rem;   /* 18px */
  --font-size-xl: 1.5rem;     /* 24px */
  --font-size-2xl: 2rem;      /* 32px */
  --font-size-3xl: 3rem;      /* 48px */
  
  /* Font Weights */
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
}
```

### Spacing System

```css
:root {
  --spacing-xs: 0.5rem;   /* 8px */
  --spacing-sm: 1rem;     /* 16px */
  --spacing-md: 1.5rem;   /* 24px */
  --spacing-lg: 2rem;     /* 32px */
  --spacing-xl: 3rem;     /* 48px */
  --spacing-2xl: 4rem;    /* 64px */
  --spacing-3xl: 6rem;    /* 96px */
}
```

### Breakpoints

```css
/* Mobile First Approach */
/* Mobile: < 768px (default) */
/* Tablet: >= 768px */
/* Desktop: >= 1024px */
/* Large Desktop: >= 1280px */

@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1280px) { /* Large Desktop */ }
```

### Animations

```css
:root {
  --transition-fast: 0.15s ease;
  --transition-base: 0.3s ease;
  --transition-slow: 0.5s ease;
}

/* Common Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## Error Handling

### Image Loading Fallback

```javascript
// 图片加载失败时显示占位符
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('error', function() {
    this.src = 'data:image/svg+xml,...'; // SVG 占位符
    this.alt = '图片加载失败';
  });
});
```

### Email Link Validation

```javascript
// 确保邮箱链接格式正确
const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
emailLinks.forEach(link => {
  const email = link.href.replace('mailto:', '');
  if (!isValidEmail(email)) {
    console.warn('Invalid email address:', email);
  }
});
```

### Smooth Scroll Fallback

```javascript
// 平滑滚动降级处理
function smoothScroll(target) {
  if ('scrollBehavior' in document.documentElement.style) {
    target.scrollIntoView({ behavior: 'smooth' });
  } else {
    // Fallback for older browsers
    target.scrollIntoView();
  }
}
```

## Testing Strategy

### Browser Compatibility Testing

**目标浏览器**:
- Safari (iOS 14+)
- Chrome (最新版本)
- Firefox (最新版本)
- Edge (最新版本)

**测试项目**:
- CSS Grid 和 Flexbox 布局
- CSS 变量支持
- 平滑滚动
- 触摸事件

### Responsive Design Testing

**测试设备尺寸**:
- iPhone SE (375px)
- iPhone 12/13/14 (390px)
- iPhone 14 Pro Max (430px)
- iPad (768px)
- iPad Pro (1024px)
- Desktop (1280px+)

**测试项目**:
- 布局适配
- 文字可读性
- 按钮可点击性
- 图片显示
- 导航菜单

### Performance Testing

**测试指标**:
- First Contentful Paint (FCP) < 1.5s
- Largest Contentful Paint (LCP) < 2.5s
- Total Blocking Time (TBT) < 300ms
- Cumulative Layout Shift (CLS) < 0.1

**优化措施**:
- 图片压缩和优化
- CSS/JS 最小化
- 使用 WebP 格式（带 fallback）
- 延迟加载非关键资源

### Accessibility Testing

**测试项目**:
- 键盘导航
- 屏幕阅读器兼容性
- 颜色对比度（WCAG AA 标准）
- Alt 文本完整性
- 语义化 HTML

### SEO Testing

**测试项目**:
- Meta 标签完整性
- Open Graph 标签
- 结构化数据
- 移动友好性
- 页面加载速度

## Deployment Configuration

### GitHub Pages Setup

**配置步骤**:

1. **仓库设置**
   - 确保仓库为 public
   - 在 Settings > Pages 中启用 GitHub Pages
   - 选择 Source: main 分支，根目录

2. **自定义域名（可选）**
   - 在仓库根目录添加 CNAME 文件
   - 配置 DNS 记录

3. **部署文件结构**
   ```
   根目录部署方式：
   - index.html 在根目录
   - 所有资源文件在根目录的子文件夹中
   ```

### Build and Deployment Process

由于使用纯静态技术，无需构建步骤：

1. 本地开发和测试
2. 提交代码到 GitHub
3. 推送到 main 分支
4. GitHub Pages 自动部署（通常 1-2 分钟）

### Environment Variables

在 `js/main.js` 中配置：

```javascript
const ENV = {
  production: true,
  contactEmail: 'contact@example.com', // 需要替换
  appStoreUrl: '', // 上架后填写
};
```

## Future Enhancements

以下功能可在后续版本中考虑：

1. **多语言支持**: 添加英文版本
2. **博客/新闻**: 应用更新和使用技巧
3. **用户评价**: 展示用户反馈
4. **视频演示**: 嵌入应用使用视频
5. **FAQ**: 常见问题解答
6. **深色模式**: 支持系统深色模式
7. **动画效果**: 更丰富的交互动画
8. **分析工具**: Google Analytics 或其他统计工具

## Design Mockup Description

### Hero Section Visual

- **背景**: 浅灰色渐变 (#F9F9F9 到 #FFFFFF)
- **图标**: 居中，尺寸 120px x 120px，圆角
- **标题**: "MetronomeCam" 大号黑色字体
- **副标题**: "节拍拍" 中号灰色字体
- **标语**: 简短描述，中号字体
- **CTA 按钮**: 黄色背景，黑色文字，圆角，阴影效果

### Features Section Visual

- **背景**: 白色
- **标题**: 居中，大号字体
- **卡片**: 3 列网格，白色背景，边框或阴影
- **图标**: 大号 emoji，居中
- **文字**: 标题加描述，居中对齐

### Screenshots Section Visual

- **背景**: 浅灰色 (#F9F9F9)
- **截图**: 手机框架样式，阴影效果
- **布局**: 3 列网格，移动端单列滚动

### Footer Visual

- **背景**: 黑色 (#000000)
- **文字**: 白色和黄色
- **布局**: 两列，移动端堆叠
