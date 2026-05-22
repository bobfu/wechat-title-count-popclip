# WeChat Title Count for PopClip

一个用于 PopClip 的微信公众号标题字数计算插件。

微信公众号标题常见上限是 64 字，但普通字符统计工具会把英文、数字和空格逐个计数，导致结果和公众号编辑器不一致。这个插件按公众号标题框的实际显示口径估算：

- 全角字符计 1 字
- 半角字符计 0.5 字
- 最终结果向上取整

## 示例

```text
发布嗅觉「潘通系统」，嗅觉大模型 Patina 融资 200 万美元；估值 60 亿美元，Figure 创始人新公司 Hark 将构建「通用智能体」硬件丨日报
```

普通字符统计：

- 79 characters
- 去掉空格后 70 characters

公众号口径：

```text
64/64
```

拆分如下：

- 全角字符：49 个，计 49 字
- 半角字符：30 个，计 15 字
- 合计：64 字

## 安装

### 普通用户

1. 打开仓库页面：[bobfu/wechat-title-count-popclip](https://github.com/bobfu/wechat-title-count-popclip)
2. 点击绿色的 `Code` 按钮。
3. 点击 `Download ZIP`。
4. 解压下载的 ZIP 文件。
5. 双击 `WeChatTitleCount.popclipext` 安装到 PopClip。
6. 在任意文本中选中标题，PopClip 会显示类似 `WeChat 64/64 (0 left)` 的结果。

插件目录直达链接：

[WeChatTitleCount.popclipext](https://github.com/bobfu/wechat-title-count-popclip/tree/main/WeChatTitleCount.popclipext)

### 开发者

```bash
git clone https://github.com/bobfu/wechat-title-count-popclip.git
```

然后双击 `WeChatTitleCount.popclipext` 安装。

## 插件行为

选中文本后，插件按钮会直接显示：

```text
WeChat 64/64 (0 left)
```

点击按钮后，会弹出更详细的结果：

```text
WeChat title count: 64/64
remaining 0
Full-width chars count as 1; half-width chars count as 0.5.
```

## 文件

- `WeChatTitleCount.popclipext/Config.js`: PopClip 插件逻辑
- `WeChatTitleCount.popclipext/README.md`: 插件内说明

## 说明

这个插件是为公众号标题编辑场景做的实用估算工具。不同平台或未来版本可能调整规则，如遇到和微信编辑器不一致的边界案例，建议以微信后台实际结果为准。
