import Link from "next/link";

import { HydrateClient } from "~/trpc/server";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem] mb-4">
              Diego de la Vega Saishio
            </h1>
            <p className="text-2xl text-white/80 mb-2">Desarrollador Full-Stack</p>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Apasionado por crear experiencias digitales innovadoras con 
              tecnologías web modernas e inteligencia artificial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20 transition-all"
              href="/demo"
            >
              <h3 className="text-2xl font-bold">Mi Portafolio →</h3>
              <div className="text-lg">
                Explora mis proyectos, habilidades y experiencia profesional.
                Conoce más sobre mi trabajo y trayectoria.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20 transition-all"
              href="https://github.com/A01420632"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="text-2xl font-bold">GitHub →</h3>
              <div className="text-lg">
                Revisa mi código y proyectos de código abierto en GitHub.
              </div>
            </Link>
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-4">
              <a
                href="mailto:diegodlvs@outlook.com"
                className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white hover:bg-blue-600 transition-all"
              >
                Contáctame
              </a>
              <a
                href="https://www.linkedin.com/in/diego-de-la-vega-saishio-8499002a3/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800 transition-all"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
