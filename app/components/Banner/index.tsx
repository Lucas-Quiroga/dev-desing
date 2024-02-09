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
      <div className="hidden">
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
      </div>
      <div className="mx-auto max-w-full sm:pb-24 px-6 z-10 relative">
        <div className="grid grid-cols-1 xl:grid-cols-2 my-16 ">
          <div className="col-span-1 text-center mx-auto flex flex-col pt-[4rem] sm:pt-[8rem] md:pt-[1rem] 2xl:pt-[10rem]">
            <h1 className="text-5xl md:text-7xl lg:text-8xl 2xl:text-8xl font-semibold mb-5 text-white md:4px text-center">
              ¡Bienvenido a DevDesign!
            </h1>
            <p className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-normal mb-5  text-center">
              Transformando ideas <br /> en experiencias digitales
            </p>

            <div className="flex align-middle justify-center  md:text-center lg:text-start">
              <button className="text-xl font-semibold text-white py-2 px-2 lg:px-12 navbutton mr-6 rounded-sm">
                ¡Me interesa!
              </button>
            </div>
          </div>
          <div className="col-span-1 overflow-hidden">
            <Image
              src={"/images/icons/Elem21.jpg"}
              alt="macBook-image"
              width={787}
              height={512}
              className="absolute right-[7rem] bottom-[-1rem] md:right-[14rem] md:bottom-[12rem] lg:right-[10rem] lg:bottom-[15rem] w-[80%] xl:w-[50%] 2xl:bottom-[22rem] 2xl:right-[15rem]"
            />
            <Image
              src={"/images/icons/Elem19.jpg"}
              alt="macBook-image"
              width={787}
              height={512}
              className="relative top-[2rem] left-[7rem] md:top-[1rem] md:left-[15rem] lg:left-[20rem] xl:left-[10rem]  items-center  flex justify-center w-[80%] xl:w-[100%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;