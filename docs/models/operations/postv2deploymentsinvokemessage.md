# PostV2DeploymentsInvokeMessage


## Supported Types

### `operations.PostV2DeploymentsInvokeMessage1`

```typescript
const value: operations.PostV2DeploymentsInvokeMessage1 = {
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

### `operations.PostV2DeploymentsInvokeMessage2`

```typescript
const value: operations.PostV2DeploymentsInvokeMessage2 = {
  role: "expected_output",
  content: "<value>",
};
```

### `operations.Message3`

```typescript
const value: operations.Message3 = {
  role: "exception",
  url: "https://runny-epic.net",
};
```

