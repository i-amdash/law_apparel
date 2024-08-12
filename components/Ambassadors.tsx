"use client";
import React from "react";
import { HiStar } from "react-icons/hi";
import { ambassadors, goldPkg, heroImg } from "@/utils";
import { InfiniteAmbassadorCards } from "./ui/InfiniteAmbassadorCards";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "@/utils/animation";

const Ambassadors = () => {
  useGSAP(() => {
    animateWithGsap("#ambassador_title", { y: 0, opacity: 1 });
    animateWithGsap(
      ".g_grow",
      { scale: 1, opacity: 1, ease: "power1" },
      { scrub: 5.5 }
    );
    animateWithGsap(".ambassador_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 2,
    });
    animateWithGsap(".p_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 4,
    });
  }, []);

  return (
    <div className="h-screen flex flex-col bg-slate-950">
      <div className="lg:px-24 px-8 py-12">
        <div className=" py-2">
          <h2
            className="text-white font-semibold text-4xl opacity-0 translate-y-20"
            id="ambassador_title"
          >
            Meet our Extraordinary <br />
            <span className="text-[#7B5D42]">College Ambassadors</span>
          </h2>
        </div>
        <div className=" py-2">
          <p className="text-[#cccaca] font-normal text-md ambassador_text opacity-0 translate-y-100">
            A group of young spirited individuals <br />
            who have decided to take up the mantle <br />
            to uphold the true essence of being <br />a legal luminary
          </p>
        </div>
      </div>
      <div className="h-[60vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
        <InfiniteAmbassadorCards
          items={ambassadors}
          direction="left"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default Ambassadors;

const AmbassadorsCard = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => {
  return (
    <div
      className="p-8 rounded-xl w-100 bg-red bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="pt-28 p-8">
        <HiStar height={80} width={80} color="#F1CF64" />
        <div className="pt-4">
          <h2 className="text-2xl font-semibold text-white">{title}</h2>
        </div>
        <div className="pt-2">
          <p className="text-md text-[#eeeeee] font-normal">{description}</p>
        </div>
      </div>
    </div>
  );
};
