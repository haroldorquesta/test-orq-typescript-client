# Four

## Example Usage

```typescript
import { Four } from "orq-poc-typescript2/models/operations";

let value: Four = {
  role: "tool",
  toolCallId: "<id>",
  content: "<value>",
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                                                               | [operations.RouterChatCompletionsMessagesRouterChatCompletionsRequestRole](../../models/operations/routerchatcompletionsmessagesrouterchatcompletionsrequestrole.md) | :heavy_check_mark:                                                                                                                                                   | The role of the messages author, in this case **tool**.                                                                                                              |
| `toolCallId`                                                                                                                                                         | *string*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `content`                                                                                                                                                            | *operations.RouterChatCompletionsMessagesRouterChatCompletionsRequestContent*                                                                                        | :heavy_check_mark:                                                                                                                                                   | The contents of a particular role's message.                                                                                                                         |