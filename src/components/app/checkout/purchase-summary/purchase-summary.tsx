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
import { createTokenCardAction } from "@/actions/payment.action";
import { useToast } from "@/components/ui/use-toast";

const PurchaseSummary = ({
  handleNextStep,
  handlePrevStep,
  acceptanceToken,
  link,
}: {
  handleNextStep: () => void;
  handlePrevStep: () => void;
  acceptanceToken: string;
  link: string;
}) => {
  const cart = useAppSelector((state) => state.cart);
  const [accepted, setAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const { toast } = useToast()

  const handlePayment = async () => {
    setLoading(true);
    const token = await createTokenCardAction(
      {
        card_holder: cart.creditCard.cardHolder,
        number: cart.creditCard.cardNumber,
        exp_month: cart.creditCard.month,
        exp_year: cart.creditCard.year,
        cvc: cart.creditCard.cvc,
      }
    );
    if(!token.success){
      setLoading(false);
      toast({
        title: "No se pudo realizar el pago",
        description: token.message,
      });
      return;
    }
    if(token.success){
      setLoading(false);
      handleNextStep();
    }
  }

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
        <Button
          className="sm:w-auto w-full"
          onClick={handlePayment}
          disabled={!accepted || loading}
        >
        {loading ? <Loading /> : "Pagar"}
        </Button>
      </footer>
    </div>
  );
};

export default PurchaseSummary;
