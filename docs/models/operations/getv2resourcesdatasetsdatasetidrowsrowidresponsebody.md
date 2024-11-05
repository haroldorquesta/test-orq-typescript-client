# GetV2ResourcesDatasetsDatasetIdRowsRowIdResponseBody

Returned dataset row model from the API.

## Example Usage

```typescript
import { GetV2ResourcesDatasetsDatasetIdRowsRowIdResponseBody } from "orq-poc-typescript/models/operations";

let value: GetV2ResourcesDatasetsDatasetIdRowsRowIdResponseBody = {
  id: "96866b12-dc46-4ed9-b306-add0353cc8f2",
  messages: [
    {
      role: "system",
      content: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                         | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `messages`                                                                                                                                   | [operations.GetV2ResourcesDatasetsDatasetIdRowsRowIdMessages](../../models/operations/getv2resourcesdatasetsdatasetidrowsrowidmessages.md)[] | :heavy_check_mark:                                                                                                                           | Input message(s) of the dataset row                                                                                                          |
| `expectedOutput`                                                                                                                             | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | Reference of the dataset row                                                                                                                 |
| `created`                                                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                | :heavy_minus_sign:                                                                                                                           | The date and time the resource was created                                                                                                   |
| `updated`                                                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                | :heavy_minus_sign:                                                                                                                           | The date and time the resource was last updated                                                                                              |