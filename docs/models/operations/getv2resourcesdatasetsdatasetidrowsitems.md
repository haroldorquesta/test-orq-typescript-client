# GetV2ResourcesDatasetsDatasetIdRowsItems

Returned dataset row model from the API.

## Example Usage

```typescript
import { GetV2ResourcesDatasetsDatasetIdRowsItems } from "orq-poc-typescript/models/operations";

let value: GetV2ResourcesDatasetsDatasetIdRowsItems = {
  id: "9b55004b-accd-4bfe-b990-f2bd531b7be2",
  messages: [
    {
      role: "exception",
      content: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                               | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `messages`                                                                                                                         | [operations.GetV2ResourcesDatasetsDatasetIdRowsMessages](../../models/operations/getv2resourcesdatasetsdatasetidrowsmessages.md)[] | :heavy_check_mark:                                                                                                                 | Input message(s) of the dataset row                                                                                                |
| `expectedOutput`                                                                                                                   | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Reference of the dataset row                                                                                                       |
| `created`                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                      | :heavy_minus_sign:                                                                                                                 | The date and time the resource was created                                                                                         |
| `updated`                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                      | :heavy_minus_sign:                                                                                                                 | The date and time the resource was last updated                                                                                    |