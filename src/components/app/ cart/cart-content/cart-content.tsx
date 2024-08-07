"use client";

import React, { Fragment } from "react";
import CartTable from "../cart-table";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CartContent = () => {
  const cart = useAppSelector((state) => state.cart);
  return (
    <Fragment>
      <CartTable cart={cart.cart} />
      <footer className="flex justify-end gap-2 font-light">
        {(cart.cart.length > 0 && cart.total > 0) && (
          <Button variant="outline" className="font-normal">
            Limpiar carrito
          </Button>
        )}
        <Button asChild className="font-normal">
          <Link href="/">Seguir comprando</Link>
        </Button>
        {(cart.cart.length > 0 && cart.total > 0) && (
          <Button
            asChild
            className="bg-green-500 hover:bg-green-600 text-white font-normal disabled:bg-gray-300"
          >
            <Link href="/checkout">Continuar con la compra</Link>
          </Button>
        )}
      </footer>
    </Fragment>
  );
};

export default CartContent;
