# PostV2RouterChatCompletionsResponseBody

A response body that follows the official OpenAI schema


## Supported Types

### `operations.ResponseBody1`

```typescript
const value: operations.ResponseBody1 = {
  id: "<id>",
  choices: [
    {
      finishReason: "tool_calls",
      index: 360.34,
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
        role: "assistant",
      },
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
    },
  ],
  created: 6611.18,
  model: "Expedition",
  systemFingerprint: "<value>",
  object: "<value>",
  usage: {
    completionTokens: 764.87,
    promptTokens: 6964.63,
    totalTokens: 2473.99,
  },
};
```

### `operations.ResponseBody2`

```typescript
const value: operations.ResponseBody2 = {
  id: "<id>",
  choices: [
    {
      finishReason: "stop",
      index: 599.44,
      logprobs: {
        content: [
          {
            token: "<value>",
            logprob: 610.79,
            bytes: [
              9077.33,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 7398.84,
                bytes: [
                  8980.62,
                ],
              },
            ],
          },
        ],
        refusal: [
          {
            token: "<value>",
            logprob: 6725.82,
            bytes: [
              5289.40,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 3044.46,
                bytes: [
                  9979.62,
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
        role: "user",
      },
    },
  ],
  created: 4706.49,
  model: "Durango",
  systemFingerprint: "<value>",
  object: "<value>",
  usage: {
    completionTokens: 9795.27,
    promptTokens: 1746.58,
    totalTokens: 3279.88,
  },
};
```

