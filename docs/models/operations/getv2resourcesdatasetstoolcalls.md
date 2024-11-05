# GetV2ResourcesDatasetsToolCalls

## Example Usage

```typescript
import { GetV2ResourcesDatasetsToolCalls } from "orq-poc-typescript/models/operations";

let value: GetV2ResourcesDatasetsToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `index`                                                                                                | *number*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `type`                                                                                                 | [operations.GetV2ResourcesDatasetsType](../../models/operations/getv2resourcesdatasetstype.md)         | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `function`                                                                                             | [operations.GetV2ResourcesDatasetsFunction](../../models/operations/getv2resourcesdatasetsfunction.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |