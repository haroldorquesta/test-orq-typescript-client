# RouterImageGenerationsMessage


## Supported Types

### `operations.RouterImageGenerationsMessage1`

```typescript
const value: operations.RouterImageGenerationsMessage1 = {
  role: "prompt",
  content: "<value>",
};
```

### `operations.RouterImageGenerationsMessage2`

```typescript
const value: operations.RouterImageGenerationsMessage2 = {
  role: "prompt",
  url: "https://intrepid-obesity.com/",
};
```

### `operations.RouterImageGenerationsMessage3`

```typescript
const value: operations.RouterImageGenerationsMessage3 = {
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

