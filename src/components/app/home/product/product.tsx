import React from "react";
import Link from "next/link";
import { IProduct } from "@/interfaces/products.interface";
import { formatPrice } from "@/lib/utils";

const Product = ({
  id,
  name,
  shortDescription,
  price,
  stock,
  imageAltText,
  imageUrl,
  slug,
}: IProduct) => {
  return (
    <Link
      href={`/product/${slug}`}
      className="flex flex-col gap-2  border-gray-100 rounded-md hover:border-gray-300 sm:p-4 sm:hover:border min-w-72"
      id={id.toString()}
    >
      <img
        src={imageUrl}
        alt={imageAltText}
        className="w-full h-48 object-cover rounded"
      />
      <div className="flex flex-col gap-2 justify-between">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600">{shortDescription}</p>
        <p className="text-gray-800 font-semibold">{formatPrice(price)}</p>
        <p className="text-gray-500">{stock} unidades disponibles</p>
      </div>
    </Link>
  );
};

export default Product;
