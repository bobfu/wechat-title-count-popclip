# WeChat Title Count for PopClip

PopClip extension for counting selected text with the WeChat official account title convention.

- Full-width characters count as 1.
- Half-width characters, including Latin letters, digits, ASCII punctuation, and spaces, count as 0.5.
- The final displayed count is rounded up.

For the sample title:

```text
发布嗅觉「潘通系统」，嗅觉大模型 Patina 融资 200 万美元；估值 60 亿美元，Figure 创始人新公司 Hark 将构建「通用智能体」硬件丨日报
```

The result is `64/64`.
