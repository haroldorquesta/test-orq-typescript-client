# RouterChatCompletionsResponseBodyToolCalls

## Example Usage

```typescript
import { RouterChatCompletionsResponseBodyToolCalls } from "orq-poc-typescript2/models/operations";

let value: RouterChatCompletionsResponseBodyToolCalls = {
  id: "<id>",
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                         | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `type`                                                                                                                       | [operations.RouterChatCompletionsResponseBodyType](../../models/operations/routerchatcompletionsresponsebodytype.md)         | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `function`                                                                                                                   | [operations.RouterChatCompletionsResponseBodyFunction](../../models/operations/routerchatcompletionsresponsebodyfunction.md) | :heavy_check_mark:                                                                                                           | The function that the model called.                                                                                          |