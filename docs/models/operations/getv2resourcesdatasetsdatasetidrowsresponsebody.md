# GetV2ResourcesDatasetsDatasetIdRowsResponseBody

Dataset rows Retrieved.

## Example Usage

```typescript
import { GetV2ResourcesDatasetsDatasetIdRowsResponseBody } from "orq-node-client/models/operations";

let value: GetV2ResourcesDatasetsDatasetIdRowsResponseBody = {
  count: 6599.71,
  page: 5802.38,
  limit: 7748.80,
  totalPages: 9440.32,
  items: [
    {
      id: "02c1834b-0d78-48a5-9152-85ff99fec553",
      messages: [
        {
          role: "expected_output",
          content: [
            {
              type: "text",
              text: "<value>",
            },
          ],
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `count`                                                                                                                      | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `page`                                                                                                                       | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `limit`                                                                                                                      | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `totalPages`                                                                                                                 | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `items`                                                                                                                      | [operations.GetV2ResourcesDatasetsDatasetIdRowsItems](../../models/operations/getv2resourcesdatasetsdatasetidrowsitems.md)[] | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |