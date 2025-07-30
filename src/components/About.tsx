import {
  ArrowUpRight,
  Github,
  Instagram,
  LineSquiggle,
  Linkedin,
  Twitter,
  Vault,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import dp from "@/assets/dp.jpg";
import { Button } from "./ui/button";
import mdphoto from "@/assets/md_images/photo.jpg";
import mdphoto2 from "@/assets/md_images/photo2.jpg";
import mdphoto3 from "@/assets/md_images/photo3.jpg";
import mdphoto4 from "@/assets/md_images/photo4.jpg";
import mdphoto5 from "@/assets/md_images/photo5.jpg";
import photo from "@/assets/mobile_images/photo.jpg";
import photo2 from "@/assets/mobile_images/photo2.jpg";
import photo3 from "@/assets/mobile_images/photo3.jpg";
import photo4 from "@/assets/mobile_images/photo4.jpg";
import photo5 from "@/assets/mobile_images/photo5.jpg";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

type Props = {};
const photos = [photo, photo2, photo3, photo4, photo5];
const mdphotos = [mdphoto, mdphoto2, mdphoto3, mdphoto4, mdphoto5];

const About = (props: Props) => {
  return (
    <div className="bg-black  pt-14 pb-10 md:w-3/4 md:mx-auto md:px-0 md:py-12">
      <div className="flex flex-col items-left px-6 text-white gap-0 pb-4 border-b border-muted/20 border-dashed  md:mx-40">
        <p className="text-4xl font-bold font-[Sansation]">About Me</p>
        <p className="text-sm md:text-xl text-left text-gray-400 font-normal font-[Sansation]">
          How It Started, How It’s Going — My Dev Path
        </p>
      </div>
      <div className="px-4 gap-3 flex flex-col pt-4">
        <div className="max-w-3xl mx-auto bg-black md:bg-black shadow-xl rounded-2xl overflow-hidden border border-zinc-700">
          <div className="md:flex">
            {/* Image Section */}
            <div className="md:w-1/3 bg-black md:bg-black flex items-center justify-center p-4 md:p-0">
              <Carousel
                className="md:hidden"
                plugins={[
                  Autoplay({
                    delay: 2000,
                  }),
                ]}
              >
                <CarouselContent>
                  {photos.map((item, index) => (
                    <CarouselItem key={index}>
                      <img
                        src={item}
                        className="rounded-xl w-3xl h-52 object-cover"
                        alt="abt"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              <Carousel
                className="hidden md:flex"
                plugins={[
                  Autoplay({
                    delay: 2000,
                  }),
                ]}
              >
                <CarouselContent>
                  {mdphotos.map((item, index) => (
                    <CarouselItem key={index}>
                      <img
                        src={item}
                        className="rounded-xl w-full h-full object-cover bg-cover md:p-2"
                        alt="abt"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              {/* <img
                src={photo} // replace with your actual photo path
                alt="Journey Image"
                className="rounded-xl w-full h-auto object-cover md:hidden"
              /> */}
              {/* <img
                src={photo2} // replace with your actual photo path
                alt="Journey Image"
                className="rounded-xl w-full h-full object-cover hidden md:flex bg-cover md:p-2"
              /> */}
            </div>

            {/* Content Section */}
            <div className="md:w-2/3 p-6 space-y-4 text-zinc-100">
              {/* Part 1 */}
              <div>
                <h2 className="text-xl font-semibold text-neutral-300/90">
                  Where It All Began
                </h2>
                <p className="text-sm mt-0 text-neutral-400/80 font-[Nokora]">
                  Started from a kid who just wanted a computer to play games
                  24/7. That eventually turned into a habit of breaking and
                  fixing things—just to see how games worked and runned.
                </p>
              </div>

              {/* Part 2 */}
              <div>
                <h2 className="text-xl font-semibold text-neutral-300/90">
                  The Transition
                </h2>
                <p className="text-sm mt-0 text-neutral-400/80 font-[Nokora]">
                  I tried learning programming several times, often dropping it
                  to go back to gaming. But over time, that changed. I went from
                  no-code tools to building with basic HTML and CSS, then dove
                  into JavaScript.
                </p>
              </div>

              {/* Part 3 */}
              <div>
                <h2 className="text-xl font-semibold text-neutral-300/90">
                  Now It's a Journey
                </h2>
                <p className="text-sm mt-0 text-neutral-400/80 font-[Nokora]">
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
        <div className="flex flex-col gap-2 border-[0.5px] p-2 rounded-xl border-dashed border-neutral-500 md:border-none">
          <Card className="bg-[#1A1A1A] border-[#0F0F0F] rounded-3xl py-0 md:hidden">
            <CardContent className="p-4 text-white font-extralight text-sm gap-1 flex flex-col">
              <article className="flex gap-2">
                <img
                  src={dp}
                  className="rounded-full w-24 h-24 float-left"
                  alt="profile pic"
                />
                <p className="text-xl  font-light flex items-center font-[Space_Grotesk] text-neutral-200">
                  What started as curiosity became passion, and now it's
                </p>
              </article>
              <h1 className="text-lg text-neutral-500 text-left font-bold flex justify-center py-2 underline decoration-blue-500 font-[Space_Grotesk]">
                A full-time journey as a developer.
              </h1>
            </CardContent>
          </Card>
          <Card className="bg-[#1A1A1A]  rounded-3xl py-0 border border-[#0F0F0F] md:hidden">
            <CardContent className="p-4 text-white">
              <p className="text-4xl text-neutral-500 font-[Space_Grotesk]">
                {" "}
                B.TECH
              </p>
              <p className="text-3xl text-white font-[Space_Grotesk]">
                {" "}
                Computer Science
              </p>
            </CardContent>
          </Card>
          <div className="flex gap-2 md:hidden ">
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
          <Card className="bg-[#1A1A1A] border-[#0F0F0F] rounded-3xl py-0 md:hidden">
            <CardContent className="p-4 text-white font-[Space_Grotesk]">
              <p className="text-4xl text-neutral-500"> Junior</p>
              <p className="text-3xl text-white"> Frontend Developer</p>
            </CardContent>
          </Card>
          <Card className="bg-[#1A1A1A] border-[#0F0F0F] rounded-3xl py-0 md:hidden">
            <CardContent className="p-4 text-white font-extralight text-sm gap-5 flex flex-col items-center ">
              <LineSquiggle size={40} strokeWidth={0.7} opacity={0.5} />
              <p className="text-3xl font-[Space_Grotesk]  text-center">
                Wanna Work Together?
              </p>
              <Button
                size={"lg"}
                className="bg-[#292929] text-xl rounded-3xl py-7 px-10 shadow-2xl text-neutral-400 font-[Space_Grotesk]"
              >
                View Resume <ArrowUpRight className="p-0 m-0" />
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className="hidden md:grid md:grid-cols-3 gap-2 pt-14">
          <div className="h-full">
            <Card className="bg-[#1A1A1A] border-[#0F0F0F] rounded-3xl py-0 h-full">
              <CardContent className="p-4 text-white font-extralight text-sm gap-1 flex flex-col my-auto">
                <img
                  src={dp}
                  className="rounded-full w-20 h-20 "
                  alt="profile pic"
                />
                <p className="text-4xl  font-extralight flex items-center font-[Space_Grotesk]">
                  Whàt stàrted às curiosity becàme pàssion, and now it's
                </p>

                <h1 className="text-lg text-neutral-500 font-semibold flex justify-start py-2 underline decoration-blue-500 font-[Space_Grotesk]">
                  a full-time journey as a Developer.
                </h1>
              </CardContent>
            </Card>
          </div>
          <div className="flex gap-2 flex-col my-auto">
            <Card className="bg-[#1A1A1A]  rounded-3xl py-0 border border-[#0F0F0F]">
              <CardContent className="p-4 text-white gap-1">
                <p className="text-3xl text-gray-600 font-[Space_Grotesk]">
                  {" "}
                  B.TECH
                </p>
                <p className="text-2xl text-white font-[Space_Grotesk]">
                  {" "}
                  Computer Science
                </p>
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
                <p className="text-3xl text-gray-600 font-[Space_Grotesk]">
                  {" "}
                  Junior
                </p>
                <p className="text-2xl text-white font-[Space_Grotesk]">
                  {" "}
                  Frontend Developer
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center ">
            <Card className="bg-[#1A1A1A] border-[#0F0F0F] rounded-3xl py-0">
              <CardContent className="p-4 text-white font-extralight text-sm gap-5 md:gap-0 flex flex-col py-8 items-center justify-evenly h-full ">
                <LineSquiggle
                  size={40}
                  className="md:hidden"
                  strokeWidth={0.7}
                  opacity={0.5}
                />
                <LineSquiggle
                  size={60}
                  className="hidden md:flex"
                  strokeWidth={0.7}
                  opacity={0.5}
                />
                <p className="text-3xl flex justify-center text-center font-[Space_Grotesk]">
                  Wanna Work Together?
                </p>
                <Button
                  size={"lg"}
                  className="bg-[#292929] text-xl rounded-3xl py-7 px-10 shadow-2xl text-gray-400 font-[Space_Grotesk]"
                >
                  View Resume
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
