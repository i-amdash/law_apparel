"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { stories } from "../../utils";
import { useGSAP } from "@gsap/react";

const SlidingCarousel = () => {
  const [activeStory, setActiveStory] = useState(0);
  const [direction, setDirection] = useState("next");
  const storyTimeoutRef = useRef(null);
  const cursorRef = useRef(null);
  const cursorTextRef = useRef(null);

  useEffect(() => {
    const storyTimeout = setTimeout(() => changeStory(), 4000);
    storyTimeoutRef.current = storyTimeout;
    return () => clearTimeout(storyTimeout);
  }, [activeStory, direction]);

  const changeStory = () => {
    const nextStory = direction === "next" ? (activeStory + 1) % stories.length : (activeStory - 1 + stories.length) % stories.length;
    setActiveStory(nextStory);
    animateStoryTransition();
  };

  

  const animateStoryTransition = () => {
    gsap.to(".profile-name p", { y: direction === "next" ? -24 : 24, duration: 0.5 });
    gsap.to(".title-row h1", { y: direction === "next" ? -48 : 48, duration: 0.5 });
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    gsap.to(cursorRef.current, {
      x: clientX - cursorRef.current.offsetWidth / 2,
      y: clientY - cursorRef.current.offsetHeight / 2,
      ease: "power2.inOut",
      duration: 0.3,
    });
    setDirection(clientX < window.innerWidth / 2 ? "prev" : "next");
    cursorTextRef.current.textContent = clientX < window.innerWidth / 2 ? "Prev" : "Next";
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black cursor-none" onMouseMove={handleMouseMove}>
      <div ref={cursorRef} className="absolute w-24 h-24 bg-white bg-opacity-10 rounded-full flex items-center justify-center pointer-events-none z-20 backdrop-blur-sm">
        <p ref={cursorTextRef} className="text-xs text-white uppercase"></p>
      </div>

      <div className="absolute inset-0 opacity-50 overflow-hidden story-img">
        <img src={stories[activeStory].storyImg} alt="" className="absolute w-full h-full object-cover img" />
      </div>

      <div className="absolute top-1/2 left-1/2 w-1/3 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-between py-16">
        <div className="flex items-center gap-4 mb-8 profile">
          <div className="relative w-10 h-10 rounded-full overflow-hidden profile-icon">
            <img src={stories[activeStory].profileImg} alt={stories[activeStory].profileName} />
          </div>
          <div className="relative w-48 profile-name">
            <p className="absolute text-white">{stories[activeStory].profileName}</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 title">
          {stories[activeStory].title.map((line, index) => (
            <div key={index} className="relative h-10 title-row">
              <h1 className="absolute text-2xl text-white">{line}</h1>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <a href={stories[activeStory].linkSrc} target="_blank" rel="noopener noreferrer" className="relative text-white after:content-[''] after:absolute after:left-0 after:top-full after:w-full after:h-px after:bg-white">
            {stories[activeStory].linkLabel}
          </a>
        </div>
      </div>
    </div>
  );
};

export default SlidingCarousel;
