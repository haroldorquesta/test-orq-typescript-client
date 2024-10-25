# PostV2DeploymentsInvokeDeploymentsResponseBody

Successful operation

## Example Usage

```typescript
import { PostV2DeploymentsInvokeDeploymentsResponseBody } from "orq-poc-typescript/models/operations";

let value: PostV2DeploymentsInvokeDeploymentsResponseBody = {
  data: {
    id: "<id>",
    created: new Date("2022-10-23T22:17:23.016Z"),
    object: "image",
    model: "Wrangler",
    provider: "huggingface",
    isFinal: false,
    choices: [
      {
        index: 5761.57,
      },
    ],
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `data`                                             | [operations.Data](../../models/operations/data.md) | :heavy_check_mark:                                 | Response from the gateway                          |