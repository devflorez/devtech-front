"use client";

import React, { Fragment, useEffect, useState } from "react";
import CartTable from "../cart-table";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { clearCart } from "@/redux/cart/slice-cart";

const CartContent = () => {
  const cart = useAppSelector((state) => state.cart);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }





  return (
    <Fragment>
      <CartTable cart={cart.cart} />
      <footer className="flex justify-end gap-2 font-light sm:flex-row flex-col">
        {cart.cart.length > 0 && cart.total > 0 ? (
          <Button variant="outline" className="font-normal"
            onClick={() => dispatch(clearCart())}
          >
            Limpiar carrito
          </Button>
        ) : null}

        <Button className="font-normal" onClick={() => router.push("/")}>
          Seguir comprando
        </Button>

        {cart.cart.length > 0 && cart.total > 0 ? (
          <Button
            className="bg-green-500 hover:bg-green-600 text-white font-normal disabled:bg-gray-300"
            onClick={() => router.push("/checkout")}
          >
            Continuar con la compra
          </Button>
        ) : null}
      </footer>
    </Fragment>
  );
};

export default CartContent;
