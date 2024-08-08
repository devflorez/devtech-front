import CartContent from "@/components/app/cart/cart-content";
export const maxDuration = 60;
export default function Cart() {
  return (
    <div className="container flex flex-col gap-2 mx-auto px-0 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800">Carrito de compras</h1>
      <CartContent />
    </div>
  );
}
