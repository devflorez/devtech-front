"use client";
import React, {  useState } from "react";
import CreditCardInformation from "../credit-card-information";
import DeliveryInformation from "../delivery-information";
import zod from "zod";
import { Button } from "@/components/ui/button";

const PaymentInformationSchema = zod.object({
  delivery: zod.object({
    fullName: zod
      .string({
        message: "El nombre completo es requerido",
      })
      .min(3, {
        message: "El nombre completo debe tener al menos 3 caracteres",
      }),
    address: zod
      .string({
        message: "La dirección es requerida",
      })
      .min(5, {
        message: "La dirección debe tener al menos 5 caracteres",
      }),
    addressDetails: zod
      .string({
        message: "Los detalles de la dirección son requeridos",
      })
      .min(5, {
        message:
          "Los detalles de la dirección deben tener al menos 5 caracteres",
      }),
    city: zod
      .string({
        message: "La ciudad es requerida",
      })
      .min(3, {
        message: "La ciudad debe tener al menos 3 caracteres",
      }),
    state: zod
      .string({
        message: "El estado es requerido",
      })
      .min(3, {
        message: "El estado debe tener al menos 3 caracteres",
      }),
    postalCode: zod
      .string({
        message: "El código postal es requerido",
      })
      .length(5, {
        message: "El código postal debe tener 5 caracteres",
      })
      .regex(/^\d+$/, {
        message: "El código postal solo puede contener números",
      }),

    phone: zod
      .string({
        message: "El número de teléfono es requerido",
      })
      .length(10, {
        message: "El número de teléfono debe tener 10 caracteres",
      })
      .regex(/^\d+$/, {
        message: "El número de teléfono solo puede contener números",
      }),
  }),
  creditCard: zod.object({
    fullName: zod.string({
      message: "El nombre del titular de la tarjeta es requerido",
    }),
    cardNumber: zod
      .string({
        message: "El número de tarjeta es requerido",
      })
      .length(16, {
        message: "El número de tarjeta debe tener 16 caracteres",
      })
      .regex(/^\d+$/, {
        message: "El número de tarjeta solo puede contener números",
      }),
    month: zod.string({
      message: "El mes de expiración es requerido",
    }),
    year: zod.string({
      message: "El año de expiración es requerido",
    }),
    cvv: zod
      .string({
        message: "El CVV es requerido",
      })
      .length(3, {
        message: "El CVV debe tener 3 caracteres",
      })
      .regex(/^\d+$/, {
        message: "El CVV solo puede contener números",
      }),
  }),
});

const PaymentInformation = ({
  handleNextStep,
}: {
  handleNextStep: () => void;
}) => {
  const [form, setForm] = useState({
    delivery: {
      fullName: "",
      address: "",
      addressDetails: "",
      city: "",
      state: "",
      postalCode: "",
      phone: "",
    },
    creditCard: {
      fullName: "",
      cardNumber: "",
      month: "",
      year: "",
      cvv: "",
    },
  });
  const [errors, setErrors] = useState<zod.ZodIssue[]>([]);

  const handleChangeCreditCard = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      creditCard: {
        ...prev.creditCard,
        [name]: value,
      },
    }));
  };

  const handleChangeDelivery = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      delivery: {
        ...prev.delivery,
        [name]: value,
      },
    }));
  };

  const handleChangeSelectCreditCard = (value: string, name: string) => {
    setForm((prev) => ({
      ...prev,
      creditCard: {
        ...prev.creditCard,
        [name]: value,
      },
    }));
  };

  const handleContinue = () => {
    try {
      const validated = PaymentInformationSchema.parse(form);
      if (!validated) return;
      handleNextStep();
    } catch (error) {
      if (error instanceof zod.ZodError) {
        console.log(error.errors);
        setErrors(error.errors);
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto ">
      <div className="grid grid-cols-2 gap-8">
        <DeliveryInformation
          values={form.delivery}
          onChange={handleChangeDelivery}
          errors={errors}
        />
        <CreditCardInformation
          values={form.creditCard}
          onChange={handleChangeCreditCard}
          onChangeSelect={handleChangeSelectCreditCard}
          errors={errors}
        />
      </div>
      <footer className="flex items-center justify-end gap-4 py-8">
        <Button className="btn btn-primary" onClick={handleContinue}>
          Continuar
        </Button>
      </footer>
    </div>
  );
};

export default PaymentInformation;
