import Image from "next/image";
import Hero from "./components/Home/Hero";
import Aboutus from "./components/Home/Aboutus"
import Ourservice from "./components/Home/Ourservice"
import Partners from "./components/Home/Partners"
import Meetus from "./components/Home/Meetus"

export default function Home() {
  return (
    <div>
      {/* <h1 className="py-8 text-3xl" >hello world, THis is home page </h1> */}
      <Hero />
      <Aboutus />
      <Ourservice />
      <Partners />
      <Meetus />
    </div>
  );
}
