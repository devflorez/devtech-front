import React from "react";
import Link from "next/link";
import { IProduct } from "@/interfaces/products.interface";

const Product = ({
  id,
  name,
  shortDescription,
  price,
  stock,
  image,
  slug,
}: IProduct) => {
  return (
    <Link
      href={`/product/${slug}`}
      className="flex flex-col gap-2  border-gray-100 rounded-md hover:border-gray-300 p-4 hover:border min-w-72"
      id={id.toString()}
    >
      <img
        src={image.url}
        alt={image.altText}
        className="w-full h-48 object-cover rounded"
      />
      <div className="flex flex-col gap-2 justify-between">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600">{shortDescription}</p>
        <p className="text-gray-800 font-semibold">
          {new Intl.NumberFormat("es-ES", {
            style: "currency",
            currency: "COP",
          }).format(price)}
        </p>
        <p className="text-gray-500">{stock} unidades disponibles</p>
      </div>
    </Link>
  );
};

export default Product;
