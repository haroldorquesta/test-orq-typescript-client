# PatchV2ResourcesDatasetsDatasetIdRowsRowIdResponseBody

Dataset updated.

## Example Usage

```typescript
import { PatchV2ResourcesDatasetsDatasetIdRowsRowIdResponseBody } from "orq-poc-typescript/models/operations";

let value: PatchV2ResourcesDatasetsDatasetIdRowsRowIdResponseBody = {
  messages: [
    {
      role: "exception",
      content: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `messages`                                                                                                                                                         | [operations.PatchV2ResourcesDatasetsDatasetIdRowsRowIdResourcesMessages](../../models/operations/patchv2resourcesdatasetsdatasetidrowsrowidresourcesmessages.md)[] | :heavy_check_mark:                                                                                                                                                 | Input message(s) of the dataset row                                                                                                                                |
| `expectedOutput`                                                                                                                                                   | *string*                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                 | Reference of the dataset row                                                                                                                                       |