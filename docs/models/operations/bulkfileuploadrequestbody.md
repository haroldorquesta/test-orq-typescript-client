# BulkFileUploadRequestBody

## Example Usage

```typescript
import { openAsBlob } from "node:fs";
import { BulkFileUploadRequestBody } from "orq-poc-typescript2/models/operations";

let value: BulkFileUploadRequestBody = {
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

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `files`                                                                              | [operations.Files](../../models/operations/files.md)[]                               | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `purpose`                                                                            | [operations.BulkFileUploadPurpose](../../models/operations/bulkfileuploadpurpose.md) | :heavy_check_mark:                                                                   | The intended purpose of the uploaded file.                                           |