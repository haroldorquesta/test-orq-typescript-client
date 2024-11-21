# RouterChatCompletionsResponse


## Supported Types

### `operations.RouterChatCompletionsResponseBody`

```typescript
const value: operations.RouterChatCompletionsResponseBody = {
  id: "<id>",
  choices: [
    {
      finishReason: "stop",
      index: 5145.13,
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
        role: "user",
      },
      logprobs: {
        content: [
          {
            token: "<value>",
            logprob: 4565.20,
            bytes: [
              3374.77,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 9704.94,
                bytes: [
                  1334.39,
                ],
              },
            ],
          },
        ],
        refusal: [
          {
            token: "<value>",
            logprob: 968.04,
            bytes: [
              3433.92,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 5910.27,
                bytes: [
                  6591.76,
                ],
              },
            ],
          },
        ],
      },
    },
  ],
  created: 3972.57,
  model: "XTS",
  systemFingerprint: "<value>",
  object: "<value>",
  usage: {},
};
```

### `EventStream<operations.RouterChatCompletionsRouterChatCompletionsResponseBody>`

```typescript
const value: EventStream<operations.RouterChatCompletionsRouterChatCompletionsResponseBody> = ;
```

