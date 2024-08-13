import Link from "next/link";
import { CheckCircle, XCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ConfirmationPayment = ({
  loading,
  status,
  processStatusMessage,
  handlePrevStep,
}: {
  loading: boolean;
  status: string;
  processStatusMessage: {
    title: string;
    description: string;
  };
  handlePrevStep: () => void;
}) => {

  if (loading && status === "PROCESSING") {
    return (
      <div className="flex flex-col border gap-2 border-gray-200 p-4 rounded-lg items-center justify-center min-h-[40vh] text-center mx-4">
        <Clock size={64} className="text-yellow-500" />
        <h1 className="text-2xl font-bold">{
          processStatusMessage.title
         ||
        "Procesando pago"}</h1>
        <p className="font-light text-gray-600">
          {processStatusMessage.description || "Por favor espera un momento"}
        </p>
      </div>
    );
  }


  if (status === "SUCCESS") {
    return (
      <div className="flex flex-col border gap-2 border-gray-200 p-4 rounded-lg items-center justify-center min-h-[40vh] text-center mx-4">
        <CheckCircle size={64} className="text-green-500" />
        <h1 className="text-2xl font-bold">Pedido confirmado</h1>
        <p className="font-light text-gray-600">
          Felicitaciones, tu pedido ha sido procesado con éxito, en breve
          recibirás un correo con el resultado de tu compra.
        </p>
        <Link href="/" className="mt-4 text-primary font-semibold">
          Ir al inicio
        </Link>
      </div>
    );
  }


  return (
    <div className="flex flex-col border gap-2 border-gray-200 p-4 rounded-lg items-center justify-center min-h-[40vh] text-center mx-4">
      <XCircle size={64} className="text-red-500" />
      <h1 className="text-2xl font-bold">Error en el pago</h1>
      <p className="font-light text-gray-600">
        Algo salió mal al procesar tu pago, por favor intenta nuevamente.
      </p>
      <Button 
          onClick={handlePrevStep}
      >
        Volver a intentar
      </Button>
    </div>
  );
};

export default ConfirmationPayment;
