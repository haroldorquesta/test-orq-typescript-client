# PostV2DeploymentsInvokeMessageDeploymentsToolCalls

## Example Usage

```typescript
import { PostV2DeploymentsInvokeMessageDeploymentsToolCalls } from "orq-poc-typescript/models/operations";

let value: PostV2DeploymentsInvokeMessageDeploymentsToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                         | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `index`                                                                                                                                      | *number*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `type`                                                                                                                                       | [operations.PostV2DeploymentsInvokeMessageDeploymentsType](../../models/operations/postv2deploymentsinvokemessagedeploymentstype.md)         | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `function`                                                                                                                                   | [operations.PostV2DeploymentsInvokeMessageDeploymentsFunction](../../models/operations/postv2deploymentsinvokemessagedeploymentsfunction.md) | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |