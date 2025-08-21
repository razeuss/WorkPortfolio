"use client";
import Header from "@/component/Header";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useMemo} from "react";
import SlideUp from "@/component/Slideup";
import InstagramIcon from "@/component/icons/Instagram";
import GithubIcon from "@/component/icons/Github";
import LinkedinIcon from "@/component/icons/Linkedin";
import GmailIcon from "@/component/icons/Gmail";
import Stack from "@/component/icons/Teckstack";
import Image from "next/image";
import myImg from "@/public/myimg.webp";
import Anthill from "@/public/designs/anthill.png";
import newtabicon from "@/public/icons/newtab.svg";
import unibudget from "@/public/designs/unib.png";

import exp1 from "@/app/assets/exp/1.webp";
import exp2 from "@/app/assets/exp/2.webp";
import exp3 from "@/app/assets/exp/4.webp";
import exp4 from "@/app/assets/exp/5.webp";


export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const experiences = useMemo(() => [
  {
    img: exp4,
    date: "September 2023",
    title: "Powered the computer applications",
    subtitle: "department election with our voting system.",
    gradient: "from-black/70 via-black/40 to-transparent"
  },
  {
    img: exp2,
    date: "April 2024",
    title: "Invited to showcase our system",
    subtitle: "to computer programming students.",
    gradient: "from-black/60 via-black/50 to-transparent"
  },
  {
    img: exp3,
    date: "June 2025",
    title: "Won the first quantum computing",
    subtitle: "and blockchain hackathon.",
    gradient: "from-black/80 via-black/50 to-transparent"
  },
  {
    img: exp1,
    date: "July 2025",
    title: "Completed internship at",
    subtitle: "anura innovations.",
    gradient: "from-black/70 via-black/10 to-transparent"
  }
], []);


