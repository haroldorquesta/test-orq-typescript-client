# Delta

A chat completion delta generated by streamed model responses.

## Example Usage

```typescript
import { Delta } from "orq-poc-typescript2/models/operations";

let value: Delta = {
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
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `content`                                                                                                                        | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `refusal`                                                                                                                        | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `toolCalls`                                                                                                                      | [operations.RouterChatCompletionsResponseBodyToolCalls](../../models/operations/routerchatcompletionsresponsebodytoolcalls.md)[] | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `role`                                                                                                                           | [operations.RouterChatCompletionsResponseBodyRole](../../models/operations/routerchatcompletionsresponsebodyrole.md)             | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |