# GetV2ResourcesDatasetsResponseBody

Datasets Retrieved.

## Example Usage

```typescript
import { GetV2ResourcesDatasetsResponseBody } from "orq-node-client/models/operations";

let value: GetV2ResourcesDatasetsResponseBody = {
  count: 3182.34,
  page: 8587.77,
  limit: 4585.03,
  totalPages: 4445.87,
  items: [
    {
      id: "5eff6fca-332e-4477-8cd2-6dd124161939",
      displayName: "Werner.Huel",
      domainId: "0a66cbf5-ec59-44d1-a326-b870613e3dc2",
      updatedBy: {
        id: "1bac7e04-b621-4d7e-bb65-8eb0beb2725e",
        email: "Euna25@gmail.com",
        displayName: "Jerald_Denesik32",
        logoUrl: "https://irresponsible-formation.org/",
      },
      updatedById: "bb49cc5c-b2d7-4779-897d-a66c530ee152",
      items: [
        {
          id: "e0f1d955-c5a8-47e8-8db0-c3e0517d425d",
          messages: [
            {
              role: "assistant",
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