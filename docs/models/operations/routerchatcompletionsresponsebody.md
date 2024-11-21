# RouterChatCompletionsResponseBody

A response body that follows the official OpenAI schema


## Supported Types

### `operations.ResponseBody1`

```typescript
const value: operations.ResponseBody1 = {
  id: "<id>",
  choices: [
    {
      finishReason: "stop",
      index: 6611.18,
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
        role: "exception",
      },
      logprobs: {
        content: [
          {
            token: "<value>",
            logprob: 764.87,
            bytes: [
              6964.63,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 2473.99,
                bytes: [
                  396.16,
                ],
              },
            ],
          },
        ],
        refusal: [
          {
            token: "<value>",
            logprob: 599.44,
            bytes: [
              610.79,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 9077.33,
                bytes: [
                  7398.84,
                ],
              },
            ],
          },
        ],
      },
    },
  ],
  created: 8980.62,
  model: "Mercielago",
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
      finishReason: "content_filter",
      index: 3044.46,
      logprobs: {
        content: [
          {
            token: "<value>",
            logprob: 9979.62,
            bytes: [
              3621.89,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 4706.49,
                bytes: [
                  3782.45,
                ],
              },
            ],
          },
        ],
        refusal: [
          {
            token: "<value>",
            logprob: 9795.27,
            bytes: [
              1746.58,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 3279.88,
                bytes: [
                  6803.49,
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
        role: "system",
      },
    },
  ],
  created: 6072.49,
  model: "F-150",
  systemFingerprint: "<value>",
  object: "<value>",
  usage: {},
};
```

