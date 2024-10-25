# Four

## Example Usage

```typescript
import { Four } from "orq-poc-typescript/models/operations";

let value: Four = {
  role: "tool",
  toolCallId: "<id>",
  content: "<value>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `role`                                                                                                                                           | [operations.PostV2RouterChatCompletionsMessagesRouterPublicRole](../../models/operations/postv2routerchatcompletionsmessagesrouterpublicrole.md) | :heavy_check_mark:                                                                                                                               | The role of the messages author, in this case **tool**.                                                                                          |
| `toolCallId`                                                                                                                                     | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `content`                                                                                                                                        | *operations.PostV2RouterChatCompletionsMessagesRouterPublicContent*                                                                              | :heavy_check_mark:                                                                                                                               | The contents of a particular role's message.                                                                                                     |