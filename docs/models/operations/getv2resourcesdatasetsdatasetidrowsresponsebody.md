# GetV2ResourcesDatasetsDatasetIdRowsResponseBody

Dataset rows Retrieved.

## Example Usage

```typescript
import { GetV2ResourcesDatasetsDatasetIdRowsResponseBody } from "orq-poc-typescript/models/operations";

let value: GetV2ResourcesDatasetsDatasetIdRowsResponseBody = {
  count: 9430.62,
  page: 9906.52,
  limit: 1988.92,
  totalPages: 6568.38,
  items: [
    {
      id: "1ada6669-ee02-4135-88ab-efadc4e0047a",
      messages: [
        {
          role: "prompt",
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