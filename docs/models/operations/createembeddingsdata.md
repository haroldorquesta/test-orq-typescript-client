# CreateEmbeddingsData

## Example Usage

```typescript
import { CreateEmbeddingsData } from "orq-poc-typescript/models/operations";

let value: CreateEmbeddingsData = {
  object: "embedding",
  embedding: "<value>",
  index: 9591.67,
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `object`                                                                                                               | [operations.CreateEmbeddingsRouterEmbeddingsObject](../../models/operations/createembeddingsrouterembeddingsobject.md) | :heavy_check_mark:                                                                                                     | The object type, which is always "embedding".                                                                          |
| `embedding`                                                                                                            | *operations.Embedding*                                                                                                 | :heavy_check_mark:                                                                                                     | The embedding result.                                                                                                  |
| `index`                                                                                                                | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | The index of the embedding in the list of embeddings.                                                                  |