# PostV2RouterChatCompletionsMessages


## Supported Types

### `operations.Messages1`

```typescript
const value: operations.Messages1 = {
  role: "system",
  content: "<value>",
};
```

### `operations.Messages2`

```typescript
const value: operations.Messages2 = {
  role: "user",
  content: "<value>",
};
```

### `operations.Messages3`

```typescript
const value: operations.Messages3 = {
  role: "assistant",
  toolCalls: [
    {
      id: "<id>",
      type: "function",
      function: {
        name: "<value>",
        arguments: "<value>",
      },
    },
  ],
};
```

### `operations.Four`

```typescript
const value: operations.Four = {
  role: "tool",
  toolCallId: "<id>",
  content: [
    {
      type: "image_url",
      imageUrl: {
        url: "https://entire-follower.net/",
      },
    },
  ],
};
```

