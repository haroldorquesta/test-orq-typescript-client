# PostV2DeploymentsGetConfigToolCalls

## Example Usage

```typescript
import { PostV2DeploymentsGetConfigToolCalls } from "orq-poc-typescript/models/operations";

let value: PostV2DeploymentsGetConfigToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                         | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `index`                                                                                                                      | *number*                                                                                                                     | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `type`                                                                                                                       | [operations.PostV2DeploymentsGetConfigDeploymentsType](../../models/operations/postv2deploymentsgetconfigdeploymentstype.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `function`                                                                                                                   | [operations.PostV2DeploymentsGetConfigFunction](../../models/operations/postv2deploymentsgetconfigfunction.md)               | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |