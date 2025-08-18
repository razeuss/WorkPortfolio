"use client";
import Header from "@/component/Header";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import SlideUp from "@/component/Slideup";
import InstagramIcon from "@/component/icons/Instagram";
import GithubIcon from "@/component/icons/Github";
import LinkedinIcon from "@/component/icons/Linkedin";
import GmailIcon from "@/component/icons/Gmail";
import Stack from "@/component/icons/Teckstack";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
  }, []);

  const getCellWidth = () => {
    if (!scrollRef.current) return 0;
    const children = scrollRef.current.querySelectorAll<HTMLElement>(".cell");
    if (children.length < 2) return children[0]?.offsetWidth || 0;
    return children[1].offsetLeft - children[0].offsetLeft;
  };


  const scroll = (direction: "left" | "right") => {
  if (!scrollRef.current) return;

  const container = scrollRef.current;
  const scrollAmount = getCellWidth();
  const start = container.scrollLeft;
  const end = start + (direction === "left" ? -scrollAmount : scrollAmount);
  const duration = 1500; // ms — make this higher for slower scroll
  const startTime = performance.now();

  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

  const animate = (time: number) => {
    const elapsed = time - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutCubic(progress);

    container.scrollLeft = start + (end - start) * easedProgress;

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      checkScroll();
    }
  };

  requestAnimationFrame(animate);
};




  const [time, setTime] = useState("");

   useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
        timeZone: "Asia/Manila",
      };

      const date = new Date();
      const formatted = new Intl.DateTimeFormat("en-PH", options).format(date);
      setTime(formatted.toLowerCase());
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col relative">  
      <main className="flex-grow w-full mx-auto z-10 relative">
        <Header/>
        <section className="relative w-full h-screen flex flex-col">

          <div className="h-7/9 bg-[#f8f9fa] flex items-center justify-center overflow-hidden relative">

            
              <div className="absolute -top-[50px] text-[#f8f9fa] font-black text-[400px] leading-60 tracking-tighter z-0 text-center pointer-events-none select-none" style={{ textShadow: "-20px 15px 30px rgba(0,0,0,0.015)" }}>
                ui/uxdesigner
              </div>
              <div className="absolute top-[190px] text-[#f8f9fa] font-black text-[400px] leading-60 tracking-tighter z-2 text-center pointer-events-none select-none" style={{ textShadow: "-20px 15px 30px rgba(0,0,0,0.02)" }}>
                <span style={{ textShadow: "-20px 15px 30px rgba(0,0,0,0.06)" }}>rsoftware&</span>web<br/>
              </div>
              <div className="absolute top-[190px] text-[#f8f9fa] font-black text-[400px] leading-60 tracking-tighter z-1 text-center pointer-events-none select-none" style={{ textShadow: "-20px 15px 30px rgba(0,0,0,0.02)" }}>
                <br/>veloperand<span style={{ textShadow: "-20px 15px 30px rgba(0,0,0,0.05)" }}>webdev</span>eloper
              </div>
              <div className="absolute top-[660px] text-[#f8f9fa] font-black text-[400px] leading-60 tracking-tighter z-0 text-center pointer-events-none select-none" style={{ textShadow: "-20px 15px 30px rgba(0,0,0,0.015)" }}>
                webflowdesigner
              </div>
           
        

        
            <div className="z-10 w-[70%] text-[#333333] font-bold text-9xl leading-30 flex flex-col items-start text-start">
              <h1 className="tracking-tighter mb-5">
                Software & Web<br />
                developer
              </h1>
              <div className="text-2xl font-medium tracking-tighter p-2">
                <p className="text-[#333333] mb-15">Crafting responsive and accessible interfaces.</p>
                <div className="inline-flex items-center bg-[#f0f0f0] px-6 py-2 text-2xl font-medium rounded-[30px]">
                  <span className="absolute w-4 h-4 bg-green-500 rounded-full mr-3 animate-ping"></span>
                  <span className="relative w-4 h-4 bg-green-500 rounded-full mr-3"></span>
                  Available for work
                </div>
              </div>
            </div>
          </div>

          <section className="h-2/5 bg-[#f8f9fa]">
                <SlideUp className="h-full"> 
                      <div className="h-full rounded-[20px] flex items-center justify-center flex flex-col pb-30 gap-6">

                        <div className="flex items-center justify-center gap-6">
                           <div className="h-20 w-20 rounded-[20px] shadow-[-5px_5px_5px_rgba(0,0,0,0.3)] hover:shadow-[-10px_8px_5px_rgba(0,0,0,0.3)] hover:scale-107 transition-all duration-200">
                              <GithubIcon className="w-full h-full" />
                          </div>
                          <div className="h-20 w-20 rounded-[20px] shadow-[-5px_5px_5px_rgba(0,0,0,0.3)] hover:shadow-[-10px_8px_5px_rgba(0,0,0,0.3)] hover:scale-107 transition-all duration-200">
                              <InstagramIcon className="w-full h-full" />
                          </div>
                          <div className="h-20 w-20 rounded-[20px] shadow-[-5px_5px_5px_rgba(0,0,0,0.3)] hover:shadow-[-10px_8px_5px_rgba(0,0,0,0.3)] hover:scale-107 transition-all duration-200">
                              <LinkedinIcon className="w-full h-full" />
                          </div>
                          <div className="h-20 w-20 rounded-[20px] shadow-[-5px_5px_5px_rgba(0,0,0,0.3)] hover:shadow-[-10px_8px_5px_rgba(0,0,0,0.3)] hover:scale-107 transition-all duration-200">
                              <GmailIcon className="w-full h-full " />
                          </div>
                        </div>

                        <div className="font-bold text-xl text-[#333333] tracking-tighter text-center">
                          Feel free to contact me. You can also check these links <br/>to check some of my projects.
                        </div>
                    
                      </div>
                </SlideUp>
          </section>
          
        </section>
        
        
        <div className="h-auto py-30 bg-white flex flex-col items-center justify-center relative">
          <div className="pb-20 w-[70%] flex justify-start">
            <SlideUp>
              <div className="font-bold text-6xl text-[#333333] tracking-tighter">
                Get to know me.
            </div>
            </SlideUp>
          </div>

          <div className="flex h-200 w-[70%] gap-10 justify-center">
            {/* Column 1 */}  
            <div className="w-[30%]">
              <SlideUp className="h-full">
                 <div className="bg-[#2c2c2c] h-full w-full rounded-[20px] overflow-hidden shadow-[0_0px_10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:shadow-[0_12px_10px_rgba(0,0,0,0.3)] hover:-translate-y-3 group">
                  <img src="myimg.jpg" alt="no img"  className="object-cover w-full h-full transition-all duration-500 group-hover:scale-105"/>
                </div>
              </SlideUp>  
            </div>

            {/* Column 2 */}
            <div className="w-[50%] flex flex-col gap-10">

              <div className="h-[70%] flex gap-6">
                <SlideUp className="flex-[65]"> 
                  <div className="h-full w-full flex flex-col bg-[#f0f0f0] rounded-[20px] p-10 justify-between">
                    <h1 className="text-4xl font-bold text-[#333333] tracking-tighter">Skills</h1>
                    <div className="flex flex-col">
                      <span className="text-xl text-[#333333] tracking-tighter">Web Development</span>
                      <span className="text-xl text-[#333333] tracking-tighter">Software Development</span>
                      <span className="text-xl text-[#333333] tracking-tighter">UI/UX Design</span>
                    </div>
                  </div>
                </SlideUp>
              </div>
              <SlideUp className="h-[30%]">
                <div className="bg-[#f0f0f0] h-full flex flex-col w-full rounded-[20px] p-10 gap-4 text-[#333333] justify-between">
                  <h1 className="font-bold text-4xl tracking-tighter">I'm Radz.</h1>
                  <p className="text-xl text-[#333333] tracking-tighter">A 4th-year Computer Science student at Mindanao State University - Iligan Institute of Technology.
                    I build mobile and desktop applications, with a strong focus on web development.</p>
                </div>
              </SlideUp>
            </div>

             
            <div className="w-[20%] flex flex-col gap-10">
              <SlideUp className="h-[90%]">
                  <div className="h-full w-full bg-[#f0f0f0] rounded-[20px] p-10 flex flex-col justify-between">
                    {time && <span className="text-4xl font-bold tracking-tighter text-[#333333] leading-15 px-1">{time}</span>}
                    <span className=" tracking-tighter text-[#999999] text-xl">Current local time</span>
                  </div>
                </SlideUp>

              <div className="h-[10%] hover:h-[20%] group transition-all duration-500">
                <SlideUp className="h-full"> 
                  <button className="bg-white border-[#333333] border-2 group-hover:border-[#333333] group-hover:bg-[#333333] h-full w-full rounded-[20px] shadow-[0_0px_10px_rgba(0,0,0,0.07)] flex 
                  justify-center items-center pb-2 px-10 relative overflow-hidden text-[#333333] group-hover:text-white group-hover:pt-8 transition-all duration-500 ">
                    
                    <div className="relative flex flex-col">
                      
                      <span className="text-4xl text-white font-bold absolute -translate-y-30 group-hover:-translate-y-8 opacity-0 group-hover:opacity-100 transition-all duration-500 tracking-tighter">
                        View
                      </span>

                      
                      <h1 className="text-4xl font-bold tracking-tighter z-10 leading-none">
                        Resume
                      </h1>

                    </div>

                  </button>
                </SlideUp>               
              </div>

            </div>
           
          </div>
        </div>

        <div className="h-auto w-full py-30 justify-center items-center flex flex-col w-full">

          <div className="pb-20 w-[70%]">
            <SlideUp>
              <div className="font-bold text-6xl text-[#333333] tracking-tighter">
                Experience
            </div>
            </SlideUp>
          </div>
          <SlideUp>

          <div className="h-200 justify-start flex items-center">
            <div ref={scrollRef} onScroll={checkScroll} className="flex gap-10 overflow-x-auto no-scrollbar z-0 h-full w-full px-[15%]"> 
                <div className="cell relative flex-shrink-0 gap-10 w-full h-full overflow-hidden rounded-[20px]">
                  <img src={`/exp/5.jpg`} alt={`Cell}`} className="w-full h-full object-cover bg-[#f0f0f0]"/>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-165 left-10 flex flex-col gap-1 text-white text-3xl font-bold tracking-normal">
                    <span className="text-lg font-medium">September 2023</span>
                    <span>Powered the computer applications department <br/>election with our voting system.</span>
                  </div>
                </div>

                 <div className="cell relative flex-shrink-0 w-full h-full rounded-[30px] overflow-hidden bg-gray-100">
                  <img src={`/exp/2.jpg`} alt="Cell" className="w-full h-full object-cover"/>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-transparent"></div>
                  <div className="absolute bottom-165 left-10 flex flex-col gap-1 text-white text-3xl font-bold tracking-normal">
                    <span className="text-lg font-medium">April 2024</span>
                    <span>Invited to showcase our system to computer <br/>programming students.</span>
                  </div>
                </div>

                <div className="cell relative flex-shrink-0 w-[100%] h-full rounded-[30px] overflow-hidden bg-gray-100">
                  <img src={`/exp/4.jpg`} alt={`Cell}`} className="w-full h-full object-cover"/>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent"></div>     
                  <div className="absolute bottom-165 left-10 flex flex-col gap-1 text-white text-3xl font-bold tracking-normal">
                    <span className="text-lg font-medium">June 2025</span>
                    <span>Won the first quantum computing <br/>and blockchain hackathon.</span>
                  </div>
                </div>
                
                 <div className="cell relative flex-shrink-0 w-[100%] h-full rounded-[30px] overflow-hidden bg-gray-100">
                  <img src={`/exp/1.jpg`} alt={`Cell}`} className="w-full h-full object-cover"/>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-transparent"></div>
                  <div className="absolute bottom-165 left-10 flex flex-col gap-1 text-white text-3xl font-bold tracking-normal">
                    <span className="text-lg font-medium">July 2025</span>
                    <span>Completed internship at <br/>anura innovations.</span>
                  </div>
                </div>
              </div>
          </div>
          </SlideUp>

          <div className=" gap-5 pt-10 flex justify-end gap-10 w-[70%]">

            {canScrollLeft && (
              <button onClick={() => scroll("left")} className="bg-[#f0f0f0] text-[#333333] shadow-md rounded-full p-2 z-10 hover:bg-[#555555] hover:text-[#f0f0f0] transition">
                <ChevronLeft size={30} />
              </button>
            )}

            
            {canScrollRight && (
              <button onClick={() => scroll("right")} className="bg-[#f0f0f0] text-[#333333] shadow-md rounded-full p-2 z-10 hover:bg-[#555555] hover:text-[#f0f0f0] transition">
                <ChevronRight size={30} />
              </button>)}

          </div>

        </div>


        <div className="h-auto flex flex-col justify-center items-center w-full bg-[#f0f0f0] py-30">
          <div className="w-[70%] pb-20">
            <SlideUp >
              <div className="font-bold text-6xl text-[#333333] tracking-tighter">
                Projects
              </div>
            </SlideUp>
          </div>

          <div className="w-[70%] flex justify-center">
            <div className="w-[50%] flex justify-end">
              <img src="designs/unib1.svg" alt="noimg" className="h-250"/>
            </div>

            <div className="flex flex-col justify-center items-start w-[50%] pb-40 gap-5">
              <div className="text-left w-auto text-[#333333] tracking-normal">
                <div className="pb-5">
                  <span className="text-lg font-medium">Design Project</span>
                  <div className="font-bold text-5xl pb-2">
                    UniBudget
                  </div>
                  <div className="flex text-sm gap-2 border-[#333333] tracking-normal ">
                    <span className="opacity-50 border-r-1 pr-2">
                      Figma
                    </span>
                  </div>
                </div>
                
                <p className="font-regular text-xl w-150 text-left">
                  Designed a mobile application prototype in Figma aimed at helping students
                   manage their finances effectively. The app allows users to track income, 
                  set spending limits, categorize expenses, and visualize their budget through
                   intuitive charts and summaries.
                </p>
              </div>
              <div className="flex gap-3">
                <a href="https://youtu.be/6396Tqet8HM" target="_blank" rel="noopener noreferrer" 
                className="inline-block px-6 py-2 bg-[#333333] text-white font-semibold rounded-[5px] shadow-[0_0px_10px_rgba(0,0,0,0.1)] 
                hover:bg-black duration-100 transition">
                  Demo
                </a>
                <a href="https://www.figma.com/design/dpFATJ036dPW76OrtMp0Mk/UniBudget?node-id=0-1&t=tSixzDPLnYMOwujB-1" target="_blank" rel="noopener noreferrer" 
                className="inline-block px-6 py-2 bg-white border-1 border-[#333333] text-[#333333] font-semibold rounded-[5px] shadow-[0_0px_10px_rgba(0,0,0,0.1)] 
                hover:bg-[#333333] hover:text-white duration-100 transition">
                  View Design
                </a>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center pl-[15%]">

            <div className="flex flex-col justify-center items-between w-[35%] pb-40 gap-5">
              <div className="text-left w-auto text-[#333333] tracking-tight">
                <div className="pb-5">
                  <span className="text-lg font-medium">Website Project</span>
                  <div className="font-bold text-5xl pb-2">
                    Anthill
                  </div>
                  <div className="flex text-sm tracking-normal border-[#333333] opacity-50">
                    <span className="pr-2">
                      Flask
                    </span>
                    <span className="px-2 border-r-1 border-l-1">
                      Python
                    </span>
                    <span className="px-2">
                      Bootstrap
                    </span>
                  </div>
                </div>
                
                <p className="font-regular text-xl text-left w-150">
                  Designed and developed a web-based platform made 
                  exclusively for IIT students to connect with employers and find 
                  opportunities such as part-time jobs, one-time projects,
                   and on-the-job training offers. It allows students to create profiles, 
                   showcase their skills, and apply for job postings, 
                  while employers can post job opportunities, review applicants, 
                  and manage engagements.
                </p>

              </div>
              <div className="flex gap-3">
                <a href="https://youtu.be/_rOwAOZ62zI?si=8GLDZ-KbxW7VJUj4" target="_blank" rel="noopener noreferrer" 
                className="inline-block px-6 py-2 bg-[#333333] text-white font-semibold rounded-[5px] shadow-[0_0px_10px_rgba(0,0,0,0.1)] 
                hover:bg-black duration-100 transition">
                  Demo
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" 
                className="inline-block px-6 py-2 bg-white border-1 border-[#333333] text-[#333333] font-semibold 
                rounded-[5px] shadow-[0_0px_10px_rgba(0,0,0,0.1)] hover:bg-[#333333] hover:text-white duration-100 transition">
                  View Code
                </a>
                <a href="https://www.figma.com/design/HHo2LSlDqYcMS93JMyKj05/CCC181?node-id=160-29&t=OEsGBzWeUwGbbrCO-1" target="_blank" rel="noopener noreferrer" 
                className="inline-block px-6 py-2 bg-white border-1 border-[#333333] text-[#333333] font-semibold rounded-[5px] 
                shadow-[0_0px_10px_rgba(0,0,0,0.1)] hover:bg-[#333333] hover:text-white duration-100 transition">
                  View Design
                </a>
              </div>
            </div>

             <div className="w-auto flex justify-end">
              <img src="designs/anthill.svg" alt="noimg" className="h-350"/>
             </div>

          </div>

        </div>


        <div className="h-300 w-full flex flex-col justify-center items-center pb-20">
          
          <div className="h-100 w-[70%] flex justify-center items-center text-center">
            <SlideUp>
              <div className="font-bold text-6xl text-[#333333] tracking-tighter">
                  Tech stack.
              </div>
            </SlideUp>
          </div>
          
          <div className="w-[70%]">
            <SlideUp>
              <Stack></Stack>
            </SlideUp>     
          </div>

        </div>

      </main>
    </div>
  );
}
