import { ICreateTransaction } from "@/interfaces/service.interface";


const API_URL_TRANSACTIONS = process.env.API_URL + "/v1/transactions";


export async function createTransaction(data: ICreateTransaction) {
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
        data: {
          transaction_id: "",
          status: "",
        },
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
      data: {
        transaction_id: "",
        status: "",
      },
      error: (error as Error).message,
    };
  }
}