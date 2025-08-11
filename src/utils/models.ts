interface ModelConfig {
    name: string;
    temperature: number;
    type: "text" | "vision" | "audio" | "compound";
    maxTokens?: number;
    category?: "compound" | "llama4" | "llama3" | "openai" | "moonshot" | "audio" | "guard";
    tools?: {
        codeExecution?: boolean;
        browserSearch?: boolean;
        webSearch?: boolean;
        parallelToolUse?: boolean;
        jsonMode?: boolean;
    };
    description?: string;
    latency?: "standard" | "low";
    toolCallsPerRequest?: number;
    tokenSpeed?: number;
}

const MODEL_CONFIGS: { [key: string]: ModelConfig } = {
    // Compound Models - Built-in Tools
    "compound-beta": {
        name: "compound-beta",
        temperature: 0.1,
        type: "compound",
        maxTokens: 8192,
        category: "compound",
        tools: {
            codeExecution: true,
            webSearch: true,
            parallelToolUse: true,
            jsonMode: true
        },
        description: "Complex multi-step tasks with up to 10 tool calls",
        latency: "standard",
        toolCallsPerRequest: 10,
        tokenSpeed: 350
    },
    "compound-beta-mini": {
        name: "compound-beta-mini",
        temperature: 0.1,
        type: "compound",
        maxTokens: 8192,
        category: "compound",
        tools: {
            codeExecution: true,
            webSearch: true,
            parallelToolUse: true,
            jsonMode: true
        },
        description: "Quick single-step queries with 3x lower latency",
        latency: "low",
        toolCallsPerRequest: 1,
        tokenSpeed: 350
    },
    
    // OpenAI Models - Built-in Tools
    "openai/gpt-oss-120b": {
        name: "openai/gpt-oss-120b",
        temperature: 0.1,
        type: "text",
        maxTokens: 8192,
        category: "openai",
        tools: {
            codeExecution: true,
            browserSearch: true,
            parallelToolUse: false,
            jsonMode: true
        },
        description: "Large OpenAI model with code execution and browser search"
    },
    "openai/gpt-oss-20b": {
        name: "openai/gpt-oss-20b",
        temperature: 0.1,
        type: "text",
        maxTokens: 8192,
        category: "openai",
        tools: {
            codeExecution: true,
            browserSearch: true,
            parallelToolUse: false,
            jsonMode: true
        },
        description: "Smaller OpenAI model with code execution and browser search"
    },
    
    // Llama 4 Models - Vision Capable
    "meta-llama/llama-4-maverick-17b-128e-instruct": {
        name: "meta-llama/llama-4-maverick-17b-128e-instruct",
        temperature: 0.1,
        type: "vision",
        maxTokens: 8192,
        category: "llama4",
        tools: {
            parallelToolUse: true,
            jsonMode: true
        },
        description: "Llama 4 Maverick with extended context and vision capabilities"
    },
    "meta-llama/llama-4-scout-17b-16e-instruct": {
        name: "meta-llama/llama-4-scout-17b-16e-instruct",
        temperature: 0.1,
        type: "vision",
        maxTokens: 8192,
        category: "llama4",
        tools: {
            parallelToolUse: true,
            jsonMode: true
        },
        description: "Llama 4 Scout with vision capabilities and tool use"
    },
    
    // Vision Model (keeping as requested)
    "meta-llama/llama-3.2-90b-vision-preview": {
        name: "meta-llama/llama-3.2-90b-vision-preview",
        temperature: 0.1,
        type: "vision",
        maxTokens: 8192,
        category: "llama3",
        tools: {
            parallelToolUse: true,
            jsonMode: true
        },
        description: "Llama 3.2 90B with vision capabilities"
    },
    
    // Moonshot AI Model
    "moonshotai/kimi-k2-instruct": {
        name: "moonshotai/kimi-k2-instruct",
        temperature: 0.6,
        type: "text",
        maxTokens: 131072,
        category: "moonshot",
        tools: {
            parallelToolUse: true,
            jsonMode: true
        },
        description: "Moonshot Kimi K2 with large context window and parallel tool use"
    },
    
    // Audio Models
    "playai-tts": {
        name: "playai-tts",
        temperature: 0.1,
        type: "audio",
        maxTokens: 4096,
        category: "audio",
        description: "Text-to-speech model for audio generation"
    },
    "whisper-large-v3": {
        name: "whisper-large-v3",
        temperature: 0.1,
        type: "audio",
        maxTokens: 4096,
        category: "audio",
        description: "Speech-to-text model for audio transcription"
    },
    
    // Guard Model (keep existing)
    "llama-guard-3-8b": {
        name: "llama-guard-3-8b",
        temperature: 0.1,
        type: "text",
        maxTokens: 8192,
        category: "guard",
        description: "Content moderation and safety model"
    }
};

// Default temperature if model not found in configs
const DEFAULT_TEMPERATURE = 0.1;
const DEFAULT_MAX_TOKENS = 8192;

// Export models for dropdown (exclude audio models for now)
export const MODEL_OPTIONS = Object.entries(MODEL_CONFIGS)
    .filter(([key, config]) => config.type !== "audio")
    .map(([key, _]) => key);

// Export models by category for UI organization
export const MODELS_BY_CATEGORY = {
    compound: Object.keys(MODEL_CONFIGS).filter(key => MODEL_CONFIGS[key].category === "compound"),
    llama4: Object.keys(MODEL_CONFIGS).filter(key => MODEL_CONFIGS[key].category === "llama4"),
    llama3: Object.keys(MODEL_CONFIGS).filter(key => MODEL_CONFIGS[key].category === "llama3"),
    openai: Object.keys(MODEL_CONFIGS).filter(key => MODEL_CONFIGS[key].category === "openai"),
    moonshot: Object.keys(MODEL_CONFIGS).filter(key => MODEL_CONFIGS[key].category === "moonshot"),
    audio: Object.keys(MODEL_CONFIGS).filter(key => MODEL_CONFIGS[key].category === "audio"),
    guard: Object.keys(MODEL_CONFIGS).filter(key => MODEL_CONFIGS[key].category === "guard")
};

export function getModelTemperature(modelName: string): number {
    return MODEL_CONFIGS[modelName]?.temperature ?? DEFAULT_TEMPERATURE;
}

export function getModelMaxTokens(modelName: string): number {
    return MODEL_CONFIGS[modelName]?.maxTokens ?? DEFAULT_MAX_TOKENS;
}

export function getModelConfig(modelName: string): ModelConfig {
    return MODEL_CONFIGS[modelName] ?? {
        name: modelName,
        temperature: DEFAULT_TEMPERATURE,
        type: "text"
    };
}

export function getFallbackModel(): string {
	// Use same model for fallback
	return "llama-3.3-70b-versatile";
}

export const PRIMARY_MODEL = "llama-3.3-70b-specdec";
export const VANILLA_MODEL = "llama-3.3-70b-versatile";

export const PRIMARY_VISION_MODEL = "meta-llama/llama-4-scout-17b-16e-instruct";
export const FALLBACK_VISION_MODEL = "llama-3.2-90b-vision-preview";
