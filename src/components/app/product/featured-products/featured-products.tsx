import React from "react";
import { getFeaturedProducts } from "@/services/products.service";
import Product from "@/components/app/home/product/product";

async function FeaturedProducts() {
  const { data } = await getFeaturedProducts();
  return (
    <section className="flex flex-col gap-4 ustify-center ">
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        Productos destacados
      </h2>
      <div className="flex overflow-x-auto gap-2 w-full">
        {data.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            shortDescription={product.shortDescription}
            price={product.price}
            stock={product.stock}
            imageUrl={product.imageUrl}
            imageAltText={product.imageAltText}
            slug={product.slug}
            isFeatured={product.isFeatured}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
