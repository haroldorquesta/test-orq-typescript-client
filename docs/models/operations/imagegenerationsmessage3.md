# ImageGenerationsMessage3

## Example Usage

```typescript
import { ImageGenerationsMessage3 } from "orq-poc-typescript/models/operations";

let value: ImageGenerationsMessage3 = {
  role: "exception",
  toolCalls: [
    {
      type: "function",
      function: {
        name: "<value>",
        arguments: "<value>",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                                   | [operations.ImageGenerationsMessageRouterImagesResponseRole](../../models/operations/imagegenerationsmessagerouterimagesresponserole.md) | :heavy_check_mark:                                                                                                                       | The role of the prompt message                                                                                                           |
| `toolCalls`                                                                                                                              | [operations.ImageGenerationsMessageToolCalls](../../models/operations/imagegenerationsmessagetoolcalls.md)[]                             | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |