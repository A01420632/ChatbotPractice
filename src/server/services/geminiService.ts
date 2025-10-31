import { env } from "~/env";

export async function generateChatResponse(
  message: string,
  context?: string,
): Promise<string> {
  try {
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

    // Use REST API directly with v1 endpoint (not v1beta)
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${env.GOOGLE_GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: fullPrompt,
                },
              ],
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Gemini API Error:", errorData);
      throw new Error(`Gemini API Error: ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();
    
    if (!data.candidates || data.candidates.length === 0) {
      throw new Error("No response candidates from Gemini");
    }

    const text = data.candidates[0].content.parts[0].text;
    return text;
  } catch (error) {
    console.error("Error generating chat response:", error);
    
    if (error instanceof Error) {
      throw new Error(`Gemini API Error: ${error.message}`);
    }
    throw new Error("Failed to generate response from Gemini AI");
  }
}

export async function generateStreamingResponse(
  message: string,
  context?: string,
) {
  // For now, return the same as non-streaming
  // Can be implemented later with streamGenerateContent
  return generateChatResponse(message, context);
}
