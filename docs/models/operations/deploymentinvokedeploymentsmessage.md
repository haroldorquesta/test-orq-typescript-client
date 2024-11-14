# DeploymentInvokeDeploymentsMessage


## Supported Types

### `operations.DeploymentInvokeMessageDeployments1`

```typescript
const value: operations.DeploymentInvokeMessageDeployments1 = {
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

### `operations.DeploymentInvokeMessageDeployments2`

```typescript
const value: operations.DeploymentInvokeMessageDeployments2 = {
  role: "prompt",
  content: "<value>",
};
```

### `operations.DeploymentInvokeMessage3`

```typescript
const value: operations.DeploymentInvokeMessage3 = {
  role: "tool",
  url: "https://moist-bourgeoisie.name/",
};
```

