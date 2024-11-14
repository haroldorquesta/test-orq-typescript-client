# ImageGenerationsMessage


## Supported Types

### `operations.ImageGenerationsMessage1`

```typescript
const value: operations.ImageGenerationsMessage1 = {
  role: "assistant",
  content: "<value>",
};
```

### `operations.ImageGenerationsMessage2`

```typescript
const value: operations.ImageGenerationsMessage2 = {
  role: "tool",
  url: "https://lasting-fit.org/",
};
```

### `operations.ImageGenerationsMessage3`

```typescript
const value: operations.ImageGenerationsMessage3 = {
  role: "assistant",
  toolCalls: [
    {
      type: "function",
      function: {
        name: "<value>",
        arguments: "<value>",
      },
    },
  ],
};
```