useEffect(() => {
  experiences.forEach((exp) => {
    const img = new window.Image();
    img.src = exp.img.src;
  });
}, [experiences]); 



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
  const duration = 1500; 
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

          <div className="h-5/9 sm:h-7/9  bg-[#f8f9fa] flex items-center justify-center overflow-hidden relative">

            
              <div className="absolute -top-[70px] min-[640px]:-top-[110px] min-[2000px]:-top-[50px] text-[#f8f9fa] font-black text-[150px] min-[640px]:text-[300px] min-[2000px]:text-[400px] leading-60 tracking-tighter z-0 text-center pointer-events-none select-none" style={{ textShadow: "-20px 15px 30px rgba(0,0,0,0.015)" }}>
                ui/uxdesigner
              </div>
              <div className="absolute top-[20px] min-[640px]:top-[70px] min-[2000px]:top-[190px] text-[#f8f9fa] font-black text-[150px] min-[640px]:text-[300px] min-[2000px]:text-[400px] leading-60 tracking-tighter z-2 text-center pointer-events-none select-none" style={{ textShadow: "-20px 15px 30px rgba(0,0,0,0.02)" }}>
                <span style={{ textShadow: "-20px 15px 30px rgba(0,0,0,0.06)" }}>rsoftware&</span>web<br/>
              </div>
              <div className="absolute -top-[130px] min-[640px]:top-[10px] min-[2000px]:top-[190px] text-[#f8f9fa] font-black text-[150px] min-[640px]:text-[300px] min-[2000px]:text-[400px]  leading-60 tracking-tighter z-1 text-center pointer-events-none select-none" style={{ textShadow: "-20px 15px 30px rgba(0,0,0,0.02)" }}>
                <br/>veloperand<span style={{ textShadow: "-20px 15px 30px rgba(0,0,0,0.05)" }}>webdev</span>eloper
              </div>
              <div className="absolute top-[200px] min-[640px]:top-[420px] min-[2000px]:top-[660px] text-[#f8f9fa] font-black text-[150px] min-[640px]:text-[300px] min-[2000px]:text-[400px]  leading-60 tracking-tighter z-0 text-center pointer-events-none select-none" style={{ textShadow: "-20px 15px 30px rgba(0,0,0,0.015)" }}>
                webflowdesigner
              </div>
           
        

        
            <div className="z-10 w-[90%] sm:w-[70%]  text-[#333333] font-bold min-[640px]:text-8xl min-[2000px]:text-9xl text-4xl leading-10 min-[640px]:leading-21  min-[2000px]:leading-30 flex flex-col items-center text-center sm:items-start sm:text-start">
              <h1 className="tracking-tighter mb-2 xl:mb-5">
                Software & Web<br />
                developer
              </h1>
              <div className="text-xl font-medium tracking-tighter lg:text-2xl lg:p-2">
                <p className="text-[#333333] mb-6 lg:mb-15">Crafting responsive and accessible interfaces.</p>
                <div className="inline-flex items-center text-white bg-[#333333] px-3 sm:px-6 py-1 sm:py-2 text-lg lg:text-xl lg:text-2xl font-medium rounded-[30px]">
                  <span className="absolute w-2 h-2 sm:w-4 sm:h-4 bg-green-500 rounded-full mr-3 animate-ping"></span>
                  <span className="relative w-2 h-2 sm:w-4 sm:h-4 bg-green-500 rounded-full mr-3"></span>
                  Available for work
                </div>
              </div>
            </div>
          </div>

          <section className="h-2/5 bg-[#f8f9fa]">
                <SlideUp className="h-full "> 
                      <div className="h-full px-[5%] sm:px-[15%] rounded-[20px] flex items-center justify-center flex flex-col pb-20 sm:pb-30 gap-6">

                        <div className="flex items-center justify-center gap-4 lg:gap-6 ">
                           <a href="https://github.com/razeuss" target="_blank" rel="noopener noreferrer" 
                           className="h-15 w-15 sm:h-20 sm:w-20 rounded-[20px] shadow-[-5px_5px_5px_rgba(0,0,0,0.3)] hover:shadow-[-10px_8px_5px_rgba(0,0,0,0.3)] hover:scale-107 transition-all duration-200">
                              <GithubIcon className="w-full h-full" />
                          </a>
                          <a href="https://www.instagram.com/radzicaaal/" target="_blank" rel="noopener noreferrer" 
                          className="h-15 w-15 sm:h-20 sm:w-20 rounded-[20px] shadow-[-5px_5px_5px_rgba(0,0,0,0.3)] hover:shadow-[-10px_8px_5px_rgba(0,0,0,0.3)] hover:scale-107 transition-all duration-200">
                              <InstagramIcon className="w-full h-full" />
                          </a>
                          <a href="https://www.linkedin.com/in/joshua-radz-adlaon-4b5952367/" target="_blank" rel="noopener noreferrer" 
                           className="h-15 w-15 sm:h-20 sm:w-20 rounded-[20px] shadow-[-5px_5px_5px_rgba(0,0,0,0.3)] hover:shadow-[-10px_8px_5px_rgba(0,0,0,0.3)] hover:scale-107 transition-all duration-200">
                              <LinkedinIcon className="w-full h-full" />
                          </a>
                          <a href="mailto:adlaon.joshuaradz@gmail.com?subject=Inquiry from Portfolio" target="_blank" rel="noopener noreferrer" 
                          className="h-15 w-15 sm:h-20 sm:w-20 rounded-[20px] shadow-[-5px_5px_5px_rgba(0,0,0,0.3)] hover:shadow-[-10px_8px_5px_rgba(0,0,0,0.3)] hover:scale-107 transition-all duration-200">
                              <GmailIcon className="w-full h-full " />
                          </a>
                        </div>

                        <div className="font-bold text-md lg:text-xl text-[#333333] flex flex-col tracking-tighter text-center">
                          <span>Feel free to reach out to me. You can also </span>
                          <span>explore the links to see some of my projects.</span>
                        </div>
                    
                      </div>
                </SlideUp>
          </section>
          
        </section>
        
        
        <div className="h-auto py-20 sm:py-30 bg-white flex flex-col items-center justify-center relative">
          <div className="pb-10 sm:pb-20 w-[90%] sm:w-[70%] flex justify-start">
            <SlideUp>
              <div className="font-bold text-3xl sm:text-6xl text-[#333333] tracking-tighter">
                Get to know me.
            </div>
            </SlideUp>
          </div>

          <div className="flex h-100 sm:h-200 w-[90%] sm:w-[70%] gap-5 sm:gap-10 justify-center">
            {/* Column 1 */}  
            <div className="w-[40%] flex flex-col gap-5">
              <SlideUp className="h-[90%] sm:h-full">
                 <div className="bg-[#2c2c2c] relative h-full w-full rounded-[20px] overflow-hidden shadow-[0_0px_10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:shadow-[0_12px_10px_rgba(0,0,0,0.3)] hover:-translate-y-3 group">
                  <Image src={myImg} alt="no img" fill className="object-cover object-center transition-all duration-500 group-hover:scale-105"/>
                </div>
              </SlideUp>
              <SlideUp className="h-[10%] sm:hidden"> 
                  <a href="https://drive.google.com/file/d/180tZIL7UdTybk6CSIsN7HbVbwwlUV5Du/view?usp=sharing" target="_blank" rel="noopener noreferrer" 
                  className="bg-white border-[#333333] border-2 group-hover:border-[#333333] group-hover:bg-[#333333] h-full w-full rounded-[10px] sm:rounded-[20px] shadow-[0_0px_10px_rgba(0,0,0,0.07)] flex 
                  justify-center items-center sm:pb-2 px-10 relative overflow-hidden text-[#333333] group-hover:text-white group-hover:pt-8 transition-all duration-500 ">
                    
                    <div className="relative flex flex-col">
                      
                      <span className="text-4xl text-white font-bold absolute -translate-y-30 group-hover:-translate-y-8 opacity-0 group-hover:opacity-100 transition-all duration-500 tracking-tighter">
                        View
                      </span>

                      
                      <h1 className="text-xl sm:text-4xl font-bold tracking-tighter z-10 leading-none">
                        Resume
                      </h1>

                    </div>

                  </a>
                </SlideUp>
            </div>

            {/* Column 2 */}
            <div className="w-[60%] sm:w-[50%] flex flex-col gap-5 sm:gap-10">

              <div className="h-[35%] sm:h-[70%] flex">
                <SlideUp className="flex-[65]"> 
                  <div className="h-full w-full flex flex-col bg-[#f0f0f0] rounded-[20px] p-3 sm:p-10 justify-between">
                    <h1 className="text-xl sm:text-4xl font-bold text-[#333333] tracking-tighter">Skills</h1>
                    <div className="flex flex-col">
                      <span className="text-sm sm:text-xl text-[#333333] tracking-tighter">Web Development</span>
                      <span className="text-sm sm:text-xl text-[#333333] tracking-tighter">Software Development</span>
                      <span className="text-sm sm:text-xl text-[#333333] tracking-tighter">UI/UX Design</span>
                    </div>
                  </div>
                </SlideUp>
              </div>
              <SlideUp className="sm:h-[30%] h-[65%]">
                <div className="bg-[#f0f0f0] h-full flex flex-col w-full rounded-[20px] p-3 sm:p-10 gap-4 text-[#333333] justify-between">
                  <h1 className="font-bold text-xl sm:text-4xl tracking-tighter">I&apos;m Radz.</h1>
                  <p className="text-sm sm:text-xl text-[#333333] tracking-tighter">A 4th-year Computer Science student at Mindanao State University - Iligan Institute of Technology.
                    I build mobile and desktop applications, with a strong focus on web development.</p>
                </div>
              </SlideUp>
            </div>

             
            <div className="w-[25%] hidden sm:flex sm:w-[20%] flex flex-col gap-5 sm:gap-10">
              <SlideUp className="h-[94%] sm:h-[90%]">
                  <div className="h-full w-full bg-[#f0f0f0] rounded-[20px] p-3 sm:p-10 flex flex-col justify-between">
                    {time && <span className="text-xl sm:text-4xl font-bold tracking-tighter text-[#333333] leading-5 sm:leading-15 sm:px-1">{time}</span>}
                    <span className=" tracking-tighter text-[#999999] text-sm sm:text-xl">Current local time</span>
                  </div>
                </SlideUp>

              <div className="h-[6%] sm:h-[10%] hover:h-[20%] group transition-all duration-500">
                <SlideUp className="h-full"> 
                  <a href="https://drive.google.com/file/d/180tZIL7UdTybk6CSIsN7HbVbwwlUV5Du/view?usp=sharing" target="_blank" rel="noopener noreferrer" 
                  className="bg-white border-[#333333] border-2 group-hover:border-[#333333] group-hover:bg-[#333333] h-full w-full rounded-[10px] sm:rounded-[20px] shadow-[0_0px_10px_rgba(0,0,0,0.07)] flex 
                  justify-center items-center sm:pb-2 px-10 relative overflow-hidden text-[#333333] group-hover:text-white group-hover:pt-8 transition-all duration-500 ">
                    
                    <div className="relative flex flex-col">
                      
                      <span className="text-4xl text-white font-bold absolute -translate-y-30 group-hover:-translate-y-8 opacity-0 group-hover:opacity-100 transition-all duration-500 tracking-tighter">
                        View
                      </span>

                      
                      <h1 className="text-xl sm:text-4xl font-bold tracking-tighter z-10 leading-none">
                        Resume
                      </h1>

                    </div>

                  </a>
                </SlideUp>               
              </div>

            </div>
           
          </div>
        </div>

        <div className="h-auto w-full py-10 sm:py-30 justify-center items-center flex flex-col w-full">

          <div className="pb-10 sm:pb-20 w-[90%] sm:w-[70%]">
            <SlideUp>
              <div className="font-bold text-3xl sm:text-6xl text-[#333333] tracking-tighter">
                Experience
            </div>
            </SlideUp>
          </div>

          <SlideUp>
            <div className="h-100 sm:h-185 justify-start flex items-center">
              <div ref={scrollRef} onScroll={checkScroll} className="flex gap-10 overflow-x-auto no-scrollbar z-0 h-full w-full px-[5%] sm:px-[15%]">
                {experiences.map((exp, i) => (
                  <div key={i} className="cell relative flex-shrink-0 w-full h-full overflow-hidden rounded-[20px] sm:rounded-[30px] bg-gray-100">
                    <Image src={exp.img} fill alt={`Experience ${i}`} className="w-full h-full object-cover bg-[#f0f0f0]"/>
                    <div className={`absolute inset-0 bg-gradient-to-b ${exp.gradient}`}></div>
                    <div className="absolute top-4 left-4 sm:top-10 sm:left-10 leading-6 sm:leading-10 flex flex-col text-white text-lg sm:text-3xl font-bold tracking-normal">
                      <span className="text-sm sm:text-lg font-medium">{exp.date}</span>
                      <span>{exp.title}</span>
                      <span dangerouslySetInnerHTML={{ __html: exp.subtitle.replace(/\n/g, "<br/>") }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SlideUp>

            <div className=" gap-5 pt-10 w-[70%] hidden sm:flex">
               <SlideUp className="flex justify-end gap-10">
                 {canScrollLeft && (
                  <button onClick={() => scroll("left")} className="bg-[#f0f0f0] text-[#333333] shadow-md rounded-full p-2 z-10 hover:bg-[#555555] hover:text-[#f0f0f0] transition">
                    <ChevronLeft size={30} />
                  </button>
                )}

                
                {canScrollRight && (
                  <button onClick={() => scroll("right")} className="bg-[#f0f0f0] text-[#333333] shadow-md rounded-full p-2 z-10 hover:bg-[#555555] hover:text-[#f0f0f0] transition">
                    <ChevronRight size={30} />
                  </button>)}
               </SlideUp>
            </div>
        
        </div>


        <div className="h-auto flex flex-col justify-center items-center w-full bg-white py-20 sm:py-30">

          <SlideUp className="flex justify-center">
            <div className="w-[90%] sm:w-[70%] sm:pb-20">
              <div className="font-bold text-3xl sm:text-6xl text-[#333333] tracking-tighter">
                Featured projects.
              </div>
          </div>
          </SlideUp>

            <div className="w-[90%] flex flex-col sm:flex-row justify-center">
              <SlideUp className="flex justify-end">
                <div className="w-[100%] sm:w-[50%] flex justify-end">
                    <Image src={unibudget} alt="noimg" className="h-150 sm:h-250"/>
                </div>
              </SlideUp>

              <SlideUp className="flex">
                <div className="flex flex-col justify-center items-center sm:items-start w-[100%] sm:pb-40">
                  <div className="text-center sm:text-left w-auto text-[#333333] tracking-normal pb-5">
                    <div className="pb-5">
                      <span className="text-md sm:text-lg font-medium">Design Project</span>
                      <div className="font-bold text-2xl sm:text-5xl pb-2">
                        UniBudget
                      </div>
                      <div className="flex justify-center sm:justify-start text-sm gap-2 border-[#333333] tracking-normal">
                        <span className="opacity-50">
                          Figma
                        </span>
                      </div>
                    </div>
                    
                    <p className="font-regular text-md sm:text-xl w-[100%] sm:w-[60%] text-center sm:text-left">
                      Designed a mobile application prototype in Figma aimed at helping students
                      manage their finances effectively. The app allows users to track income, 
                      set spending limits, categorize expenses, and visualize their budget through
                      intuitive charts and summaries.
                    </p>
                  </div>
                  <div className="flex gap-3">
                      <a href="https://youtu.be/6396Tqet8HM" target="_blank" rel="noopener noreferrer" 
                      className="inline-flex gap-2 px-3 sm:px-6 py-2 bg-[#333333] flex text-white font-semibold rounded-[10px] shadow-[0_0px_10px_rgba(0,0,0,0.1)] 
                      hover:bg-black duration-100 transition">
                        <Image src={newtabicon} alt="noimg"/>
                        <span>Demo</span>
                      </a>
                      <a href="https://www.figma.com/design/dpFATJ036dPW76OrtMp0Mk/UniBudget?node-id=0-1&t=tSixzDPLnYMOwujB-1" target="_blank" rel="noopener noreferrer" 
                      className="inline-block px-3 sm:px-6 py-2 bg-white border-1 border-[#333333] text-[#333333] font-semibold rounded-[10px] shadow-[0_0px_10px_rgba(0,0,0,0.1)] 
                      hover:bg-[#333333] hover:text-white duration-100 transition">
                        View Design
                      </a>
                    </div>
                </div>
              </SlideUp>
            </div>

            <div className="sm:w-full flex flex-col sm:flex-row justify-between pl-[5%] sm:pl-[15%]">
                <div className="flex flex-col order-2 sm:order-1 justify-center items-center sm:items-start sm:w-[35%] pb-20 sm:pb-40 pr-[5%] sm:pr-0">
                  <SlideUp>
                    <div className="text-center sm:text-left w-auto text-[#333333] tracking-tight mb-5">
                      <div className="pb-5">
                        <span className="text-md sm:text-lg  font-medium">Website Project</span>
                        <div className="font-bold text-2xl sm:text-5xl pb-2">
                          Anthill
                        </div>
                        <div className="flex justify-center sm:justify-start text-sm tracking-normal border-[#333333] opacity-50">
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
                      
                      <p className="font-regular text-md sm:text-xl w-full sm:w-[90%]">
                        Designed and developed a web-based platform made 
                        exclusively for IIT students to connect with employers and find 
                        opportunities such as part-time jobs, one-time projects,
                        and on-the-job training offers. It allows students to create profiles, 
                        showcase their skills, and apply for job postings, 
                        while employers can post job opportunities, review applicants, 
                        and manage engagements.
                      </p>

                    </div>
                    <div className="flex gap-3 justify-center sm:justify-start">
                      <a href="https://youtu.be/_rOwAOZ62zI?si=8GLDZ-KbxW7VJUj4" target="_blank" rel="noopener noreferrer" 
                      className="inline-flex gap-2 px-3 sm:px-6 py-2 bg-[#333333] text-white font-semibold rounded-[10px] shadow-[0_0px_10px_rgba(0,0,0,0.1)] 
                      hover:bg-black duration-100 transition">
                        <Image src={newtabicon} alt="noimg"/>
                        <span>Demo</span>
                      </a>
                      <a href="https://github.com/razeuss/AntHill" target="_blank" rel="noopener noreferrer" 
                      className="inline-block px-3 sm:px-6 py-2 bg-white border-1 border-[#333333] text-[#333333] font-semibold 
                      rounded-[10px] shadow-[0_0px_10px_rgba(0,0,0,0.1)] hover:bg-[#333333] hover:text-white duration-100 transition">
                        View Code
                      </a>
                      <a href="https://www.figma.com/design/HHo2LSlDqYcMS93JMyKj05/CCC181?node-id=160-29&t=OEsGBzWeUwGbbrCO-1" target="_blank" rel="noopener noreferrer" 
                      className="inline-block px-3 sm:px-6 py-2 bg-white border-1 border-[#333333] text-[#333333] font-semibold rounded-[10px] 
                      shadow-[0_0px_10px_rgba(0,0,0,0.1)] hover:bg-[#333333] hover:text-white duration-100 transition">
                        View Design
                      </a>
                    </div>
                  </SlideUp>
                </div>
          
                <div className="order-1 sm:order-2 flex justify-end py-15">
                  <SlideUp>
                    <Image src={Anthill} alt="noimg" width={1200} className="object-center"/>
                  </SlideUp>
                </div>
              
            </div>
        </div>


        <div className="h-auto w-full flex flex-col justify-center text-center items-center pb-30">
          <div className="font-bold text-3xl sm:text-6xl text-[#333333] tracking-tighter pb-20 sm:leading-17">
             Here is my tech stack. <br/>
             Let&apos;s work together.
          </div>
          <div className="w-[90%] sm:w-[70%]">
              <Stack></Stack>    
          </div>

        </div>

        <div className="h-20 w-full flex flex-col justify-center items-center bg-[#f8f9fa]">
        </div>
      </main>
    </div>
  );
}
