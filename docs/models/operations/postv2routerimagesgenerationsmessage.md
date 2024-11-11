# PostV2RouterImagesGenerationsMessage


## Supported Types

### `operations.PostV2RouterImagesGenerationsMessage1`

```typescript
const value: operations.PostV2RouterImagesGenerationsMessage1 = {
  role: "correction",
  content: "<value>",
};
```

### `operations.PostV2RouterImagesGenerationsMessage2`

```typescript
const value: operations.PostV2RouterImagesGenerationsMessage2 = {
  role: "prompt",
  url: "https://crazy-barge.biz/",
};
```

### `operations.PostV2RouterImagesGenerationsMessage3`

```typescript
const value: operations.PostV2RouterImagesGenerationsMessage3 = {
  role: "exception",
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

