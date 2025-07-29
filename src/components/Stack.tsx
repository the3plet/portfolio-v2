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
    <div className="py-10 bg-black">
      <div className="flex flex-col items-left text-white  px-6 border-b border-muted/20 border-dashed pb-4 gap-1">
        <p className="text-4xl font-bold">Behind the Build</p>
        <p className="text-sm text-left text-gray-400 font-normal">
          The foundations I rely on and the ones I’m always refining—as I grow
          as a developer.
        </p>
      </div>
      <div className="pt-6 px-4 flex flex-col gap-2 ">
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
                    <h1 className="text-lg font-bold">{items.title}</h1>
                    <p className="text-md font-light">{items.description}</p>
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
