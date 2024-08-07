import React, { useState, ChangeEvent } from "react";
import { CreditCard } from "lucide-react";

// Definición de los tipos de tarjetas de crédito y sus íconos correspondientes
const CREDIT_CARD_TYPES: { [key: string]: JSX.Element } = {
  visa: (
    <img
      src="/images/visa.webp"
      alt="visa"
      className="h-6 w-12 object-contain"
    />
  ),
  mastercard: (
    <img
      src="/images/mastercard.webp"
      alt="mastercard"
      className="h-6 w-12 object-contain"
    />
  ),
  unknown: <CreditCard size={23} />,
};

// Definición de las props del componente
interface CreditCardInputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>, cardType: string) => void;
}

const CreditCardInput: React.FC<CreditCardInputProps> = ({ onChange }) => {
  const [cardType, setCardType] = useState<string>("unknown");
  const [cardNumber, setCardNumber] = useState<string>("");

  // Función que maneja el cambio en el número de la tarjeta de crédito
  const handleCardTypeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const formattedValue = formatCreditCardNumber(value);
    setCardNumber(formattedValue);

    // Determina el tipo de tarjeta según el primer dígito
    let detectedCardType = "unknown";
    if (formattedValue.startsWith("4")) {
      detectedCardType = "visa";
    } else if (formattedValue.startsWith("5")) {
      detectedCardType = "mastercard";
    }
    setCardType(detectedCardType);

    // Llamar a la función onChange pasada por props
    onChange(event, detectedCardType);
  };

  // Función para formatear el número de la tarjeta de crédito
  const formatCreditCardNumber = (value: string): string => {
    const cleaned = value.replace(/\D/g, ""); // Elimina caracteres no numéricos
    const match = cleaned.match(/.{1,4}/g); // Agrupa los dígitos en bloques de 4
    return match ? match.join(" ") : cleaned; // Une los bloques con un espacio
  };

  return (
    <div className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
      {CREDIT_CARD_TYPES[cardType]} {/* Muestra el ícono correspondiente */}
      <input
        type="text"
        value={cardNumber}
        onChange={handleCardTypeChange}
        className="flex-grow outline-none bg-transparent text-sm px-2"
        placeholder="Enter your credit card number"
        maxLength={19} // Longitud máxima para "4444 4444 4444 4444"
      />
    </div>
  );
};

export default CreditCardInput;
