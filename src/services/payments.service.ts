import {
  TAcceptanceTokenResponse,
  ITokenCardData,
  ICreatePayment,
  TTokenCardResponse,
} from "@/interfaces/service.interface";

const API_URL_PAYMENTS = process.env.API_URL + "/v1/payments";

export async function getAcceptanceToken(): Promise<TAcceptanceTokenResponse> {
  try {
    const response = await fetch(`${API_URL_PAYMENTS}/acceptance-token`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    });

    const data = await response.json();
    console.log(data);
    if (!response.ok) {
      return {
        success: false,
        data: {
          acceptance_token: "",
          permalink: "",
          type: "",
        },
        error: "Error getting acceptance token",
      };
    }

    return {
      success: true,
      data: data,
      error: "",
    };
  } catch (error) {
    return {
      success: false,
      data: {
        acceptance_token: "",
        permalink: "",
        type: "",
      },
      error: (error as Error).message,
    };
  }
}

export async function createTokenCard(
  data: ITokenCardData
): Promise<TTokenCardResponse> {
  try {
    const response = await fetch(`${API_URL_PAYMENTS}/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    if (!response.ok) {
      throw new Error("Error creating token card");
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

export async function createPayment(data: ICreatePayment) {
  try {
    const response = await fetch(`${API_URL_PAYMENTS}`, {
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
          payment_id: "",
          status: "",
        },
        error: "Error creating payment",
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
        payment_id: "",
        status: "",
      },
      error: (error as Error).message,
    };
  }
}
