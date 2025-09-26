
import { GoogleGenAI } from "@google/genai";
import type { AIQuiz } from "../types";

if (!process.env.API_KEY) {
    console.warn("API_KEY environment variable not set. AI features will not work.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are 'Shiksha Dost', a friendly and encouraging AI study buddy for students in Nabha, Punjab. 
Your goal is to explain complex topics in simple, easy-to-understand terms, primarily in English, but you can use simple Punjabi words if it helps clarify a concept. 
Keep your explanations concise, positive, and tailored for a student in middle school (ages 10-14). 
Always be patient and supportive. Do not answer questions unrelated to educational topics.
When asked to generate structured data like a quiz, you must respond with only the valid JSON object requested.
`;

export const getAIResponse = async (prompt: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "The AI Study Buddy is currently unavailable. Please ask a teacher for help.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 1,
        topK: 32,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Error fetching AI response:", error);
    return "I'm sorry, I encountered a problem. Please try asking your question again in a little while.";
  }
};

export const generateAIQuiz = async (topic: string): Promise<AIQuiz> => {
    if (!process.env.API_KEY) {
        throw new Error("API key is not configured.");
    }

    const prompt = `
Generate a 5-question multiple-choice quiz on the topic of "${topic}". 
The response must be a valid JSON object with the following structure: 
{ 
  "title": "string (e.g., The Solar System)", 
  "description": "string (e.g., 'A quiz to test your knowledge about our solar system.')", 
  "questions": [
    { 
      "question": "string", 
      "options": ["string", "string", "string", "string"], 
      "correctAnswer": "string" 
    }
  ] 
}.
Do not include any text, formatting, or markdown like \`\`\`json outside of the JSON object.
The 'correctAnswer' must exactly match one of the strings in the 'options' array.
`;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                systemInstruction: SYSTEM_INSTRUCTION,
                temperature: 0.5,
            }
        });

        const textResponse = response.text.trim();
        
        // Clean the response to ensure it's valid JSON
        const jsonString = textResponse.replace(/^```json\s*|```\s*$/g, '');

        try {
            const parsedQuiz: AIQuiz = JSON.parse(jsonString);
            return parsedQuiz;
        } catch (parseError) {
            console.error("Failed to parse AI response as JSON:", parseError);
            console.error("Raw AI response:", textResponse);
            throw new Error("The AI returned an invalid format. Please try again.");
        }

    } catch (error) {
        console.error("Error generating AI quiz:", error);
        throw new Error("Failed to communicate with the AI service.");
    }
};