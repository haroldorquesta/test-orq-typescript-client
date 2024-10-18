# PostV2DeploymentsGetConfigTools

## Example Usage

```typescript
import { PostV2DeploymentsGetConfigTools } from "orq-node-client/models/operations";

let value: PostV2DeploymentsGetConfigTools = {
  type: "function",
  function: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                   | [operations.PostV2DeploymentsGetConfigDeploymentsPublicResponseType](../../models/operations/postv2deploymentsgetconfigdeploymentspublicresponsetype.md) | :heavy_check_mark:                                                                                                                                       | The type of the tool. Currently, only `function` is supported.                                                                                           |
| `function`                                                                                                                                               | [operations.PostV2DeploymentsGetConfigDeploymentsFunction](../../models/operations/postv2deploymentsgetconfigdeploymentsfunction.md)                     | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |