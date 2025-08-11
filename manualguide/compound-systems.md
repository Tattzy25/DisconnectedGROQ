# Groq Compound Systems Documentation

## Overview
Compound systems are advanced AI systems designed to solve problems by taking action and intelligently using external tools - starting with web search and code execution - alongside powerful Llama models. <mcreference link="https://console.groq.com/docs/compound" index="1">1</mcreference>

## Available Systems

### compound-beta
- **Description**: Supports multiple tool calls per request
- **Use Case**: Great for use cases requiring multiple web searches or code executions per request
- **Latency**: Standard latency

### compound-beta-mini  
- **Description**: Supports a single tool call per request
- **Use Case**: Great for use cases requiring a single web search or code execution per request
- **Latency**: Average of 3x lower latency than compound-beta

## Supported Tools
Both systems support:
- **Web Search**: Real-time information retrieval
- **Code Execution**: Python code execution via E2B

*Note: Custom user-provided tools are not supported at this time.*

## Usage Example

### Basic Implementation
```python
from groq import Groq

client = Groq()

completion = client.chat.completions.create(
    messages=[
        {
            "role": "user",
            "content": "What is the current weather in Tokyo?",
        }
    ],
    # Change model to compound-beta to use agentic tooling
    model="compound-beta",
)

print(completion.choices[0].message.content)
```

### Viewing Executed Tools
```python
import os
from groq import Groq

client = Groq(api_key=os.environ.get("GROQ_API_KEY"))

response = client.chat.completions.create(
    model="compound-beta",
    messages=[
        {"role": "user", "content": "What did Groq release last week?"}
    ]
)

# Log the tools that were used to generate the response
print(response.choices[0].message.executed_tools)
```

## Current Implementation Status
- ✅ Compound models are configured in our models.ts
- ✅ Basic compound support should work with current API integration
- ❌ Need to implement UI to show executed tools
- ❌ Need to add settings for search domain filtering
- ❌ Need to implement code execution result display
- ❌ Need to add compound-specific UI indicators

## Integration Notes
- Tool calls are performed server-side, no additional setup required
- Single API call can perform complex multi-step operations
- Automatically decides when to use search vs code execution
- Perfect for building sophisticated AI applications without complex tool management