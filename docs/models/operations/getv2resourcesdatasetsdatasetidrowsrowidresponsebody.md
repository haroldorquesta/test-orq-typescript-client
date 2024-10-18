# GetV2ResourcesDatasetsDatasetIdRowsRowIdResponseBody

Returned dataset row model from the API.

## Example Usage

```typescript
import { GetV2ResourcesDatasetsDatasetIdRowsRowIdResponseBody } from "orq-node-client/models/operations";

let value: GetV2ResourcesDatasetsDatasetIdRowsRowIdResponseBody = {
  id: "544cf8f6-1647-4a7e-beb7-26b41eb9cd7e",
  messages: [
    {
      role: "user",
      content: [
        {
          type: "image_url",
          imageUrl: {
            url: "https://warm-excess.org",
          },
        },
      ],
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