
import { GoogleGenAI, Type } from "@google/genai";
import { AIConsultantResponse } from "../types";

// Always use process.env.API_KEY directly when initializing the GoogleGenAI client instance.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIAdvisorResponse = async (businessNeeds: string): Promise<AIConsultantResponse> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User business needs: ${businessNeeds}`,
      config: {
        systemInstruction: "You are an expert Talent and Infrastructure Strategist for NexusHire. Based on the user's business needs, provide a structured recommendation, a 3-step growth roadmap, and key benefits of using NexusHire services (Recruitment, EOR, Cloud, or Dev Support). Keep it professional, encouraging, and concise.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendation: { type: Type.STRING },
            roadmap: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            keyBenefits: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["recommendation", "roadmap", "keyBenefits"]
        }
      }
    });

    // Use the .text property directly (it is a getter, not a method) to extract the response.
    const jsonStr = response.text?.trim() || '{}';
    const data = JSON.parse(jsonStr);
    return data as AIConsultantResponse;
  } catch (error) {
    console.error("AI Consultation Error:", error);
    return {
      recommendation: "Our team of experts will analyze your needs specifically. NexusHire specializes in global scaling and cloud efficiency.",
      roadmap: ["Schedule a discovery call", "Analyze infrastructure requirements", "Begin talent matching"],
      keyBenefits: ["Faster time-to-market", "Lower compliance risk", "Scalable engineering resources"]
    };
  }
};