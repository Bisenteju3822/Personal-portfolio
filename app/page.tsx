//import Encryption from "@/components/main/Encryption";
import Hero from "@/Components/main/Hero";
//import Projects from "@/components/main/Projects";
import Skills from "@/Components/main/Skills";
import Encryption from "@/Components/main/Encryption";
import Projects from "@/Components/main/Projects";
import Image from "next/image";
import Footer from "@/Components/main/Footer";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col   gap-20">
        <Hero />
        <Skills />
        <Encryption/>
        <Projects/>
        <Footer/>
      
      
      </div>
    </main>
  );
}