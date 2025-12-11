import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { Message } from '../types';

export class GeminiService {
  private ai: GoogleGenAI;
  private modelId = 'gemini-2.5-flash';

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async sendMessage(history: Message[], userMessage: string): Promise<string> {
    try {
      const chat = this.ai.chats.create({
        model: this.modelId,
        config: {
          systemInstruction: "You are SLYME AI, an embedded intelligent assistant inside SLYME OS (an Arch Linux derivative). You are privacy-obsessed, anti-surveillance, and technically savvy. You speak in a concise, hacker-like, terminal-style manner. You distrust big tech corporations. Keep answers short and efficient.",
        },
        history: history.map(msg => ({
          role: msg.role === 'model' ? 'model' : 'user',
          parts: [{ text: msg.content }],
        }))
      });

      const response: GenerateContentResponse = await chat.sendMessage({
        message: userMessage
      });

      return response.text || "Command execution failed. No output received.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "Error: Uplink to SLYME neural net failed. Check connectivity or encryption keys.";
    }
  }
}

export const geminiService = new GeminiService();