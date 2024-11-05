# PostV2RouterChatCompletionsResponse


## Supported Types

### `operations.PostV2RouterChatCompletionsResponseBody`

```typescript
const value: operations.PostV2RouterChatCompletionsResponseBody = {
  id: "<id>",
  choices: [
    {
      finishReason: "stop",
      index: 6072.49,
      logprobs: {
        content: [
          {
            token: "<value>",
            logprob: 4776.47,
            bytes: [
              2840.00,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 2384.13,
                bytes: [
                  5145.13,
                ],
              },
            ],
          },
        ],
        refusal: [
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
  created: 968.04,
  model: "Countach",
  systemFingerprint: "<value>",
  object: "<value>",
  usage: {
    completionTokens: 5910.27,
    promptTokens: 6591.76,
    totalTokens: 3972.57,
  },
};
```

### `EventStream<operations.PostV2RouterChatCompletionsRouterResponseBody>`

```typescript
const value: EventStream<operations.PostV2RouterChatCompletionsRouterResponseBody> = ;
```

