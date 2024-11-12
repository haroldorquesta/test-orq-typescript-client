# PostV2RouterChatCompletionsResponse


## Supported Types

### `operations.PostV2RouterChatCompletionsResponseBody`

```typescript
const value: operations.PostV2RouterChatCompletionsResponseBody = {
  id: "<id>",
  choices: [
    {
      finishReason: "tool_calls",
      index: 9682.86,
      logprobs: {
        content: [
          {
            token: "<value>",
            logprob: 9197.83,
            bytes: [
              360.34,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 1747.72,
                bytes: [
                  3891.35,
                ],
              },
            ],
          },
        ],
        refusal: [
          {
            token: "<value>",
            logprob: 9521.43,
            bytes: [
              3000.29,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 1604.68,
                bytes: [
                  8863.05,
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
  created: 9078.76,
  model: "Aventador",
  systemFingerprint: "<value>",
  object: "<value>",
  usage: {},
};
```

### `EventStream<operations.PostV2RouterChatCompletionsRouterResponseBody>`

```typescript
const value: EventStream<operations.PostV2RouterChatCompletionsRouterResponseBody> = ;
```

