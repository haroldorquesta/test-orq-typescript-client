# RouterChatCompletionsResponse


## Supported Types

### `operations.RouterChatCompletionsResponseBody`

```typescript
const value: operations.RouterChatCompletionsResponseBody = {
  id: "<id>",
  choices: [
    {
      finishReason: "content_filter",
      index: 7730.84,
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
            logprob: 1173.20,
            bytes: [
              1070.04,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 5896.95,
                bytes: [
                  7453.98,
                ],
              },
            ],
          },
        ],
        refusal: [
          {
            token: "<value>",
            logprob: 8481.50,
            bytes: [
              9358.32,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 9834.26,
                bytes: [
                  3998.02,
                ],
              },
            ],
          },
        ],
      },
    },
  ],
  created: 3803.35,
  model: "Altima",
  systemFingerprint: "<value>",
  object: "<value>",
  usage: {},
};
```

### `EventStream<operations.RouterChatCompletionsRouterChatCompletionsResponseBody>`

```typescript
const value: EventStream<operations.RouterChatCompletionsRouterChatCompletionsResponseBody> = ;
```

