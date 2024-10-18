# Message3

## Example Usage

```typescript
import { Message3 } from "orq-node-client/models/operations";

let value: Message3 = {
  role: "tool",
  url: "https://appropriate-ecliptic.com",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `role`                                                                                                                               | [operations.PostV2DeploymentsInvokeMessageDeploymentsRole](../../models/operations/postv2deploymentsinvokemessagedeploymentsrole.md) | :heavy_check_mark:                                                                                                                   | The role of the prompt message                                                                                                       |
| `url`                                                                                                                                | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |