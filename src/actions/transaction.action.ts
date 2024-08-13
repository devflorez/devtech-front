"use server";
import { createTransaction } from "@/services/transaction.service";
import z from "zod";
import { ICreateTransaction } from "@/interfaces/service.interface";

const CreateTransactionSchema = z.object({
  customer: z.object({
    name: z.string({
      message: "Nombre del cliente es requerido",
    }),
    email: z.string({
      message: "Email del cliente es requerido",
    }),
    phoneNumber: z.string({
      message: "Número de teléfono del cliente es requerido",
    }),
  }),
  productTransactions: z.array(
    z.object({
      productId: z.number({
        message: "ID del producto es requerido",
      }),
      quantity: z.number({
        message: "Cantidad del producto es requerido",
      }),
    })
  ),
  shipment: z.object({
    address: z.string({
      message: "Dirección de envío es requerida",
    }),
    city: z.string({
      message: "Ciudad de envío es requerida",
    }),
    state: z.string({
      message: "Estado de envío es requerido",
    }),
    postalCode: z.string({
      message: "Código postal de envío es requerido",
    }),
    country: z.string({
      message: "País de envío es requerido",
    }),
  }),
  total: z.number({
    message: "Total de la transacción es requerido",
  }),
});

export const createTransactionAction = async (data: ICreateTransaction) => {
  const validation = CreateTransactionSchema.safeParse(data);
  if (!validation.success) {
    return {
      success: false,
      message: validation.error.errors.map((error) => error.message).join(", "),
    };
  }

  const response = await createTransaction(data);

  if (!response.success) {
    return {
      success: false,
      message: "Verifica los datos de la transacción",
    };
  }
  return {
    success: true,
    message: "Transacción creada correctamente",
    data: response.data,
  };
};
