# PostV2DeploymentsIdMetricsRequest

## Example Usage

```typescript
import { PostV2DeploymentsIdMetricsRequest } from "orq-node-client/models/operations";

let value: PostV2DeploymentsIdMetricsRequest = {
  id: "<id>",
  requestBody: {},
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Deployment ID                                                                                                        |
| `requestBody`                                                                                                        | [operations.PostV2DeploymentsIdMetricsRequestBody](../../models/operations/postv2deploymentsidmetricsrequestbody.md) | :heavy_check_mark:                                                                                                   | The deployment request payload                                                                                       |