"use client";
import CartTable from "../../cart/cart-table";
import { useAppSelector } from "@/redux/hooks";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { useAppDispatch } from "@/redux/hooks";
import { setAcceptanceToken } from "@/redux/cart/slice-cart";
import Loading from "@/components/core/loading";

const PurchaseSummary = ({
  handlePayment,
  handlePrevStep,
  acceptanceToken,
  link,
  loading,
}: {
  handlePayment: () => void;
  handlePrevStep: () => void;
  acceptanceToken: string;
  link: string;
  loading: boolean;
}) => {
  const cart = useAppSelector((state) => state.cart);
  const [accepted, setAccepted] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <div className="max-w-6xl w-full mx-auto p-4">
      <div className="max-w-6xl w-full mx-auto gap-8">
        <CartTable cart={cart.cart} />
        <div
          className={`flex items-center gap-2  mt-4 ${
            accepted ? "text-green-500" : "text-red-500"
          }`}
        >
          <Checkbox
            id="accept"
            name="accept"
            checked={accepted}
            onCheckedChange={(checked) => {
              setAccepted(checked as boolean);
              dispatch(setAcceptanceToken(acceptanceToken));
            }}
          />
          <label htmlFor="accept" className="text-sm text-gray-800 font-light">
            Acepto haber leido los{" "}
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 font-medium"
            >
              términos y condiciones y la política de privacidad
            </a>{" "}
            para hacer la compra.{" "}
          </label>
        </div>
        <ul className="flex flex-col justify-end items-end gap-4 text-lg text-gray-800 mt-4">
          <li>
            Subtotal: <strong>{formatPrice(cart.subTotal)}</strong>
          </li>
          <li>
            Total Iva: <strong>{formatPrice(cart.totalIva)}</strong>
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
        <Button
          className="sm:w-auto w-full"
          onClick={handlePayment}
          disabled={!accepted || loading || cart.cart.length === 0}
        >
          {loading ? <Loading /> : "Pagar"}
        </Button>
      </footer>
    </div>
  );
};

export default PurchaseSummary;
