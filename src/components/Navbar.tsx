import { useState } from "react";
import logo from "@/assets/logo.png";
import { Dot, Mail} from "lucide-react";
import { motion } from "motion/react";

const NavbarTab = {
  Hero: "hero",
  Experience: "experience",
  Projects: "projects",
  Skill: "skill",
  About: "about",
} as const;

type NavbarTab = (typeof NavbarTab)[keyof typeof NavbarTab];
const Navbar = () => {
  const [tab, setTab] = useState<NavbarTab>("hero");
  console.log(tab);
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <motion.div
      className="fixed flex w-screen justify-center px-4 py-4 z-50 opacity-90 "
      initial={{ scaleX: 0, scaleY: 0, filter: "blur(10px)", opacity: 0 }}
      animate={{
        scaleX: 1,
        scaleY: 1,
        filter: "blur(0px)",
        opacity: 1,
        transition: { ease: "backOut", type: "spring", damping: 30 },
      }}
      transition={{}}
    >
      <div className="bg-black backdrop-filter backdrop-blur-2xl bg-opacity-90 flex gap-2 md:gap-4Z h-14 border px-2 items-center border-muted/50 rounded-full text-white">
        <button
          onClick={() => {
            setTab(NavbarTab.Hero);
            scrollToId("hero");
          }}
          className={`cursor-pointer rounded-full bg-gray-500 w-12 h-12 flex justify-center items-center ${
            tab === NavbarTab.Hero ? " border-2 border-muted/80" : ""
          }`}
        >
          <img src={logo} className="rounded-full" alt="logo" />
        </button>

        <button
          onClick={() => {
            setTab(NavbarTab.Experience);
            scrollToId("experience");
          }}
          className={`cursor-pointer ${
            tab === NavbarTab.Experience
              ? " bg-gray-500/20 border-t-[0.9px] rounded-3xl py-1 px-3 "
              : ""
          }`}
        >
          Experience
        </button>
        <div className="opacity-50">
          <Dot className="w-4 " />
        </div>
        <button
          onClick={() => {
            setTab(NavbarTab.Projects);
            scrollToId("project");
          }}
          className={`cursor-pointer ${
            tab === NavbarTab.Projects
              ? " bg-gray-500/20 border-t-[0.9px] rounded-3xl py-1 px-3 "
              : ""
          }`}
        >
          Project
        </button>
        {/* For large screen */}

        <div className="opacity-50 hidden md:flex">
          <Dot className="w-4 " />
        </div>
        <button
          onClick={() => {
            setTab(NavbarTab.Skill);
            scrollToId("stack");
          }}
          className={`cursor-pointer hidden md:flex ${
            tab === NavbarTab.Skill
              ? " bg-gray-500/20 border-t-[0.9px] rounded-3xl py-1 px-3 "
              : ""
          }`}
        >
          Stack
        </button>

        <div className="opacity-50">
          <Dot className="w-4 " />
        </div>
        <button
          onClick={() => {
            setTab(NavbarTab.About);
            scrollToId("about");
          }}
          className={`cursor-pointer ${
            tab === NavbarTab.About
              ? " bg-gray-500/20 border-t-[0.9px] rounded-3xl py-1 px-3 "
              : ""
          }`}
        >
          About
        </button>

        {/* <div>About</div> */}
        <a href="mailto:soorajp2002@gmail.com">
          <div className="cursor-pointer rounded-full bg-neutral-600/30 w-12 h-10 flex justify-center items-center hover:ring-2 hover:ring-white">
            <Mail />
          </div>
        </a>
      </div>
    </motion.div>
  );
};

export default Navbar;
