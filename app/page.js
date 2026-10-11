import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Barnds from "@/components/sections/Barnds";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Create from "@/components/sections/Create";
import Pipeline from "@/components/sections/Pipeline";
import Process from "@/components/sections/Process";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import ShowReel from "@/components/sections/ShowReel";
export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Barnds />
        <ShowReel />
        <About />
        <Work />
        <Create />
        <Pipeline />
        <Process />
        <Faq />
        <Contact />
      </main>
    </>
  );
}
