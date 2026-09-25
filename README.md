# 全栈工程师简历网站演示

这是使用 `resume-site-studio` Skill 制作的虚构示例。人物、公司、学校、项目和指标均为演示数据，不对应真实个人或组织。

在线预览：<https://magicjacky.github.io/resume-site-studio-demo/>

## 预览

直接打开 `public/index.html`，或在 `public` 目录运行：

```powershell
python -m http.server 8788 --bind 127.0.0.1
```

然后访问 `http://127.0.0.1:8788/`。

## 文件

- `public/index.html`：公开内容。
- `public/styles.css`：视觉、响应式、减少动态效果与打印样式。
- `public/app.js`：主题切换、滚动进度和渐入增强。

## 修改成真实简历

修改 `public/index.html` 中的演示信息即可。发布前逐项核对姓名、公司、日期、项目角色、指标和联系方式，并从公开目录移除不希望公开的信息。真实简历和提取后的内部资料不要提交到公开仓库。

## 许可

本项目采用 [PolyForm Noncommercial License 1.0.0](LICENSE)：

- 允许个人学习、研究、测试和其他非商业用途；
- 允许在非商业用途下修改和再分发；
- 再分发原版或修改版时，必须保留许可证，以及下面这条作者和来源声明：

  `Required Notice: Copyright (c) 2026 magicjacky. Original source: https://github.com/magicjacky/resume-site-studio-demo`

- 未经书面授权不得用于商业用途；商业授权方式见 [COMMERCIAL_USE.md](COMMERCIAL_USE.md)。

这是一份“源码可见”许可，不属于 OSI 定义下的开源许可证。
