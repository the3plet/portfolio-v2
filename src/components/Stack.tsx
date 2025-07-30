import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import {motion} from 'motion/react'



const tools = [
    
  {
    icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    title: "React",
    description: "Frontend Framework",
  },
  {
    icon: "https://images-cdn.openxcell.com/wp-content/uploads/2024/07/25082439/reactnative-inner.svg",
    title: "React Native",
    description: "Native App Framework by React",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    title: "Angular",
    description: "Framework for Building Web Apps",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    title: "Next.js",
    description: "React Framework for SSR & SSG",
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4T1YOdxe--UDu6VlEaqifJFs_dIXyiJUM0A&s",
    title: "Express",
    description: "Minimal and Flexible Backend Framework",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    title: "Figma",
    description: "Collaborative UI/UX Design Tool",
  },
  {
    icon: "https://www.svgrepo.com/show/354210/prisma.svg",
    title: "Prisma",
    description: "Type-Safe ORM for Node.js",
  },
  {
    icon: "https://neon.com/favicon/favicon.png", // official NeonDB GitHub avatar
    title: "NeonDB",
    description: "Serverless Postgres with Branching",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    title: "Git",
    description: "Version Control System",
  },
  {
    icon: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    title: "TypeScript",
    description: "Typed JavaScript Superset",
  },
];

const MotionCard = motion(Card)

const Stack = () => {
  return (
    <div className="py-10 bg-black md:w-2/3 md:mx-auto md:px-24 md:py-12" id="stack">
      <div className="flex flex-col items-left text-white  px-6 border-b border-muted/20 border-dashed pb-4 gap-1">
        <motion.p className="text-4xl font-bold font-[Sansation]"
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
        >Behind the Build</motion.p>
        <motion.p className="text-sm md:text-xl text-left text-gray-400 font-normal font-[Sansation]"
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
          The foundations I rely on and the ones I’m always refining—as I grow
          as a developer.
        </motion.p>
      </div>
      <div className="pt-6 px-4 flex flex-col gap-2 md:grid md:grid-cols-2 md:gap-3">
        {tools.map((items, index) => (
          <MotionCard key={index} className="bg-[#121212] border-muted/25 border-[0.1px] rounded-lg py-0 cursor-pointer hover:outline-2 hover:border-white/60 hover:rounded-xl"
          initial={{ opacity: 0, y: 40 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
              ease: "easeIn",
              repeat: 0,
              delay: 0.4,
              type: "spring",
              stiffness: 50,
            }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <CardContent className="p-4 text-white font-extralight text-sm gap-1 flex flex-col">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 ">
                  <img
                    className="flex w-12 h-12 rounded-sm items-center "
                    src={items.icon}
                    alt="logo"
                  />
                  <div className="flex flex-col justify-center">
                    <h1 className="text-lg font-bold font-[Sansation]">{items.title}</h1>
                    <p className="text-md text-muted/60 font-medium font-[Sansation]">{items.description}</p>
                  </div>
                </div>
                <ArrowRight className="flex items-center text-gray-500" />
              </div>
            </CardContent>
          </MotionCard>
        ))}
      </div>
    </div>
  );
};

export default Stack;
