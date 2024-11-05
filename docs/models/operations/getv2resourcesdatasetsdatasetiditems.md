# GetV2ResourcesDatasetsDatasetIdItems

Returned dataset row model from the API.

## Example Usage

```typescript
import { GetV2ResourcesDatasetsDatasetIdItems } from "orq-poc-typescript/models/operations";

let value: GetV2ResourcesDatasetsDatasetIdItems = {
  id: "f916cbe4-c79f-4fd5-8ea6-0c8cbc4c87a0",
  messages: [
    {
      role: "user",
      content: [
        {
          type: "text",
          text: "<value>",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                       | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `messages`                                                                                                                 | [operations.GetV2ResourcesDatasetsDatasetIdMessages](../../models/operations/getv2resourcesdatasetsdatasetidmessages.md)[] | :heavy_check_mark:                                                                                                         | Input message(s) of the dataset row                                                                                        |
| `expectedOutput`                                                                                                           | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Reference of the dataset row                                                                                               |
| `created`                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                              | :heavy_minus_sign:                                                                                                         | The date and time the resource was created                                                                                 |
| `updated`                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                              | :heavy_minus_sign:                                                                                                         | The date and time the resource was last updated                                                                            |