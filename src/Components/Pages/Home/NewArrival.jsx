import { useEffect, useState } from "react";
import { useCart } from "../../../Context/CartContext";
import {
  CaretLeftIcon,
  CaretRightIcon,
  ArrowRightIcon,
  ShoppingCartIcon,
} from "@phosphor-icons/react";


  const NewArrival = ({ searchTerm = "" }) => {
  const [products, setProducts] = useState([]);
 

  const filteredProducts = products.filter((product) =>
    product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const duplicatedProducts =
  filteredProducts.length > 1
    ? [...filteredProducts, ...filteredProducts]
    : filteredProducts;
    
  const [slide, setSlide] = useState(0);
const [transition, setTransition] = useState(true);
const { addToCart } = useCart();
  
useEffect(() => {
  setSlide(0);
}, [searchTerm]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Recommended Category Products
        const res = await fetch(
          "https://soumi.ahaanmedia.com/wp-json/wc/store/v1/products?category=18"
        );

        const data = await res.json();

        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, []);

  // Auto Slide
  useEffect(() => {
  if (!filteredProducts.length) return;

  const timer = setInterval(() => {
    setSlide((prev) => prev + 1);
  }, 3000);

  return () => clearInterval(timer);
}, [filteredProducts.length]);

useEffect(() => {
 if (!filteredProducts.length) return;

  if (slide >= filteredProducts.length) {
    setTimeout(() => {
      setTransition(false);
      setSlide(0);

      setTimeout(() => {
        setTransition(true);
      }, 50);
    }, 700);
  }
}, [slide, filteredProducts.length]);

 const nextSlide = () => {
  setSlide((prev) => prev + 1);
};

const prevSlide = () => {
  setSlide((prev) =>
    prev === 0 ? filteredProducts.length - 1 : prev - 1
  );
};
if (!filteredProducts.length) {
  return (
    <section className="py-20">
      <div className="max-w-[1440px] mx-auto px-4 text-center">
        <h3 className="text-2xl font-semibold text-[#232F3F]">
          No Products Found
        </h3>
      </div>
    </section>
  );
}
  return (
    <section className="bg-[#F3F4F6] py-10 xl:py-[70px]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 xl:px-[70px]">
      {/* Header */}
      <div className="mb-12 flex items-center justify-between">
        <h3 className="text-2xl md:text-[32px] font-bold text-[#232F3F] font-heading">
          Newest Products
        </h3>

        <button className="cursor-pointer flex items-center gap-2 text-[#115492] text-sm md:text-base font-medium">
          View All Products
          <ArrowRightIcon size={16} />
        </button>
      </div>

      {/* Slider Wrapper */}
      <div className="relative">

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="cursor-pointer shadow-sm absolute left-[-10px] md:left-[-20px] top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md"
        >
          <CaretLeftIcon size={18} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="cursor-pointer shadow-sm absolute right-[-10px] md:right-[-20px] top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md"
        >
          <CaretRightIcon size={18} />
        </button>

        {/* Slider */}
        <div className="overflow-hidden">
          <div
  className={`flex gap-5 ${
    transition
      ? "transition-transform duration-700 ease-in-out"
      : ""
  }`}
  style={{
    transform: `translateX(-${slide * 284}px)`,
  }}
>
            {duplicatedProducts.map((product, index) => (
              <div
               key={`${product.id}-${index}`}
                className="group w-[264px] rounded-xl bg-white p-[30px_20px]"
              >
                {/* Image */}
                <div className="flex h-[160px] items-center justify-center overflow-hidden">
                  <img
                    src={product.images?.[0]?.src}
                    alt={product.name}
                    className="h-full object-contain transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-6 line-clamp-2 text-[17px] font-semibold text-[#232F3F]">
                  {product.name}
                </h3>

                {/* SKU */}
                <p className="mt-2 text-sm text-[#9A9A9A]">
                  #{product.sku || "WSD-1059723"}
                </p>

                {/* Price */}
                <div className="mt-4 flex items-end gap-1">
                  <span className="text-xs text-[#115492]">
                    CAD
                  </span>

                  <span className="text-3xl font-bold leading-none text-[#115492]">
                    $
                    {product.prices?.price
                      ? Number(product.prices.price) / 100
                      : "151.83"}
                  </span>

                  <span className="text-xs text-[#115492]">
                    / Each
                  </span>
                </div>

                {/* Hover Buttons */}
                <div className="mt-5 flex items-center gap-3 opacity-0 translate-y-3 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  
                  <button   onClick={() => addToCart(product)} className="cursor-pointer flex h-10 w-10 items-center justify-center rounded border border-[#115492] text-[#115492]">
                    <ShoppingCartIcon size={18} />
                  </button>

                  <button className="cursor-pointer rounded bg-[#115492] px-5 py-2 text-sm font-medium text-white">
                    BUY NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      </div>
    </section>
  );
};

export default NewArrival;