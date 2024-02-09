"use client";
import Image from "next/image";
import { useState } from "react";

interface workdata {
  imgSrc: string;
  heading: string;
  subheading: string;
  hiddenpara: string;
}

const workdata: workdata[] = [
  {
    imgSrc: "/images/Work/icon-one.svg",
    heading: "Página web + contenido para redes",
    subheading:
      "Destaca en la era digital con una página web atractiva y contenido cautivador para tus redes sociales. Impulsa la presencia en línea de tu marca de manera efectiva.",
    hiddenpara:
      "Entendemos la importancia de la cohesión en línea, por lo que combinamos el diseño web con estrategias de contenido efectivas para impulsar tu marca de manera integral.",
  },
  {
    imgSrc: "/images/Work/icon-two.svg",
    heading: "Página web",
    subheading:
      "Crea una presencia en línea impactante con nuestra especialización en diseño web. Ofrecemos soluciones que destacarán la esencia única de tu marca.",
    hiddenpara:
      "Ofrecemos soluciones que van más allá de la apariencia, brindando una experiencia de usuario excepcional que deja una impresión duradera en tus visitantes.",
  },
  {
    imgSrc: "/images/Work/icon-three.svg",
    heading: "Contenido para redes",
    subheading:
      "Amplifica tu presencia en redes sociales con contenido innovador y relevante. Convierte seguidores en clientes potenciales a través de estrategias de contenido efectivas.",
    hiddenpara:
      "Desde textos persuasivos hasta visuales impactantes, trabajamos para amplificar tu presencia en línea, convirtiendo seguidores en clientes potenciales y fortaleciendo la conexión con tu audiencia.",
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
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl mt-16 px-6 mb-20 relative ">
        <div className="text-center mb-14">
          <h3 className="text-offwhite text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold mb-3 ">
            ¿Que ofrecemos?
          </h3>
          <p className="text-white text-xl sm:text-2xl  lg:text-3xl 2xl:text-4xl font-normal leading-8 pt-8">
            Potenciar tu presencia en línea con servicios especializados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5 mt-32 min-h-full">
          {workdata.map((items, i) => (
            <div
              className={`card-b p-8 cursor-pointer ${
                hoverIndex === i ? "min-h-min" : "h-[330px]"
              }`}
              key={i}
              onMouseEnter={() => handleHover(i)}
              onMouseLeave={handleLeave}
            >
              <div className="work-img-bg rounded-full flex justify-center absolute p-6">
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
              <h3 className="text-2xl text-offwhite font-semibold text-center mt-8">
                {items.heading}
              </h3>
              <p className="text-base font-normal text-bluish text-center mt-2">
                {items.subheading}
              </p>
              <span className="text-base font-normal m-0 text-bluish text-center hides ">
                {items.hiddenpara}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
