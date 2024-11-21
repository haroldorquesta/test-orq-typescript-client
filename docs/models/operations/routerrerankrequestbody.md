# RouterRerankRequestBody

A request body that follows the official OpenAI schema

## Example Usage

```typescript
import { RouterRerankRequestBody } from "orq-poc-typescript/models/operations";

let value: RouterRerankRequestBody = {
  query: "<value>",
  documents: [
    "<value>",
  ],
  model: "Malibu",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `query`                                                                                             | *string*                                                                                            | :heavy_check_mark:                                                                                  | The search query                                                                                    |
| `documents`                                                                                         | *operations.Documents*[]                                                                            | :heavy_check_mark:                                                                                  | A list of document objects or strings to rerank.                                                    |
| `model`                                                                                             | *string*                                                                                            | :heavy_check_mark:                                                                                  | The identifier of the model to use                                                                  |
| `topN`                                                                                              | *number*                                                                                            | :heavy_minus_sign:                                                                                  | The number of most relevant documents or indices to return, defaults to the length of the documents |
| `returnDocuments`                                                                                   | *boolean*                                                                                           | :heavy_minus_sign:                                                                                  | Returns the docs with or without the doc text passed in                                             |