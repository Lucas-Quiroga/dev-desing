import Image from "next/image";

const Trade = () => {
  return (
    <div className="mx-auto max-w-7xl sm:mt-48 sm:mb-16 px-6 relative">
      <div className="radial-bg2  "></div>
      <div className="grid lg:grid-cols-2 gap-x-5">
        {/* Column-1 */}
        <div>
          <Image
            src={"/images/Trade/macbook.png"}
            alt="macBook-image"
            width={787}
            height={512}
          />
        </div>

        {/* Column-2 */}

        <div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-semibold text-offwhite mb-6 text-center sm:text-start">
            Sobre Nosotros
          </h3>
          <p className="sm:text-xl lg:text-lg 2xl:text-xl font-normal text-white mb-16 text-center sm:text-start">
            En DevDesign.ba, somos más que un estudio de diseño digital. Somos
            creadores digitales comprometidos en transformar tus ideas en
            experiencias digitales memorables. Con una base en 🇦🇷 y una visión
            global, nuestro equipo de expertos en diseño UX/UI se especializa en
            desarrollar páginas web y contenido creativo que destaca y eleva tu
            marca.
          </p>
          <div className="flex justify-between">
            <Image
              src={"/images/Trade/mac.svg"}
              alt="macOS-image"
              width={61}
              height={105}
            />
            <div className="verticalLine"></div>
            <Image
              src={"/images/Trade/appstore.svg"}
              alt="appstore-image"
              width={80}
              height={105}
            />
            <div className="verticalLine"></div>
            <Image
              src={"/images/Trade/windows.svg"}
              alt="windows-image"
              width={80}
              height={105}
            />
            <div className="verticalLine"></div>
            <Image
              src={"/images/Trade/android.svg"}
              alt="android-image"
              width={71}
              height={105}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trade;
