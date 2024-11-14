# CreateChatCompletionsResponseBody

A response body that follows the official OpenAI schema


## Supported Types

### `operations.ResponseBody1`

```typescript
const value: operations.ResponseBody1 = {
  id: "<id>",
  choices: [
    {
      finishReason: "stop",
      index: 6964.82,
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
        role: "correction",
      },
      logprobs: {
        content: [
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
        refusal: [
          {
            token: "<value>",
            logprob: 4420.36,
            bytes: [
              5199.52,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 6939.56,
                bytes: [
                  908.86,
                ],
              },
            ],
          },
        ],
      },
    },
  ],
  created: 2277.60,
  model: "Element",
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
      index: 8869.61,
      logprobs: {
        content: [
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
        refusal: [
          {
            token: "<value>",
            logprob: 5027.21,
            bytes: [
              9223.48,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 5413.81,
                bytes: [
                  9233.06,
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
        role: "correction",
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

