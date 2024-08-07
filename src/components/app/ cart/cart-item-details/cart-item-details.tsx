import React from "react";

import { ICartProduct } from "@/redux/cart/slice-cart";

interface ICartItemDetailsProps {
  cart: ICartProduct[];
}

const CartItemDetails = ({ cart }: ICartItemDetailsProps) => {
  if (cart.length === 0) {
    return (
      <span className="text-gray-800">No hay productos en el carrito</span>
    );
  }

  return (
    <ul className="flex flex-col gap-2 mt-6 max-h-[70vh] overflow-y-auto">
      {cart.map((item) => (
        <li key={item.id} className="flex items-center gap-2">
          <img
            src={item.image.url}
            alt={item.image.altText}
            className="w-24 h-24 object-cover rounded-md"
          />
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold text-gray-800">
              {item.name}
            </span>
            <span className="text-sm text-gray-500">
              {item.quantity} x{" "}
              {new Intl.NumberFormat("es-ES", {
                style: "currency",
                currency: "COP",
              }).format(item.price)}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CartItemDetails;
