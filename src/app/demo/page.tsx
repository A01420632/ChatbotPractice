import Link from "next/link";
import ChatWidget from "~/app/_components/chatWidget";

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8">
      <div className="mb-4">
        <Link href="/" className="text-blue-600 hover:text-blue-800">
          Regresar al Inicio
        </Link>
      </div>
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
          {/* Header/Intro Section */}
          <div className="mb-8 flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
              <img
                src="/diego-profile.jpg"
                alt="Diego"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Diego de la Vega Saishio
              </h1>
              <h2 className="text-xl text-gray-600 mb-4">
                Estudiante de Ingeniería en Tecnologías Computacionales
              </h2>
              <p className="text-gray-700 mb-3">
                Apasionado por la <span className="font-semibold text-red-600">Ciberseguridad</span> y 
                la <span className="font-semibold text-blue-600">Inteligencia Artificial</span>. 
                Seleccionado para participar en init.g() Mexico (Google), un evento inmersivo de ciberseguridad 
                cubriendo Red Team, seguridad web, criptografía y bug hunting.
              </p>
              <p className="text-gray-700">
                Participante del Cyber Youth Delegates for the Americas Program con enfoque en 
                ciberseguridad y política internacional. Combino desarrollo de software con 
                análisis de seguridad y aplicaciones de IA, buscando crear soluciones tecnológicas 
                seguras e inteligentes.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
              Habilidades Técnicas
            </h2>
            
            {/* Cybersecurity Skills */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-red-600">Ciberseguridad</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["Wireshark", "Cisco Packet Tracer", "Red Team Ops", "Web Security", "Cryptography", "Network Analysis"].map((skill) => (
                  <div key={skill} className="bg-red-50 rounded-lg p-3 text-center font-medium text-red-800 text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* AI/ML Skills */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-600">Inteligencia Artificial</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["AI Integration", "NLP", "Data Analysis", "Machine Learning", "Python Libraries", "R Analytics"].map((skill) => (
                  <div key={skill} className="bg-blue-50 rounded-lg p-3 text-center font-medium text-blue-800 text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Development Skills */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-3 text-green-600">Desarrollo de Software</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["Python", "C++", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "SQL", "MongoDB", "Git/GitHub", "HTML/CSS", "Tailwind CSS"].map((skill) => (
                  <div key={skill} className="bg-green-50 rounded-lg p-3 text-center font-medium text-green-800 text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Projects */}
        <h2 className="text-2xl font-bold mb-6">Proyectos Destacados</h2>
        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Civil Defense App */}
          <div className="rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105">
            <div className="mb-4 h-48 overflow-hidden rounded-lg bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
              <div className="text-white text-center p-4">
                <h4 className="text-2xl font-bold mb-2">Defensa Civil</h4>
                <p className="text-sm">Sistema de Emergencias</p>
              </div>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Aplicación Web de Defensa Civil</h3>
            <p className="mb-2 text-sm text-gray-500">Agosto - Octubre 2025</p>
            <p className="mb-4 text-gray-600">
              Sistema para la Defensa Civil de Cuajimalpa que permite generar reportes 
              de emergencias urbanas y prehospitalarias con dashboard interactivo para 
              análisis de datos mediante estadísticas y gráficas.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">React-Admin</span>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Cloud</span>
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Dashboard</span>
            </div>
          </div>

          {/* Hackathon Network */}
          <div className="rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105">
            <div className="mb-4 h-48 overflow-hidden rounded-lg bg-gradient-to-br from-red-500 to-orange-400 flex items-center justify-center">
              <div className="text-white text-center p-4">
                <h4 className="text-2xl font-bold mb-2">Red para Hackathon</h4>
                <p className="text-sm">106 participantes</p>
              </div>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Infraestructura de Red para Hackathon</h3>
            <p className="mb-2 text-sm text-gray-500">Mayo - Junio 2025</p>
            <p className="mb-4 text-gray-600">
              Diseño, configuración e interconexión completa de una red para hospedar 
              un Hackathon con 106 participantes, garantizando conectividad y seguridad.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Cisco Packet Tracer</span>
              <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">Networking</span>
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Infrastructure</span>
            </div>
          </div>

          {/* HackMx6 Oracle AI */}
          <div className="rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105">
            <div className="mb-4 h-48 overflow-hidden rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <div className="text-white text-center p-4">
                <h4 className="text-2xl font-bold mb-2">Cursos con IA</h4>
                <p className="text-sm">Oracle Challenge</p>
              </div>
            </div>
            <h3 className="mb-2 text-xl font-semibold">HackMx6 2024 - Oracle AI App</h3>
            <p className="mb-2 text-sm text-gray-500">2024</p>
            <p className="mb-4 text-gray-600">
              Desarrollo de aplicación para Oracle que genera cursos personalizados 
              y dinámicos en materias STEM mediante la implementación de Inteligencia Artificial.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">AI</span>
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">NLP</span>
              <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">Education Tech</span>
            </div>
          </div>

          {/* The Cursed Return Game */}
          <div className="rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105">
            <div className="mb-4 h-48 overflow-hidden rounded-lg bg-gradient-to-br from-purple-700 to-pink-500 flex items-center justify-center">
              <div className="text-white text-center p-4">
                <h4 className="text-2xl font-bold mb-2">Roguelite</h4>
                <p className="text-sm">Metodología SCRUM</p>
              </div>
            </div>
            <h3 className="mb-2 text-xl font-semibold">The Cursed Return</h3>
            <p className="mb-2 text-sm text-gray-500">Febrero - Abril 2025</p>
            <p className="mb-4 text-gray-600">
              Videojuego tipo Roguelite con gestión de jugadores y enemigos, 
              triggers, expresiones regulares y dashboard de estadísticas usando metodología ágil SCRUM.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">JavaScript</span>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">MySQL</span>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">API</span>
            </div>
          </div>

          {/* Biological Analysis */}
          <div className="rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105">
            <div className="mb-4 h-48 overflow-hidden rounded-lg bg-gradient-to-br from-teal-500 to-cyan-400 flex items-center justify-center">
              <div className="text-white text-center p-4">
                <h4 className="text-2xl font-bold mb-2">Análisis de ADN</h4>
                <p className="text-sm">Data Science</p>
              </div>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Análisis Biológicos con R</h3>
            <p className="mb-2 text-sm text-gray-500">2023 - 2024</p>
            <p className="mb-4 text-gray-600">
              Análisis de secuencias de ADN del coronavirus, mapeando patrones de propagación. 
              Análisis estadístico de consumo alimenticio usando ciencia de datos.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded">R</span>
              <span className="bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded">Data Analysis</span>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Statistics</span>
            </div>
          </div>

          {/* Python Projects */}
          <div className="rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105">
            <div className="mb-4 h-48 overflow-hidden rounded-lg bg-gradient-to-br from-yellow-500 to-green-500 flex items-center justify-center">
              <div className="text-white text-center p-4">
                <h4 className="text-2xl font-bold mb-2">Python</h4>
                <p className="text-sm">Múltiples Proyectos</p>
              </div>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Proyectos en Python</h3>
            <p className="mb-2 text-sm text-gray-500">2023 - 2024</p>
            <p className="mb-4 text-gray-600">
              Syntax highlighter con multiprocesamiento, calculadora de regresión lineal, 
              predicción de consumo energético y juego de ajedrez con Pygame.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Python</span>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Multiprocessing</span>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">ML</span>
            </div>
          </div>
        </div>

        {/* Experience & Achievements Section */}
        <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Experiencia & Logros</h2>
          
          <div className="mb-6">
            <div className="flex items-start gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">init.g() Mexico - Google Cybersecurity Event</h3>
                <p className="text-gray-600 mb-2">
                  Seleccionado para participar en el evento inmersivo de ciberseguridad de Google, 
                  cubriendo temas como:
                </p>
                <ul className="list-disc list-inside text-gray-600 ml-4 space-y-1">
                  <li>Operaciones de Red Team</li>
                  <li>Seguridad Web y Hardware</li>
                  <li>Criptografía y Fuzzing</li>
                  <li>Game Hacking y Bug Hunting</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-start gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Cyber Youth Delegates for the Americas Program</h3>
                <p className="text-sm text-gray-500 mb-2">Mayo - Julio 2024</p>
                <p className="text-gray-600">
                  Programa con discusiones dirigidas por expertos en Ciberseguridad, Política Internacional, 
                  Ciberespacio y Democracia, Poder Espacial, Comercio e Inteligencia Artificial.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-start gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Elections Data Producer - dpa (Deutsche Presse-Agentur)</h3>
                <p className="text-sm text-gray-500 mb-2">Julio 2022 - Septiembre 2024</p>
                <p className="text-gray-600">
                  Colaboración en equipo internacional trabajando en elecciones políticas globales, 
                  generando bases de datos precisas para la agencia de prensa más grande de Alemania.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-start gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Beca de Excelencia Académica</h3>
                <p className="text-gray-600">
                  Beca de mérito por excelencia académica en el ITESM. Mejor promedio de generación 
                  en preparatoria (Colegio Williams de Cuernavaca).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Contáctame</h2>
          <p className="mb-6 text-gray-600">
            ¿Interesado en colaborar en proyectos de ciberseguridad o IA? 
            Puedes contactarme a través del chatbot o por los siguientes medios:
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <a
              href="mailto:diegodlvs@outlook.com"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg text-center hover:bg-blue-600 transition-colors"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/diego-de-la-vega-saishio-8499002a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg text-center hover:bg-blue-800 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/A01420632"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-6 py-3 rounded-lg text-center hover:bg-gray-900 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* CV Download */}
        <div className="mb-8 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 p-8 shadow-lg text-center text-white">
          <h2 className="text-2xl font-semibold mb-4">Descarga mi CV</h2>
          <p className="mb-6">
            Para más detalles sobre mi experiencia en ciberseguridad, IA, formación académica 
            y proyectos técnicos.
          </p>
          <a
            href="/CV_Diego_DelaVega.pdf"
            download="CV_Diego_DelaVega_Saishio.pdf"
            className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Descargar CV (PDF)
          </a>
        </div>
      </div>

      {/* Chatbot Widget Component */}
      <ChatWidget token="demo-token-u6qsSrIPkyifsmj_" domain="localhost" />
    </div>
  );
}