# CreateChatCompletionsResponse


## Supported Types

### `operations.CreateChatCompletionsResponseBody`

```typescript
const value: operations.CreateChatCompletionsResponseBody = {
  id: "<id>",
  choices: [
    {
      finishReason: "stop",
      index: 3891.35,
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
        role: "expected_output",
      },
      logprobs: {
        content: [
          {
            token: "<value>",
            logprob: 3000.29,
            bytes: [
              1604.68,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 8863.05,
                bytes: [
                  4463.94,
                ],
              },
            ],
          },
        ],
        refusal: [
          {
            token: "<value>",
            logprob: 9078.76,
            bytes: [
              1602.30,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 6611.18,
                bytes: [
                  4402.64,
                ],
              },
            ],
          },
        ],
      },
    },
  ],
  created: 764.87,
  model: "Model 3",
  systemFingerprint: "<value>",
  object: "<value>",
  usage: {},
};
```

### `EventStream<operations.CreateChatCompletionsRouterChatCompletionsResponseBody>`

```typescript
const value: EventStream<operations.CreateChatCompletionsRouterChatCompletionsResponseBody> = ;
```

