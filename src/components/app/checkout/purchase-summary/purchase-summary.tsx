"use client";
import CartTable from "../../cart/cart-table";
import { useAppSelector } from "@/redux/hooks";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";

const PurchaseSummary = ({
  handleNextStep,
  handlePrevStep,
}: {
  handleNextStep: () => void;
  handlePrevStep: () => void;
}) => {
  const cart = useAppSelector((state) => state.cart);

  return (
    <div className="max-w-6xl w-full mx-auto p-4">
      <div className="max-w-6xl w-full mx-auto gap-8">
        <CartTable cart={cart.cart} />

        <ul className="flex flex-col justify-end items-end gap-4 text-lg text-gray-800 mt-4">
          <li>
            Subtotal: <strong>{formatPrice(cart.total)}</strong>
          </li>
          <li>Envío: Gratis</li>
          <li>
            Total: <strong>{formatPrice(cart.total)}</strong>
          </li>
        </ul>
      </div>
      <footer className="flex flex-col sm:flex-row items-end justify-end gap-4 py-8">
        <Button
          variant="outline"
          className="sm:w-auto w-full"
          onClick={handlePrevStep}
        >
          Regresar
        </Button>
        <Button className="sm:w-auto w-full"
         onClick={handleNextStep}>
          Pagar ahora
        </Button>
      </footer>
    </div>
  );
};

export default PurchaseSummary;
