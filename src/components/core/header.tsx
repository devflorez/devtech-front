import React from "react";
import Link from "next/link";
import Search from "@/components/core/search";
import CartItemNavigation from "@/components/app/cart/cart-item-navigation";

export default function Navbar() {
  return (
    <header className="container mx-auto px-4 flex flex-wrap items-center  sm:justify-between w-full sm:h-20 py-4 border-b">
      <Link href="/" className="flex items-center gap-2 text-gray-800 cursor-pointer">
        <span className="bg-gray-800 text-white text-xl font-bold px-2 py-1 rounded">
          DevTech
        </span>
        <span className="text-gray-400 cursor-pointer">
          Store
        </span>
      </Link>
      <div className="flex items-center justify-between  w-full sm:w-auto gap-4 mt-2 md:mt-0">
        <Search />
        <CartItemNavigation />
      </div>
    </header>
  );
}
