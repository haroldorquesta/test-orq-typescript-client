# Messages2

## Example Usage

```typescript
import { Messages2 } from "orq-poc-typescript2/models/operations";

let value: Messages2 = {
  role: "user",
  content: "<value>",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                       | [operations.RouterChatCompletionsMessagesRole](../../models/operations/routerchatcompletionsmessagesrole.md)                 | :heavy_check_mark:                                                                                                           | The role of the messages author, in this case **user**.                                                                      |
| `name`                                                                                                                       | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | An optional name for the participant. Provides the model information to differentiate between participants of the same role. |
| `content`                                                                                                                    | *operations.RouterChatCompletionsMessagesContent*                                                                            | :heavy_check_mark:                                                                                                           | The contents of a particular role's message.                                                                                 |