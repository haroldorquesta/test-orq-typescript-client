# PostV2DeploymentsInvokeMessageDeployments1

## Example Usage

```typescript
import { PostV2DeploymentsInvokeMessageDeployments1 } from "orq-poc-typescript/models/operations";

let value: PostV2DeploymentsInvokeMessageDeployments1 = {
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

## Fields

| Field                                                                                                                                                                                                            | Type                                                                                                                                                                                                             | Required                                                                                                                                                                                                         | Description                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                                                                                                           | [operations.PostV2DeploymentsInvokeMessageDeploymentsResponse200TextEventStreamResponseBodyRole](../../models/operations/postv2deploymentsinvokemessagedeploymentsresponse200texteventstreamresponsebodyrole.md) | :heavy_check_mark:                                                                                                                                                                                               | The role of the prompt message                                                                                                                                                                                   |
| `content`                                                                                                                                                                                                        | *string*                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                               | N/A                                                                                                                                                                                                              |
| `toolCalls`                                                                                                                                                                                                      | [operations.PostV2DeploymentsInvokeMessageDeploymentsToolCalls](../../models/operations/postv2deploymentsinvokemessagedeploymentstoolcalls.md)[]                                                                 | :heavy_check_mark:                                                                                                                                                                                               | N/A                                                                                                                                                                                                              |