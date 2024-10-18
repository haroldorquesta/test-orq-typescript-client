# PostV2FilesResponseBody

File uploaded successfully

## Example Usage

```typescript
import { PostV2FilesResponseBody } from "orq-node-client/models/operations";

let value: PostV2FilesResponseBody = {
  id: "<id>",
  objectName: "<value>",
  purpose: "retrieval",
  bytes: 1494.48,
  fileName: "example.file",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `objectName`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | path to the file in the storage                                                               |
| `purpose`                                                                                     | [operations.PostV2FilesPurpose](../../models/operations/postv2filespurpose.md)                | :heavy_check_mark:                                                                            | The intended purpose of the uploaded file.                                                    |
| `bytes`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `fileName`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the resource was created                                                    |