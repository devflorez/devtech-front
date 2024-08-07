import React from "react";
import Link from "next/link";
import Search from "../search";

import CartItemNavigation from "@/components/app/ cart/cart-item-navigation";
export default function navbar() {
  return (
    <header className=" container mx-auto px-4 flex items-center justify-between w-full h-16 py-4 border-b">
      <Link href="/"
        className="flex items-center gap-2 text-gray-800 cursor-pointer"
      >
        <span className="bg-gray-800 text-white text-xl font-bold px-2 py-1 rounded">
          DevTech
        </span>
        <span className=" text-gray-400 cursor-pointer">
          Store
        </span>
      </Link>
      <div className="flex items-center gap-4">
        <Search />
        <CartItemNavigation />
      </div>
    </header>
  );
}
