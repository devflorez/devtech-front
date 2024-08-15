import CheckoutContent from "@/components/app/checkout/checkout-content";
import { WarningCircle } from "@phosphor-icons/react/dist/ssr";

import { getAcceptanceToken } from "@/services/payments.service";
export const maxDuration = 60;
export default async function Checkout() {
  const response = await getAcceptanceToken();


  if (!response.success) {
    return (
      <div className="container flex flex-col gap-4 mx-auto px-0 min-h-screen">
        <div className="flex flex-col items-center justify-center gap-2  border border-dashed h-96 mx-4">
          <WarningCircle size={68} 
            className="text-yellow-500 text-center"
          />
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            Lo sentimos
          </h1>
          <p className="text-lg text-gray-800 text-center">
            No podemos procesar tu pago en este momento, por favor intenta más tarde.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container flex flex-col gap-4 mx-auto px-0 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 text-center">
        Finalizar compra
      </h1>
      <CheckoutContent 
        acceptanceToken={response.data.acceptance_token}
        link={response.data.permalink}
/>
    </div>
  );
}
