# PostV2DeploymentsInvokeMessage


## Supported Types

### `operations.PostV2DeploymentsInvokeMessage1`

```typescript
const value: operations.PostV2DeploymentsInvokeMessage1 = {
  role: "system",
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

### `operations.PostV2DeploymentsInvokeMessage2`

```typescript
const value: operations.PostV2DeploymentsInvokeMessage2 = {
  role: "prompt",
  content: "<value>",
};
```

### `operations.Message3`

```typescript
const value: operations.Message3 = {
  role: "tool",
  url: "https://moist-bourgeoisie.name/",
};
```

