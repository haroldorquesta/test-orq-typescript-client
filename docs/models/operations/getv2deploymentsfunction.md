# GetV2DeploymentsFunction

## Example Usage

```typescript
import { GetV2DeploymentsFunction } from "orq-poc-typescript/models/operations";

let value: GetV2DeploymentsFunction = {
  name: "<value>",
  parameters: {
    type: "object",
    properties: {
      "key": "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                             | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The name of the function to be called. Must be a-z, A-Z, 0-9, or contain underscores and dashes, with a maximum length of 64.                      |
| `description`                                                                                                                                      | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | A description of what the function does, used by the model to choose when and how to call the function.                                            |
| `strict`                                                                                                                                           | *boolean*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `parameters`                                                                                                                                       | [operations.GetV2DeploymentsParameters](../../models/operations/getv2deploymentsparameters.md)                                                     | :heavy_check_mark:                                                                                                                                 | The parameters the functions accepts, described as a JSON Schema object. <br/><br/> Omitting `parameters` defines a function with an empty parameter list. |