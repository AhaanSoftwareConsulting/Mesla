import { useEffect, useState } from "react";
import { ArrowRightIcon } from "@phosphor-icons/react";

const CategorySlider = () => {
  const [categories, setCategories] = useState([]);
  const duplicatedCategories = [...categories, ...categories];
  const [slide, setSlide] = useState(0);
const [transition, setTransition] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          "https://soumi.ahaanmedia.com/wp-json/wc/store/v1/products/categories"
        );

        const data = await res.json();

        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, []);

  // Auto Slide
    useEffect(() => {
    if (!categories.length) return;
  
    const timer = setInterval(() => {
      setSlide((prev) => prev + 1);
    }, 3000);
  
    return () => clearInterval(timer);
  }, [categories]);
  
  useEffect(() => {
    if (!categories.length) return;
  
    if (slide >= categories.length) {
      setTimeout(() => {
        setTransition(false);
        setSlide(0);
  
        setTimeout(() => {
          setTransition(true);
        }, 50);
      }, 700);
    }
  }, [slide, categories.length]);
  
   
  return (
    <section className="max-w-[1440px] mx-auto relative px-4 md:px-8 lg:px-12 xl:px-[70px] py-10 xl:py-[70px] overflow-hidden">
      {/* Header */}
      <div className="mb-16 flex items-center justify-between">
        <h3 className="text-2xl md:text-[32px]  font-bold text-[#1A1A1A] font-heading">
          Shop Categories
        </h3>

        <button className="cursor-pointer flex items-center gap-2 text-[#115492] text-sm md:text-base font-medium">
                  View All Products
                  <ArrowRightIcon size={16} />
                </button>
      </div>

      {/* Slider */}
      <div className="overflow-hidden">
        <div
  className={`flex gap-5 ${
    transition
      ? "transition-transform duration-700 ease-in-out"
      : ""
  }`}
  style={{
    transform: `translateX(-${slide * 241}px)`,
  }}
>
          {duplicatedCategories.map((category, index) => (
            <div
               key={`${category.id}-${index}`}
              className="cursor-pointer group rounded-xl bg-white "
            >
              {/* Arc Box */}
              <div className="relative w-[221px] p-5 jutify-center h-[248px] overflow-hidden rounded-t-full bg-[linear-gradient(180deg,#A18463_0%,#F3E2B8_100%)]">
                <img
                  src={category.image?.src}
                  alt={category.name}
                 className="h-full object-contain transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Name */}
              <h3 className="mt-4 text-center font-semibold text-lg lg:text-2xl leading-snug text-[#232F3F]">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySlider;