# PostV2DeploymentsGetConfigTools

## Example Usage

```typescript
import { PostV2DeploymentsGetConfigTools } from "orq-poc-typescript/models/operations";

let value: PostV2DeploymentsGetConfigTools = {
  type: "function",
  function: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                             | [operations.PostV2DeploymentsGetConfigDeploymentsResponse200Type](../../models/operations/postv2deploymentsgetconfigdeploymentsresponse200type.md) | :heavy_check_mark:                                                                                                                                 | The type of the tool. Currently, only `function` is supported.                                                                                     |
| `function`                                                                                                                                         | [operations.PostV2DeploymentsGetConfigDeploymentsFunction](../../models/operations/postv2deploymentsgetconfigdeploymentsfunction.md)               | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |