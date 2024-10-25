# PostV2ResourcesDatasetsDatasetIdRowsRequestBody

## Example Usage

```typescript
import { PostV2ResourcesDatasetsDatasetIdRowsRequestBody } from "orq-poc-typescript/models/operations";

let value: PostV2ResourcesDatasetsDatasetIdRowsRequestBody = {
  messages: [
    {
      role: "expected_output",
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

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `messages`                                                                                                                           | [operations.PostV2ResourcesDatasetsDatasetIdRowsMessages](../../models/operations/postv2resourcesdatasetsdatasetidrowsmessages.md)[] | :heavy_check_mark:                                                                                                                   | Input message(s) of the dataset row                                                                                                  |
| `expectedOutput`                                                                                                                     | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | Reference of the dataset row                                                                                                         |