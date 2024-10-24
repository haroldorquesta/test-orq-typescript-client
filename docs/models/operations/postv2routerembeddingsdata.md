# PostV2RouterEmbeddingsData

## Example Usage

```typescript
import { PostV2RouterEmbeddingsData } from "orq-poc-typescript/models/operations";

let value: PostV2RouterEmbeddingsData = {
  object: "embedding",
  embedding: "<value>",
  index: 9088.44,
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `object`                                                                                                       | [operations.PostV2RouterEmbeddingsRouterObject](../../models/operations/postv2routerembeddingsrouterobject.md) | :heavy_check_mark:                                                                                             | The object type, which is always "embedding".                                                                  |
| `embedding`                                                                                                    | *operations.Embedding*                                                                                         | :heavy_check_mark:                                                                                             | The embedding result.                                                                                          |
| `index`                                                                                                        | *number*                                                                                                       | :heavy_check_mark:                                                                                             | The index of the embedding in the list of embeddings.                                                          |