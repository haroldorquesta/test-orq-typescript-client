# FinishReason

The reason the model stopped generating tokens.

## Example Usage

```typescript
import { FinishReason } from "orq-node-client/models/operations";

let value: FinishReason = "stop";
```

## Values

```typescript
"stop" | "length" | "content_filter" | "tool_calls"
```