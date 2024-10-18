# GetV2ResourcesDatasetsItems

Returned dataset row model from the API.

## Example Usage

```typescript
import { GetV2ResourcesDatasetsItems } from "orq-node-client/models/operations";

let value: GetV2ResourcesDatasetsItems = {
  id: "bd85c178-b136-49e9-82fd-8e8edfe026f4",
  messages: [
    {
      role: "expected_output",
      content: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `messages`                                                                                               | [operations.GetV2ResourcesDatasetsMessages](../../models/operations/getv2resourcesdatasetsmessages.md)[] | :heavy_check_mark:                                                                                       | Input message(s) of the dataset row                                                                      |
| `expectedOutput`                                                                                         | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Reference of the dataset row                                                                             |
| `created`                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)            | :heavy_minus_sign:                                                                                       | The date and time the resource was created                                                               |
| `updated`                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)            | :heavy_minus_sign:                                                                                       | The date and time the resource was last updated                                                          |