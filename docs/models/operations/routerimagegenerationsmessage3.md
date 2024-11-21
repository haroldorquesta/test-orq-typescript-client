# RouterImageGenerationsMessage3

## Example Usage

```typescript
import { RouterImageGenerationsMessage3 } from "orq-poc-typescript2/models/operations";

let value: RouterImageGenerationsMessage3 = {
  role: "expected_output",
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

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                                               | [operations.RouterImageGenerationsMessageRouterImagesResponseRole](../../models/operations/routerimagegenerationsmessagerouterimagesresponserole.md) | :heavy_check_mark:                                                                                                                                   | The role of the prompt message                                                                                                                       |
| `toolCalls`                                                                                                                                          | [operations.RouterImageGenerationsMessageToolCalls](../../models/operations/routerimagegenerationsmessagetoolcalls.md)[]                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |