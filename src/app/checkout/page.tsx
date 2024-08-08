import CheckoutContent from "@/components/app/checkout/checkout-content";
export const maxDuration = 60;
export default function Checkout() {
  return (
    <div className="container flex flex-col gap-4 mx-auto px-0 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 text-center">Finalizar compra</h1>
      <CheckoutContent />
    </div>
  );
}
