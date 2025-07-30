import { ArrowUpRight, ChevronDown } from "lucide-react";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex flex-col px-4 gap-20 justify-center  h-full bg-[url('./assets/bg-img.png')] bg-cover bg-center md:pt-20">
      <div className="flex flex-col items-center text-gray-400 text-3xl md:text-6xl font-semibold font-[Mulish]">
        <p>
          I'm <span className="text-white text-3xl md:text-6xl font-extrabold">Sooraj</span>
          ,
        </p>
        <h1>
          a{" "}
          <span className="text-blue-500 text-3xl md:text-6xl font-extrabold font-[Crimson] italic">
            Frontend Developer
          </span>
        </h1>
        <h1>
          based in
          <span className="text-white text-3xl md:text-6xl font-extrabold"> Kozhikode</span>
        </h1>
        {/* <p className="text-[10px] font-normal text-white opacity-80">
          Worked with <span className="font-semibold">@Mulearn</span>,{" "}
          <span className="font-semibold">@Vertecho</span>, Building
          <span className="font-semibold"> @Hybrhind</span>
        </p> */}
      </div>
      <div className="flex justify-center text-center items-center text-gray-400 text-md md:text-2xl font-[QuickSand] font-normal  px-12">
        <p>
          Engineer at heart, designer by instinct — turning wireframes into experiences people remembers.
        </p>
      </div>
      
      <div className="flex text-white justify-center opacity-70 md:opacity-100 gap-1 items-center mt-10">
        <p className="hover:underline hover:decoration-blue-500 md:text-xl font-[QuickSand] font-medium">Scroll to explore more info</p> <ChevronDown className="animate-bounce text-blue-500"/>
      </div>
    </div>
  );
};

export default Hero;
