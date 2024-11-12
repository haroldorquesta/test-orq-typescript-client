# PostV2RouterImagesGenerationsMessage


## Supported Types

### `operations.PostV2RouterImagesGenerationsMessage1`

```typescript
const value: operations.PostV2RouterImagesGenerationsMessage1 = {
  role: "tool",
  content: "<value>",
};
```

### `operations.PostV2RouterImagesGenerationsMessage2`

```typescript
const value: operations.PostV2RouterImagesGenerationsMessage2 = {
  role: "correction",
  url: "https://well-documented-minister.net/",
};
```

### `operations.PostV2RouterImagesGenerationsMessage3`

```typescript
const value: operations.PostV2RouterImagesGenerationsMessage3 = {
  role: "expected_output",
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

