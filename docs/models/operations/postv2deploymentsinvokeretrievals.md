# PostV2DeploymentsInvokeRetrievals

## Example Usage

```typescript
import { PostV2DeploymentsInvokeRetrievals } from "orq-poc-typescript/models/operations";

let value: PostV2DeploymentsInvokeRetrievals = {
  document: "<value>",
  metadata: {
    fileName: "example.file",
    pageNumber: 7163.27,
    fileType: "audio",
    searchScore: 1831.91,
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `document`                                                                                               | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Content of the retrieved chunk from the knowledge base                                                   |
| `metadata`                                                                                               | [operations.PostV2DeploymentsInvokeMetadata](../../models/operations/postv2deploymentsinvokemetadata.md) | :heavy_check_mark:                                                                                       | Metadata of the retrieved chunk from the knowledge base                                                  |