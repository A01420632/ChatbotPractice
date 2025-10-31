import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY!);

async function listModels() {
  try {
    console.log("Probando modelos disponibles...\n");
    
    const modelsToTry = [
      "gemini-pro",
      "gemini-1.5-pro",
      "gemini-1.5-flash",
      "models/gemini-pro",
      "models/gemini-1.5-pro",
    ];

    for (const modelName of modelsToTry) {
      try {
        const model = genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent("Hola, responde solo con 'OK'");
        const response = await result.response;
        const text = response.text();
        console.log(`${modelName} - FUNCIONA`);
        console.log(`   Respuesta: ${text}\n`);
      } catch (error: any) {
        console.log(`${modelName} - Error: ${error.message}\n`);
      }
    }
  } catch (error) {
    console.error("Error general:", error);
  }
}

listModels();
