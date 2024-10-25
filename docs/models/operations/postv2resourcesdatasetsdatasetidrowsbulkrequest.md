# PostV2ResourcesDatasetsDatasetIdRowsBulkRequest

## Example Usage

```typescript
import { PostV2ResourcesDatasetsDatasetIdRowsBulkRequest } from "orq-poc-typescript/models/operations";

let value: PostV2ResourcesDatasetsDatasetIdRowsBulkRequest = {
  datasetId: "<id>",
  requestBody: {
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
  },
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `datasetId`                                                                                                                                      | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | Dataset ID                                                                                                                                       |
| `requestBody`                                                                                                                                    | [operations.PostV2ResourcesDatasetsDatasetIdRowsBulkRequestBody](../../models/operations/postv2resourcesdatasetsdatasetidrowsbulkrequestbody.md) | :heavy_minus_sign:                                                                                                                               | N/A                                                                                                                                              |