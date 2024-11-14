# FinishReason

The reason the model stopped generating tokens.

## Example Usage

```typescript
import { FinishReason } from "orq-poc-typescript/models/operations";

let value: FinishReason = "content_filter";
```

## Values

```typescript
"stop" | "length" | "content_filter" | "tool_calls"
```