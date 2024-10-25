# GetV2ResourcesDatasetsDatasetIdResponseBody

Returned dataset model from the API

## Example Usage

```typescript
import { GetV2ResourcesDatasetsDatasetIdResponseBody } from "orq-poc-typescript/models/operations";

let value: GetV2ResourcesDatasetsDatasetIdResponseBody = {
  id: "5055fd60-da2f-41d4-b6ca-f91ecb062dbe",
  displayName: "Opal34",
  domainId: "df10e48f-6a6c-4834-848b-fbc256a445c9",
  updatedBy: {
    id: "15cbbc48-8bf4-4ca9-acf0-2c1834b0d788",
    email: "Baron31@yahoo.com",
    displayName: "Virginia88",
    logoUrl: "https://helpful-courtroom.info/",
  },
  updatedById: "fe10e83a-a140-4323-9a01-2544cf8f6164",
  items: [
    {
      id: "a7eeb726-b41e-4b9c-ad7e-e4988f4fe7dc",
      messages: [
        {
          role: "user",
          content: "<value>",
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