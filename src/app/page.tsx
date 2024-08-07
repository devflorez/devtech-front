import Product from "@/components/app/home/product";
import { getProducts } from "@/services/products.service";
import React from "react";
import { ISearchParams } from "@/interfaces/page.interface";
export default async function Home({
  searchParams: { page = "1", limit = "10", query = "" },
}: {
  searchParams: ISearchParams;
}) {
  const { data } = await getProducts({ page, limit, query });
  return (
    <div className="container mx-auto px-0">
      <div className="flex flex-col gap-4 items-center justify-center text-center">
        <img
          src="https://placehold.co/1200x400?text=Banner+Principal&font=montserrat"
          alt="Banner Principal"
          className="w-full h-96 object-cover rounded"
        />
        <h1 className="text-4xl font-semibold text-gray-800 mt-4">
          Bienvenido a DevTech Store
        </h1>
        <p className="text-gray-600">
          Tu tienda de tecnología especializada en artículos indispensables para
          <strong> desarrolladores</strong>, como{" "}
          <strong> teclados ergonómicos </strong>, <strong> monitores</strong>{" "}
          de alta resolución, <strong>sillas cómodas </strong>y más. Encuentra
          todo lo que necesitas para crear tu espacio de trabajo ideal.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <h2 className="text-2xl font-semibold text-gray-800 mt-8">
          Productos Destacados
        </h2>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
          {data.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              shortDescription={product.shortDescription}
              price={product.price}
              stock={product.stock}
              image={product.image}
              slug={product.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
