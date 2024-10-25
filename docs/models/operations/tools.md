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

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                           | [operations.PostV2RouterChatCompletionsType](../../models/operations/postv2routerchatcompletionstype.md)         | :heavy_check_mark:                                                                                               | The type of the tool. Currently, only function is supported.                                                     |
| `function`                                                                                                       | [operations.PostV2RouterChatCompletionsFunction](../../models/operations/postv2routerchatcompletionsfunction.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |