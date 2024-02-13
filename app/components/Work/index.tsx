"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8,
    },
  },
};

interface workdata {
  imgSrc: string;
  heading: string;
  subheading: string;
  hiddenpara: string;
}

const workdata: workdata[] = [
  {
    imgSrc: "/images/Work/icon-one.svg",
    heading: "Software personalizado",
    subheading:
      "Destaca en la era digital con una página web atractiva y contenido cautivador para tus redes sociales. Impulsa la presencia en línea de tu marca de manera efectiva.",
    hiddenpara:
      "Entendemos la importancia de la cohesión en línea, por lo que combinamos el diseño web con estrategias de contenido efectivas para impulsar tu marca de manera integral.",
  },
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
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div>
        <div className="mx-auto max-w-full flex flex-col items-center lg:px-6 2xl:px-0 mb-20 relative ">
          <div className="radial-bg2  "></div>
          <div className="text-center mb-2 sm:mb-14">
            <h3 className="text-offwhite text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold mb-3 mt-14 sm:mt-0">
              ¿Que ofrecemos?
            </h3>
            <p className="text-white text-2xl sm:text-3xl 2xl:text-4xl font-normal leading-8 pt-8 px-3 sm:px-7">
              Potenciar tu presencia en línea con servicios especializados
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 gap-y-20  gap-x-5 mt-24 sm:mt-32 min-h-full">
            {workdata.map((items, i) => (
              <motion.div className="card" variants={cardVariants}>
                <div
                  className={`card-b p-8 cursor-pointer w-[20rem] lg:w-[25rem]  ${
                    hoverIndex === i ? "min-h-min" : "h-[330px] 2xl:h-[380px]"
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

                  <h3 className="text-xl 2xl:text-3xl text-offwhite font-semibold text-center mt-8">
                    {items.heading}
                  </h3>
                  <p className="text-base 2xl:text-xl font-normal text-bluish text-center mt-2">
                    {items.subheading}
                  </p>
                  <span className="text-base 2xl:text-xl font-normal m-0 text-bluish text-center hides ">
                    {items.hiddenpara}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
