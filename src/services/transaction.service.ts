import { ICreateTransaction, TTransactionResponse } from "@/interfaces/service.interface";


const API_URL_TRANSACTIONS = process.env.API_URL + "/v1/transactions";


export async function createTransaction(data: ICreateTransaction):Promise<TTransactionResponse> {
  try {
    const response = await fetch(`${API_URL_TRANSACTIONS}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    if (!response.ok) {
      return {
        success: false,
        data: responseData,
        error: "Error creating transaction",
      };
    }

    return {
      success: true,
      data: responseData,
      error: "",
    };
  } catch (error) {
    return {
      success: false,
      data: null,
      error: (error as Error).message,
    };
  }
}