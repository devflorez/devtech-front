import React from "react";
import { getProductBySlug } from "@/services/products.service";
import ProductCarousel from "../product-carousel";
import AddProductToCart from "../../cart/add-product-to-cart/add-product-to-cart";
import { formatPrice } from "@/lib/utils";

async function ProductDetails({ slug }: { slug: string }) {
  const { data } = await getProductBySlug(slug);

  if (!data) {
    return <div>Product not found</div>;
  }

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start justify-start px-4 sm:px-6 lg:px-8">
      <ProductCarousel images={data.images} />
      <div className="flex flex-col gap-6 justify-start items-start">
        <header className="flex flex-col gap-2 justify-start items-start border-b border-gray-200 pb-4 w-full">
          <h1 className="text-3xl font-semibold text-gray-800">{data.name}</h1>
          <p className="text-gray-600 text-lg font-light">
            {data.shortDescription}
          </p>
          <span className="text-2xl font-semibold text-gray-800">
            {formatPrice(data.price)}
          </span>
        </header>

        <p>{data.description}</p>
        <footer className="flex flex-col gap-2 justify-start items-start border-t border-gray-200 pt-4 w-full">
          {
            data.stock && data.stock > 0 ? (
              <AddProductToCart product={data} />
            ) : (
              <p className="text-red-500">Agotado</p>
            )
          }
        </footer>
      </div>
    </section>
  );
}

export default ProductDetails;
