"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  addToCart,
  removeFromCart,
  updateQuantity,
} from "@/redux/cart/slice-cart";
import { IProductDetail } from "@/interfaces/products.interface";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AddProductToCart = ({ product }: { product: IProductDetail }) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cart);
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity }));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
  };

  const handleUpdateQuantity = (quantity: number) => {
    dispatch(updateQuantity({ id: product.id, quantity }));
  };

  const handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(+e.target.value);
    handleUpdateQuantity(+e.target.value);
  };

  const handleBuyNow = () => {
    dispatch(addToCart({ product, quantity }));
    router.push("/checkout"); // Reemplaza '/checkout' con la ruta a tu página de pago
  };

  const productCart = useAppSelector((state) =>
    state.cart.cart.find((item) => item.id === product.id)
  );

  return (
    <div className="flex flex-col gap-4 justify-start items-start w-full">
      <span className="text-xl font-semibold text-gray-800">
        Unidades disponibles:{" "}
        {productCart ? product.stock - productCart.quantity : product.stock}
      </span>

      <div className="flex flex-col sm:flex-row gap-2 w-full">
        <Input
          type="number"
          value={quantity}
          onChange={handleChangeQuantity}
          min={1}
          max={product.stock}
          className="w-full sm:w-auto"
        />
        {!cart.find((item) => item.id === product.id) && (
          <Button onClick={handleAddToCart} className="w-full sm:w-auto">
            Agregar al carrito
          </Button>
        )}
        {cart.find((item) => item.id === product.id) && (
          <Button onClick={handleRemoveFromCart} variant="destructive" className="w-full sm:w-auto">
            Remover del carrito
          </Button>
        )}
        <Button
          onClick={handleBuyNow}
          className="bg-green-500 hover:bg-green-600 w-full sm:w-auto"
        >
          ¡Comprar ya!
        </Button>
      </div>
    </div>
  );
};

export default AddProductToCart;
