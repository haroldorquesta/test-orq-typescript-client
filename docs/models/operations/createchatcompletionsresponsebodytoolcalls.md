# CreateChatCompletionsResponseBodyToolCalls

## Example Usage

```typescript
import { CreateChatCompletionsResponseBodyToolCalls } from "orq-poc-typescript/models/operations";

let value: CreateChatCompletionsResponseBodyToolCalls = {
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
| `type`                                                                                                                       | [operations.CreateChatCompletionsResponseBodyType](../../models/operations/createchatcompletionsresponsebodytype.md)         | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `function`                                                                                                                   | [operations.CreateChatCompletionsResponseBodyFunction](../../models/operations/createchatcompletionsresponsebodyfunction.md) | :heavy_check_mark:                                                                                                           | The function that the model called.                                                                                          |