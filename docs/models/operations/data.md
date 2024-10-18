# Data

## Example Usage

```typescript
import { Data } from "orq-node-client/models/operations";

let value: Data = {
  object: "embedding",
  embedding: "<value>",
  index: 5691.01,
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `object`                                                                                                       | [operations.PostV2RouterEmbeddingsRouterObject](../../models/operations/postv2routerembeddingsrouterobject.md) | :heavy_check_mark:                                                                                             | The object type, which is always "embedding".                                                                  |
| `embedding`                                                                                                    | *operations.Embedding*                                                                                         | :heavy_check_mark:                                                                                             | The embedding result.                                                                                          |
| `index`                                                                                                        | *number*                                                                                                       | :heavy_check_mark:                                                                                             | The index of the embedding in the list of embeddings.                                                          |