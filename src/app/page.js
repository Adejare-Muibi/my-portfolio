import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Header/>
      <About/>
      <Services/>
      <Portfolio/>
      <Contact/>
    </main>
  );
}
