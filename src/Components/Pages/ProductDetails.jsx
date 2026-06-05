import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(
      `https://soumi.ahaanmedia.com/wp-json/wc/store/v1/products/${id}`
    )
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch(console.error);
  }, [id]);

  if (!product) {
    return (
      <div className="py-20 text-center">
        Loading...
      </div>
    );
  }

  return (
    <section className="py-20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 xl:px-[70px]">

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Image */}
          <div className="rounded-2xl border p-8">
            <img
              src={product.images?.[0]?.src}
              alt={product.name}
              className="w-full object-contain"
            />
          </div>

          {/* Content */}
          <div>

            <h1 className="text-3xl lg:text-5xl font-bold text-[#232F3F]">
              {product.name}
            </h1>

            <p className="mt-4 text-gray-500">
              SKU: {product.sku || "N/A"}
            </p>

            <div className="mt-6 text-4xl font-bold text-[#115492]">
              $
              {product.prices?.price
                ? Number(product.prices.price) / 100
                : 0}
            </div>

            <div
              className="mt-8 prose max-w-none"
              dangerouslySetInnerHTML={{
                __html:
                  product.short_description ||
                  product.description ||
                  "",
              }}
            />

            <button className="mt-8 rounded-lg bg-[#115492] px-8 py-4 text-white">
              Add To Cart
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}