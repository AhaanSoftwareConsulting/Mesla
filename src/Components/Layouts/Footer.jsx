import { ClockIcon } from "@phosphor-icons/react";
import award1 from "../../assets/award1.png";
import award2 from "../../assets/award2.png";
import logo from "../../assets/logo.png";
export default function Footer() {
    const services = [
        "Agriculture / Horticulture",
        "Automotive/ Equipment",
        "Bulbs/ LampsLamps",
        "Drivers / Transformers",
        "Explosion proof",
        "IndoorLightin",
    ];

    const resources = [
        {
            name: "Contact us",
            isNew: false,
        },
        {
            name: "Shop",
            isNew: false,
        },
        {
            name: "Blog",
            isNew: false,
        },
    ];



   

    return (
        <footer className="bg-[#232F3F]  relative overflow-hidden  text-white">
            {/* Decorative Overlay Top Left */}


            {/* Main Container */}
            <div className="max-w-[1440px] relative mx-auto px-4 md:px-8 lg:px-12 xl:px-[70px] py-10 md:py-[75px]">
                
                {/* FOOTER CONTENT */}
                    <div className="grid  grid-cols-1 lg:grid-cols-4 xl:grid-cols-12  gap-10 xl:gap-[139px] overflow-hidden">
                        {/* LEFT */}
                    <div className="relative xl:col-span-3">
                        {/* Logo */}
                        <div className="mb-5 ">
                            <a href="/" className="text-decoration-none">
                                <img
                                    src={logo}
                                    alt="logo"
                                    className="w-[118px] h-auto md:w-[221px]  object-contain"
                                />
                            </a>
                        </div>

                        <p className="text-base leading-[26px] text-white/60">
                            Developing personalze our customer
                            journeys to increase satisfaction &
                            loyalty of our expansion.
                        </p>

                        {/* Stats */}
                        <div className="mt-8 flex gap-4">
                            <div>
                                <a href="/" className="text-decoration-none">
                                    <img
                                        src={award1}
                                        alt="award1"
                                        className="w-[96px] h-[60px]  object-contain"
                                    />
                                </a>
                            </div>
                            <a href="/" className="text-decoration-none">
                                <img
                                    src={award2}
                                    alt="award2"
                                    className="w-[96px] h-[60px]  object-contain"
                                />
                            </a>
                            <div>

                            </div>
                        </div>
                    </div>
                        {/* Services */}
                        <div className="xl:col-span-3">
                            <h3 className="mb-[33px] text-lg font-semibold">
                                Services
                            </h3>

                            <ul className="space-y-4">
                                {services.map((item, i) => (
                                    <li
                                        key={i}
                                        className="text-sm text-white transition-all duration-300 hover:text-[#F49A19] cursor-pointer"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resources */}
                        <div className="xl:col-span-2">
                            <h3 className="mb-[33px] text-lg font-semibold">
                                Resources
                            </h3>

                            <ul className="space-y-4">
                                {resources.map((item, i) => (
                                    <li
                                        key={i}
                                        className="text-sm text-white/60 transition-all duration-300 hover:text-[#F49A19] cursor-pointer"
                                    >
                                        {item.name}
                                        {item.isNew && (
                                            <span className="rounded-full bg-[#1A8888] ml-1 px-1 py-[2px] text-[10px] font-semibold uppercase tracking-[1px] text-white">
                                                New
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Office */}
                        <div className="xl:col-span-3">
                            <h3 className="mb-[33px] text-lg font-semibold">
                                Our Office
                            </h3>

                            <div className="space-y-5 text-sm text-white/60">
                                <a href="https://maps.app.goo.gl/k4ohBoZRiGmZXnVU9" className="leading-[28px] hover:text-[#F49A19] cursor-pointer">
                                    993 Renner Burg, West Rond,
                                    <br />
                                    MT 94251-030, USA.
                                </a>

                                <div className=" flex flex-col gap-1">
                                    <a href="tel:+18666163752" className="font-semibold text-white hover:text-[#F49A19] cursor-pointer">
                                        P:  +1-866-616-3752
                                    </a>

                                    <a href="mailto:support@bexon.com" className="font-semibold text-white hover:text-[#F49A19] cursor-pointer">
                                        M: support@bexon.com
                                    </a>
                                </div>

                                <div className="flex items-center gap-2">

                                    <ClockIcon size={20} className="text-[#13B6C8]" />
                                    <p>Mon-Fri 08:00-17:00 PST</p>
                                </div>
                            </div>
                        </div>
                    </div>                     
            </div>            
        </footer>
    );
}