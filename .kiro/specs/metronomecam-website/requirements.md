# Requirements Document

## Introduction

MetronomeCam（节拍拍）是一款面向音乐学习者的 iOS 应用，提供边播放节拍器边录像的功能。本项目旨在为该应用创建一个静态官网，通过 GitHub Pages 部署，向潜在用户展示应用功能、提供下载入口，并包含必要的法律文档和联系方式。

## Glossary

- **Website**: MetronomeCam 官网系统
- **User**: 访问官网的潜在应用用户
- **GitHub Pages**: GitHub 提供的免费静态网站托管服务
- **Static Site**: 不需要后端服务器的纯前端网站
- **Brand Colors**: 品牌主色 #FFCD00（黄色）和 #000000（黑色）
- **Responsive Design**: 能够适配不同设备屏幕尺寸的网页设计

## Requirements

### Requirement 1

**User Story:** 作为一个音乐学习者，我想要快速了解 MetronomeCam 的核心功能，以便决定是否下载使用该应用。

#### Acceptance Criteria

1. WHEN THE User 访问官网首页, THE Website SHALL 在首屏显示应用名称（中英文）、简短描述和核心功能说明
2. THE Website SHALL 使用品牌色 #FFCD00 和 #000000 作为主要视觉元素
3. THE Website SHALL 在首屏展示应用图标占位符
4. WHEN THE User 滚动页面, THE Website SHALL 展示功能特色区块，说明"边播放节拍器边录像"的核心功能
5. THE Website SHALL 使用中文作为主要语言

### Requirement 2

**User Story:** 作为一个潜在用户，我想要看到应用的界面截图，以便更直观地了解应用的使用体验。

#### Acceptance Criteria

1. THE Website SHALL 包含功能展示区块，展示至少 3 个应用截图占位符
2. WHEN THE User 查看截图区域, THE Website SHALL 以清晰易读的方式展示每个截图
3. THE Website SHALL 为每个截图提供简短的功能说明文字
4. THE Website SHALL 确保截图区域在移动设备上正常显示

### Requirement 3

**User Story:** 作为一个 iOS 用户，我想要找到应用的下载方式，以便安装使用该应用。

#### Acceptance Criteria

1. THE Website SHALL 包含下载区块，显示 App Store 下载按钮
2. WHEN 应用未上架时, THE Website SHALL 显示"即将上架"或"敬请期待"的提示信息
3. WHEN 应用已上架后, THE Website SHALL 提供可点击的 App Store 下载链接
4. THE Website SHALL 在多个位置（首屏和页面底部）提供下载入口

### Requirement 4

**User Story:** 作为一个关注隐私的用户，我想要查看应用的隐私政策，以便了解我的数据如何被处理。

#### Acceptance Criteria

1. THE Website SHALL 包含独立的隐私政策页面
2. THE Website SHALL 在页脚提供隐私政策页面的链接
3. THE Website SHALL 在隐私政策页面说明应用的数据收集和使用方式
4. THE Website SHALL 使用清晰易懂的语言编写隐私政策内容
5. THE Website SHALL 在隐私政策中包含最后更新日期

### Requirement 5

**User Story:** 作为一个有问题或反馈的用户，我想要找到联系方式，以便与开发者沟通。

#### Acceptance Criteria

1. THE Website SHALL 在页脚显示联系邮箱地址
2. WHEN THE User 点击邮箱地址, THE Website SHALL 打开用户的默认邮件客户端
3. THE Website SHALL 在联系区域说明用户可以通过邮件反馈问题或建议

### Requirement 6

**User Story:** 作为一个使用不同设备的用户，我想要在手机、平板和电脑上都能正常浏览官网，以便随时了解应用信息。

#### Acceptance Criteria

1. THE Website SHALL 采用响应式设计，适配移动设备、平板和桌面设备
2. WHEN THE User 在移动设备上访问, THE Website SHALL 调整布局以适应小屏幕
3. THE Website SHALL 确保所有文字在不同设备上都清晰可读
4. THE Website SHALL 确保所有交互元素在触摸屏设备上易于点击
5. WHEN 屏幕宽度小于 768px 时, THE Website SHALL 使用单列布局

### Requirement 7

**User Story:** 作为项目维护者，我想要通过 GitHub Pages 部署官网，以便利用免费托管服务并简化部署流程。

#### Acceptance Criteria

1. THE Website SHALL 使用纯静态技术构建（HTML、CSS、JavaScript）
2. THE Website SHALL 配置为可通过 GitHub Pages 直接部署
3. THE Website SHALL 包含必要的 GitHub Pages 配置文件
4. THE Website SHALL 在项目根目录或 docs 目录中组织文件结构
5. WHEN 代码推送到 GitHub 仓库, THE Website SHALL 能够自动或手动触发部署

### Requirement 8

**User Story:** 作为一个首次访问的用户，我想要快速加载的网页体验，以便不会因为等待而离开。

#### Acceptance Criteria

1. THE Website SHALL 优化所有图片资源以减少加载时间
2. THE Website SHALL 最小化 CSS 和 JavaScript 文件大小
3. THE Website SHALL 在首次加载时间控制在 3 秒以内（在标准网络条件下）
4. THE Website SHALL 使用现代 Web 性能最佳实践
5. THE Website SHALL 避免使用大型第三方库或框架（除非必要）

### Requirement 9

**User Story:** 作为搜索引擎，我需要正确索引网站内容，以便用户能够通过搜索找到该应用。

#### Acceptance Criteria

1. THE Website SHALL 包含适当的 HTML meta 标签（title、description、keywords）
2. THE Website SHALL 使用语义化的 HTML 标签结构
3. THE Website SHALL 包含 Open Graph 标签以支持社交媒体分享
4. THE Website SHALL 为所有图片提供 alt 属性描述
5. THE Website SHALL 包含 favicon 图标
