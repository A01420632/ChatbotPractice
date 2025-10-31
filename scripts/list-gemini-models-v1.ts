// Simple script to list available Gemini models using REST API v1
const API_KEY = process.env.GOOGLE_GEMINI_API_KEY;

async function listModels() {
  try {
    console.log("Listando modelos disponibles en v1...\n");
    
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models?key=${API_KEY}`
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error:", errorData);
      return;
    }

    const data = await response.json();
    
    console.log("Modelos disponibles:");
    data.models.forEach((model: any) => {
      console.log(`\n✅ ${model.name}`);
      console.log(`   Display Name: ${model.displayName}`);
      console.log(`   Supported methods: ${model.supportedGenerationMethods.join(", ")}`);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

listModels();
