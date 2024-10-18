# PatchV2ResourcesDatasetsDatasetIdRowsRowIdRequestBody

## Example Usage

```typescript
import { PatchV2ResourcesDatasetsDatasetIdRowsRowIdRequestBody } from "orq-node-client/models/operations";

let value: PatchV2ResourcesDatasetsDatasetIdRowsRowIdRequestBody = {
  messages: [
    {
      role: "prompt",
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

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `messages`                                                                                                                                       | [operations.PatchV2ResourcesDatasetsDatasetIdRowsRowIdMessages](../../models/operations/patchv2resourcesdatasetsdatasetidrowsrowidmessages.md)[] | :heavy_check_mark:                                                                                                                               | Input message(s) of the dataset row                                                                                                              |
| `expectedOutput`                                                                                                                                 | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Reference of the dataset row                                                                                                                     |