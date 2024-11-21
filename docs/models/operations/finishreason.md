# FinishReason

The reason the model stopped generating tokens.

## Example Usage

```typescript
import { FinishReason } from "orq-poc-typescript2/models/operations";

let value: FinishReason = "tool_calls";
```

## Values

```typescript
"stop" | "length" | "content_filter" | "tool_calls"
```