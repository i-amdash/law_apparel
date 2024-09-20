"use client"
import { FaShoppingBag } from "react-icons/fa";
import AltButton from "@/components/ui/AltButton";

import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "@/utils/animation";
import ImageCarousel from "@/components/ui/ImageCarousel";
import MobileImageCarousel from "@/components/ui/MobileImageCarousel";
import { delay } from "framer-motion";

const Home = () => {
  useGSAP(() => {
    animateWithGsap("#features_title", { y: 0, opacity: 1 });
    animateWithGsap(
      ".g_grow",
      { scale: 1, opacity: 1, ease: "power1" },
      { scrub: 5.5 }
    );
    animateWithGsap(".g_text", {
      y: 0,
      opacity: 1,
      duration: 0.5,
      delay: 0.4
    });
  }, []);

  return (
    <div className="h-[90vh] w-full overflow-x-hidden flex flex-col lg:flex-row justify-between items-center">
      <MobileImageCarousel />
      <ImageCarousel />
      <div className=" absolute left-0 right-0 top-96 lg:top-72 flex flex-col justify-between items-center gap-8 z-10">
        <h1
          className="text-[#ECBE07] text-[3rem] md:text-[7rem] font-light text-center opacity-0 translate-y-10"
          id="features_title"
        >
          O&B Apparels
        </h1>
        {/* <p className=" text-[#ffffff] font-normal text-sm md:text-md text-center g_text opacity-0 translate-y-100">
          Exquisiteness & Affordability
        </p>
        <a href="/shop" className="g_text opacity-0 translate-y-100">
          <AltButton
            title="Our Products"
            icon={<FaShoppingBag />}
            position="right"
          />
        </a> */}
      </div>
    </div>
  );
};

export default Home;

{
  /* <Image 
      src={homeImg1}
      className="object-cover md:object-contain h-[90vh] lg:hidden bg-black brightness-75"
      alt="home-img"
      /> */
}
{
  /* <Image 
      src={homeImage}
      className="object-cover object-top w-full h-[90vh] hidden lg:flex bg-black brightness-75"
      alt="home-img"
      />
      <Image 
      src={homeImg3}
      className="object-contain h-[90vh] hidden"
      alt="home-img"
      /> */
}
