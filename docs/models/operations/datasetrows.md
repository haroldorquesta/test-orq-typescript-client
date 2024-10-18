# DatasetRows

Expected dataset row model when talking to the API.

## Example Usage

```typescript
import { DatasetRows } from "orq-node-client/models/operations";

let value: DatasetRows = {
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

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `messages`                                                                                                                                   | [operations.PostV2ResourcesDatasetsDatasetIdRowsBulkMessages](../../models/operations/postv2resourcesdatasetsdatasetidrowsbulkmessages.md)[] | :heavy_check_mark:                                                                                                                           | Input message(s) of the dataset row                                                                                                          |
| `expectedOutput`                                                                                                                             | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | Reference of the dataset row                                                                                                                 |