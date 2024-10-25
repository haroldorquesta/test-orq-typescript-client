# PostV2DeploymentsInvokeDeploymentsMessage


## Supported Types

### `operations.PostV2DeploymentsInvokeMessageDeployments1`

```typescript
const value: operations.PostV2DeploymentsInvokeMessageDeployments1 = {
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

### `operations.PostV2DeploymentsInvokeMessageDeployments2`

```typescript
const value: operations.PostV2DeploymentsInvokeMessageDeployments2 = {
  role: "prompt",
  content: "<value>",
};
```

### `operations.PostV2DeploymentsInvokeMessage3`

```typescript
const value: operations.PostV2DeploymentsInvokeMessage3 = {
  role: "tool",
  url: "https://moist-bourgeoisie.name/",
};
```

