# PostV2RouterChatCompletionsResponse


## Supported Types

### `operations.PostV2RouterChatCompletionsResponseBody`

```typescript
const value: operations.PostV2RouterChatCompletionsResponseBody = {
  id: "<id>",
  choices: [
    {
      finishReason: "length",
      index: 3782.45,
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
            logprob: 1746.58,
            bytes: [
              3279.88,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 6803.49,
                bytes: [
                  632.08,
                ],
              },
            ],
          },
        ],
        refusal: [
          {
            token: "<value>",
            logprob: 6072.49,
            bytes: [
              4776.47,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 2840.00,
                bytes: [
                  2384.13,
                ],
              },
            ],
          },
        ],
      },
    },
  ],
  created: 5145.13,
  model: "Durango",
  systemFingerprint: "<value>",
  object: "<value>",
  usage: {},
};
```

### `EventStream<operations.PostV2RouterChatCompletionsRouterChatCompletionsResponseBody>`

```typescript
const value: EventStream<operations.PostV2RouterChatCompletionsRouterChatCompletionsResponseBody> = ;
```

