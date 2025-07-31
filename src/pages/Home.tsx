import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Overlay from "@/components/Overlay";
import OverlayRight from "@/components/OverlayRight";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import { Toaster } from "@/components/ui/sonner";


const Home = () => {
  return (
    <div className="bg-black w-screen h-screen ">
      {/* <Overlay/> */}
      {/* <OverlayRight/> */}
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
