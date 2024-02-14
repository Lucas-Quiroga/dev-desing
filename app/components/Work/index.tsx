"use client";
import Image from "next/image";
import { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

interface workdata {
  imgSrc: string;
  heading: string;
  subheading: string;
  hiddenpara: string;
  info?: string[];
}

const workdata: workdata[] = [
  {
    imgSrc: "/images/Work/software.svg",
    heading: "Software personalizado",
    subheading:
      "Destaca en la era digital con una página web atractiva y contenido cautivador para tus redes sociales. Impulsa la presencia en línea de tu marca de manera efectiva.",
    hiddenpara:
      "Entendemos la importancia de la cohesión en línea, por lo que combinamos el diseño web con estrategias de contenido efectivas para impulsar tu marca de manera integral.",
    info: [
      "Desarrollamos soluciones a medida para satisfacer tus necesidades específicas.",
      "Soporte continuo para garantizar un rendimiento sin problemas a lo largo del tiempo.",
      "Optimizamos procesos con software único y eficiente.",
      "Experiencia en desarrollo de aplicaciones web.",
    ],
  },
  {
    imgSrc: "/images/Work/landingredes.svg",
    heading: "Landing page + contenido para redes",
    subheading:
      "Destaca en la era digital con una página web atractiva y contenido cautivador para tus redes sociales. Impulsa la presencia en línea de tu marca de manera efectiva.",
    hiddenpara:
      "Entendemos la importancia de la cohesión en línea, por lo que combinamos el diseño web con estrategias de contenido efectivas para impulsar tu marca de manera integral.",
    info: [
      "Personalización según los objetivos comerciales y las necesidades específicas de cada cliente.",
      "Experiencia de usuario adaptada a diferentes segmentos de audiencia.",
      "Adapta el tono y el estilo de tus mensajes para cada plataforma social.",
      "Fomenta la participación y la interacción a través de encuestas, preguntas y respuestas, y comentarios.",
    ],
  },
  {
    imgSrc: "/images/Work/landing.svg",
    heading: "Landing page",
    subheading:
      "Crea una presencia en línea impactante con nuestra especialización en diseño web. Ofrecemos soluciones que destacarán la esencia única de tu marca.",
    hiddenpara:
      "Ofrecemos soluciones que van más allá de la apariencia, brindando una experiencia de usuario excepcional que deja una impresión duradera en tus visitantes.",
    info: [
      "Diseño responsive para una experiencia consistente en todos los dispositivos.",
      "Implementación de elementos de diseño para mejorar la retención de visitantes.",
      "Mensajes claros y concisos que destaquen los beneficios clave de tu producto o servicio.",
      "Gráficos y elementos visuales que refuercen la identidad de tu marca.",
    ],
  },
  {
    imgSrc: "/images/Work/redes.svg",
    heading: "Contenido para redes",
    subheading:
      "Amplifica tu presencia en redes sociales con contenido innovador y relevante. Convierte seguidores en clientes potenciales a través de estrategias de contenido efectivas.",
    hiddenpara:
      "Desde textos persuasivos hasta visuales impactantes, trabajamos para amplificar tu presencia en línea, convirtiendo seguidores en clientes potenciales y fortaleciendo la conexión con tu audiencia.",
    info: [
      "Estrategias de contenido adaptadas a la identidad y voz de tu marca.",
      "Publicación regular para mantener la relevancia y la conexión con tu audiencia.",
      "Crea contenido relevante que se alinee con las tendencias del momento.",
      "Creación de contenido multimedia (imágenes, videos, infografías) para mayor impacto.",
    ],
  },
];

const Work = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const handleHover = (index: number) => {
    setHoverIndex(index);
  };

  const handleLeave = () => {
    setHoverIndex(null);
  };

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div id="services">
      <div className="mx-auto max-w-full flex flex-col items-center lg:px-6 2xl:px-0 mb-20 relative ">
        <div className="radial-bg2  "></div>
        <div className="text-center mb-2 sm:mb-14" data-aos="fade-right">
          <h3 className="text-offwhite text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold mb-3 mt-14 sm:mt-0">
            ¿Que ofrecemos?
          </h3>
          <p className="text-white text-2xl sm:text-3xl 2xl:text-4xl font-normal leading-8 pt-8 px-3 sm:px-7">
            Potenciar tu presencia en línea con servicios especializados
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 gap-y-20 md:gap-x-8 lg:gap-x-20  2xl:gap-x-5 mt-24 sm:mt-32 min-h-full">
          {workdata.map((items, i) => (
            <div
              className={`card-b p-8 cursor-pointer w-[20rem] lg:w-[25rem]  ${
                hoverIndex === i ? "min-h-min" : "h-[440px] 2xl:h-[500px]"
              }`}
              key={i}
              onMouseEnter={() => handleHover(i)}
              onMouseLeave={handleLeave}
            >
              <div className="work-img-bg rounded-full flex justify-center absolute p-7">
                <Image
                  src={items.imgSrc}
                  alt={items.imgSrc}
                  width={44}
                  height={44}
                />
              </div>
              <div>
                <Image
                  src={"/images/Work/bg-arrow.svg"}
                  alt="arrow-bg"
                  width={85}
                  height={35}
                />
              </div>

              <h3 className="text-xl lg:text-2xl 2xl:text-3xl text-offwhite font-semibold text-center mt-8">
                {items.heading}
              </h3>

              <div className="mt-8 space-y-3">
                {items.info?.map((infos, index) => (
                  <div
                    className={`${index > 1 ? "hides" : "flex items-center"}`}
                    key={index}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-12 h-12 2xl:h-20 2xl:w-20 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <span className="mx-4 text-white text-base lg:text-xl font-normal mt-2">
                      {infos}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:hidden gap-y-20 mt-24 sm:mt-32 min-h-full">
          {workdata.map((items, i) => (
            <div className="card-d p-8 cursor-pointer w-full min-h-min" key={i}>
              <h3 className="text-xl text-offwhite font-semibold text-center mt-8">
                {items.heading}
              </h3>

              <div className="mt-8 space-y-3">
                {items.info?.map((infos, index) => (
                  <div className="flex items-center" key={index}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-12 h-12 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <span className="mx-4 text-white text-base font-normal mt-2">
                      {infos}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
