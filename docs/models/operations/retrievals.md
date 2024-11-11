# Retrievals

## Example Usage

```typescript
import { Retrievals } from "orq-poc-typescript/models/operations";

let value: Retrievals = {
  document: "<value>",
  metadata: {
    fileName: "example.file",
    pageNumber: 6925.32,
    fileType: "text",
    searchScore: 5013.24,
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `document`                                                 | *string*                                                   | :heavy_check_mark:                                         | Content of the retrieved chunk from the knowledge base     |
| `metadata`                                                 | [operations.Metadata](../../models/operations/metadata.md) | :heavy_check_mark:                                         | Metadata of the retrieved chunk from the knowledge base    |