# DeploymentListResponseFormat1

## Example Usage

```typescript
import { DeploymentListResponseFormat1 } from "orq-poc-typescript/models/operations";

let value: DeploymentListResponseFormat1 = {
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
    strict: false,
    schema: {
      "key": "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [operations.DeploymentListResponseFormatType](../../models/operations/deploymentlistresponseformattype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `jsonSchema`                                                                                               | [operations.ResponseFormatJsonSchema](../../models/operations/responseformatjsonschema.md)                 | :heavy_check_mark:                                                                                         | N/A                                                                                                        |