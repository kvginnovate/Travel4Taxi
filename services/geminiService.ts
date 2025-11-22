import { GoogleGenAI, Type } from "@google/genai";
import { RouteInsight } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getRouteInsights = async (source: string, destination: string): Promise<RouteInsight | null> => {
  if (!source || !destination) return null;

  try {
    const prompt = `
      Provide travel insights for a taxi trip from ${source} to ${destination}.
      Return a JSON object with:
      - distance: Estimated distance in km (string)
      - duration: Estimated driving time (string)
      - description: A brief, engaging description of the route (max 2 sentences).
      - highlights: An array of 3 interesting places or stopovers along the way.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            distance: { type: Type.STRING },
            duration: { type: Type.STRING },
            description: { type: Type.STRING },
            highlights: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ['distance', 'duration', 'description', 'highlights']
        }
      }
    });

    const text = response.text;
    if (!text) return null;
    return JSON.parse(text) as RouteInsight;

  } catch (error) {
    console.error("Error fetching route insights:", error);
    // Fallback mock data to prevent app crash if API fails
    return {
      distance: "Calculating...",
      duration: "Calculating...",
      description: "Enjoy a comfortable ride with Travel4Taxi.",
      highlights: ["Scenic Views", "Local Food Spots", "City Landmarks"]
    };
  }
};
