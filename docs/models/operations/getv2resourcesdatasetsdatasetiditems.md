# GetV2ResourcesDatasetsDatasetIdItems

Returned dataset row model from the API.

## Example Usage

```typescript
import { GetV2ResourcesDatasetsDatasetIdItems } from "orq-node-client/models/operations";

let value: GetV2ResourcesDatasetsDatasetIdItems = {
  id: "3f914706-739c-439a-8fcd-72f271ffb544",
  messages: [
    {
      role: "tool",
      content: "<value>",
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