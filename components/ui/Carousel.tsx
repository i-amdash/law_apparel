// import { useEffect, useState } from 'react';
// import { gsap } from 'gsap';
// import { stories } from '@/utils'; // assuming data is imported from somewhere

// type Story = {
//   profileName: string;
//   title: string[];
//   storyImg: string;
//   profileImg: string;
//   linkLabel: string;
//   linkSrc: string;
// };

// export const CarouselSlider = () => {
//   const [activeStory, setActiveStory] = useState<number>(0);
//   const [direction, setDirection] = useState<'next' | 'prev'>('next');

//   const storyDuration = 4000;
//   const contentUpdateDelay = 0.4;
//   let storyTimeout: ReturnType<typeof setTimeout>;

//   const changeStory = () => {
//     const previousStory = activeStory;
//     setActiveStory((prev) =>
//       direction === 'next' ? (prev + 1) % stories.length : (prev - 1 + stories.length) % stories.length
//     );
//     const story = stories[activeStory];

//     gsap.to('.profile-name p', {
//       y: direction === 'next' ? -24 : 24,
//       duration: 0.5,
//       delay: contentUpdateDelay,
//     });
//     gsap.to('.title-row h1', {
//       y: direction === 'next' ? -48 : 48,
//       duration: 0.5,
//       delay: contentUpdateDelay,
//     });

//     const currentImageContainer = document.querySelector('.story-img .img') as HTMLElement;
//     const currentImg = currentImageContainer.querySelector('img');

//     setTimeout(() => {
//       const profileNameDiv = document.querySelector('.profile-name') as HTMLElement;

//       const newProfileName = document.createElement('p');
//       newProfileName.innerText = story.profileName;
//       newProfileName.style.transform = direction === 'next' ? 'translateY(24px)' : 'translateY(-24px)';
//       profileNameDiv.appendChild(newProfileName);

//       gsap.to(newProfileName, {
//         y: 0,
//         duration: 0.5,
//         delay: contentUpdateDelay,
//       });

//       const titleRows = document.querySelectorAll('.title-row');
//       titleRows.forEach((titleRow, index) => {
//         const newTitle = document.createElement('h1');
//         newTitle.innerText = story.title[index];
//         newTitle.style.transform = direction === 'next' ? 'translateY(48px)' : 'translateY(-48px)';
//         titleRow.appendChild(newTitle);

//         gsap.to(newTitle, {
//           y: 0,
//           duration: 0.5,
//           delay: contentUpdateDelay,
//         });
//       });

//       const newImgContainer = document.createElement('div');
//       newImgContainer.classList.add('img');
//       const newStoryImg = document.createElement('img');
//       newStoryImg.src = story.storyImg;
//       newImgContainer.appendChild(newStoryImg);

//       const storyImgDiv = document.querySelector('.story-img') as HTMLElement;
//       storyImgDiv.appendChild(newImgContainer);

//       animateNewImage(newImgContainer);
//       animateImageScale(currentImg, newStoryImg);

//       clearTimeout(storyTimeout);
//       storyTimeout = setTimeout(changeStory, storyDuration);
//     }, 200);
//   };

//   const animateNewImage = (imgContainer: HTMLElement) => {
//     gsap.set(imgContainer, {
//       clipPath:
//         direction === 'next'
//           ? 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)'
//           : 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
//     });

//     gsap.to(imgContainer, {
//       clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
//       duration: 1,
//       ease: 'power4.inOut',
//     });
//   };

//   const animateImageScale = (currentImg: HTMLElement, upcomingImg: HTMLElement) => {
//     gsap.fromTo(
//       currentImg,
//       { scale: 1, rotate: 0 },
//       {
//         scale: 2,
//         rotate: direction === 'next' ? -25 : 25,
//         duration: 1,
//         ease: 'power4.inOut',
//         onComplete: () => {
//           if (currentImg.parentElement) {
//             currentImg.parentElement.remove();
//           }
//         },
//       }
//     );
//     gsap.fromTo(
//       upcomingImg,
//       { scale: 2, rotate: direction === 'next' ? 25 : -25 },
//       { scale: 1, rotate: 0, duration: 1, ease: 'power4.inOut' }
//     );
//   };

//   useEffect(() => {
//     storyTimeout = setTimeout(changeStory, storyDuration);
//     const changeStory = () => {
//       const previousStory = activeStory;
//       setActiveStory((prev) =>
//         direction === 'next' ? (prev + 1) % stories.length : (prev - 1 + stories.length) % stories.length
//       );
//       const story = stories[activeStory];
  
