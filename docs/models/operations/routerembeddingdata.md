# RouterEmbeddingData

## Example Usage

```typescript
import { RouterEmbeddingData } from "orq-poc-typescript/models/operations";

let value: RouterEmbeddingData = {
  object: "embedding",
  embedding: [
    8286.57,
  ],
  index: 9249.67,
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `object`                                                                                                             | [operations.RouterEmbeddingRouterEmbeddingsObject](../../models/operations/routerembeddingrouterembeddingsobject.md) | :heavy_check_mark:                                                                                                   | The object type, which is always "embedding".                                                                        |
| `embedding`                                                                                                          | *operations.Embedding*                                                                                               | :heavy_check_mark:                                                                                                   | The embedding result.                                                                                                |
| `index`                                                                                                              | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | The index of the embedding in the list of embeddings.                                                                |