# GetV2ResourcesDatasetsDatasetIdResponseBody

Returned dataset model from the API

## Example Usage

```typescript
import { GetV2ResourcesDatasetsDatasetIdResponseBody } from "orq-node-client/models/operations";

let value: GetV2ResourcesDatasetsDatasetIdResponseBody = {
  id: "5ab06ad7-f407-44d3-b4cb-8b600810fd20",
  displayName: "Dudley26",
  domainId: "a86c2fd9-0be8-451c-9e1c-0f984e4dfc81",
  updatedBy: {
    id: "73652748-0ed8-4df1-baff-92903f5a4fb5",
    email: "Gladyce.Paucek39@gmail.com",
    displayName: "Jody.Quigley63",
    logoUrl: "https://sticky-valuable.biz/",
  },
  updatedById: "d1ac26e1-096c-4e46-a79f-b64f2bea635b",
  items: [
    {
      id: "edde4568-a406-44fe-bda5-8d1c0dc0a822",
      messages: [
        {
          role: "tool",
          content: [
            {
              type: "image_url",
              imageUrl: {
                url: "https://close-tune-up.biz",
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

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `displayName`                                                                                                        | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Name of the dataset                                                                                                  |
| `domainId`                                                                                                           | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Domain ID reference                                                                                                  |
| `updatedBy`                                                                                                          | [operations.UpdatedBy](../../models/operations/updatedby.md)                                                         | :heavy_check_mark:                                                                                                   | User model returned from the API                                                                                     |
| `updatedById`                                                                                                        | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The user who last updated the dataset                                                                                |
| `items`                                                                                                              | [operations.GetV2ResourcesDatasetsDatasetIdItems](../../models/operations/getv2resourcesdatasetsdatasetiditems.md)[] | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `created`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_minus_sign:                                                                                                   | The date and time the resource was created                                                                           |
| `updated`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_minus_sign:                                                                                                   | The date and time the resource was last updated                                                                      |