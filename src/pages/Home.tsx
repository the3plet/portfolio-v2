import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import { Toaster } from "@/components/ui/sonner";
import { preloadImages } from "@/lib/preloadImages";
import { useEffect, useState } from "react";

import bg from "/bg-img.png";
import logo from "/logo.png";
import Loader from "@/components/Loader";
import { Globe } from "@/components/ui/globe";


const Home = () => {
    const [ready, setReady] = useState(false);

     useEffect(() => {
    preloadImages([bg, logo]).then(() => {
      setReady(true);
    });
  }, []);

  if (!ready) return <Loader />;
  return (
    <div className="bg-black w-screen h-screen ">
     
      <Toaster richColors position="bottom-center"/>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Stack />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
