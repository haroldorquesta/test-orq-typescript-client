# Tools

## Example Usage

```typescript
import { Tools } from "orq-poc-typescript2/models/operations";

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
| `type`                                                                                               | [operations.RouterChatCompletionsType](../../models/operations/routerchatcompletionstype.md)         | :heavy_check_mark:                                                                                   | The type of the tool. Currently, only function is supported.                                         |
| `function`                                                                                           | [operations.RouterChatCompletionsFunction](../../models/operations/routerchatcompletionsfunction.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |