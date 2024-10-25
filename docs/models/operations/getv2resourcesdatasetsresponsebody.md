# GetV2ResourcesDatasetsResponseBody

Datasets Retrieved.

## Example Usage

```typescript
import { GetV2ResourcesDatasetsResponseBody } from "orq-poc-typescript/models/operations";

let value: GetV2ResourcesDatasetsResponseBody = {
  count: 6771.41,
  page: 5928.80,
  limit: 100.64,
  totalPages: 4758.26,
  items: [
    {
      id: "b0e803f9-1470-4673-b9c3-9afcd72f271f",
      displayName: "Millie.Funk",
      domainId: "25ab06ad-7f40-474d-834c-b8b600810fd2",
      updatedBy: {
        id: "f42b14fa-86c2-4fd9-b0be-851ce1c0f984",
        email: "Rhianna.Sawayn-Leannon@gmail.com",
        displayName: "Colton.Herzog44",
        logoUrl: "https://another-testing.net",
      },
      updatedById: "8df1aff9-2903-4f5a-84fb-5c163a16485b",
      items: [
        {
          id: "a34cf5d1-ac26-4e10-b96c-e4679fb64f2b",
          messages: [
            {
              role: "prompt",
              content: "<value>",
            },
          ],
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `count`                                                | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `page`                                                 | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `limit`                                                | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `totalPages`                                           | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `items`                                                | [operations.Items](../../models/operations/items.md)[] | :heavy_check_mark:                                     | N/A                                                    |