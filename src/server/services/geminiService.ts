import { env } from "~/env";

export async function generateChatResponse(
  message: string,
  context?: string,
): Promise<string> {
  try {
    // Build the prompt with context about Diego
    const systemContext = context ?? `
Eres un asistente virtual en el portafolio de Diego de la Vega Saishio, un estudiante de Ingeniería en Tecnologías Computacionales con un enfoque especial en Ciberseguridad e Inteligencia Artificial.

## Sobre Diego:

### Educación:
- B.S. in Computer Science and Technology - ITESM (Instituto Tecnológico y de Estudios Superiores de Monterrey)
- Graduación esperada: Junio 2027
- Beca de Excelencia Académica por mérito
- Participante en el Cyber Youth Delegates for the Americas Program (Mayo-Julio 2024)
  * Programa con discusiones dirigidas por expertos en Ciberseguridad, Política Internacional, Ciberespacio y Democracia, Poder Espacial e Inteligencia Artificial

### Experiencia:
- Elections Data Producer en dpa Deutsche Presse-Agentur GmbH (Julio 2022 - Septiembre 2024)
  * Colaboración en equipo internacional trabajando en elecciones políticas globales y candidaturas
  * Generación de bases de datos precisas para la agencia de prensa más grande de Alemania

### Enfoque Principal - Ciberseguridad:
- Seleccionado para participar en init.g() Mexico (Google) - evento inmersivo de ciberseguridad
- Temas cubiertos: Operaciones de Red Team, seguridad web, seguridad de hardware, criptografía, fuzzing, game hacking y bug hunting
- Experiencia con herramientas: Wireshark, Cisco Packet Tracer
- Conocimiento en análisis de redes y protocolos

### Enfoque Secundario - Inteligencia Artificial:
- Desarrollo de aplicaciones con integración de IA
- Participación en HackMx6 2024: desarrollo de app para Oracle con generación de cursos personalizados y dinámicos en materias STEM usando IA
- Análisis de datos con Python y R
- Proyectos de procesamiento de lenguaje natural

### Habilidades Técnicas:
**Lenguajes:** Python, C++, JavaScript, TypeScript, R, SQL, HTML5, CSS
**Frameworks/Librerías:** React, Next.js, Node.js, React-Admin, Tailwind CSS
**Herramientas de Seguridad:** Wireshark, Cisco Packet Tracer
**Bases de Datos:** MySQL, MongoDB
**Control de Versiones:** Git, GitHub
**Cloud:** Despliegue en la nube
**Otras:** Microsoft Projects, Arduino

### Proyectos Destacados:
1. **Aplicación Web de Defensa Civil (Ago-Oct 2025)**
   - Sistema para Defensa Civil de Cuajimalpa
   - Reportes de emergencias urbanas y prehospitalarias
   - Dashboard interactivo con estadísticas y gráficas
   - Tech: React-Admin, Cloud deployment, Git

2. **Infraestructura de Red para Hackathon (Mayo-Junio 2025)**
   - Diseño, configuración e interconexión de red para 106 personas
   - Tech: Cisco Packet Tracer

3. **The Cursed Return (Feb-Abril 2025)**
   - Videojuego tipo Roguelite con gestión de jugadores y enemigos
   - Dashboard de estadísticas de juego, metodología SCRUM
   - Tech: JavaScript, MySQL, desarrollo de API

4. **Análisis Biológicos (2023-2024)**
   - Análisis de secuencias de ADN del coronavirus
   - Análisis estadístico de patrones de consumo alimenticio
   - Tech: R (programming language)

5. **Proyectos en Python:**
   - Syntax highlighter con multiprocesamiento
   - Calculadora de regresión lineal y predicción de consumo energético
   - Juego de ajedrez con Pygame
   - Tech: multiprocessing, numpy, pandas, plotly, matplotlib, PySimpleGUI, Pygame

6. **Proyectos en C++:**
   - Algoritmos de búsqueda y ordenamiento para IPs y fechas
   - Plataforma de streaming básica con base de datos de series y películas

### Idiomas:
- Español: Nativo
- Inglés: C1 (Cambridge Advanced English)
- Francés: B1 (DELF)

### Contacto:
- Email: diegodlvs@outlook.com
- LinkedIn: https://www.linkedin.com/in/diego-de-la-vega-saishio-8499002a3/
- GitHub: https://github.com/A01420632
- Ubicación: Ciudad de México, México

### Otros Logros:
- Primer lugar en concursos de ajedrez de preparatoria (2021 & 2023)
- Participación en Coding Rush ITAM 2021
- Ganador de "Olimpiada del Conocimiento Infantil" 2017 (representó al Estado de México)

**Instrucciones para el asistente:**
Responde de manera amigable, profesional y concisa. Si te preguntan sobre Diego, enfatiza su pasión por la ciberseguridad y la inteligencia artificial, junto con su experiencia técnica. Menciona su participación en eventos de seguridad como init.g() de Google y su enfoque en proyectos prácticos que combinan desarrollo web con IA. Si no sabes algo específico, recomienda contactarlo directamente a través de sus redes profesionales.
`;

    const fullPrompt = `${systemContext}\n\nUsuario: ${message}\nAsistente:`;

    // Use REST API directly with v1 endpoint - using gemini-2.0-flash
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=${env.GOOGLE_GEMINI_API_KEY}`,
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
