# ResponseBodyToolCalls

## Example Usage

```typescript
import { ResponseBodyToolCalls } from "orq-poc-typescript/models/operations";

let value: ResponseBodyToolCalls = {
  id: "<id>",
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `type`                                                                             | [operations.ResponseBodyType](../../models/operations/responsebodytype.md)         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `function`                                                                         | [operations.ResponseBodyFunction](../../models/operations/responsebodyfunction.md) | :heavy_check_mark:                                                                 | The function that the model called.                                                |