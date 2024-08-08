"use client"
import React, {useState, useEffect} from "react";
import { ShoppingCart } from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@/components/ui/badge";
import { formatPrice, formatPriceShort } from "@/lib/utils";

const CartIcon = ({ total }: { total: number }) => {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }


  if (total === 0) {
    return (
      <div className="flex items-center gap-2 text-gray-800 cursor-pointer p-2 sm:p-4">
        <ShoppingCart className="text-gray-800" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 text-gray-800 cursor-pointer p-2 sm:p-4">
      <Badge className="font-medium text-sm sm:text-base hidden sm:block">
        {formatPrice(total)}
      </Badge>
      <Badge className="font-medium text-sm sm:text-base block sm:hidden">
        {formatPriceShort(total)}
      </Badge>
      <ShoppingCart className="text-gray-800" />
    </div>
  );
};

export default CartIcon;
