import React from "react";
import q1 from "../../../assets/q1.png";
import q2 from "../../../assets/q2.png";
import q3 from "../../../assets/q3.png";
import q4 from "../../../assets/q4.png";
import arrow from "../../../assets/arrow.png";
import arrow2 from "../../../assets/arrow2.png";

export default function WhyChooseUs() {
    const features = [
  {
    icon: q1,
    title: "Premium Quality",
    text: "Crafted with high-grade materials to ensure durability, performance, and long-lasting illumination.",
  },
  {
    icon:q2,
    title: "Modern Designs",
    text: "Stylish and contemporary lighting collections designed to complement modern interiors beautifully.",
  },
  {
    icon:q3,
    title: "Energy Efficient",
    text: "Advanced LED technology that helps reduce power consumption while delivering brighter performance.",
  },
  {
    icon: q4,
    title: "Fast & Reliable Delivery",
    text: "Secure packaging and quick shipping to ensure your lighting products arrive safely and on time.",
  },
];

return(
<section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 xl:px-[70px] py-10 xl:pt-[70px] xl:pb-[140px] overflow-hidden">
  
  {/* Heading */}
  <div className="flex justify-center mb-12">
   
      <h2 className="font-heading font-bold text-2xl md:text-[32px] text-[#232F3F]">
        Why Choose Mesla Lighting
      </h2>
    
  </div>

  <div className="relative">

   
    <img
      src={arrow2}
      alt=""
      className=" absolute left-[10%] -bottom-[70px] hidden xl:block z-10"
    />

    
    <img
      src={arrow}
      alt=""
      className=" absolute left-[35%] -top-[10px] hidden xl:block z-10"
    />

    
    <img
      src={arrow2}
      alt=""
      className=" absolute right-[25%] -bottom-[70px] hidden xl:block z-10"
    />

    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

      {features.map((item, index) => (
        <div
          key={index}
          className={` 
            bg-white rounded-[18px]
            shadow-[0px_4px_20px_rgba(0,0,0,0.08)]
            pt-[40px] px-[16px] pb-[20px]
           
            ${index % 2 === 1 ? "xl:translate-y-[110px]" : ""}
          `}
        >
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-[72px] h-[72px]  rounded-full bg-[#115492] flex items-center justify-center">
              <img
                src={item.icon}
                alt={item.title}
                className="w-9 h-9  object-contain"
              />
            </div>
          </div>

          {/* Content */}
          <h3 className="font-heading text-2xl font-bold text-[#232F3F] mb-4">
            {item.title}
          </h3>

          <p className="text-[14px] leading-[28px] text-[#7A7A7A]">
            {item.text}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>
);
}