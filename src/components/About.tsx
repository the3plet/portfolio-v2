import {
  ArrowUpRight,
  Github,
  Instagram,
  LineSquiggle,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import dp from "@/assets/dp.jpg";
import { Button } from "./ui/button";
import mdphoto from "@/assets/md_images/photo.jpg";
import mdphoto2 from "@/assets/md_images/photo2.jpg";
import mdphoto3 from "@/assets/md_images/photo3.jpg";
import mdphoto4 from "@/assets/md_images/photo4.jpg";
import mdphoto5 from "@/assets/md_images/photo5.jpg";
import photo from "@/assets/mobile_images/photo.jpg";
import photo2 from "@/assets/mobile_images/photo2.jpg";
import photo3 from "@/assets/mobile_images/photo3.jpg";
import photo4 from "@/assets/mobile_images/photo4.jpg";
import photo5 from "@/assets/mobile_images/photo5.jpg";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "motion/react";

const photos = [photo, photo2, photo3, photo4, photo5];
const mdphotos = [mdphoto, mdphoto2, mdphoto3, mdphoto4, mdphoto5];

const MotionCarousel = motion(Carousel);
const MotionCard = motion(Card);
const About = () => {
  return (
    <div
      className="bg-black  pt-14 pb-10 md:w-6/7 md:mx-auto md:px-0 md:py-12"
      id="about"
    >
      <div className="flex flex-col items-left px-6 text-white gap-0 pb-4 border-b border-muted/20 border-dashed  md:mx-10">
        <motion.p
          className="text-4xl font-bold font-[Sansation]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.4,
            ease: "circInOut",
            repeat: 0,
            delay: 0.5,
            type: "tween",
            stiffness: 60,
          }}
          viewport={{ once: true, amount: 0.8 }}
        >
          About
        </motion.p>
        <motion.p
          className="text-sm md:text-xl text-left text-gray-400 font-normal font-[Sansation]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.4,
            ease: "circInOut",
            repeat: 0,
            delay: 0.6,
            type: "tween",
            stiffness: 60,
          }}
          viewport={{ once: true, amount: 0.6 }}
        >
          How It Started, How It’s Going — My Dev Path
        </motion.p>
      </div>
      <div className="px-4 gap-3 flex flex-col pt-4">
        <motion.div
          className="flex flex-col gap-2 border-[0.5px] p-2 rounded-xl border-dashed border-neutral-500 md:border-none"
          initial={{ borderColor: "#000000" }}
          whileInView={{
            borderColor: "#737373",
          }}
          transition={{
            duration: 0.4,
            ease: "easeIn",
            repeat: 0,
            delay: 2,
            type: "spring",
            stiffness: 50,
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <MotionCard
            className="bg-[#1A1A1A] border-[#0F0F0F] rounded-3xl py-0  lg:hidden"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.4,
                ease: "easeIn",
                repeat: 0,
                delay: 1.4,
                type: "spring",
                stiffness: 50,
              },
            }}
            whileTap={{ scale: 1.04 }}
            viewport={{ once: true, amount: 0.9 }}
          >
            <CardContent className="p-4 text-white font-extralight text-sm gap-1 flex flex-col">
              <article className="flex gap-2">
                <img
                  src={dp}
                  className="rounded-full w-24 h-24 float-left md:flex md:items-center"
                  alt="profile pic"
                />
                <p className="text-xl md:text-center font-light flex items-center font-[Space_Grotesk] text-neutral-200">
                  What started as curiosity became passion, and now it's
                </p>
                <h1 className="text-lg hidden lg:hidden text-neutral-500 text-left font-bold md:flex md:items-center justify-center py-2 underline decoration-red-500 font-[Space_Grotesk]">
                  A full-time journey as a developer.
                </h1>
              </article>
              <h1 className="text-lg md:hidden text-neutral-500 text-left font-bold flex justify-center py-2 underline decoration-red-500 font-[Space_Grotesk]">
                A full-time journey as a developer.
              </h1>
            </CardContent>
          </MotionCard>
          <MotionCard
            className="bg-[#1A1A1A]  rounded-3xl py-0 border border-[#0F0F0F] lg:hidden"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.4,
                ease: "easeIn",
                repeat: 0,
                delay: 0.6,
                type: "spring",
                stiffness: 50,
              },
            }}
            whileTap={{ scale: 1.04 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <CardContent className="p-4 text-white">
              <p className="text-4xl text-neutral-500 font-[Space_Grotesk]">
                {" "}
                B.TECH
              </p>
              <p className="text-3xl text-white font-[Space_Grotesk]">
                {" "}
                Computer Science
              </p>
            </CardContent>
          </MotionCard>
          <div className="flex gap-2 lg:hidden ">
            <MotionCard
              className="bg-[#1A1A1A] border-[#0F0F0F] rounded-2xl py-0 flex-1"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.4,
                  ease: "easeIn",
                  repeat: 0,
                  delay: 0.2,
                  type: "spring",
                  stiffness: 50,
                },
              }}
              whileTap={{ scale: 1.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <CardContent
                className="p-4 py-5 text-white flex justify-center items-center"
                onClick={() =>
                  window.open("https://github.com/the3plet/", "_blank")
                }
              >
                <Github />
              </CardContent>
            </MotionCard>
            <MotionCard
              className="bg-[#1A1A1A] border-[#0F0F0F] rounded-2xl py-0 flex-1"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.4,
                  ease: "easeIn",
                  repeat: 0,
                  delay: 0.4,
                  type: "spring",
                  stiffness: 50,
                },
              }}
              whileTap={{ scale: 1.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <CardContent
                className="p-4 py-5 text-white flex justify-center items-center"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/soorajksd/",
                    "_blank"
                  )
                }
              >
                <Linkedin />
              </CardContent>
            </MotionCard>
            <MotionCard
              className="bg-[#1A1A1A] border-[#0F0F0F] rounded-2xl py-0 flex-1"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.4,
                  ease: "easeIn",
                  repeat: 0,
                  delay: 0.4,
                  type: "spring",
                  stiffness: 50,
                },
              }}
              whileTap={{ scale: 1.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <CardContent
                className="p-4 py-5 text-white flex justify-center items-center"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/s.o.o.r.a.j/",
                    "_blank"
                  )
                }
              >
                <Instagram />
              </CardContent>
            </MotionCard>
            <MotionCard
              className="bg-[#1A1A1A] border-[#0F0F0F] rounded-2xl py-0 flex-1 "
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.4,
                  ease: "easeIn",
                  repeat: 0,
                  delay: 0.2,
                  type: "spring",
                  stiffness: 50,
                },
              }}
              whileTap={{ scale: 1.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <CardContent
                className="p-4 py-5 text-white flex justify-center items-center"
                onClick={() => window.open("https://x.com/", "_blank")}
              >
                <Twitter />
              </CardContent>
            </MotionCard>
          </div>
          <MotionCard
            className="bg-[#1A1A1A] border-[#0F0F0F] rounded-3xl py-0 lg:hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.4,
                ease: "easeIn",
                repeat: 0,
                delay: 0.5,
                type: "spring",
                stiffness: 50,
              },
            }}
            whileTap={{ scale: 1.04 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <CardContent className="p-4 text-white font-[Space_Grotesk]">
              <p className="text-4xl text-neutral-500"> Junior</p>
              <p className="text-3xl text-white"> Frontend Developer</p>
            </CardContent>
          </MotionCard>
          <MotionCard
            className="bg-[#1A1A1A] border-[#0F0F0F] rounded-3xl py-0 lg:hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.4,
                ease: "easeIn",
                repeat: 0,
                delay: 0.4,
                type: "spring",
                stiffness: 50,
              },
            }}
            whileTap={{ scale: 1.04 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <CardContent
              className="p-4 text-white font-extralight text-sm gap-5 flex flex-col items-center"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1n2AshPiZmYBzmw9b5_P6ZVrTY8p7TW3j/view?usp=drivesdk",
                  "_blank"
                )
              }
            >
              <LineSquiggle size={40} strokeWidth={0.7} opacity={0.5} />
              <p className="text-3xl font-[Space_Grotesk]  text-center">
                Wanna Work Together?
              </p>
              <Button
                size={"lg"}
                className="bg-[#292929] text-xl rounded-3xl py-7 px-10 shadow-2xl text-neutral-400 font-[Space_Grotesk]"
              >
                View Resume <ArrowUpRight className="p-0 m-0" />
              </Button>
            </CardContent>
          </MotionCard>
        </motion.div>
        <motion.div
          className="hidden md:hidden  lg:grid lg:grid-cols-3 gap-2  border-0  rounded-xl outline-0 ring-0 border-neutral-500"
          initial={{ borderColor: "#000000" }}
          whileInView={{
            borderColor: "#737373",
          }}
          transition={{
            duration: 0.4,
            ease: "easeIn",
            repeat: 0,
            delay: 2,
            type: "spring",
            stiffness: 50,
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="h-full">
            <MotionCard
              className="bg-[#1A1A1A] border-[#0F0F0F] rounded-3xl py-0 h-full md:py-8 cursor-pointer hover:ring-2 hover:border-white/60 hover:rounded-xl"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.4,
                  ease: "easeIn",
                  repeat: 0,
                  delay: 0.8,
                  type: "spring",
                  stiffness: 50,
                },
              }}
              whileTap={{ scale: 1.02 }}
              viewport={{ once: true, amount: 0.9 }}
            >
              <CardContent className="p-4 text-white font-extralight text-sm gap-1 flex flex-col my-auto">
                <img
                  src={dp}
                  className="rounded-full w-20 h-20 "
                  alt="profile pic"
                />
                <p className="text-4xl  font-extralight flex items-center font-[Space_Grotesk]">
                  Whàt stàrted às curiosity becàme pàssion, and now it's
                </p>

                <h1 className="text-lg text-neutral-500 font-semibold flex justify-start py-2 underline decoration-red-500 font-[Space_Grotesk]">
                  a full-time journey as a Developer.
                </h1>
              </CardContent>
            </MotionCard>
          </div>
          <div className="flex gap-2 flex-col my-auto ">
            <MotionCard
              className="bg-[#1A1A1A]  rounded-3xl py-0 md:py-2 border border-[#0F0F0F] cursor-pointer hover:ring-2 hover:border-white/60 hover:rounded-xl"
              initial={{ opacity: 0, y: -40 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.4,
                  ease: "easeIn",
                  repeat: 0,
                  delay: 0.6,
                  type: "spring",
                  stiffness: 50,
                },
              }}
              whileTap={{ scale: 1.02 }}
              viewport={{ once: true, amount: 0.9 }}
            >
              <CardContent className="p-4 text-white gap-1 ">
                <p className="text-3xl text-gray-600 font-[Space_Grotesk]">
                  {" "}
                  B.TECH
                </p>
                <p className="text-2xl text-white font-[Space_Grotesk]">
                  {" "}
                  Computer Science
                </p>
              </CardContent>
            </MotionCard>
            <div className="flex gap-2 ">
              <MotionCard
                className="bg-[#1A1A1A] border-[#0F0F0F] rounded-2xl py-0 flex-1"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.4,
                    ease: "easeIn",
                    repeat: 0,
                    delay: 0.4,
                    type: "spring",
                    stiffness: 50,
                  },
                }}
                whileTap={{ scale: 1.1 }}
                viewport={{ once: true, amount: 0.6 }}
              >
                <CardContent
                  className="p-4 py-5 text-white flex justify-center items-center cursor-pointer hover:ring-2 border-white/60 rounded-xl"
                  onClick={() =>
                    window.open("https://github.com/the3plet/", "_blank")
                  }
                >
                  <Github />
                </CardContent>
              </MotionCard>
              <MotionCard
                className="bg-[#1A1A1A] border-[#0F0F0F] rounded-2xl py-0 flex-1"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.4,
                    ease: "easeIn",
                    repeat: 0,
                    delay: 0.2,
                    type: "spring",
                    stiffness: 50,
                  },
                }}
                whileTap={{ scale: 1.1 }}
                viewport={{ once: true, amount: 0.6 }}
              >
                <CardContent
                  className="p-4 py-5 text-white flex justify-center items-center cursor-pointer hover:ring-2 border-white/60 rounded-xl"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/soorajksd/",
                      "_blank"
                    )
                  }
                >
                  <Linkedin />
                </CardContent>
              </MotionCard>
              <MotionCard
                className="bg-[#1A1A1A] border-[#0F0F0F] rounded-2xl py-0 flex-1"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.4,
                    ease: "easeIn",
                    repeat: 0,
                    delay: 0.2,
                    type: "spring",
                    stiffness: 50,
                  },
                }}
                whileTap={{ scale: 1.1 }}
                viewport={{ once: true, amount: 0.6 }}
              >
                <CardContent
                  className="p-4 py-5 text-white flex justify-center items-center cursor-pointer hover:ring-2 border-white/60 rounded-xl"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/s.o.o.r.a.j/",
                      "_blank"
                    )
                  }
                >
                  <Instagram />
                </CardContent>
              </MotionCard>
              <MotionCard
                className="bg-[#1A1A1A] border-[#0F0F0F] rounded-2xl py-0 flex-1 "
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.4,
                    ease: "easeIn",
                    repeat: 0,
                    delay: 0.4,
                    type: "spring",
                    stiffness: 50,
                  },
                }}
                whileTap={{ scale: 1.1 }}
                viewport={{ once: true, amount: 0.6 }}
              >
                <CardContent
                  className="p-4 py-5 text-white flex justify-center items-center cursor-pointer hover:ring-2 border-white/60 rounded-xl"
                  onClick={() => window.open("https://x.com/", "_blank")}
                >
                  <Twitter />
                </CardContent>
              </MotionCard>
            </div>
            <MotionCard
              className="bg-[#1A1A1A] border-[#0F0F0F] rounded-3xl md:py-2 py-0 cursor-pointer hover:ring-2 hover:border-white/60 hover:rounded-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.4,
                  ease: "easeIn",
                  repeat: 0,
                  delay: 0.6,
                  type: "spring",
                  stiffness: 50,
                },
              }}
              whileTap={{ scale: 1.02 }}
              viewport={{ once: true, amount: 0.9 }}
            >
              <CardContent className="p-4 text-white">
                <p className="text-3xl text-gray-600 font-[Space_Grotesk]">
                  Junior
                </p>
                <p className="text-3xl text-white  font-[Space_Grotesk]">
                  Frontend Developer
                </p>
              </CardContent>
            </MotionCard>
          </div>
          <div className="flex justify-center w-full ">
            <MotionCard
              className="bg-[#1A1A1A] border-[#0F0F0F] rounded-3xl w-full py-0 cursor-pointer hover:ring-2 hover:border-white/60 hover:rounded-xl"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.4,
                  ease: "easeIn",
                  repeat: 0,
                  delay: 0.8,
                  type: "spring",
                  stiffness: 50,
                },
              }}
              whileTap={{ scale: 1.02 }}
              viewport={{ once: true, amount: 0.9 }}
            >
              <CardContent className="p-4 text-white font-extralight text-sm gap-5 md:gap-0 flex flex-col py-8 items-center justify-evenly h-full ">
                <LineSquiggle
                  size={40}
                  className="md:hidden"
                  strokeWidth={0.7}
                  opacity={0.5}
                />
                <LineSquiggle
                  size={60}
                  className="hidden md:flex"
                  strokeWidth={0.7}
                  opacity={0.5}
                />
                <p className="text-3xl flex justify-center text-center font-[Space_Grotesk]">
                  Wanna Work Together?
                </p>
                <Button
                  size={"lg"}
                  className="bg-[#292929] text-xl  py-7 px-10 shadow-2xl text-gray-400 font-[Space_Grotesk] cursor-pointer hover:ring-2 border-white/60 rounded-xl"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1n2AshPiZmYBzmw9b5_P6ZVrTY8p7TW3j/view?usp=drivesdk",
                      "_blank"
                    )
                  }
                >
                  View Resume
                </Button>
              </CardContent>
            </MotionCard>
          </div>
        </motion.div>
        <motion.div
          className="max-w-7xl mx-auto bg-black md:bg-black shadow-xl rounded-2xl overflow-hidden border border-zinc-700"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,

            transition: {
              duration: 0.4,
              ease: "circInOut",
              repeat: 0,
              delay: 0.4,
              type: "tween",
              stiffness: 60,
            },
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className=" md:flex md:flex-col lg:flex lg:flex-row md:items-center lg:pl-6"> 
            {/* Image Section */}
            <div className="md:w-auto lg:w-1/3  bg-black md:bg-black flex items-center justify-center p-4 md:p-0 md:py-6 ">
              <MotionCarousel
                className="lg:hidden "
                plugins={[
                  Autoplay({
                    delay: 2000,
                  }),
                ]}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{
                  opacity: 1,
                  y: 0,

                  transition: {
                    duration: 0.4,

                    delay: 0.6,
                  },
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <CarouselContent>
                  {photos.map((item, index) => (
                    <CarouselItem key={index}>
                      <img
                        src={item}
                        className="rounded-xl h-52 mx-auto  object-cover flex justify-center md:w-xl"
                        alt="abt"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </MotionCarousel>
              <MotionCarousel
                className="hidden lg:flex"
                plugins={[
                  Autoplay({
                    delay: 2000,
                  }),
                ]}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{
                  opacity: 1,
                  x: 0,

                  transition: {
                    duration: 0.4,
                    delay: 0.4,
                  },
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <CarouselContent>
                  {mdphotos.map((item, index) => (
                    <CarouselItem key={index}>
                      <img
                        src={item}
                        className="rounded-xl w-full h-full object-cover bg-cover md:p-2"
                        alt="abt"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </MotionCarousel>
              {/* <img
                src={photo} // replace with your actual photo path
                alt="Journey Image"
                className="rounded-xl w-full h-auto object-cover md:hidden"
              /> */}
              {/* <img
                src={photo2} // replace with your actual photo path
                alt="Journey Image"
                className="rounded-xl w-full h-full object-cover hidden md:flex bg-cover md:p-2"
              /> */}
            </div>

            {/* Content Section */}
            <div className="lg:w-2/3 p-6 space-y-6 md:py-0 text-zinc-100 md:flex md:flex-col md:justify-center md:gap-4  md:pb-4 lg:items-center lg:px-6">
              {/* Part 1 */}
              <div className="md:flex md:flex-col md:gap-2 lg:mb-0">
                <motion.h2
                  className="text-2xl font-semibold text-neutral-300/90 "
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: "circInOut",
                    delay: 0.4,
                    type: "tween",
                    stiffness: 60,
                  }}
                  viewport={{ once: true, amount: 0.6 }}
                >
                  Where It All Began
                </motion.h2>
                <motion.p
                  className="text-sm mt-0 text-neutral-400/80 font-[Nokora]"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: "circInOut",
                    delay: 0.4,
                    type: "tween",
                    stiffness: 60,
                  }}
                  viewport={{ once: true, amount: 0.6 }}
                >
                  It all started as a kid who begged for a computer just to
                  grind games nonstop — I'm talking 12-hour sessions on
                  weekends, no shame. But curiosity kicked in when the game
                  would crash or lag. Instead of just restarting it, I started
                  digging — tweaking settings, installing mods, even messing
                  around in system files just to see what made things tick. That
                  curiosity became a habit. I didn't realize it back then, but
                  those small experiments were the start of me wanting to
                  “build” instead of just “play.”
                </motion.p>
              </div>

              {/* Part 2 */}
              <div className="md:flex md:flex-col md:gap-2">
                <motion.h2
                  className="text-2xl font-semibold text-neutral-300/90"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: "circInOut",
                    delay: 0.4,
                    type: "tween",
                    stiffness: 60,
                  }}
                  viewport={{ once: true, amount: 0.6 }}
                >
                  The Transition
                </motion.h2>
                <motion.p
                  className="text-sm mt-0 text-neutral-400/80 font-[Nokora]"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: "circInOut",
                    delay: 0.6,
                    type: "tween",
                    stiffness: 60,
                  }}
                  viewport={{ once: true, amount: 0.6 }}
                >
                  I’d try coding once in a while, follow a few tutorials, then
                  drop it after a week and go back to gaming. But eventually
                  that flipped. I stumbled onto tools like Webflow and
                  Bubble—no-code platforms that made building things feel like a
                  game itself. From there, I picked up HTML and CSS, just enough
                  to tweak things. But once I hit JavaScript, something clicked.
                  I realized I could make *anything* interactive. Suddenly,
                  coding felt less like math homework and more like crafting a
                  digital world from scratch.
                </motion.p>
              </div>

              {/* Part 3 */}
              <div className="md:flex md:flex-col md:gap-2">
                <motion.h2
                  className="text-2xl font-semibold text-neutral-300/90"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: "circInOut",
                    delay: 0.6,
                    type: "tween",
                    stiffness: 60,
                  }}
                  viewport={{ once: true, amount: 0.6 }}
                >
                  Now It's a Journey
                </motion.h2>
                <motion.p
                  className="text-sm mt-0 text-neutral-400/80 font-[Nokora]"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: "circInOut",
                    delay: 0.8,
                    type: "tween",
                    stiffness: 60,
                  }}
                  viewport={{ once: true, amount: 0.6 }}
                >
                  I joined BTech with high hopes, but the traditional syllabus
                  hit like a brick wall. Most of it felt outdated or just plain
                  boring. So, I started exploring outside the classroom—YouTube,
                  Discord servers, GitHub, Reddit, anything where devs were
                  hanging out. That shift changed everything. I learned to learn
                  on my own. I went from frontend toy projects to full-stack
                  builds, diving into databases, real-time apps, and even mobile
                  dev with React Native. What started as a random interest
                  became something I want to master long-term—not just for a
                  job, but because building stuff actually excites me now.
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
