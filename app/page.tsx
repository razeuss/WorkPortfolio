"use client";
import Header from "@/component/Header";
import { useEffect, useState } from "react";
import SlideUp from "@/component/Slideup"

export default function Home() {

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

        <section className="relative w-full h-screen bg-[#f8f9fa] flex items-center px-20">
          {/* Background Text */}
          <div
            className="absolute top-[80px] left-0 w-full text-[#f8f9fa] font-black text-[500px] tracking-tighter z-0 text-center pointer-events-none select-none"
            style={{ textShadow: "-20px 15px 30px rgba(0,0,0,0.045)" }}
          >
            developer
          </div>

       
          <div className="relative z-10 text-[#333333] font-bold text-9xl leading-30 mx-60">
            <h1 className="tracking-tighter mb-5">
              Frontend developer &<br />
              Full-stack capable
            </h1>
            <div className="text-3xl font-medium tracking-tighter p-2">
              <p className="text-gray-500 mb-15">Crafting responsive and accessible web interfaces.</p>
              <div className="inline-flex items-center bg-gray-300 px-6 py-2 text-2xl font-medium rounded-[30px]">
                <span className="absolute w-4 h-4 bg-green-500 rounded-full mr-3 animate-ping"></span>
                <span className="relative w-4 h-4 bg-green-500 rounded-full mr-3"></span>
                Available for work
              </div>
            </div>
          </div>
        </section>
        
        
        <section className="h-screen bg-[#f8f9fa] flex items-center justify-center z-10 relative">
          <div className="flex h-[90%] gap-6 w-full justify-center ">
            {/* Column 1 */}  
            <div className="w-[25%] flex flex-col gap-6">
              <SlideUp className="h-[70%]">
                 <div className="bg-[#2c2c2c] h-full w-full rounded-[20px] overflow-hidden shadow-[0_0px_10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:shadow-[0_12px_10px_rgba(0,0,0,0.3)] hover:-translate-y-3 group">
                  <img src="myimg.jpg" alt="no img"  className="object-cover w-full h-full filter grayscale contrast-110 brightness-90 transition-all duration-500 group-hover:filter-none group-hover:scale-105"/>
                </div>
              </SlideUp>  

              <SlideUp className="h-[30%]">
                <div className="bg-white h-full flex flex-col w-full rounded-[20px] shadow-[0_0px_10px_rgba(0,0,0,0.07)] p-10 gap-4 text-[#333333] justify-between">
                  <h1 className="font-bold text-7xl tracking-tighter">I'm Radz.</h1>
                  <p className="text-xl text-[#555555] tracking-tighter">A 4th-year Computer Science student at Mindanao State University - Iligan Institute of Technology.
                    Currently exploring full-stack development — always learning, always building. </p>
                </div>
              </SlideUp>
            </div>

            {/* Column 2 */}
            <div className="w-[35%] flex flex-col gap-6">

              <SlideUp className="h-[40%]"> 
                 <div className="bg-white h-full w-full rounded-[20px] shadow-[0_0px_10px_rgba(0,0,0,0.07)]">
                  <h1 className="text-7xl font-bold text-[#333333] p-10 tracking-tighter">Experience</h1>
                </div>
              </SlideUp>

              <div className="h-[40%] flex gap-6">
                <SlideUp className="flex-[65]"> 
                  <div className="h-full w-full flex flex-col bg-white rounded-[20px] shadow-[0_0px_10px_rgba(0,0,0,0.07)] p-10 justify-between">
                    <h1 className="text-7xl font-bold text-[#333333] tracking-tighter">Skills</h1>
                    <div className="flex flex-col">
                      <span className="text-xl text-[#555555] tracking-tighter">Web Development</span>
                      <span className="text-xl text-[#555555] tracking-tighter">Software Development</span>
                      <span className="text-xl text-[#555555] tracking-tighter">UI/UX Design</span>
                    </div>
                  </div>
                </SlideUp>

                <SlideUp className="flex-[35]">
                  <div className="h-full w-full bg-white rounded-[20px] shadow-[0_0px_10px_rgba(0,0,0,0.07)] p-10 flex flex-col justify-between">
                    {time && <span className="text-7xl font-bold tracking-tighter text-[#333333] leading-15">{time}</span>}
                    <span className=" tracking-tighter text-[#999999] text-lg">Current local time</span>
                  </div>
                </SlideUp>
                
              </div>

              <SlideUp className="h-[20%]"> 
                <div className="bg-white h-full w-full rounded-[20px] shadow-[0_0px_10px_rgba(0,0,0,0.07)]">
                  <h1 className="text-7xl font-bold text-[#333333] p-10 tracking-tighter">Stack</h1>
                </div>
              </SlideUp>
            </div>

            {/* Column 3 */}
            <div className="w-[15%] flex flex-col gap-6">
              <SlideUp className="h-[20%]"> 
                <div className="h-full w-full rounded-[20px] grid grid-cols-3 grid-rows-2 gap-6">
                  <div className="text-[#333333] h-full w-full flex items-center justify-center text-7xl font-bold tracking-tighter rounded-[20px] text-left leading-14">Lin<br/>ks:</div>
                  <div className="bg-white rounded-[20px] shadow-[0_0px_10px_rgba(0,0,0,0.07)]"></div>
                  <div className="bg-white rounded-[20px] shadow-[0_0px_10px_rgba(0,0,0,0.07)]"></div>
                  <div className="bg-white rounded-[20px] shadow-[0_0px_10px_rgba(0,0,0,0.07)]"></div>
                  <div className="bg-white rounded-[20px] shadow-[0_0px_10px_rgba(0,0,0,0.07)]"></div>
                  <div className="bg-white rounded-[20px] shadow-[0_0px_10px_rgba(0,0,0,0.07)]"></div>
                </div>
              </SlideUp>

              <SlideUp className="h-[70%]">
                <div className="bg-white text-[#333333] font-bold text-7xl tracking-tighter leading-15 p-10 h-full w-full rounded-[20px] shadow-[0_0px_10px_rgba(0,0,0,0.07)]">
                  Recent clients.
                </div>
              </SlideUp>

              <div className="h-[10%] hover:h-[20%] group transition-all duration-500">
                <SlideUp className="h-full"> 
                  <button className="bg-white h-full w-full rounded-[20px] shadow-[0_0px_10px_rgba(0,0,0,0.07)] group-hover:shadow-[0_0px_10px_rgba(0,0,0,0.3)] flex 
                  justify-start items-center pb-2 px-10 relative overflow-hidden text-[#333333] transition-all duration-500 ">
                    
                    <div className="relative flex flex-col">
                      {/* "view" - hidden initially, fades in on hover */}
                      <span className="text-7xl font-bold absolute -translate-y-30 group-hover:-translate-y-12 opacity-0 group-hover:opacity-100 transition-all duration-600 tracking-tighter">
                        view
                      </span>

                      {/* "resume" - always centered */}
                      <h1 className="text-7xl font-bold tracking-tighter z-10 leading-none">
                        resume.
                      </h1> 
                    </div>

                  </button>
                </SlideUp>               
              </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
