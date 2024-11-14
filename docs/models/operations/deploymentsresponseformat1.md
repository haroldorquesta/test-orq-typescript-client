# DeploymentsResponseFormat1

## Example Usage

```typescript
import { DeploymentsResponseFormat1 } from "orq-poc-typescript/models/operations";

let value: DeploymentsResponseFormat1 = {
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

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`                                                                                               | [operations.DeploymentsResponseFormatType](../../models/operations/deploymentsresponseformattype.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `jsonSchema`                                                                                         | [operations.ResponseFormatJsonSchema](../../models/operations/responseformatjsonschema.md)           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |