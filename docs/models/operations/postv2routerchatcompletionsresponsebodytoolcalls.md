# PostV2RouterChatCompletionsResponseBodyToolCalls

## Example Usage

```typescript
import { PostV2RouterChatCompletionsResponseBodyToolCalls } from "orq-node-client/models/operations";

let value: PostV2RouterChatCompletionsResponseBodyToolCalls = {
  id: "<id>",
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                     | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `type`                                                                                                                                   | [operations.PostV2RouterChatCompletionsResponseBodyType](../../models/operations/postv2routerchatcompletionsresponsebodytype.md)         | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `function`                                                                                                                               | [operations.PostV2RouterChatCompletionsResponseBodyFunction](../../models/operations/postv2routerchatcompletionsresponsebodyfunction.md) | :heavy_check_mark:                                                                                                                       | The function that the model called.                                                                                                      |