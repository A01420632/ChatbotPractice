import Link from "next/link";

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
                src="https://media.licdn.com/dms/image/v2/D4E03AQEZCGiaF8KBCA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723121632537?e=1753920000&v=beta&t=hR78m-UurKvFdgungAUrXbSiGalNSXwGRX7GkB0Tkzg"
                alt="Diego"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Diego de la Vega Saishio
              </h1>
              <h2 className="text-xl text-gray-600 mb-4">
                Desarrollador Full-Stack
              </h2>
              <p className="text-gray-700">
                Soy un apasionado desarrollador de software especializado en
                tecnologías web modernas y aplicaciones con inteligencia
                artificial. Con experiencia en React, Next.js y sistemas basados
                en IA, me enfoco en crear experiencias digitales atractivas y
                funcionales.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
              Habilidades
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["JavaScript", "Python", "R", "TypeScript", "React", "Next.js", "Node.js", "CSS", "Tailwind CSS", "AI Integration", "SQL", "Cisco Packet Tracer", "Arduino"].map((skill) => (
                <div key={skill} className="bg-blue-50 rounded-lg p-3 text-center font-medium text-blue-800">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Portfolio Projects */}
        <h2 className="text-2xl font-bold mb-6">Proyectos Destacados</h2>
        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105">
            <div className="mb-4 h-48 overflow-hidden rounded-lg bg-gray-200">
              <img
                src="https://placehold.co/800x600/3b82f6/white?text=Chatbot+Asistente"
                alt="Proyecto de IA"
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Chatbot Asistente</h3>
            <p className="mb-4 text-gray-600">
              Desarrollo de un chatbot interactivo con capacidades de procesamiento
              de lenguaje natural para asistencia al cliente.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                React
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                Next.js
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                IA
              </span>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105">
            <div className="mb-4 h-48 overflow-hidden rounded-lg bg-gray-200">
              <img
                src="https://placehold.co/800x600/4f46e5/white?text=Portal+de+Gestion"
                alt="Aplicación Web"
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Portal de Gestión</h3>
            <p className="mb-4 text-gray-600">
              Plataforma web para la gestión de recursos empresariales con
              autenticación, dashboards y reportes en tiempo real.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                TypeScript
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                Prisma
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                API
              </span>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Contáctame</h2>
          <p className="mb-6 text-gray-600">
            ¿Interesado en trabajar juntos? Puedes contactarme a través del chat o
            por los siguientes medios:
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <a
              href="mailto:diegodlvs@outlook.com"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg text-center hover:bg-blue-600"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/diego-de-la-vega-saishio-8499002a3/"
              target="_blank"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg text-center hover:bg-blue-800"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/A01420632"
              target="_blank"
              className="bg-gray-800 text-white px-6 py-3 rounded-lg text-center hover:bg-gray-900"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* CV Download */}
        <div className="mb-8 rounded-lg bg-white p-8 shadow-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Descarga mi CV</h2>
          <p className="mb-6 text-gray-600">
            Para más detalles sobre mi experiencia profesional y formación
            académica.
          </p>
          <a
            href="#"
            className="inline-block bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600"
          >
            Descargar CV
          </a>
        </div>
      </div>

      {/* Chatbot Widget Scripts */}
      <script src="/chat-widget-loader.js"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.ChatWidget.init({
            token: 'SzG4I3zw7bWI4HPCCHuPUC8JqoTuCkdt'
          });
        `,
        }}
      />
    </div>
  );
}