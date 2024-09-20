"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { heroImg, heroImg2, heroImg3, heroImg4 } from "@/utils";
import Image from "next/image";
import Shop from "@/app/(pages)/(shop)/shop/(routes)/page";

gsap.registerPlugin(ScrollTrigger);

export default function Transition() {
  const textRef = useRef(null);
  const secondTextRef = useRef(null);
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    

    gsap.ticker.lagSmoothing(0);

    const triggers = [
      ScrollTrigger.create({
        trigger: ".pinned",
        start: "top top",
        endTrigger: ".whitespace",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
      }),
      ScrollTrigger.create({
        trigger: ".header-info",
        start: "top top",
        endTrigger: ".whitespace",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
      }),
      ScrollTrigger.create({
        trigger: ".pinned",
        start: "top top",
        endTrigger: ".header-info",
        end: "bottom bottom",
        onUpdate: (self) => {
          const rotation = self.progress * 360;
          gsap.to(".revealer", { rotation });
        },
      }),
      ScrollTrigger.create({
        trigger: ".pinned",
        start: "top top",
        endTrigger: ".header-info",
        end: "bottom bottom",
        onUpdate: (self) => {
          const progress = self.progress;
          const clipPath = `polygon(
              ${45 - 45 * progress}% ${0 + 0 * progress}%,
              ${55 + 45 * progress}% ${0 + 0 * progress}%,
              ${55 + 45 * progress}% ${100 - 0 * progress}%,
              ${45 - 45 * progress}% ${100 - 0 * progress}%
              )`;
          gsap.to([".revealer-1", ".revealer-2"], {
            clipPath: clipPath,
            ease: "none",
            duration: 0,
          });
        },
      }),
      ScrollTrigger.create({
        trigger: ".header-info",
        start: "top top",
        end: "bottom 50%",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const left = 35 + 15 * progress;
          gsap.to(".revealer", {
            left: `${left}%`,
            ease: "none",
            duration: 0,
          });
        },
      }),
      ScrollTrigger.create({
        trigger: ".whitespace",
        start: "top 50%",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          const viewportWidth = window.innerWidth;
          const viewportHeight = window.innerHeight;
        
          // Calculate the scale factor based on the viewport size
          const maxScaleFactor = Math.max(viewportWidth, viewportHeight) / 100;
        
          // Scale up the element based on the scroll progress
          let scaleUp = 1 + maxScaleFactor * self.progress;
        
          // Define a GSAP timeline
          const tl = gsap.timeline();

          if (self.progress === 1) {
            scaleUp = viewportWidth / document.querySelector('.revealer').offsetWidth;
          }
        
          // Add the scale-up animation
          tl.to(".revealer", {
            scale: scaleUp,
            ease: "none",
            transformOrigin: "center center",
            duration: 0, // Ensure the animation happens instantly based on the scroll
          });
        
          // Scale back to 1 when the scroll is complete
          // if (self.progress === 1) {
          //   tl.to(".revealer", {
          //     scale: maxScaleFactor,
          //     ease: "none",
          //     transformOrigin: "center center",
          //     duration: 3, // Adjust the duration for the scaling back effect
          //   });
          // }
        },
        
      }),
    ];

    gsap.fromTo(
      [textRef.current, secondTextRef.current], 
      { opacity: 0, y: 50 },  // Initial state: invisible and shifted down
      {
        opacity: 1, 
        y: 0,  // Final state: visible and in place
        scrollTrigger: {
          trigger: [textRef.current, secondTextRef.current],  // Element to be watched
          start: "top 80%",  // When the top of the element is at 80% of the viewport height
          end: "bottom 60%", // When the bottom of the element reaches 20% of the viewport
          scrub: true,  // Smoothly animates as you scroll
          toggleActions: "play none none reverse"  // Animation actions
        }
      }
    );

    return () => {
      triggers.forEach((trigger) => trigger.kill());
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <div className="container">
      <section className="info w-[100vw] h-[90vh] bg-slate-950 text-white">
        <div className="header-rows max-w-[90rem] mx-auto">
          <div className="header-row md:h-64 flex items-center justify-start py-2 md:py-0 md:px-8">
            <h1 ref={textRef} className="text-4xl md:text-[7rem] header-text-1">Exquisiteness</h1>
          </div>
          <div className="header-row md:h-64 flex items-center justify-end md:px-8">
            <h1 ref={secondTextRef} className="text-4xl md:text-[7rem] header-text-2">Affordability</h1>
          </div>
        </div>
      </section>

      <section className="header-info relative h-[100vh] w-[100vw] bg-slate-950 text-white flex flex-col justify-between p-4">
        <div className="flex flex-row justify-between max-w-[90rem] mx-auto">
          <p className="text-lg font-light w-1/3">About Us</p>
          <p className="text-xl font-light w-1/2 text-justify">
            O & B Apparel brings you exquisiteness, luxury, and affordability in
            varieties. We only look forward to satisfying our customers in the
            most beautiful manner.Our product helps to bring the best in you.
            <br /> <br />
            For all the sacrifices, self-deprivations, disciplines, devotion and
            perseverance that can never be measured or quantified.
          </p>
        </div>
        <div className="header-images h-[250px] w-[100%] p-4 flex gap-4">
          <div className="img">
            <Image
              src={heroImg}
              className="w-[100%] h-[100%] object-cover"
              alt="About"
            />
          </div>
          <div className="img">
            <Image
              src={heroImg2}
              className="w-[100%] h-[100%] object-cover"
              alt="About"
            />
          </div>
          <div className="img">
            <Image
              src={heroImg3}
              className="w-[100%] h-[100%] object-cover"
              alt="About"
            />
          </div>
          <div className="img">
            <Image
              src={heroImg4}
              className="w-[100%] h-[100%] object-cover"
              alt="About"
            />
          </div>
        </div>
      </section>

      <section className="whitespace relative h-[300vh] w-[100vw] bg-slate-950 z-[-1]"></section>

      <section className="pinned absolute top-[72vh] md:top-[100vh] w-[100vw] h-[150vh] z-2">
        <div className="revealer absolute transform -translate-x-1/2 left-[35%] mt-[325px] w-[120px] h-[120px]">
          <div
            className="revealer-1 absolute top-0 left-0 w-[70%] h-[70%] md:w-[100%] md:h-[100%] bg-white"
            style={{ clipPath: "polygon(45% 0%, 55% 0%, 55% 100%, 45% 100%)" }}
          ></div>
          <div
            className="revealer-2 absolute top-0 left-0 w-[70%] h-[70%] md:w-[100%] md:h-[100%] bg-white rotate-90"
            style={{ clipPath: "polygon(45% 0%, 55% 0%, 55% 100%, 45% 100%)" }}
          ></div>
        </div>
      </section>

      <section className="website-content relative h-[150vh] w-[100vw] z-10 bg-white overflow-x-hidden">
        {/* <h1 className="text-5xl">
          For all the sacrifices, self-deprivations, disciplines, devotion and
          perseverance that can never be measured or quantified.
        </h1> */}
        <Shop />
      </section>
    </div>
  );
}
