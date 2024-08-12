"use client";
import React from "react";
import { FaMailBulk } from "react-icons/fa";
import AltButton from "@/components/ui/AltButton";

import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "@/utils/animation";

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
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);

  return (
    <div className="h-[90vh] flex flex-col justify-center items-center bg-[url('../public/images/home1.jpeg')] bg-no-repeat bg-cover bg-top bg-black/30 bg-blend-overlay">
      <div className="w-1/2 flex flex-col justify-center items-center gap-y-12">
        <h1
          className="text-white text-5xl font-bold text-center opacity-0 translate-y-20"
          id="features_title"
        >
          O&B Apparels
        </h1>
        <p className=" text-[#d9d7d7] lg:w-2/3 font-normal text-md text-center g_text opacity-0 translate-y-100">
          O & B Apparel brings you exquisteness,luxury and affordability in
          varieties. We only look forward to satisfying our customers in the
          most beautiful manner.Our product helps to bring the best in you.
        </p>
        <a href="#contact" className="g_text opacity-0 translate-y-100">
          <AltButton
            title="Contact Us"
            icon={<FaMailBulk />}
            position="right"
          />
        </a>
      </div>
    </div>
  );
};

export default Home;
