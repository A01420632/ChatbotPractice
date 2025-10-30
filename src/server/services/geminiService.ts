import { GoogleGenerativeAI } from "@google/generative-ai";
import { env } from "~/env";

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(env.GOOGLE_GEMINI_API_KEY);

export async function generateChatResponse(
  message: string,
  context?: string,
): Promise<string> {
  try {
    // Use Gemini 1.5 Flash for fast, efficient responses
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Build the prompt with context about Diego
    const systemContext = context ?? `
Eres un asistente virtual en el portafolio de Diego de la Vega Saishio, un Desarrollador Full-Stack.

Información sobre Diego:
- Especializado en tecnologías web modernas y aplicaciones con inteligencia artificial
- Experiencia en React, Next.js y sistemas basados en IA
- Habilidades: JavaScript, Python, R, TypeScript, React, Next.js, Node.js, CSS, Tailwind CSS, AI Integration, SQL, Cisco Packet Tracer, Arduino
- Email: diegodlvs@outlook.com
- LinkedIn: https://www.linkedin.com/in/diego-de-la-vega-saishio-8499002a3/
- GitHub: https://github.com/A01420632

Responde de manera amigable, profesional y concisa. Si te preguntan sobre Diego, usa la información proporcionada.
Si no sabes algo específico, recomienda contactarlo directamente.
`;

    const fullPrompt = `${systemContext}\n\nUsuario: ${message}\nAsistente:`;

    const result = await model.generateContent(fullPrompt);
    const response = result.response;
    const text = response.text();

    return text;
  } catch (error) {
    console.error("Error generating chat response:", error);
    throw new Error("Failed to generate response from Gemini AI");
  }
}

export async function generateStreamingResponse(
  message: string,
  context?: string,
) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const systemContext = context ?? `
Eres un asistente virtual en el portafolio de Diego de la Vega Saishio, un Desarrollador Full-Stack.
Responde de manera amigable, profesional y concisa sobre Diego y su trabajo.
`;

    const fullPrompt = `${systemContext}\n\nUsuario: ${message}\nAsistente:`;

    const result = await model.generateContentStream(fullPrompt);

    return result.stream;
  } catch (error) {
    console.error("Error generating streaming response:", error);
    throw new Error("Failed to generate streaming response from Gemini AI");
  }
}
