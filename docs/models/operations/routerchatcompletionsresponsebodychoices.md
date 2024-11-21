# RouterChatCompletionsResponseBodyChoices

## Example Usage

```typescript
import { RouterChatCompletionsResponseBodyChoices } from "orq-poc-typescript/models/operations";

let value: RouterChatCompletionsResponseBodyChoices = {
  finishReason: "length",
  index: 1046.28,
  logprobs: {
    content: [
      {
        token: "<value>",
        logprob: 3484.76,
        bytes: [
          7400.98,
        ],
        topLogprobs: [
          {
            token: "<value>",
            logprob: 6805.14,
            bytes: [
              6223.84,
            ],
          },
        ],
      },
    ],
    refusal: [
      {
        token: "<value>",
        logprob: 7105.28,
        bytes: [
          2049.24,
        ],
        topLogprobs: [
          {
            token: "<value>",
            logprob: 3416.98,
            bytes: [
              6762.42,
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
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `finishReason`                                                                             | [operations.ResponseBodyFinishReason](../../models/operations/responsebodyfinishreason.md) | :heavy_check_mark:                                                                         | The reason the model stopped generating tokens.                                            |
| `index`                                                                                    | *number*                                                                                   | :heavy_check_mark:                                                                         | The index of the choice in the list of choices.                                            |
| `logprobs`                                                                                 | [operations.ResponseBodyLogprobs](../../models/operations/responsebodylogprobs.md)         | :heavy_check_mark:                                                                         | Log probability information for the choice.                                                |
| `delta`                                                                                    | [operations.Delta](../../models/operations/delta.md)                                       | :heavy_check_mark:                                                                         | A chat completion delta generated by streamed model responses.                             |