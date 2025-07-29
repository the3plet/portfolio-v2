import React from "react";
import logo from '@/assets/react.svg'
import { PersonStanding, ToolCase } from "lucide-react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="  px-4 py-4">
      <div className="bg-gray-600 backdrop-filter backdrop-blur-2xl bg-opacity-80 flex gap-4 h-14 border justify-between px-2 items-center border-gray-400 rounded-full text-white">
        <div className="rounded-full bg-gray-500 w-12 h-10 flex justify-center items-center"><PersonStanding/></div>
        <div>About</div>
        <div>Expeience</div>
        <div className="rounded-full bg-gray-500 w-12 h-10 flex justify-center items-center"><ToolCase/></div>
      </div>
    </div>
  );
};

export default Navbar;
