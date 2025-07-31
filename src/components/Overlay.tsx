import { Github, Instagram, Linkedin } from "lucide-react";
import { Separator } from "./ui/separator";


const Overlay = () => {
  return (
    <div className="fixed w-screen h-screen">
    <div className="">
      <div className="absolute h-screen flex flex-col justify-center gap-8 left-28 ">
        <Github
          className="  text-white/60 hover:bg-neutral-800/40 w-12 h-12 p-2 rounded-xl cursor-pointer"
          size={40}
          />
        <Linkedin
          className="  text-white/60 hover:bg-neutral-800/40 w-12 h-12 p-2 rounded-xl "
          size={40}
          />
        <Instagram
          className="  text-white/60 hover:bg-neutral-800/40 w-12 h-12 p-2 rounded-xl "
          size={40}
          />
      </div>

      <Separator
        className="absolute left-48 border-l-0 border-b-0 border-t-0 border-r-neutral-900   border-r-[0.1px] "
        orientation="vertical"
        />
    </div>
    <div className="">
          <Separator
            className="absolute right-48 border-l-0 border-b-0 border-t-0 border-r-neutral-900   border-r-[0.1px] "
            orientation="vertical"
            />
      <div className="absolute h-screen flex flex-col justify-center gap-8 right-28 ">
        <Github
          className="  text-white/60 hover:bg-neutral-800/40 w-12 h-12 p-2 rounded-xl "
          size={40}
          />
        <Linkedin
          className="  text-white/60 hover:bg-neutral-800/40 w-12 h-12 p-2 rounded-xl "
          size={40}
          />
        <Instagram
          className="  text-white/60 hover:bg-neutral-800/40 w-12 h-12 p-2 rounded-xl "
          size={40}
          />
      </div>

    </div>
        </div>
  );
};

export default Overlay;
