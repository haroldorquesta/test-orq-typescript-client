# MessagesToolCalls

## Example Usage

```typescript
import { MessagesToolCalls } from "orq-node-client/models/operations";

let value: MessagesToolCalls = {
  id: "<id>",
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | The ID of the tool call.                                                   |
| `type`                                                                     | [operations.MessagesType](../../models/operations/messagestype.md)         | :heavy_check_mark:                                                         | The type of the tool. Currently, only **function** is supported.           |
| `function`                                                                 | [operations.MessagesFunction](../../models/operations/messagesfunction.md) | :heavy_check_mark:                                                         | The function that the model called.                                        |