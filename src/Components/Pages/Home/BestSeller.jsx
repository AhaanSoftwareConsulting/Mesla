import React from "react";
import grid1 from "../../../assets/grid1.png";
import grid2 from "../../../assets/grid2.png";

const BestSeller = () => {
    


    return (
        <section className="max-w-[1440px] mx-auto relative px-4 md:px-8 lg:px-12 xl:px-[70px] py-10 xl:py-[70px] overflow-hidden">
            <div className="relative grid gid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative hover:scale-105 transition-transform duration-300">
                    <img src={grid1} alt="grid1" className="cursor-pointer rounded-[14px] w-full h-full relative "/>
                </div>
                <div className="relative hover:scale-105 transition-transform duration-300">
                    <img src={grid2} alt="grid2" className="cursor-pointer rounded-[14px] w-full h-full relative "/>
                </div>
            </div>
        </section>
    );
};

export default BestSeller;