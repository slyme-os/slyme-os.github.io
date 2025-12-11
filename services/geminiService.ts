import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { Message } from '../types';

export class GeminiService {
  private ai: GoogleGenAI | null = null;
  private modelId = 'gemini-2.5-flash';

  constructor() {
    try {
      // Check if key exists to prevent immediate crash
      if (process.env.API_KEY) {
        this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      } else {
        console.warn("SLYME OS: No API Key detected. AI features will be simulated.");
      }
    } catch (error) {
      console.error("Failed to initialize AI:", error);
    }
  }

  async sendMessage(history: Message[], userMessage: string): Promise<string> {
    if (!this.ai) {
      return "ERROR: API_KEY not found. \nTo enable AI, please set your Google Gemini API Key in the environment variables.\n\n> System running in OFFLINE mode.";
    }

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