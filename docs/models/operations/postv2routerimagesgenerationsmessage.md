# PostV2RouterImagesGenerationsMessage


## Supported Types

### `operations.PostV2RouterImagesGenerationsMessage1`

```typescript
const value: operations.PostV2RouterImagesGenerationsMessage1 = {
  role: "exception",
  content: "<value>",
};
```

### `operations.PostV2RouterImagesGenerationsMessage2`

```typescript
const value: operations.PostV2RouterImagesGenerationsMessage2 = {
  role: "assistant",
  url: "https://lustrous-wombat.com",
};
```

### `operations.PostV2RouterImagesGenerationsMessage3`

```typescript
const value: operations.PostV2RouterImagesGenerationsMessage3 = {
  role: "correction",
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

