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
      index: 6003.92,
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
            logprob: 9627.70,
            bytes: [
              168.72,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 6964.82,
                bytes: [
                  8136.79,
                ],
              },
            ],
          },
        ],
        refusal: [
          {
            token: "<value>",
            logprob: 5098.07,
            bytes: [
              3339.65,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 7908.40,
                bytes: [
                  972.43,
                ],
              },
            ],
          },
        ],
      },
    },
  ],
  created: 4420.36,
  model: "Fortwo",
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
      index: 908.86,
      logprobs: {
        content: [
          {
            token: "<value>",
            logprob: 2277.60,
            bytes: [
              4103.02,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 6232.95,
                bytes: [
                  8869.61,
                ],
              },
            ],
          },
        ],
        refusal: [
          {
            token: "<value>",
            logprob: 6188.26,
            bytes: [
              1334.61,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 9805.80,
                bytes: [
                  8717.86,
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
        role: "tool",
      },
    },
  ],
  created: 9223.48,
  model: "Golf",
  systemFingerprint: "<value>",
  object: "<value>",
  usage: {},
};
```

