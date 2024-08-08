import CartContent from "@/components/app/cart/cart-content";
export const maxDuration = 60;
export default function Cart() {
  return (
    <div className="container flex flex-col gap-2 sm:mx-auto sm:px-0 min-h-screen px-4">
      <h1 className="sm:text-4xl text-2xl font-bold text-gray-800">Carrito de compras</h1>
      <CartContent />
    </div>
  );
}
