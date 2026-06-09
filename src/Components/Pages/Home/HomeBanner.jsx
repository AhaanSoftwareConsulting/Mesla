

import React from "react";
import banner from "../../../assets/banner.png";
import box1 from "../../../assets/box1.png";
import box2 from "../../../assets/box2.png";
import box3 from "../../../assets/box3.png";
import box4 from "../../../assets/box4.png";
const lightingItems = [
  {
    id: 1,
    name: "Floor Lamps",
    image: box1,
  },
  {
    id: 2,
    name: "Pendant Lights",
    image: box2,
  },
  {
    id: 3,
    name: "Wall Lights",
    image: box3,
  },
  {
    id: 4,
    name: "Ceiling Lights",
    image: box4,
  },
];

export default function Hero() {
 


  return (
    <section
      className="w-full max-w-[1440xpx] relative h-[450px] lg:h-[600px]  overflow-hidden bg-cover bg-center"
    >
        <img
    src={banner}
    alt="hero"
    className="absolute inset-0 w-full h-full object-cover"
    loading="eager"
  />
   

      <div className="relative max-w-[1440px] mx-auto h-full flex items-center px-4 md:px-8 lg:px-12 xl:px-[70px] pt-36 pb-10">

        <div className="flex flex-col gap-6 max-w-2xl">
        
        <h1
          
          className="text-[27px] md:text-4xl lg:text-[45px] xl:text-[60px] leading-tight font-heading font-bold text-white typing"          
        >
          Transform Interiors <br />  With Premium <span className="sm:text-[#40ABE2] ">Lighting</span>
        </h1>
        <p
          className="text-sm md:text-lg text-white  leading-snug "
        >
          Discover sophisticated lighting solutions crafted to enhance modern<br className="hidden sm:block"/> interiors with elegance, warmth, and timeless luxury.
        </p>


        <div className="mt-10 flex flex-wrap gap-6">
              {lightingItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center float"
                >
                  <div className="h-[72px] w-[72px] overflow-hidden rotate-45 rounded-[18px]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full -rotate-45 object-cover scale-125"
                    />
                  </div>

                  <span className="mt-4 text-center text-[14px] text-white">
                    {item.name}
                  </span>
                </div>
              ))}
        </div>
        </div>

      </div>
    </section>
  );
}