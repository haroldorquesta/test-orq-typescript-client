# PostV2ResourcesDatasetsDatasetIdRowsResponseBody

Expected dataset row model when talking to the API.

## Example Usage

```typescript
import { PostV2ResourcesDatasetsDatasetIdRowsResponseBody } from "orq-poc-typescript/models/operations";

let value: PostV2ResourcesDatasetsDatasetIdRowsResponseBody = {
  id: "uuid-string",
  messages: [
    {
      role: "assistant",
      content: "You are a helpful assistant.",
      toolCalls: [
        {
          id: "tool-id",
          index: 0,
          type: "function",
          function: {
            name: "some-function",
            arguments: "some-args",
          },
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                   | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | The id of the resource                                                                                                                                 |
| `messages`                                                                                                                                             | [operations.PostV2ResourcesDatasetsDatasetIdRowsResourcesMessages](../../models/operations/postv2resourcesdatasetsdatasetidrowsresourcesmessages.md)[] | :heavy_check_mark:                                                                                                                                     | Input message(s) of the dataset row                                                                                                                    |
| `expectedOutput`                                                                                                                                       | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | Reference of the dataset row                                                                                                                           |