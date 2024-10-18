# PostV2RouterChatCompletionsResponseBody

A response body that follows the official OpenAI schema


## Supported Types

### `operations.ResponseBody1`

```typescript
const value: operations.ResponseBody1 = {
  id: "<id>",
  choices: [
    {
      finishReason: "length",
      index: 3708.53,
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
            logprob: 4598.56,
            bytes: [
              446.12,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 7997.96,
                bytes: [
                  769.56,
                ],
              },
            ],
          },
        ],
        refusal: [
          {
            token: "<value>",
            logprob: 5188.35,
            bytes: [
              3068.10,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 5775.43,
                bytes: [
                  9594.33,
                ],
              },
            ],
          },
        ],
      },
    },
  ],
  created: 6455.70,
  model: "911",
  systemFingerprint: "<value>",
  object: "<value>",
  usage: {
    completionTokens: 4304.02,
    promptTokens: 5100.17,
    totalTokens: 5361.77,
  },
};
```

### `operations.ResponseBody2`

```typescript
const value: operations.ResponseBody2 = {
  id: "<id>",
  choices: [
    {
      finishReason: "content_filter",
      index: 2775.96,
      logprobs: {
        content: [
          {
            token: "<value>",
            logprob: 1288.61,
            bytes: [
              3926.76,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 9564.06,
                bytes: [
                  1871.31,
                ],
              },
            ],
          },
        ],
        refusal: [
          {
            token: "<value>",
            logprob: 9039.84,
            bytes: [
              5438.06,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 4569.11,
                bytes: [
                  8820.41,
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
        role: "exception",
      },
    },
  ],
  created: 7241.68,
  model: "El Camino",
  systemFingerprint: "<value>",
  object: "<value>",
  usage: {
    completionTokens: 9040.44,
    promptTokens: 6900.25,
    totalTokens: 6996.22,
  },
};
```

