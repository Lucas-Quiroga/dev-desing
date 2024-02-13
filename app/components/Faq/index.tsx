"use client";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

interface faqdata {
  heading: string;
  subheading: string;
}

const faqdata: faqdata[] = [
  {
    heading: "1. ¿Qué es una landing page?",
    subheading:
      "Una landing page es una página web diseñada específicamente para una campaña de marketing o promoción. Su objetivo principal es convertir a los visitantes en clientes potenciales proporcionándoles información relevante y persuasiva sobre un producto o servicio en particular. Esto conduce a mayores tasas de conversión y resultados más exitosos. Potencia tus ventas con una landing page diseñada para convertir.",
  },
  {
    heading: "2. ¿En qué consiste el contenido para redes?",
    subheading:
      "Generamos contenido atractivo y relevante para tus redes sociales, incluyendo posteos, reels e historias que cautivan a tu audiencia y refuerzan tu marca. Diseñamos logotipos y branding personalizados que destacan la identidad única de tu marca, creando una imagen visual coherente y memorable que resuena con tu público objetivo. Eleva tu presencia en línea con contenido cautivador y branding único que refleja la esencia de tu marca.",
  },
  {
    heading: "3. ¿Qué es el branding?",
    subheading:
      "El branding es la gestión integral de la imagen de una marca. Va más allá del logo y el nombre; es la construcción de la personalidad de la marca. Incluye valores, apariencia visual, comunicación y reputación, todo diseñado para destacar y diferenciarse de la competencia. En DevDesign.ba, entendemos que el branding es la clave para crear una conexión duradera y positiva con tu audiencia en el mundo digital.",
  },
];

const Faq = () => {
  const handleDisclosureButtonClick = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const disclosureButtons =
      document.getElementsByClassName("disclosure-button");

    for (let i = 0; i < disclosureButtons.length; i++) {
      const disclosureButton = disclosureButtons.item(i) as HTMLButtonElement;

      if (
        disclosureButton !== event.target &&
        disclosureButton.getAttribute("data-headlessui-state") === "open"
      ) {
        disclosureButton.click();
      }
    }
  };

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="my-28 sm:px-6 " id="faqs">
      <h3
        className="text-center text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-offwhite mb-3 "
        data-aos="zoom-in"
      >
        Preguntas frecuentes
      </h3>

      <p
        className="text-center text-xl sm:text-3xl  lg:text-3xl 2xl:text-4xl font-normal text-white pt-8"
        data-aos="zoom-in"
      >
        Estamos aquí para responder cualquier consulta que tengas. <br /> ¡No
        dudes en contactarnos!
      </p>

      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2">
          {/* Column-1 */}
          <div>
            <div className="w-full px-4 pt-16">
              {faqdata.map((items, i) => (
                <div
                  className="mx-auto w-full max-w-5xl rounded-2xl bg-blue py-8 px-6 mb-5"
                  key={i}
                  onClick={handleDisclosureButtonClick}
                  data-aos="zoom-in"
                >
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg text-offwhite sm:px-4 sm:py-2 text-left md:text-2xl font-medium disclosure-button">
                          <span className="text-xl sm:text-2xl">
                            {items.heading}
                          </span>
                          <ChevronUpIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5 text-purple-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-base px-4 pt-4 pb-2 text-center sm:text-start sm:text-lg text-bluish font-normal opacity-50">
                          {items.subheading}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              ))}
            </div>
          </div>

          {/* Column-2 */}
          <div className="hidden sm:block sm:mt-32 items-center mx-auto overflow-hidden">
            <Image
              src={"/images/Faq/faq.svg"}
              alt="faq-image"
              width={941}
              height={379}
              className="relative right-[-5rem] lg:w-[50rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
