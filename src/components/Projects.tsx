import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Bubbles, Dot, Github, Link2 } from "lucide-react";

type Props = {};
const projects = [
  {
    title: "Theruvu Taste",
    type: "Full-stack App",
    link: "theruvutaste.app",
    description:
      "A location-based mobile app to discover and explore hidden street food gems with real-time shop status, reviews, and photo uploads.",
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", // food/street app feel
    tags: ["React Native", "Expo Router", "Socket.IO"],
  },
  {
    title: "Hybrhind Forex",
    type: "Admin Panel",
    link: "hybrhind-forex.com",
    description:
      "Admin dashboard for managing real-time forex rates and announcement banners, designed for syncing with display signage systems.",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938",
    tags: ["React", "MongoDB", "Image Upload"],
  },
  {
    title: "Hybrhind Signage",
    type: "Digital Display",
    link: "hybrhind-signage.com",
    description:
      "A real-time signage display system for forex rates, optimized for various screen sizes and designed with stability in mind.",
    image:
      "https://images.unsplash.com/photo-1557858310-9052820906f7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["React", "Auto Refresh", "Responsive"],
  },
  {
    title: "Fitness Tea Ecommerce",
    type: "E-commerce Platform",
    link: "fitnesstea.store",
    description:
      "Online storefront for a tea brand with product listings, checkout, order management, and admin control panel.",
    image: "https://images.unsplash.com/photo-1528825871115-3581a5387919", // product/tea vibe
    tags: ["React", "Redux Toolkit", "Tailwind"],
  },
  {
    title: "Car Rental Booking",
    type: "Booking System",
    link: "carrenthub.in",
    description:
      "A complete car rental web app allowing customers to browse, book, and manage rentals with owner-side dashboard and live status tracking.",
    image:
      "https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // cars/rental feel
    tags: ["React", "Tailwind CSS", "Express"],
  },
];

const Projects = (props: Props) => {
  return (
    <div className="py-10 bg-black ">
      <div className="flex flex-col items-left text-white  px-6 border-b border-muted/20 border-dashed pb-4 gap-1">
        <p className="text-4xl font-bold">Build, Ship, Repeat</p>
        <p className="text-sm text-left text-gray-400 font-normal">
          Projects I’ve built - from late-night ideas to deployment, each one
          was a learning curve.
        </p>
      </div>
      <div className="pt-6 px-4 flex flex-col gap-4 ">
        {projects.map((item, index) => (
          <Card
            className="bg-[#121212] border-muted/25 border-[0.1px] rounded-3xl py-4"
            key={index}
          >
            <CardContent className="px-4">
              <img
                className="rounded-2xl w-[324px] h-[216px]"
                src={item.image}
              />
              <div className="flex justify-between py-4 items-center">
                <h1 className="text-white flex items-center font-extrabold text-xl ">
                  {item.title}
                </h1>
                <Button
                  variant={"link"}
                  className="bg-slate-600/30 text-muted/50 font-bold"
                >
                  <Link2 />
                  {item.title.length > 20 || item.link.length > 18 ? "Link" : item.link}
                  
                </Button>
              </div>
              <Separator
                orientation="horizontal"
                className="!h-[0.5px]  bg-muted/10"
              />
              <div className="flex font-bold text-sm items-center text-gray-200/50 gap-2 py-2">
                {item.tags.map((tag, tagIndex) => (
                  <>
                    <p>{tag}</p>
                    {tagIndex !== item.tags.length - 1 && <Dot />}{" "}
                  </>
                ))}
              </div>
              <Separator
                orientation="horizontal"
                className="!h-[0.5px]  bg-muted/10"
              />
              <div>
                <p className="text-gray-200/50 text-sm font-medium pt-4">
                  {item.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
        <Button className="text-muted/60 text-md py-5">
          More on Github.com <Github />
        </Button>
      </div>
    </div>
  );
};

export default Projects;
