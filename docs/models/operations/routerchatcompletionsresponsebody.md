# RouterChatCompletionsResponseBody

A response body that follows the official OpenAI schema


## Supported Types

### `operations.ResponseBody1`

```typescript
const value: operations.ResponseBody1 = {
  id: "<id>",
  choices: [
    {
      finishReason: "length",
      index: 2384.13,
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
            logprob: 3679.28,
            bytes: [
              4565.20,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 3374.77,
                bytes: [
                  9704.94,
                ],
              },
            ],
          },
        ],
        refusal: [
          {
            token: "<value>",
            logprob: 1334.39,
            bytes: [
              968.04,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 3433.92,
                bytes: [
                  5910.27,
                ],
              },
            ],
          },
        ],
      },
    },
  ],
  created: 6591.76,
  model: "El Camino",
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
      finishReason: "tool_calls",
      index: 3518.93,
      logprobs: {
        content: [
          {
            token: "<value>",
            logprob: 7214.07,
            bytes: [
              6375.83,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 8130.54,
                bytes: [
                  9762.26,
                ],
              },
            ],
          },
        ],
        refusal: [
          {
            token: "<value>",
            logprob: 8897.94,
            bytes: [
              7645.62,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 6982.48,
                bytes: [
                  3354.98,
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
        role: "assistant",
      },
    },
  ],
  created: 626.36,
  model: "Camry",
  systemFingerprint: "<value>",
  object: "<value>",
  usage: {},
};
```

