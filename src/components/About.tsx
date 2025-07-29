import { Github, Instagram, LineSquiggle, Linkedin, Twitter, Vault } from "lucide-react";
import React from "react";
import { Card, CardContent } from "./ui/card";
import dp from '@/assets/dp.jpg'
import { Button } from "./ui/button";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="bg-black  pt-14 ">
      <div className="flex flex-col items-left px-6 text-white gap-0 pb-4 border-b border-muted/20 border-dashed">
        <p className="text-4xl font-bold">About Me</p>
        <p className="text-sm text-left text-gray-400 font-normal">How It Started, How It’s Going — My Dev Path</p>
      </div>
      <div className="px-4 gap-2 flex flex-col pt-4">
        <Card className="bg-[#1A1A1A] border-[#0F0F0F] rounded-3xl py-0">
          <CardContent className="p-4 text-white font-extralight text-sm gap-1 flex flex-col">
            <img src={dp} className="rounded-full w-20 h-20 " alt="profile pic"/>
           <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptatibus voluptas nulla similique. Voluptatum, nihil veritatis!
            Iusto error quos dolor, voluptas aliquam minus accusantium corporis,
            veniam dolorem molestiae expedita repellendus.</p>
          </CardContent>
        </Card>
        <Card className="bg-[#1A1A1A]  rounded-3xl py-0 border border-[#0F0F0F]">
          <CardContent className="p-4 text-white">
           <p className="text-4xl text-gray-600"> avilable for</p>
           <p className="text-4xl text-white"> full-time roles</p>
          </CardContent>
        </Card>
        <div className="flex gap-2 ">
            <Card className="bg-[#1A1A1A] border-[#0F0F0F] rounded-2xl py-0 flex-1">
          <CardContent className="p-4 py-5 text-white flex justify-center items-center">
           <Github/>
          </CardContent>
        </Card>
        <Card className="bg-[#1A1A1A] border-[#0F0F0F] rounded-2xl py-0 flex-1">
          <CardContent className="p-4 py-5 text-white flex justify-center items-center">
           <Linkedin/>
          </CardContent>
        </Card>
        <Card className="bg-[#1A1A1A] border-[#0F0F0F] rounded-2xl py-0 flex-1">
          <CardContent className="p-4 py-5 text-white flex justify-center items-center">
           <Instagram/>
          </CardContent>
        </Card>
      <Card className="bg-[#1A1A1A] border-[#0F0F0F] rounded-2xl py-0 flex-1 ">
          <CardContent className="p-4 py-5 text-white flex justify-center items-center">
           <Twitter/>
          </CardContent>
        </Card>
        </div>
        <Card className="bg-[#1A1A1A] border-[#0F0F0F] rounded-3xl py-0">
          <CardContent className="p-4 text-white">
           <p className="text-4xl text-gray-600"> avilable for</p>
           <p className="text-4xl text-white"> full-time roles</p>
          </CardContent>
        </Card>
        <Card className="bg-[#1A1A1A] border-[#0F0F0F] rounded-3xl py-0">
          <CardContent className="p-4 text-white font-extralight text-sm gap-5 flex flex-col items-center ">
            <LineSquiggle size={40} strokeWidth={0.7} opacity={0.5}/>
           <p className="text-3xl">Wanna Work Together?</p>
          <Button size={'lg'} className="bg-[#292929] text-xl rounded-3xl py-7 px-10 shadow-2xl text-gray-400">
            View Resume
          </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
