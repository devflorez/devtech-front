"use server";
import { ICreatePayment, ITokenCardData } from "@/interfaces/service.interface";
import { createPayment, createTokenCard } from "@/services/payments.service";
import z from "zod";

const CreateTokenCardSchema = z.object({
  card_holder: z
    .string({
      message: "Nombre del titular de la tarjeta debe ser un requerido",
    })
    .min(3)
    .max(255),
  number: z
    .string({
      message: "Número de tarjeta debe ser un requerido",
    })
    .min(16)
    .max(16),
  exp_month: z
    .string({
      message: "Mes de expiración debe ser un requerido",
    })
    .min(2, "Mes de expiración debe tener al menos 2 caracteres")
    .max(2, "Mes de expiración debe tener máximo 2 caracteres"),
  exp_year: z
    .string({
      message: "Año de expiración debe ser un requerido",
    })
    .min(2, "Año de expiración debe tener al menos 2 caracteres")
    .max(2, "Año de expiración debe tener máximo 2 caracteres"),
  cvc: z
    .string({
      message: "CVC debe ser un requerido",
    })
    .min(3, "CVC debe tener al menos 3 caracteres")
    .max(4, "CVC debe tener máximo 4 caracteres"),
});

const CreatePaymentSchema = z.object({
  acceptance_token: z
    .string({
      message: "Token de aceptación es requerido",
    })
    .min(3),
  payment_method: z.object({
    type: z.string({
      message: "Tipo de pago es requerido",
    }),
    token: z.string({
      message: "Token de pago es requerido",
    }),
    installments: z.number({
      message: "Número de cuotas es requerido",
    }),
  }),
  session_id: z
    .string({
      message: "ID de sesión es requerido",
    })
    .min(3)
    .max(255),
  transaction_id: z.number({
    message: "ID de transacción es requerido",
  }),
});

export async function createTokenCardAction(payment: ITokenCardData) {
  const validation = CreateTokenCardSchema.safeParse(payment);
  if (!validation.success) {
    return {
      success: false,
      message: validation.error.errors.map((error) => error.message).join(", "),
    };
  }
  const response = await createTokenCard(payment);
  if (!response.success) {
    return {
      success: false,
      message: "Verifica los datos de la tarjeta",
    };
  }
  return {
    success: true,
    message: "Token creado correctamente",
    data: response.data,
  };
}

export async function createPaymentAction(payment: ICreatePayment) {
  const validation = CreatePaymentSchema.safeParse(payment);

  if (!validation.success) {
    return {
      success: false,
      message: validation.error.errors.map((error) => error.message).join(", "),
    };
  }

  const response = await createPayment(payment);

  if (!response.success) {
    return {
      success: false,
      message: "Verifica los datos de la transacción",
    };
  }

  return {
    success: true,
    message: "Pago creado correctamente",
    data: payment,
  };
}
