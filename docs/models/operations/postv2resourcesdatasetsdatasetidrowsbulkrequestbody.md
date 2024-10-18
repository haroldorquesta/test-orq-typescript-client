# PostV2ResourcesDatasetsDatasetIdRowsBulkRequestBody

## Example Usage

```typescript
import { PostV2ResourcesDatasetsDatasetIdRowsBulkRequestBody } from "orq-node-client/models/operations";

let value: PostV2ResourcesDatasetsDatasetIdRowsBulkRequestBody = {
  datasetRows: [
    {
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
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `datasetRows`                                                      | [operations.DatasetRows](../../models/operations/datasetrows.md)[] | :heavy_check_mark:                                                 | N/A                                                                |