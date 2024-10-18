# PostV2DeploymentsInvokeMessageToolCalls

## Example Usage

```typescript
import { PostV2DeploymentsInvokeMessageToolCalls } from "orq-node-client/models/operations";

let value: PostV2DeploymentsInvokeMessageToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `index`                                                                                                                | *number*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `type`                                                                                                                 | [operations.PostV2DeploymentsInvokeMessageType](../../models/operations/postv2deploymentsinvokemessagetype.md)         | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `function`                                                                                                             | [operations.PostV2DeploymentsInvokeMessageFunction](../../models/operations/postv2deploymentsinvokemessagefunction.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |