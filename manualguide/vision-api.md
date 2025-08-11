# Groq Vision API Documentation

## Overview
Groq API offers fast inference and low latency for multimodal models with vision capabilities for understanding and interpreting visual data from images. <mcreference link="https://console.groq.com/docs/vision" index="0">0</mcreference>

## Supported Models

### meta-llama/llama-4-scout-17b-16e-instruct
- **Model ID**: meta-llama/llama-4-scout-17b-16e-instruct
- **Description**: A powerful multimodal model capable of processing both text and image inputs that supports multilingual, multi-turn conversations, tool use, and JSON mode
- **Context Window**: 128K tokens
- **Status**: Currently in preview and should be used for experimentation

## Limitations
- **Image Size Limit**: Maximum 20MB for image URL requests
- **Image Resolution Limit**: Maximum 33 megapixels (33177600 total pixels) per image
- **Request Size Limit (Base64)**: Maximum 4MB for base64 encoded images
- **Images per Request**: Maximum of 5 images

## Usage Examples

### Image from URL
```python
from groq import Groq
import os

client = Groq(api_key=os.environ.get("GROQ_API_KEY"))
completion = client.chat.completions.create(
    model="meta-llama/llama-4-scout-17b-16e-instruct",
    messages=[
        {
            "role": "user",
            "content": [
                {
                    "type": "text",
                    "text": "What's in this image?"
                },
                {
                    "type": "image_url",
                    "image_url": {
                        "url": "https://upload.wikimedia.org/wikipedia/commons/f/f2/LPU-v1-die.jpg"
                    }
                }
            ]
        }
    ],
    temperature=1,
    max_completion_tokens=1024,
    top_p=1,
    stream=False,
    stop=None,
)

print(completion.choices[0].message)
```

### Local Image (Base64)
```python
from groq import Groq
import base64
import os

# Function to encode the image
def encode_image(image_path):
  with open(image_path, "rb") as image_file:
    return base64.b64encode(image_file.read()).decode('utf-8')

# Path to your image
image_path = "sf.jpg"

# Getting the base64 string
base64_image = encode_image(image_path)

client = Groq(api_key=os.environ.get("GROQ_API_KEY"))

chat_completion = client.chat.completions.create(
    messages=[
        {
            "role": "user",
            "content": [
                {"type": "text", "text": "What's in this image?"},
                {
                    "type": "image_url",
                    "image_url": {
                        "url": f"data:image/jpeg;base64,{base64_image}",
                    },
                },
            ],
        }
    ],
    model="meta-llama/llama-4-scout-17b-16e-instruct",
)

print(chat_completion.choices[0].message.content)
```

## Tool Use with Images
The vision models support tool use! You can combine image analysis with function calling for powerful applications. <mcreference link="https://console.groq.com/docs/vision" index="0">0</mcreference>

## Current Implementation Status
- ✅ Vision models are configured in our models.ts
- ✅ Basic vision support should work with current API integration
- ❌ Need to implement image upload UI components
- ❌ Need to add base64 encoding for local images
- ❌ Need to implement image preview in chat interface