import Image from "next/image";

import HeroSection from "./components/herosection";
import Feature from "./components/feature";
import Experts from "./components/experts";
import Service from "./components/service";
import Categories from "./components/categories";
import Equipment from "./components/equipment";
import Contact from "./components/contact";
import Footer from "./components/footer";
export default function Home() {
  return (
    <div>
     <HeroSection />
     <Feature />
     <Experts />
     <Service />
     <Categories />
     <Equipment />
     <Contact />
     <Footer />
    </div>
  );
}
