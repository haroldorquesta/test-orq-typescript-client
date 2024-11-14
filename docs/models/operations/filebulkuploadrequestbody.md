# FileBulkUploadRequestBody

## Example Usage

```typescript
import { openAsBlob } from "node:fs";
import { FileBulkUploadRequestBody } from "orq-poc-typescript/models/operations";

let value: FileBulkUploadRequestBody = {
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
| `purpose`                                                                            | [operations.FileBulkUploadPurpose](../../models/operations/filebulkuploadpurpose.md) | :heavy_check_mark:                                                                   | The intended purpose of the uploaded file.                                           |