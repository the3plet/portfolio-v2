import {
  Github,
  Instagram,
  LineSquiggle,
  Linkedin,
  Twitter,
  Vault,
} from "lucide-react";
import React from "react";
import { Card, CardContent } from "./ui/card";
import dp from "@/assets/dp.jpg";
import { Button } from "./ui/button";
import photo from "@/assets/photo.jpg";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="bg-black  pt-14 pb-10 ">
      <div className="flex flex-col items-left px-6 text-white gap-0 pb-4 border-b border-muted/20 border-dashed">
        <p className="text-4xl font-bold">About Me</p>
        <p className="text-sm text-left text-gray-400 font-normal">
          How It Started, How It’s Going — My Dev Path
        </p>
      </div>
      <div className="px-4 gap-3 flex flex-col pt-4">
        <div className="max-w-3xl mx-auto bg-zinc-900 shadow-xl rounded-2xl overflow-hidden border border-zinc-700">
          <div className="md:flex">
            {/* Image Section */}
            <div className="md:w-1/3 bg-zinc-800 flex items-center justify-center p-4">
              <img
                src={photo} // replace with your actual photo path
                alt="Journey Image"
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="md:w-2/3 p-6 space-y-4 text-zinc-100">
              {/* Part 1 */}
              <div>
                <h2 className="text-xl font-semibold">Where It All Began</h2>
                <p className="text-sm mt-2 text-white/80">
                  Started from a kid who just wanted a computer to play games
                  24/7. That eventually turned into a habit of breaking and
                  fixing things—just to see how games worked and runned.
                </p>
              </div>

              {/* Part 2 */}
              <div>
                <h2 className="text-xl font-semibold">The Transition</h2>
                <p className="text-sm mt-2 text-white/80">
                  I tried learning programming several times, often dropping it
                  to go back to gaming. But over time, that changed. I went from
                  no-code tools to building with basic HTML and CSS, then dove
                  into JavaScript.
                </p>
              </div>

              {/* Part 3 */}
              <div>
                <h2 className="text-xl font-semibold">Now It's a Journey</h2>
                <p className="text-sm mt-2 text-white/80">
                  After high school, I got into BTech. The syllabus felt boring
                  at first, but I slowly found my rhythm. I stopped relying on
                  spoon-feeding and started exploring things on my own. Joining
                  coding communities was a game changer—it accelerated my
                  growth, connected me with like-minded people, and opened the
                  door to full-stack development.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Card className="bg-[#1A1A1A] border-[#0F0F0F] rounded-3xl py-0">
          <CardContent className="p-4 text-white font-extralight text-sm gap-1 flex flex-col">
            <article className="flex gap-2">
              <img
                src={dp}
                className="rounded-full w-24 h-24 float-left"
                alt="profile pic"
              />
              <p className="text-xl  font-light flex items-center">
                What started as curiosity became passion, and now it's
              </p>
            </article>
            <h1 className="text-xl font-bold flex justify-center py-2 underline decoration-blue-500">
              A full-time journey as a developer.
            </h1>
          </CardContent>
        </Card>
        <Card className="bg-[#1A1A1A]  rounded-3xl py-0 border border-[#0F0F0F]">
          <CardContent className="p-4 text-white">
            <p className="text-4xl text-gray-600"> B.TECH</p>
            <p className="text-4xl text-white"> Computer Science</p>
          </CardContent>
        </Card>
        <div className="flex gap-2 ">
          <Card className="bg-[#1A1A1A] border-[#0F0F0F] rounded-2xl py-0 flex-1">
            <CardContent className="p-4 py-5 text-white flex justify-center items-center">
              <Github />
            </CardContent>
          </Card>
          <Card className="bg-[#1A1A1A] border-[#0F0F0F] rounded-2xl py-0 flex-1">
            <CardContent className="p-4 py-5 text-white flex justify-center items-center">
              <Linkedin />
            </CardContent>
          </Card>
          <Card className="bg-[#1A1A1A] border-[#0F0F0F] rounded-2xl py-0 flex-1">
            <CardContent className="p-4 py-5 text-white flex justify-center items-center">
              <Instagram />
            </CardContent>
          </Card>
          <Card className="bg-[#1A1A1A] border-[#0F0F0F] rounded-2xl py-0 flex-1 ">
            <CardContent className="p-4 py-5 text-white flex justify-center items-center">
              <Twitter />
            </CardContent>
          </Card>
        </div>
        <Card className="bg-[#1A1A1A] border-[#0F0F0F] rounded-3xl py-0">
          <CardContent className="p-4 text-white">
            <p className="text-4xl text-gray-600"> Junior</p>
            <p className="text-4xl text-white"> Frontend Developer</p>
          </CardContent>
        </Card>
        <Card className="bg-[#1A1A1A] border-[#0F0F0F] rounded-3xl py-0">
          <CardContent className="p-4 text-white font-extralight text-sm gap-5 flex flex-col items-center ">
            <LineSquiggle size={40} strokeWidth={0.7} opacity={0.5} />
            <p className="text-3xl">Wanna Work Together?</p>
            <Button
              size={"lg"}
              className="bg-[#292929] text-xl rounded-3xl py-7 px-10 shadow-2xl text-gray-400"
            >
              View Resume
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
