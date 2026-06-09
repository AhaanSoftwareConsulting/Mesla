import { useEffect, useState } from "react";
import gallery1 from "../../../assets/gallery1.png";
import gallery2 from "../../../assets/gallery2.png";
import gallery3 from "../../../assets/gallery3.png";
import gallery4 from "../../../assets/gallery4.png";
import gallery5 from "../../../assets/gallery5.png";
const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5]

const GallerySlider = () => {
    const duplicatedGalleries = [...galleryImages, ...galleryImages];
    const [current, setCurrent] = useState(0);
    const [transition, setTransition] = useState(true);


    // Auto Slide
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => prev + 1);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (current >= galleryImages.length) {
            setTimeout(() => {
                setTransition(false);
                setCurrent(0);

                setTimeout(() => {
                    setTransition(true);
                }, 50);
            }, 700);
        }
    }, [current]);



    return (
        <section className="max-w-[1440px] mx-auto relative  py-10 xl:py-[70px] overflow-hidden">
            {/* Header */}
            <div className="mb-16  items-center justify-center">
                <h3 className="text-2xl md:text-[32px] xl:text-5xl text-center font-bold text-[#1A1A1A] font-heading">
                    #Mesla
                </h3>

            </div>

            {/* Slider */}
            <div className="overflow-hidden">
  <div
    className={`flex gap-5 ${
      transition ? "transition-transform duration-700 ease-in-out" : ""
    }`}
    style={{
      transform: `translateX(-${current * 340}px)`,
    }}
  >
    {duplicatedGalleries.map((image, index) => {
      const isShort = index % 2 === 0;

      return (
        <div
          key={index}
          className={`
            w-[320px]
            flex-shrink-0
            overflow-hidden
            rounded-[16px] hover:scale-105 transition-transform duration-300
            ${
              isShort
                ? "h-auto my-[40px]"
                : "h-auto"
            }
          `}
        >
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      );
    })}
  </div>
</div>
        </section>
    );
};

export default GallerySlider;