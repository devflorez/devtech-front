"use client";

import { Fragment } from "react";
import { Stepper, Step, StepSeparator } from "@/components/ui/stepper";
import {
  ShoppingBag,
  CreditCard,
  CheckFat,
} from "@phosphor-icons/react/dist/ssr";

import PaymentInformation from "@/components/app/checkout/payment-information";
import PurchaseSummary from "@/components/app/checkout/purchase-summary";
import ConfirmationPayment from "@/components/app/checkout/confirmation/confirmation";
import { useState } from "react";
import {
  createTokenCardAction,
  createPaymentAction,
} from "@/actions/payment.action";
import { createTransactionAction } from "@/actions/transaction.action";
import { useToast } from "@/components/ui/use-toast";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { clearCart } from "@/redux/cart/slice-cart";

const PROCESS_STATUS_MESSAGES = {
  card: {
    title: "Validando información",
    description: "Estamos validando la información de tu tarjeta",
  },
  transaction: {
    title: "Creando transacción",
    description: "Estamos creando la transacción de tu compra",
  },
  payment: {
    title: "Procesando pago",
    description: "Estamos procesando tu pago, por favor espera unos segundos.",
  },
};

const STEPS = [
  {
    label: "Información",
    icon: <CreditCard size={24} />,
  },
  {
    label: "Carrito de compras",
    icon: <ShoppingBag size={24} />,
  },

  {
    label: "Confirmación",
    icon: <CheckFat size={24} />,
  },
];

const CheckoutContent = ({
  acceptanceToken,
  link,
}: {
  acceptanceToken: string;
  link: string;
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"PROCESSING" | "SUCCESS" | "ERROR" | "START">(
    "PROCESSING"
  );
  const [processMessage, setProcessMessage] = useState(PROCESS_STATUS_MESSAGES.card);
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const { toast } = useToast();

  const handleNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handlePayment = async () => {
    setLoading(true);
    setProcessMessage(PROCESS_STATUS_MESSAGES.card);
    handleNextStep();
    setStatus("PROCESSING");

    const token = await createTokenCardAction({
      card_holder: cart.creditCard.cardHolder,
      number: cart.creditCard.cardNumber,
      exp_month: cart.creditCard.month,
      exp_year: cart.creditCard.year,
      cvc: cart.creditCard.cvc,
    });

    if (!token.success || !token.data) {
      setLoading(false);
      setStatus("ERROR");
      toast({
        title: "Error",
        description: "Verifica los datos de la tarjeta.",
      });
      return;
    }


    setProcessMessage(PROCESS_STATUS_MESSAGES.transaction);

    const transaction = await createTransactionAction({
      customer: {
        name: cart.deliveryInformation.fullName,
        email: cart.deliveryInformation.email,
        phoneNumber: cart.deliveryInformation.phone,
      },
      productTransactions: cart.cart.map((product) => ({
        productId: product.id,
        quantity: product.quantity,
      })),
      shipment: {
        address:
          cart.deliveryInformation.address +
          " " +
          cart.deliveryInformation.addressDetails,
        city: cart.deliveryInformation.city,
        state: cart.deliveryInformation.state,
        postalCode: cart.deliveryInformation.postalCode,
        country: "CO",
      },
      total: cart.total,
    });



    if (!transaction.success || !transaction.data) {
      setLoading(false);
      setStatus("ERROR");
      toast({
        title: "Error",
        description: "Verifica los datos de la transacción.",
      });
      return;
    }

    setProcessMessage(PROCESS_STATUS_MESSAGES.payment);


    const payment = await createPaymentAction({
      acceptance_token: acceptanceToken,
      payment_method: {
        type: "CARD",
        token: token.data?.id,
        installments: 1,
      },
      session_id: cart.sessionId,
      transaction_id: transaction.data.id,
    });


    if (payment.success) {
      setStatus("SUCCESS");
      setLoading(false);
      dispatch(clearCart());
    } else {
      setStatus("ERROR");
      setLoading(false);
      toast({
        title: "Error",
        description: "Hubo un problema al procesar el pago.",
      });
    }
  };

  return (
    <Fragment>
      <header className="flex flex-col items-center justify-center gap-4 pb-4 mx-4">
        <Stepper>
          {STEPS.map((step, index) => (
            <Fragment key={index}>
              <Step
                label={step.label}
                icon={step.icon}
                active={index <= currentStep}
              />
              {index < STEPS.length - 1 && <StepSeparator />}
            </Fragment>
          ))}
        </Stepper>
      </header>
      {currentStep === 0 && (
        <PaymentInformation handleNextStep={handleNextStep} />
      )}
      {currentStep === 1 && (
        <PurchaseSummary
          handlePayment={handlePayment}
          handlePrevStep={handlePrevStep}
          acceptanceToken={acceptanceToken}
          link={link}
          loading={loading}
        />
      )}
      {currentStep === 2 && (
        <ConfirmationPayment 
          processStatusMessage={processMessage}
          loading={loading}
          status={status}
          handlePrevStep={handlePrevStep}
        />
      )}
    </Fragment>
  );
};

export default CheckoutContent;
