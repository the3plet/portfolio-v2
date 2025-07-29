import React, { useState } from "react";
import logo from "@/assets/react.svg";
import { Dot, Mail, PersonStanding, ToolCase } from "lucide-react";
import { Button } from "./ui/button";

type Props = {};
const NavbarTab = {
  Hero: "hero",
  Experience: "experience",
  Projects: "projects",
  About: "about",
} as const;

type NavbarTab = (typeof NavbarTab)[keyof typeof NavbarTab];
const Navbar = (props: Props) => {
  const [tab, setTab] = useState<NavbarTab>("hero");
  console.log(tab);
  return (
    <div className="fixed flex w-screen justify-center px-4 py-4 z-50 opacity-90 ">
      <div className="bg-black backdrop-filter backdrop-blur-2xl bg-opacity-90 flex gap-2 h-14 border px-2 items-center border-muted/50 rounded-full text-white">
        <button
          onClick={() => setTab(NavbarTab.Hero)}
          className={`cursor-pointer rounded-full bg-gray-500 w-12 h-10 flex justify-center items-center ${
            tab === NavbarTab.Hero ? " border-2 border-muted/80" : ""
          }`}
        >
          <PersonStanding />
        </button>
        <button
          onClick={() => setTab(NavbarTab.Projects)}
          className={`cursor-pointer ${
            tab === NavbarTab.Projects
              ? " bg-gray-500/20 border-t-[0.9px] rounded-3xl py-1 px-3 "
              : ""
          }`}
        >
          Project
        </button>
        <div className="opacity-50">
          <Dot className="w-4 " />
        </div>
        <button
          onClick={() => setTab(NavbarTab.Experience)}
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
          onClick={() => setTab(NavbarTab.About)}
          className={`cursor-pointer ${
            tab === NavbarTab.About
              ? " bg-gray-500/20 border-t-[0.9px] rounded-3xl py-1 px-3 "
              : ""
          }`}
        >
          About
        </button>

        {/* <div>About</div> */}
        <div className="cursor-pointer rounded-full bg-gray-500 w-12 h-10 flex justify-center items-center">
          <Mail />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
