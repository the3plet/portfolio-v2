import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {  Dot, Github } from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";
import product from '@/assets/projects/product1.png'
import product2 from '@/assets/projects/product2.png'
import theruvutaste from '@/assets/projects/theruvutaste.png'
import daniasecrets from '@/assets/projects/daniasecrets.png'

const projects = [
  {
    title: "Theruvu Taste",
    type: "Full-stack App",
    url: "https://github.com/the3plet/theruvu-taste-landing-page",
    link: "theruvutaste",
    description:
      "Full-stack app for discovering street food gems. Built with React Native, with real-time updates (Socket.IO) and image uploads (Cloudinary).",
    image: theruvutaste,
    tags: ["React Native", "Expo", "Expressjs"],
  },
  {
    title: "Hybrhind Forex",
    type: "company",
    link: "hybrhind-forex",
    description:
      "Comprehensive Forex ERP automating FX operations, compliance, and risk management. Reduced manual processing by 60%, and boosted compliance accuracy to 99.8%. Powering 50+ forex dealers across Kerala.",
    image: product2,
    tags: ["React", "Redux", "ShadCN UI"],
  },
  {
    title: "Hybrhind Signage",
    type: "company",
    link: "hybrhind-signage",
    description:
      "Dynamic signage system replacing physical billboards with real-time forex rates and promotional content. Deployed at 40+ locations, Cut update costs by 80% and enabled instant broadcasting with ad-based revenue.",
    image:product,
    tags: ["React", "Zustand", "Tailwind"],
  },
  {
    title: "Herbal Tea Ecommerce",
    type: "private",
    url: "https://github.com/Vertecho-Technologies/herbal-frontend-v1",
    link: "daniasecrets",
    description:
      "Ecommerce platform for fitness tea. Features real-time order tracking, multilingual support, and seamless international payments with elegant UX powered by Framer Motion.",
    image: daniasecrets,
    tags: ["Nextjs", "Framer Motion", "Websocket"],
  },
  {
    title: "Car Rental Booking",
    url: "https://github.com/the3plet/RentAWheel",
    type: "Booking System",
    link: "Rentawheel",
    description:
      "Web-based car rental app enabling users to browse available vehicles, make bookings, and manage reservations, with automated invoice generation .",
    image:
      "https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // cars/rental feel
    tags: ["Angular", "Tailwind", "Axios"],
  },
];
const MotionCard = motion(Card);
const MotionCardContent = motion(CardContent);
const MotionButton = motion(Button);
const Projects = () => {
  return (
    <div
      className="py-10 bg-black md:w-2/3 md:mx-auto md:px-24 md:py-12"
      id="project"
    >
      <div className="flex flex-col items-left text-white  px-6 border-b border-muted/20 border-dashed pb-4 gap-0 md:gap-2">
        <motion.p
          className="text-4xl  font-bold font-[Sansation]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.4,
            ease: "circInOut",
            repeat: 0,
            delay: 0.4,
            type: "tween",
            stiffness: 60,
          }}
          viewport={{ once: true, amount: 0.6 }}
        >
          Build, Ship, Repeat
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
            delay: 0.4,
            type: "tween",
            stiffness: 60,
          }}
          viewport={{ once: true, amount: 0.6 }}
        >
          Projects I’ve built - from late-night ideas to deployment, each one
          was a learning curve.
        </motion.p>
      </div>
      <div className="pt-6 px-4 flex flex-col gap-4 ">
        {projects.map((item, index) => (
          <MotionCard
            className="bg-[#121212] border-muted/25 border-[0.1px] rounded-3xl py-4 cursor-pointer hover:outline-2 hover:border-white/60 hover:rounded-xl"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.4,
                ease: "easeIn",
                repeat: 0,
                delay: 0.1,
                type: "spring",
                stiffness: 50,
              },
            }}
            viewport={{ once: true, amount: 0.2 }}
            whileTap={{ scale: 1.02, transition: { duration: 0.1, delay: 0 } }}
          >
            <MotionCardContent className="px-4 md:grid md:grid-cols-2 md:gap-4 md:items-center">
              <div>
                <img
                  className="rounded-2xl w-[324px] h-[216px] md:w-full "
                  src={item.image}
                  alt="project"
                />
              </div>
              <div className="md:flex md:flex-col md:justify-center">
                <div className="flex justify-between py-4 items-end ">
                  <h1 className="text-white/80 flex items-end flex-1 font-extrabold font-[Rajdhani] text-xl h-full md:text-2xl">
                    {item.title}
                  </h1>
                  <Button
                    onClick={() => {
                      if (item.type === "company") {
                        toast.warning("Access Restricted", {
                          description:
                            "This repository is company-owned and cannot be accessed without proper authorization.",
                        });
                        return;
                      }
                       if(item.type === "private"){
                         toast.warning("Freelance Repository", {
                           description:
                            "This repository is part of a freelance project and may not be publicly accessible.",
                          });
                          setTimeout(() => {
                          
                            window.open(item.url, "_blank");
                        }, 4000);
                        return
                       }
                      window.open(item.url, "_blank");
                    }}
                    variant={"link"}
                    className="bg-slate-600/30 text-muted/50 font-bold font-[Oxanium] flex items-center gap-1 my-auto cursor-pointer"
                  >
                    <Github className="flex items-center" />
                    <p className="flex items-center">
                      {item.title.length > 20 || item.link.length > 18
                        ? "Link"
                        : item.link}
                    </p>
                  </Button>
                </div>
                <Separator
                  orientation="horizontal"
                  className="!h-[0.5px]  bg-muted/10 "
                />
                <div className="flex font-bold text-sm items-center text-gray-200/50 gap-2 py-2">
                  {item.tags.map((tag, tagIndex) => (
                    <React.Fragment key={tagIndex}>
                      <p className="font-[Quicksand]">{tag}</p>
                      {tagIndex !== item.tags.length - 1 && <Dot />}
                    </React.Fragment>
                  ))}
                </div>
                <Separator
                  orientation="horizontal"
                  className="!h-[0.5px]  bg-muted/10 "
                />
                <div>
                  <p className="text-gray-200/50 text-sm font-normal font-[Nokora] pt-4">
                    {item.description}
                  </p>
                </div>
              </div>
            </MotionCardContent>
          </MotionCard>
        ))}
        <MotionButton
          className="text-muted/60 text-md py-5 md:text-lg md:py-6 font-[Oxanium] cursor-pointer hover:ring-2 border-white/60 rounded-xl" onClick={() => window.open('https://github.com/the3plet/', "_blank")}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
              duration: 0.1,
              ease: "easeIn",
              repeat: 0,
              delay: 0.1,
              type: "tween",
              stiffness: 50,
            },
          }}
          viewport={{ once: true, amount: 0.1 }}
          whileTap={{ scale: 1.3 }}
        >
          More on Github.com <Github />
        </MotionButton>
      </div>
    </div>
  );
};

export default Projects;
