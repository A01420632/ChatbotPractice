// Test simple para verificar si la API key funciona
import { env } from "~/env";

const API_KEY = env.GOOGLE_GEMINI_API_KEY;

async function testApiKey() {
  try {
    console.log("Probando API key...\n");
    console.log(`API Key: ${API_KEY.substring(0, 20)}...`);
    
    // Probar con v1beta (la más común)
    console.log("\n1. Probando v1beta:");
    const responseBeta = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`
    );
    
    if (responseBeta.ok) {
      const data = await responseBeta.json();
      console.log("v1beta funciona!");
      console.log("Modelos disponibles:");
      data.models?.slice(0, 3).forEach((m: any) => console.log(`  - ${m.name}`));
    } else {
      const error = await responseBeta.json();
      console.log("v1beta error:", error.error.message);
    }

    // Probar con v1
    console.log("\n2. Probando v1:");
    const responseV1 = await fetch(
      `https://generativelanguage.googleapis.com/v1/models?key=${API_KEY}`
    );
    
    if (responseV1.ok) {
      const data = await responseV1.json();
      console.log("v1 funciona!");
      console.log("Modelos disponibles:");
      data.models?.slice(0, 3).forEach((m: any) => console.log(`  - ${m.name}`));
    } else {
      const error = await responseV1.json();
      console.log("v1 error:", error.error.message);
    }

  } catch (error) {
    console.error("Error general:", error);
  }
}

testApiKey();
