import React from "react";
import { getProductBySlug } from "@/services/products.service";
import ProductCarousel from "../product-carousel";
import AddProductToCart from "../../cart/add-product-to-cart/add-product-to-cart";
async function ProductDetails({ slug }: { slug: string }) {
  const { data } = await getProductBySlug(slug);
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-start  justify-start">
      <ProductCarousel images={data.images} />
      <div className="flex flex-col gap-6 justify-start items-start">
        <header className="flex flex-col gap-2 justify-start items-start border-b border-gray-200 pb-4 w-full">
          <h1 className="text-3xl font-semibold text-gray-800">{data.name}</h1>
          <p
            className="text-gray-600
            text-lg font-light
          "
          >
            {data.shortDescription}
          </p>
          <span className="text-2xl font-semibold text-gray-800">
            {new Intl.NumberFormat("es-ES", {
              style: "currency",
              currency: "COP",
            }).format(data.price)}
          </span>
        </header>

        <p>{data.description}</p>
        <footer className="flex flex-col gap-2 justify-start items-start border-t border-gray-200 pt-4 w-full">
          <AddProductToCart product={data} />
        </footer>
      </div>
    </section>
  );
}

export default ProductDetails;
