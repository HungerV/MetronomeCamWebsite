# 图片资源说明

## 当前占位符文件

本目录包含以下占位符图片资源：

### 应用图标
- `icon-placeholder.svg` - 基础应用图标（SVG 格式）
- `icon-placeholder-large.svg` - 高分辨率应用图标（512x512，用于 Apple Touch Icon）

### 截图
- `screenshot-1.png` - 应用截图占位符 1
- `screenshot-2.png` - 应用截图占位符 2
- `screenshot-3.png` - 应用截图占位符 3

### Favicon
- `favicon.svg` - 网站图标（SVG 格式，32x32）
- `favicon.ico` - 网站图标（ICO 格式，需要生成）

## 如何替换为实际图片

### 1. 应用图标

将实际的应用图标替换以下文件：
- 替换 `icon-placeholder.svg` 或创建 `icon-placeholder.png`（建议尺寸：512x512px）
- 更新 `index.html` 中的图标引用

### 2. 应用截图

替换以下截图文件：
- `screenshot-1.png` - 主界面截图（建议尺寸：1170x2532px，iPhone 14 Pro Max）
- `screenshot-2.png` - 节拍器设置界面
- `screenshot-3.png` - 录像功能界面

**截图要求：**
- 格式：PNG
- 建议尺寸：iPhone 截图原始尺寸
- 优化：使用工具压缩以减小文件大小（推荐 TinyPNG 或 ImageOptim）

### 3. Favicon

#### 生成 favicon.ico

可以使用以下方法之一生成 favicon.ico：

**方法 1：在线工具**
1. 访问 https://realfavicongenerator.net/
2. 上传 `favicon.svg` 或应用图标
3. 下载生成的 favicon.ico
4. 替换本目录中的 favicon.ico

**方法 2：使用 ImageMagick**
```bash
# 从 SVG 生成 ICO
convert favicon.svg -resize 32x32 favicon.ico

# 或从 PNG 生成多尺寸 ICO
convert icon-placeholder.png -resize 16x16 favicon-16.png
convert icon-placeholder.png -resize 32x32 favicon-32.png
convert favicon-16.png favicon-32.png favicon.ico
```

**方法 3：使用在线转换器**
- https://convertio.co/zh/svg-ico/
- https://www.favicon-generator.org/

## 图片优化建议

### PNG 优化工具
- **TinyPNG**: https://tinypng.com/ （在线压缩）
- **ImageOptim**: https://imageoptim.com/ （Mac 应用）
- **Squoosh**: https://squoosh.app/ （Google 工具）

### 优化命令（使用 ImageMagick）
```bash
# 压缩 PNG
convert screenshot-1.png -quality 85 -strip screenshot-1-optimized.png

# 批量优化
for file in screenshot-*.png; do
  convert "$file" -quality 85 -strip "optimized-$file"
done
```

### SVG 优化
```bash
# 使用 SVGO
npm install -g svgo
svgo favicon.svg -o favicon-optimized.svg
```

## 文件大小建议

- **应用图标**: < 100KB
- **截图**: 每张 < 500KB
- **Favicon**: < 50KB

## 品牌色参考

在创建图片时，请使用以下品牌色：

- **主色（黄色）**: `#FFCD00`
- **辅色（黑色）**: `#000000`
- **背景色**: `#FFFFFF` 或 `#F9F9F9`

## 注意事项

1. 所有图片应使用 RGB 色彩空间（不是 CMYK）
2. 截图应该是实际应用界面，不要使用模拟器边框
3. 确保图片清晰，避免模糊或像素化
4. 优化后的图片应保持良好的视觉质量
5. 考虑使用 WebP 格式作为 PNG 的替代（需要添加 fallback）

## 当前状态

- ✅ SVG 占位符已创建
- ⚠️ 需要生成 favicon.ico
- ⚠️ 需要替换为实际应用截图
- ⚠️ 需要替换为实际应用图标
