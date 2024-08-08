import React from "react";
import { getProducts } from "@/services/products.service";
import Product from "../product/product";
import { Database } from "@phosphor-icons/react/dist/ssr";

interface IProductListProps {
  page: string;
  limit: string;
  search?: string;
}

async function ProductList({ page, limit, search }: IProductListProps) {
  const { data } = await getProducts({ page, limit, search });

  if (!data.length) {
    return (
      <div className="flex flex-col justify-center items-center h-96 gap-2 border border-dashed border-gray-200 mt-4">
        <Database className="w-16 h-16 text-gray-400" />
        <p className="text-lg font-light text-gray-800">
          No se encontraron productos
        </p>
      </div>
    );
  }


  return (
    <div className="flex flex-col gap-8 px-4">
      <h2 className="text-2xl font-semibold text-gray-800 mt-8">
        Productos
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
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
    </div>
  );
}

export default ProductList;