//       gsap.to('.profile-name p', {
//         y: direction === 'next' ? -24 : 24,
//         duration: 0.5,
//         delay: contentUpdateDelay,
//       });
//       gsap.to('.title-row h1', {
//         y: direction === 'next' ? -48 : 48,
//         duration: 0.5,
//         delay: contentUpdateDelay,
//       });
  
//       const currentImageContainer = document.querySelector('.story-img .img') as HTMLElement;
//       const currentImg = currentImageContainer.querySelector('img');
  
//       setTimeout(() => {
//         const profileNameDiv = document.querySelector('.profile-name') as HTMLElement;
  
//         const newProfileName = document.createElement('p');
//         newProfileName.innerText = story.profileName;
//         newProfileName.style.transform = direction === 'next' ? 'translateY(24px)' : 'translateY(-24px)';
//         profileNameDiv.appendChild(newProfileName);
  
//         gsap.to(newProfileName, {
//           y: 0,
//           duration: 0.5,
//           delay: contentUpdateDelay,
//         });
  
//         const titleRows = document.querySelectorAll('.title-row');
//         titleRows.forEach((titleRow, index) => {
//           const newTitle = document.createElement('h1');
//           newTitle.innerText = story.title[index];
//           newTitle.style.transform = direction === 'next' ? 'translateY(48px)' : 'translateY(-48px)';
//           titleRow.appendChild(newTitle);
  
//           gsap.to(newTitle, {
//             y: 0,
//             duration: 0.5,
//             delay: contentUpdateDelay,
//           });
//         });
  
//         const newImgContainer = document.createElement('div');
//         newImgContainer.classList.add('img');
//         const newStoryImg = document.createElement('img');
//         newStoryImg.src = story.storyImg;
//         newImgContainer.appendChild(newStoryImg);
  
//         const storyImgDiv = document.querySelector('.story-img') as HTMLElement;
//         storyImgDiv.appendChild(newImgContainer);
  
//         animateNewImage(newImgContainer);
//         animateImageScale(currentImg, newStoryImg);
  
//         clearTimeout(storyTimeout);
//         storyTimeout = setTimeout(changeStory, storyDuration);
//       }, 200);
//     };
  
//     const animateNewImage = (imgContainer: HTMLElement) => {
//       gsap.set(imgContainer, {
//         clipPath:
//           direction === 'next'
//             ? 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)'
//             : 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
//       });
  
//       gsap.to(imgContainer, {
//         clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
//         duration: 1,
//         ease: 'power4.inOut',
//       });
//     };
  
//     const animateImageScale = (currentImg: HTMLElement, upcomingImg: HTMLElement) => {
//       gsap.fromTo(
//         currentImg,
//         { scale: 1, rotate: 0 },
//         {
//           scale: 2,
//           rotate: direction === 'next' ? -25 : 25,
//           duration: 1,
//           ease: 'power4.inOut',
//           onComplete: () => {
//             if (currentImg.parentElement) {
//               currentImg.parentElement.remove();
//             }
//           },
//         }
//       );
//       gsap.fromTo(
//         upcomingImg,
//         { scale: 2, rotate: direction === 'next' ? 25 : -25 },
//         { scale: 1, rotate: 0, duration: 1, ease: 'power4.inOut' }
//       );
//     };
//     return () => clearTimeout(storyTimeout);
//   }, [activeStory]);

//   return (
//     <div className="relative w-screen h-screen">
//       <div className="cursor absolute flex items-center justify-center bg-white/10 backdrop-blur-lg rounded-full w-24 h-24 z-10 pointer-events-none">
//         <p>Prev</p>
//       </div>

//       <div className="story-img absolute w-full h-full opacity-50">
//         <div className="img relative w-full h-full">
//           <img src="assets/home.png" alt="story" className="w-full h-full object-cover" />
//         </div>
//       </div>

//       <div className="story-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md px-6">
//         <div className="indices flex space-x-2 mb-4">
//           {stories.map((_, index) => (
//             <div key={index} className="index w-full h-1 bg-white/25">
//               <div className="index-highlight w-0 bg-white h-full"></div>
//             </div>
//           ))}
//         </div>

//         <div className="profile flex items-center space-x-4">
//           <div className="profile-icon rounded-full overflow-hidden w-12 h-12">
//             <img src="assets/about.jpeg" alt="profile" />
//           </div>
//           <div className="profile-name">
//             <p>Alice</p>
//           </div>
//         </div>

//         <div className="title">
//           <div className="title-row">
//             <h1>For all the</h1>
//           </div>
//           <div className="title-row">
//             <h1>sacrifices, self</h1>
//           </div>
//           <div className="title-row">
//             <h1>deprivations, disciplines</h1>
//           </div>
//         </div>

//         <div className="link mt-4">
//           <a href="https://behance.net" target="_blank" className="text-white">
//             Read More
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };
