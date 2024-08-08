import React from "react";
import { ISearchParams } from "@/interfaces/page.interface";
import ProductList from "@/components/app/home/product-list/product-list";
import ProductListSkeleton from "@/components/app/home/product-list/product-list-skeleton";
import { Suspense } from "react";
export default async function Home({
  searchParams,
}: {
  searchParams: ISearchParams;
}) {
  return (
    <div className="container mx-auto sm:px-0 flex flex-col justify-start min-h-screen">
      <div className="flex flex-col gap-4 items-center justify-center text-center ">
        <img
          src="https://placehold.co/1200x400?text=Banner+Principal&font=montserrat"
          alt="Banner Principal"
          className="w-full h-full max-h-96 object-cover rounded hidden sm:block"
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
      <Suspense fallback={<ProductListSkeleton />}>
        <ProductList
          page={searchParams.page ?? "1"}
          limit={searchParams.limit ?? "10"}
          search={searchParams.search ?? ""}
        />
      </Suspense>
    </div>
  );
}
