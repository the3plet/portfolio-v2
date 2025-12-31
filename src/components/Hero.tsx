import {  ChevronDown } from "lucide-react";
import { motion } from "motion/react";



const Hero = () => {
  return (
    <div className="flex flex-col px-4 gap-20 justify-center  h-full bg-[url('/bg-img.png')] bg-linear-to-b bg-cover bg-center md:pt-20" id="hero">
      <div className="flex flex-col items-center text-gray-400 text-3xl md:text-6xl font-semibold font-[Mulish]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          I'm{" "}
          <span className="text-white text-3xl md:text-6xl font-extrabold">
            Sooraj
          </span>
          ,
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        >
          a{" "}
          <span className="text-blue-500 text-3xl md:text-6xl font-extrabold font-[Crimson] italic">
            Fullstack Developer
          </span>
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.0 }}
        >
          based in
          <span className="text-white text-3xl md:text-6xl font-extrabold">
            {" "}
            India
          </span>
        </motion.h1>
      </div>
      <div className="flex justify-center text-center items-center text-gray-400 text-md md:text-2xl font-[QuickSand] font-normal  px-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
        >
          Engineer at heart, designer by instinct — turning wireframes into
          experiences that people remembers.
        </motion.p>
      </div>

      <motion.div
        className="flex text-white justify-center opacity-70 md:opacity-100 gap-1 items-center mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 2.5 }}
        whileInView={{
          y: [0, -5, 0], // Up and down
          transition: {
            duration: 1,
            ease: "easeInOut",
            repeat: 4,
          },
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <p className="hover:underline hover:decoration-blue-500 md:text-xl font-[QuickSand] font-medium text-muted/80">
          Scroll to explore more info
        </p>
        <ChevronDown className="animate-bounce text-blue-500" />
      </motion.div>
    </div>
  );
};

export default Hero;
