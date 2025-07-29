import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import React from "react";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";

type Props = {};

const experience = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/5969/5969020.png", // tech company-style icon
    title: "Alhind Tours & Travels",
    role: "Frontend Developer Intern",
    from: "July 2023",
    to: "June 2024",
    description:
      "Worked on internal dashboards and customer-facing web modules using React.js, integrated APIs, and optimized components for performance and responsiveness.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968520.png", // another modern tech-looking icon
    title: "GTech µLearn",
    role: "Frontend Developer",
    from: "2022",
    to: "2023",
    description:
      "Built educational microtools, contributed to open-source frontend components, and collaborated in a community-driven agile setup.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", // generic user/freelancer-style icon
    title: "Freelance Projects",
    role: "Full Stack Developer",
    from: "2021",
    to: "2022",
    description:
      "Delivered end-to-end web solutions for local businesses using React.js, Node.js, and Firebase. Focused on clean UI and lightweight, maintainable codebases.",
  },
];

const Experience = (props: Props) => {
  return (
    <div className="py-10 bg-black ">
      <div className="flex flex-col items-left text-white border-b border-muted/20 border-dashed pb-4 px-6 gap-1">
        <p className="text-4xl font-bold">Experience</p>
        <p className="text-sm text-left text-gray-400 font-normal">
          From freelance to full time role, every stop made me a better learner.
        </p>
      </div>
      <div className="pt-6 px-4 flex flex-col gap-4 ">
        {experience.map((items, index) => (
          <Card
            key={index}
            className="bg-[#121212] border-muted/25 border-[0.1px] rounded-xl py-0 backdrop-blur-3xl opacity-80"
          >
            <CardContent className="p-4 text-white font-extralight text-sm gap-1 flex flex-col">
              <div className="flex  justify-between items-center ">
                <div className="flex items-center gap-2">
                  <img
                    className="flex w-12 h-12 rounded-sm items-center"
                    src={items.icon}
                    alt="logo"
                  />
                  <div className="flex flex-col justify-center">
                    <h1 className="text-xl font-semibold">{items.title}</h1>
                    <p className="text-md">
                      {items.from} - {items.to}
                    </p>
                  </div>
                </div>
                <ArrowRight className="flex items-center text-gray-500 cursor-pointer mr-2" />
              </div>

              <div className="flex flex-col gap-2 py-1">
                <Separator
                  orientation="horizontal"
                  className="!h-[0.5px]  bg-muted/10"
                />
                <h1 className="text-lg font-bold">{items.role}</h1>
                <Separator
                  orientation="horizontal"
                  className="!h-[0.5px]  bg-muted/10"
                />
                <div className="bg-black p-2 rounded-md mt-2 border-muted/25 border-[0.1px]">
                  {/* <ul className="list-inside list-disc">
                    <li>jsjjsjsj</li>
                    <li>jsjjsjsj</li>
                  </ul> */}
                  <p className="p-1 ">{items.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Experience;
