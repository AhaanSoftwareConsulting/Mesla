import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CategoryProducts() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      `https://soumi.ahaanmedia.com/wp-json/wc/store/v1/products?category=${id}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [id]);

  return (
    <div className="max-w-[1440px] mx-auto p-6">
      <h1 className="mb-6 text-3xl font-bold">
        Category Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="rounded-lg border p-4"
          >
            <img
              src={product.images?.[0]?.src}
              alt={product.name}
              className="h-40 w-full object-contain"
            />

            <h3 className="mt-4 font-semibold">
              {product.name}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}