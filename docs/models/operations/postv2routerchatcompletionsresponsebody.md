# PostV2RouterChatCompletionsResponseBody

A response body that follows the official OpenAI schema


## Supported Types

### `operations.ResponseBody1`

```typescript
const value: operations.ResponseBody1 = {
  id: "<id>",
  choices: [
    {
      finishReason: "content_filter",
      index: 8869.61,
      message: {
        content: "<value>",
        refusal: "<value>",
        toolCalls: [
          {
            id: "<id>",
            type: "function",
            function: {
              name: "<value>",
              arguments: "<value>",
            },
          },
        ],
        role: "tool",
      },
      logprobs: {
        content: [
          {
            token: "<value>",
            logprob: 1334.61,
            bytes: [
              9805.80,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 8717.86,
                bytes: [
                  5027.21,
                ],
              },
            ],
          },
        ],
        refusal: [
          {
            token: "<value>",
            logprob: 9223.48,
            bytes: [
              5413.81,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 9233.06,
                bytes: [
                  8298.97,
                ],
              },
            ],
          },
        ],
      },
    },
  ],
  created: 9682.86,
  model: "V90",
  systemFingerprint: "<value>",
  object: "<value>",
  usage: {},
};
```

### `operations.ResponseBody2`

```typescript
const value: operations.ResponseBody2 = {
  id: "<id>",
  choices: [
    {
      finishReason: "stop",
      index: 1747.72,
      logprobs: {
        content: [
          {
            token: "<value>",
            logprob: 3891.35,
            bytes: [
              9521.43,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 3000.29,
                bytes: [
                  1604.68,
                ],
              },
            ],
          },
        ],
        refusal: [
          {
            token: "<value>",
            logprob: 8863.05,
            bytes: [
              4463.94,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 9078.76,
                bytes: [
                  1602.30,
                ],
              },
            ],
          },
        ],
      },
      delta: {
        content: "<value>",
        refusal: "<value>",
        toolCalls: [
          {
            id: "<id>",
            type: "function",
            function: {
              name: "<value>",
              arguments: "<value>",
            },
          },
        ],
        role: "prompt",
      },
    },
  ],
  created: 4402.64,
  model: "A8",
  systemFingerprint: "<value>",
  object: "<value>",
  usage: {},
};
```

