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
const CheckoutContent = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const handleNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };
  const handlePrevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <Fragment>
      <header className="flex items-center justify-center gap-4 pb-4">
        <Stepper>
          {STEPS.map((step, index) => (
            <Fragment key={index}>
              <Step
                label={step.label}
                icon={step.icon}
                active={index <= currentStep ? true : false}
              />
              {index < STEPS.length - 1 && <StepSeparator />}
            </Fragment>
          ))}
        </Stepper>
      </header>
      {currentStep === 0 && <PaymentInformation
        handleNextStep={handleNextStep}
      />}
      {currentStep === 1 && <PurchaseSummary
        handleNextStep={handleNextStep}
        handlePrevStep={handlePrevStep}
      />}
      {currentStep === 2 && <ConfirmationPayment

      />}
    </Fragment>
  );
};

export default CheckoutContent;
