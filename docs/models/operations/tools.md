# Tools

## Example Usage

```typescript
import { Tools } from "orq-poc-typescript/models/operations";

let value: Tools = {
  type: "function",
  function: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`                                                                                               | [operations.CreateChatCompletionsType](../../models/operations/createchatcompletionstype.md)         | :heavy_check_mark:                                                                                   | The type of the tool. Currently, only function is supported.                                         |
| `function`                                                                                           | [operations.CreateChatCompletionsFunction](../../models/operations/createchatcompletionsfunction.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |