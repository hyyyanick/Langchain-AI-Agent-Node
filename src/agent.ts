import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { createReactAgent } from "@langchain/langgraph/prebuilt";

const llm = new ChatGoogleGenerativeAI({
    temperature: 0,
    model: "gemini-2.0-flash",
});

export const agent = createReactAgent({
    llm,
    tools: []
});
