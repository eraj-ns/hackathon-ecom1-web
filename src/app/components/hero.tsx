import React from "react"
import Image from "next/image";
import BG from "@/app/public/scandinavian-interior-mockup-wall-decal-background 1.png";

export default function Hero() {
    return (
      <div className="overflow-x-hidden relative">
      <div className="relative w-full">
        <Image
          src={BG}
          alt="Background"
          width={643}
          height={443}
          priority
          className="w-full h-auto"
        />
    
        <div className="heroText bg-[#FFF3E3] hidden  md:block w-[643px] h-[443px] absolute top-[25%] left-[50%] rounded-[6px] p-[4rem]  ">
            <h6 className="font-bold text-black">New Arrival</h6>
            <h3 className="text-[#B88E2F] font-poppins font-extrabold text-[3.25rem] ">Discover Our <br /> New Collection</h3>
            <p className="leading-loose  font-poppins font-medium text-black mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
              dolore</p>
              <button className="bg-[#B88E2F] pt-4 pr-12 pb-4 pl-12 text-white">BUY NOW</button>
          </div>
      </div>
    </div>
    );
  }