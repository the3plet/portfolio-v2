import { Cpu, ServerCog } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { motion } from "motion/react";
import alhind from '@/assets/experinence/alhind.png'
import mulearn from '@/assets/experinence/mulearn.png'
import freelance from '@/assets/experinence/freelance.png'



const experience = [
  {
    icon: alhind, // tech company-style icon
    title: "Alhind Tours & Travels",
    role: "Junior Frontend Developer",
    from: "January 2024",
    to: "Present",
    description:
      "Built clean and responsive UIs for Hybrhind Forex ERP using React.js and ShadCN, powering daily use by 200+ traders. Hooked up 15+ APIs with smooth data handling. Also crafted a digital signage system and admin panel that replaced 50+ physical boards across 10 locations. Optimized components for performance and responsiveness, cutting page load times by 40%.",
  },
  {
    icon: mulearn, // another modern tech-looking icon
    title: "GTech µLearn",
    role: "Reactjs Intern",
    from: "February 2023",
    to: "July 2023",
    description:
      "Delivered 5+ new features and integrated multi-language support using React i18n, expanding accessibility to 5,000+ international users. Alongside performance improvements of 30% through smart component restructuring and lazy loading, I actively fixed critical bugs to ensure a smooth user experience.",
  },
  {
    icon: freelance, // generic user/freelancer-style icon
    title: "Freelance",
    role: "Frontend Developer",
    from: "2023",
    to: "2024",
    description:
      "Led frontend development for 5+ projects, including Fitness Tea Ecommerce and KEL Electrical ERP, using React, Tailwind CSS, and Material UI. Collaborated closely with cross-functional teams to ensure seamless integration and user experience. Delivered key projects 20% ahead of schedule through efficient planning, component reuse, and clear communication.",
  },
];
const MotionCard = motion(Card);
const MotionCardContent = motion(CardContent);
const Experience = () => {
  return (
    <div
      className="py-10 bg-black md:w-2/3 md:mx-auto md:px-6 md:py-12 md:pt-24 lg:px-24"
      id="experience"
    >
      <div className="flex flex-col items-left text-white border-b border-muted/20 border-dashed pb-4 px-6 gap-0 md:gap-2">
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
            delay: 0.1,
            type: "tween",
            stiffness: 60,
          }}
          viewport={{ once: true, amount: 0.6 }}
        >
          Experience
        </motion.p>
        <motion.p
          className="text-sm md:text-xl text-left text-[#999999] font-normal font-[Sansation]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.4,
            ease: "circInOut",
            repeat: 0,
            type: "tween",
            stiffness: 40,
            delay: 0.4,
          }}
          viewport={{ once: true, amount: 0.6 }}
        >
          From freelance to full time role, every stop made me a better learner.
        </motion.p>
      </div>
      <div className="pt-6 px-4 flex flex-col gap-4 ">
        {experience.map((items, index) => (
          <MotionCard
            key={index}
            className="bg-[#0A0A0B] ring-neutral-800 ring-[0.5px] border-none rounded-xl py-0   cursor-pointer hover:outline-2 hover:border-white/60 hover:rounded-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeIn",
              repeat: 0,
              delay: 0.4,
              type: "tween",
              stiffness: 60,
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <MotionCardContent
              className="p-4 text-white font-extralight text-sm gap-1 flex flex-col"
              whileTap={{ scale: 1.02 }}
              transition={{ duration: 0.1 }}
            >
              <div className="flex  justify-between items-center ">
                <div className="flex items-center gap-2 text-[#D9D9D9]">
                  <img
                    className="flex w-12 h-12 rounded-sm items-center"
                    src={items.icon}
                    alt="logo"
                  />
                  <div className="flex flex-col justify-center">
                    <h1 className="text-xl font-semibold font-[Inter]">
                      {items.title}
                    </h1>
                    <p className="text-md font-[Sansation]">
                      {items.from} - {items.to}
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex gap-4">

                  <div className=" md:flex hidden text-xl font-bold font-[Sansation] md:text-right lg:text-left">{items.role}</div>
                <div className="group ">
                  <Cpu
                    size={30}
                    className="flex group-hover:hidden group-active:hidden items-center text-gray-500 cursor-pointer mr-2 hover:text-neutral-500"
                    />
                  <ServerCog
                    size={30}
                    className=" hidden group-hover:flex group-active:flex items-center text-gray-500 cursor-pointer mr-2 hover:text-neutral-500"
                    />
                </div>
                    </div>
              </div>

              <div className="flex flex-col gap-2 py-1">
                <Separator
                  orientation="horizontal"                  className="!h-[0.5px]  bg-muted/10 md:hidden"
                />
                <h1 className="text-lg font-semibold text-[#D9D9D9] md:hidden">{items.role}</h1>
                
                <div className="bg-[#050505] p-2 rounded-md mt-0 lg:mt-2 ring-neutral-600 ring-[0.5px]">
                  {/* <ul className="list-inside list-disc">
                    <li>jsjjsjsj</li>
                    <li>jsjjsjsj</li>
                  </ul> */}
                  <p className="p-1 font-[Nokora] ">{items.description}</p>
                </div>
              </div>
            </MotionCardContent>
          </MotionCard>
        ))}
      </div>
    </div>
  );
};

export default Experience;
