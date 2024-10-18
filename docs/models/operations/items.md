# Items

Returned dataset model from the API

## Example Usage

```typescript
import { Items } from "orq-node-client/models/operations";

let value: Items = {
  id: "e2a71b30-00eb-4ea8-94f5-76f25a197438",
  displayName: "Jaclyn.Witting",
  domainId: "9a6f5bad-fecb-4521-a368-cf119bdef662",
  updatedBy: {
    id: "ad17932d-0717-4f6d-a146-6a5ba6691dab",
    email: "Gus.Hammes73@gmail.com",
    displayName: "Lemuel10",
    logoUrl: "https://mushy-habit.name/",
  },
  updatedById: "5308d531-1314-411d-b28c-723685cce0e6",
  items: [
    {
      id: "bfc58654-7a48-4120-9f02-91ebf848e84e",
      messages: [
        {
          role: "system",
          content: "<value>",
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