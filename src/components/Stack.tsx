import { ArrowRight, Layers } from "lucide-react";
import React from "react";
import { Card, CardContent } from "./ui/card";

type Props = {};

const tools = [
  {
    icon: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
    title: "React",
    description: "Frontend Library for UI",
  },
  {
    icon: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
    title: "Tailwind CSS",
    description: "Utility-first CSS Framework",
  },
  {
    icon: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    title: "TypeScript",
    description: "Typed JavaScript Superset",
  },
  {
    icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    title: "Node.js",
    description: "Runtime for Backend JavaScript",
  },
  {
    icon: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
    title: "PostgreSQL",
    description: "Relational Database System",
  },
  {
    icon: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
    title: "GitHub",
    description: "Code Hosting & Collaboration",
  },
];

const Stack = (props: Props) => {
  return (
    <div className="py-10 bg-black md:w-2/3 md:mx-auto md:px-24 md:py-12">
      <div className="flex flex-col items-left text-white  px-6 border-b border-muted/20 border-dashed pb-4 gap-1">
        <p className="text-4xl font-bold font-[Sansation]">Behind the Build</p>
        <p className="text-sm md:text-xl text-left text-gray-400 font-normal font-[Sansation]">
          The foundations I rely on and the ones I’m always refining—as I grow
          as a developer.
        </p>
      </div>
      <div className="pt-6 px-4 flex flex-col gap-2 md:grid md:grid-cols-2 md:gap-3">
        {tools.map((items, index) => (
          <Card key={index} className="bg-[#121212] border-muted/25 border-[0.1px] rounded-lg py-0 ">
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
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Stack;
