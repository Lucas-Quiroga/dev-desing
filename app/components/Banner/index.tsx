"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Icons } from "../Data";
import { motion, Variants } from "framer-motion";

interface Icon {
  img: string;
  name: string;
}

interface Position {
  top: number;
  left: number;
}

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const containerImage = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.4,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

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
      <div className="radial-bg  "></div>
      <div className="radial-bg2 hidden lg:block"></div>

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
      <div className="mx-auto max-w-full sm:pb-24 px-6 z-10 relative xl:mt-[10rem] 2xl:mt-[7rem]">
        <div className="grid grid-cols-1 xl:grid-cols-2 my-16 ">
          <div className="col-span-1 text-center mx-auto flex flex-col pt-[1rem] sm:pt-[8rem] md:pt-[1rem] 2xl:pt-[6rem]">
            <motion.ul
              className="container"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <motion.li className="item" variants={item}>
                <h1 className="text-5xl md:text-7xl lg:text-7xl 2xl:text-8xl font-semibold mb-5 text-white lg:px-7 text-center">
                  ¡Bienvenido a DevDesign!
                </h1>
              </motion.li>
              <motion.li className="item" variants={item}>
                <p className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-normal mb-5  text-center">
                  Transformando ideas <br /> en experiencias digitales
                </p>
              </motion.li>
              <motion.li className="item" variants={item}>
                <div className="flex align-middle justify-center  md:text-center lg:text-start mt-7">
                  <a
                    className="text-xl font-semibold text-white py-2 px-2 lg:px-12 navbutton mr-6 rounded-sm"
                    href="https://api.whatsapp.com/send?phone=541121611635&text=Hola%20estoy%20interesadx%20en%20sus%20servicios%20😊"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ¡Me interesa!
                  </a>
                </div>
              </motion.li>
            </motion.ul>
          </div>
          <div className="col-span-1 overflow-hidden relative">
            <motion.ul
              className="containerImage"
              variants={containerImage}
              initial="hidden"
              animate="visible"
            >
              <motion.li className="item" variants={item}>
                <Image
                  src={"/images/icons/Elem21.jpg"}
                  alt="macBook-image"
                  width={787}
                  height={512}
                  className="absolute right-[7rem] bottom-[-1rem] md:right-[14rem] md:bottom-[2rem] lg:right-[18rem] lg:bottom-[3rem] w-[80%] xl:w-[80%] xl:right-[13rem] xl:bottom-[12rem] 2xl:bottom-[18rem] 2xl:right-[22rem] 2xl:w-[70%]"
                />
              </motion.li>
              <motion.li className="item" variants={item}>
                <Image
                  src={"/images/icons/Elem19.jpg"}
                  alt="macBook-image"
                  width={787}
                  height={512}
                  className="relative top-[2rem] left-[7rem] md:top-[1rem] md:left-[15rem] lg:left-[20rem] xl:left-[10rem]  items-center  flex justify-center w-[80%] xl:w-[90%] "
                />
              </motion.li>
            </motion.ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
