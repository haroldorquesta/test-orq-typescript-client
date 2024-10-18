# PostV2RouterChatCompletionsResponse


## Supported Types

### `operations.PostV2RouterChatCompletionsResponseBody`

```typescript
const value: operations.PostV2RouterChatCompletionsResponseBody = {
  id: "<id>",
  choices: [
    {
      finishReason: "tool_calls",
      index: 6360.61,
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
            logprob: 1605.39,
            bytes: [
              7963.91,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 9591.67,
                bytes: [
                  4581.39,
                ],
              },
            ],
          },
        ],
        refusal: [
          {
            token: "<value>",
            logprob: 5909.84,
            bytes: [
              8577.23,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 4572.23,
                bytes: [
                  9518.74,
                ],
              },
            ],
          },
        ],
      },
    },
  ],
  created: 5757.51,
  model: "Ranchero",
  systemFingerprint: "<value>",
  object: "<value>",
  usage: {
    completionTokens: 9088.44,
    promptTokens: 8155.24,
    totalTokens: 1594.14,
  },
};
```

### `EventStream<operations.PostV2RouterChatCompletionsRouterResponseBody>`

```typescript
const value: EventStream<operations.PostV2RouterChatCompletionsRouterResponseBody> = ;
```

