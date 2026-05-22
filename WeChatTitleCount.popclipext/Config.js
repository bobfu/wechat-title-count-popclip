// #popclip
// name: WeChat Title Count
// identifier: com.local.popclip.wechat-title-count
// description: Count selected text using the WeChat official account title length convention.
// entitlements: [dynamic]
// language: javascript
// module: true

const LIMIT = 64;

function isHalfWidth(char) {
  const codePoint = char.codePointAt(0);
  return codePoint <= 0xff;
}

function countWeChatTitle(text) {
  let halfUnits = 0;
  let fullUnits = 0;

  for (const char of text.normalize("NFC")) {
    if (isHalfWidth(char)) {
      halfUnits += 1;
    } else {
      fullUnits += 2;
    }
  }

  const units = halfUnits + fullUnits;
  return {
    count: Math.ceil(units / 2),
    halfUnits,
    fullUnits,
    units,
  };
}

function detailText(text) {
  const result = countWeChatTitle(text);
  const remaining = LIMIT - result.count;
  const status =
    remaining >= 0 ? `remaining ${remaining}` : `over by ${Math.abs(remaining)}`;

  return [
    `WeChat title count: ${result.count}/${LIMIT}`,
    status,
    `Full-width chars count as 1; half-width chars count as 0.5.`,
  ].join("\n");
}

exports.actions = (input) => {
  const result = countWeChatTitle(input.text);
  const remaining = LIMIT - result.count;
  const status = remaining >= 0 ? `${remaining} left` : `${Math.abs(remaining)} over`;

  return [
    {
      title: `WeChat ${result.count}/${LIMIT} (${status})`,
      code: () => detailText(input.text),
      after: "show-result",
    },
  ];
};
