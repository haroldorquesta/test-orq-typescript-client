# PostV2FilesBulkRequestBody

## Example Usage

```typescript
import { PostV2FilesBulkRequestBody } from "orq-poc-typescript/models/operations";

let value: PostV2FilesBulkRequestBody = {
  files: [
    "<value>",
  ],
  purpose: "retrieval",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `files`                                                                                | *any*[]                                                                                | :heavy_check_mark:                                                                     | The file to be uploaded.                                                               |
| `purpose`                                                                              | [operations.PostV2FilesBulkPurpose](../../models/operations/postv2filesbulkpurpose.md) | :heavy_check_mark:                                                                     | The intended purpose of the uploaded file.                                             |