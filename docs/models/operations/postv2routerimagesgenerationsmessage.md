# PostV2RouterImagesGenerationsMessage


## Supported Types

### `operations.PostV2RouterImagesGenerationsMessage1`

```typescript
const value: operations.PostV2RouterImagesGenerationsMessage1 = {
  role: "assistant",
  content: "<value>",
};
```

### `operations.PostV2RouterImagesGenerationsMessage2`

```typescript
const value: operations.PostV2RouterImagesGenerationsMessage2 = {
  role: "tool",
  url: "https://lasting-fit.org/",
};
```

### `operations.PostV2RouterImagesGenerationsMessage3`

```typescript
const value: operations.PostV2RouterImagesGenerationsMessage3 = {
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

