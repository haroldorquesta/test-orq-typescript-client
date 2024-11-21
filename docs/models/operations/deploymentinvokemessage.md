# DeploymentInvokeMessage


## Supported Types

### `operations.DeploymentInvokeMessage1`

```typescript
const value: operations.DeploymentInvokeMessage1 = {
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

### `operations.DeploymentInvokeMessage2`

```typescript
const value: operations.DeploymentInvokeMessage2 = {
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

