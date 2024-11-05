# PostV2RouterChatCompletionsResponse


## Supported Types

### `operations.PostV2RouterChatCompletionsResponseBody`

```typescript
const value: operations.PostV2RouterChatCompletionsResponseBody = {
  id: "<id>",
  choices: [
    {
      finishReason: "stop",
      index: 396.16,
      logprobs: {
        content: [
          {
            token: "<value>",
            logprob: 599.44,
            bytes: [
              610.79,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 9077.33,
                bytes: [
                  7398.84,
                ],
              },
            ],
          },
        ],
        refusal: [
          {
            token: "<value>",
            logprob: 8980.62,
            bytes: [
              6725.82,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 5289.40,
                bytes: [
                  3044.46,
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
        role: "expected_output",
      },
    },
  ],
  created: 3621.89,
  model: "F-150",
  systemFingerprint: "<value>",
  object: "<value>",
  usage: {},
};
```

### `EventStream<operations.PostV2RouterChatCompletionsRouterResponseBody>`

```typescript
const value: EventStream<operations.PostV2RouterChatCompletionsRouterResponseBody> = ;
```

