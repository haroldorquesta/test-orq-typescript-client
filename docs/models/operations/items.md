# Items

Returned dataset model from the API

## Example Usage

```typescript
import { Items } from "orq-poc-typescript/models/operations";

let value: Items = {
  id: "1326b870-613e-43dc-9291-bac7e04b621d",
  displayName: "Shanon51",
  domainId: "b0beb272-5ee4-459f-924d-7e2855765ebb",
  updatedBy: {
    id: "9cc5cb2d-7779-497d-ba66-c530ee1521e0",
    email: "Salma.Hills75@gmail.com",
    displayName: "Madyson55",
    logoUrl: "https://apprehensive-saloon.biz",
  },
  updatedById: "e0517d42-5d23-41b6-84b5-bd3f242578de",
  items: [
    {
      id: "917557b1-eb2f-48f3-9844-9ecb8e7dd3c0",
      messages: [
        {
          role: "assistant",
          content: [
            {
              type: "image_url",
              imageUrl: {
                url: "https://mild-tune-up.biz/",
              },
            },
          ],
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `displayName`                                                                                            | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Name of the dataset                                                                                      |
| `domainId`                                                                                               | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Domain ID reference                                                                                      |
| `updatedBy`                                                                                              | [operations.GetV2ResourcesDatasetsUpdatedBy](../../models/operations/getv2resourcesdatasetsupdatedby.md) | :heavy_check_mark:                                                                                       | User model returned from the API                                                                         |
| `updatedById`                                                                                            | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The user who last updated the dataset                                                                    |
| `items`                                                                                                  | [operations.GetV2ResourcesDatasetsItems](../../models/operations/getv2resourcesdatasetsitems.md)[]       | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `created`                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)            | :heavy_minus_sign:                                                                                       | The date and time the resource was created                                                               |
| `updated`                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)            | :heavy_minus_sign:                                                                                       | The date and time the resource was last updated                                                          |