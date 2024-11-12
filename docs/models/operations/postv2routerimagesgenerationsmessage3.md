# PostV2RouterImagesGenerationsMessage3

## Example Usage

```typescript
import { PostV2RouterImagesGenerationsMessage3 } from "orq-poc-typescript/models/operations";

let value: PostV2RouterImagesGenerationsMessage3 = {
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

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `role`                                                                                                                                                             | [operations.PostV2RouterImagesGenerationsMessageRouterImagesResponseRole](../../models/operations/postv2routerimagesgenerationsmessagerouterimagesresponserole.md) | :heavy_check_mark:                                                                                                                                                 | The role of the prompt message                                                                                                                                     |
| `toolCalls`                                                                                                                                                        | [operations.PostV2RouterImagesGenerationsMessageToolCalls](../../models/operations/postv2routerimagesgenerationsmessagetoolcalls.md)[]                             | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |