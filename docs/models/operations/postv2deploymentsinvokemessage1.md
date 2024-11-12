# PostV2DeploymentsInvokeMessage1

## Example Usage

```typescript
import { PostV2DeploymentsInvokeMessage1 } from "orq-poc-typescript/models/operations";

let value: PostV2DeploymentsInvokeMessage1 = {
  role: "tool",
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

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                                               | [operations.PostV2DeploymentsInvokeMessageDeploymentsResponseRole](../../models/operations/postv2deploymentsinvokemessagedeploymentsresponserole.md) | :heavy_check_mark:                                                                                                                                   | The role of the prompt message                                                                                                                       |
| `content`                                                                                                                                            | *string*                                                                                                                                             | :heavy_minus_sign:                                                                                                                                   | N/A                                                                                                                                                  |
| `toolCalls`                                                                                                                                          | [operations.PostV2DeploymentsInvokeMessageToolCalls](../../models/operations/postv2deploymentsinvokemessagetoolcalls.md)[]                           | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |