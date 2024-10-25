# Messages2

## Example Usage

```typescript
import { Messages2 } from "orq-poc-typescript/models/operations";

let value: Messages2 = {
  role: "user",
  content: [
    {
      type: "text",
      text: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                       | [operations.PostV2RouterChatCompletionsMessagesRole](../../models/operations/postv2routerchatcompletionsmessagesrole.md)     | :heavy_check_mark:                                                                                                           | The role of the messages author, in this case **user**.                                                                      |
| `name`                                                                                                                       | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | An optional name for the participant. Provides the model information to differentiate between participants of the same role. |
| `content`                                                                                                                    | *operations.PostV2RouterChatCompletionsMessagesContent*                                                                      | :heavy_check_mark:                                                                                                           | The contents of a particular role's message.                                                                                 |