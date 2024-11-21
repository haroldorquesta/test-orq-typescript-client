# RouterImageGenerationsChoices

## Example Usage

```typescript
import { RouterImageGenerationsChoices } from "orq-poc-typescript2/models/operations";

let value: RouterImageGenerationsChoices = {
  index: 6534.21,
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `finishReason`                                  | *string*                                        | :heavy_minus_sign:                              | The reason for finishing the generation         |
| `index`                                         | *number*                                        | :heavy_check_mark:                              | The index of the choice in the list of choices. |
| `message`                                       | *operations.RouterImageGenerationsMessage*      | :heavy_minus_sign:                              | N/A                                             |