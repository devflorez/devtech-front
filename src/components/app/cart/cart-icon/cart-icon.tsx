import React from "react";
import { ShoppingCart } from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@/components/ui/badge";

const CartIcon = ({ total }: { total: number }) => {
  if (total === 0) {
    return (
      <div className="flex items-center gap-2 text-gray-800 cursor-pointer p-4">
        <ShoppingCart className="text-gray-800" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 text-gray-800 cursor-pointer p-4">
      <Badge className="font-medium">
        {new Intl.NumberFormat("es-ES", {
          style: "currency",
          currency: "COP",
        }).format(total)}
      </Badge>
      <ShoppingCart className="text-gray-800" />
    </div>
  );
};

export default CartIcon;
