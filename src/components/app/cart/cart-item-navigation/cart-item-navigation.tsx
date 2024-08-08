"use client";

import React from "react";
import { useAppSelector } from "@/redux/hooks";
import CartIcon from "../cart-icon";
import CartItemDetails from "../cart-item-details/cart-item-details";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CartItemNavigation = () => {
  const cart = useAppSelector((state) => state.cart);

  return (
    <Sheet>
      <SheetTrigger disabled={cart.cart.length === 0}>
        <CartIcon total={cart.total} />
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-4 justify-between">
        <div>
          <SheetHeader>
            <SheetTitle>Carrito de compras</SheetTitle>
            <SheetDescription>
              Revisa los productos que has añadido al carrito
            </SheetDescription>
          </SheetHeader>
          <CartItemDetails cart={cart.cart} />
        </div>
        <SheetFooter>
          <div className="flex flex-col gap-4 w-full">
            <hr className="border-gray-200 w-full" />
            <span className="text-gray-800">
              Total:{" "}
              <strong>
                {new Intl.NumberFormat("es-ES", {
                  style: "currency",
                  currency: "COP",
                }).format(cart.total)}
              </strong>
            </span>
            <div className="flex justify-between items-center gap-2 w-full">
              <Button asChild variant="outline">
                <Link href="/cart">Ver carrito</Link>
              </Button>
              <Link
                href="/checkout"
                className="bg-green-500 text-white px-4 py-2 rounded-md w-full text-center"
              >
                Comprar
              </Link>
            </div>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CartItemNavigation;