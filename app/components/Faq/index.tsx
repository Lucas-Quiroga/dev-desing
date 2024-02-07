"use client";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

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
    heading: "3. How long should you hold cryptocurrency?",
    subheading:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into",
  },
];

const Faq = () => {
  return (
    <div className="my-20 px-6" id="faq-section">
      <h3 className="text-center text-3xl lg:text-5xl font-bold text-offwhite mb-3">
        Preguntas frecuentes
      </h3>
      <p className="text-center lg:text-lg font-normal text-bluish">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has <br /> been the industry standard dummy text
        ever since the 1500s,
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
                >
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg text-offwhite sm:px-4 sm:py-2 text-left md:text-2xl font-medium">
                          <span>{items.heading}</span>
                          <ChevronUpIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5 text-purple-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 md:text-lg text-bluish font-normal opacity-50">
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
          <div className="mt-32">
            <Image
              src={"/images/Faq/faq.svg"}
              alt="faq-image"
              width={941}
              height={379}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
