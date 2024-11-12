# GetV2DeploymentsParameters

The parameters the functions accepts, described as a JSON Schema object. 

 Omitting `parameters` defines a function with an empty parameter list.

## Example Usage

```typescript
import { GetV2DeploymentsParameters } from "orq-poc-typescript/models/operations";

let value: GetV2DeploymentsParameters = {
  type: "object",
  properties: {
    "key": "<value>",
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                   | [operations.GetV2DeploymentsDeploymentsResponseType](../../models/operations/getv2deploymentsdeploymentsresponsetype.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `properties`                                                                                                             | Record<string, *any*>                                                                                                    | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `required`                                                                                                               | *string*[]                                                                                                               | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `additionalProperties`                                                                                                   | *boolean*                                                                                                                | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |