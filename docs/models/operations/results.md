# Results

## Example Usage

```typescript
import { Results } from "orq-poc-typescript/models/operations";

let value: Results = {
  index: 3679.28,
  relevanceScore: 4565.20,
};
```

## Fields

| Field                                                                                                                                                               | Type                                                                                                                                                                | Required                                                                                                                                                            | Description                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `index`                                                                                                                                                             | *number*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | Corresponds to the index in the original list of documents to which the ranked document belongs.                                                                    |
| `relevanceScore`                                                                                                                                                    | *number*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | Relevance scores are normalized to be in the range [0, 1]. Scores close to 1 indicate a high relevance to the query, and scores closer to 0 indicate low relevance. |
| `document`                                                                                                                                                          | [operations.Document](../../models/operations/document.md)                                                                                                          | :heavy_minus_sign:                                                                                                                                                  | If return_documents is set as false this will return none, if true it will return the documents passed in                                                           |