# PostV2FilesBulkRequestBody

## Example Usage

```typescript
import { openAsBlob } from "node:fs";
import { PostV2FilesBulkRequestBody } from "orq-poc-typescript/models/operations";

let value: PostV2FilesBulkRequestBody = {
  files: [
    {
      fileName: "example.file",
      content: await openAsBlob("example.file"),
    },
  ],
  purpose: "retrieval",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `files`                                                                                | [operations.Files](../../models/operations/files.md)[]                                 | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `purpose`                                                                              | [operations.PostV2FilesBulkPurpose](../../models/operations/postv2filesbulkpurpose.md) | :heavy_check_mark:                                                                     | The intended purpose of the uploaded file.                                             |