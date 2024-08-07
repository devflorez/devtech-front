import React from "react";

type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  stock: number;
  imageUrl: string;
};

const Product = ({
  id,
  name,
  description,
  price,
  stock,
  imageUrl,
}: Product) => {
  return (
    <div
      className="flex flex-col gap-2  border-gray-100 rounded-md"
      id={id.toString()}
    >
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-48 object-cover rounded"
      />
      <div
        className="flex flex-col gap-2 justify-between"
      >
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-gray-600">{description}</p>
      <p className="text-gray-800 font-semibold">{price}</p>
      <p className="text-gray-500">{stock} unidades disponibles</p>
      </div>
   
    </div>
  );
};

export default Product;
