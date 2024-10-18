# ResponseBody

## Example Usage

```typescript
import { ResponseBody } from "orq-node-client/models/operations";

let value: ResponseBody = {
  id: "<id>",
  objectName: "<value>",
  purpose: "retrieval",
  bytes: 8681.26,
  fileName: "example.file",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `id`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `objectName`                                                                                     | *string*                                                                                         | :heavy_check_mark:                                                                               | path to the file in the storage                                                                  |
| `purpose`                                                                                        | [operations.PostV2FilesBulkFilesPurpose](../../models/operations/postv2filesbulkfilespurpose.md) | :heavy_check_mark:                                                                               | The intended purpose of the uploaded file.                                                       |
| `bytes`                                                                                          | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `fileName`                                                                                       | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `created`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_minus_sign:                                                                               | The date and time the resource was created                                                       |