import Link from "next/link";
import { CheckCircle, XCircle, Clock } from "lucide-react";
const ConfirmationPayment = () => {
  const success = false;
  const pending = true;

  if (success) {
    return (
      <div className="flex flex-col border gap-2 border-gray-200 p-4 rounded-lg items-center justify-center min-h-[40vh]">
        <CheckCircle size={64} className="text-green-500" />
        <h1 className="text-2xl font-bold text-center">Pedido confirmado</h1>
        <p className="text-center font-light text-gray-600">
          Felicitaciones, tu pedido ha sido procesado con éxito, en breve
          recibirás un correo con los detalles de tu compra.
        </p>
        <Link href="/orders" className="mt-4 text-primary font-semibold">
          Ir al inicio
        </Link>
      </div>
    );
  }

  if (pending) {
    return (
      <div className="flex flex-col border gap-2 border-gray-200 p-4 rounded-lg items-center justify-center min-h-[40vh]">
        <Clock size={64} className="text-yellow-500" />
        <h1 className="text-2xl font-bold text-center">Procesando pago</h1>
        <p className="text-center font-light text-gray-600">
          Estamos procesando tu pago, por favor espera unos segundos.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col border gap-2 border-gray-200 p-4 rounded-lg items-center justify-center min-h-[40vh]">
      <XCircle size={64} className="text-red-500" />
      <h1 className="text-2xl font-bold text-center">Error en el pago</h1>
      <p className="text-center font-light text-gray-600">
        Algo salió mal al procesar tu pago, por favor intenta nuevamente.
      </p>
      <Link href="/checkout" className="mt-4 text-primary font-semibold">
        Volver al checkout
      </Link>
    </div>
  );
};

export default ConfirmationPayment;
