"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Icons } from "../Data";

interface Icon {
  img: string;
  name: string;
}

interface Position {
  top: number;
  left: number;
}

const Banner = () => {
  const [positions, setPositions] = useState<Position[]>([]);

  useEffect(() => {
    let storedPositions = localStorage.getItem("iconPositions");

    if (storedPositions) {
      setPositions(JSON.parse(storedPositions));
    } else {
      const newPositions: Position[] = [];
      while (newPositions.length < Icons.length) {
        const newPosition: Position = {
          top: Math.random() * 100,
          left: Math.random() * 100,
        };

        const isTooClose = newPositions.some(
          (pos) =>
            Math.abs(pos.top - newPosition.top) < 10 &&
            Math.abs(pos.left - newPosition.left) < 10
        );

        if (!isTooClose) {
          newPositions.push(newPosition);
        }
      }

      setPositions(newPositions);
      localStorage.setItem("iconPositions", JSON.stringify(newPositions));
    }
  }, []);
  return (
    <div className="bg-image relative" id="home-section">
      <div className="radial-banner hidden lg:block"></div>
      {Icons.map((icon, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: `${positions[i]?.top}%`,
            left: `${positions[i]?.left}%`,
          }}
        >
          <Image src={icon.img} alt={icon.name} width={200} height={200} />
        </div>
      ))}
      <div className="mx-auto max-w-full sm:pb-24 px-6 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 my-16 mx-14">
          <div className="col-span-1 text-center mx-auto flex flex-col justify-center">
            <h1 className="text-4xl lg:text-6xl font-semibold mb-5 text-white md:4px md:text-start text-center">
              ¡Bienvenido a DevDesign.ba
            </h1>
            <p className="text-white md:text-5xl font-normal mb-5 md:text-start text-center">
              Transformando ideas <br /> en experiencias digitales
            </p>
            <p className="text-white font-light text-start mb-5">
              ¡ES HORA DE LLEVAR TU NEGOCIO A INTERNET!
            </p>
            <div className="flex align-middle justify-center md:justify-start">
              <button className="text-xl font-semibold text-white py-2 px-2 lg:px-12 navbutton mr-6 rounded-sm">
                ¡Me interesa!
              </button>
            </div>
          </div>
          <div className="col-span-1">
            <Image
              src={"/images/icons/Elem19.png"}
              alt="macBook-image"
              width={787}
              height={512}
              className="relative items-center mx-auto flex justify-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
