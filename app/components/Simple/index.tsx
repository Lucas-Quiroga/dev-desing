"use client";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Simple = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="simple-bg relative mt-32 lg:my-[15rem]">
      <div className="radial-bg  "></div>
      <div className="radial-bg2 hidden lg:block"></div>
      <div className="simpleone"></div>
      <div className="simpletwo"></div>
      <div className="simplethree"></div>
      <div className="simplefour"></div>
      <div className="simplefive"></div>
      <div className="mx-auto max-w-5xl py-24 px-6">
        <h3
          className="text-center text-offwhite text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-semibold mb-6 sm:px-7 lg:px-10"
          data-aos="zoom-in"
        >
          Potencia tu experiencia digital y date a conocer al mundo
        </h3>
        <p
          className="text-center text-bluish text-xl sm:text-2xl  lg:text-3xl 2xl:text-4xl font-normal mb-8"
          data-aos="zoom-in"
        >
          ¡HA LLEGADO EL MOMENTO DE IMPULSAR TU NEGOCIO!
        </p>
        <div className="flex justify-center ">
          <button
            className="text-xl font-semibold text-white py-4 px-6 lg:px-12 navbutton"
            data-aos="zoom-in"
          >
            Explora Ahora
          </button>
        </div>
      </div>
      <div className="simplesix"></div>
      <div className="simpleseven"></div>
      <div className="simpleeight"></div>
      <div className="simplenine"></div>
      <div className="simpleten"></div>
    </div>
  );
};

export default Simple;
