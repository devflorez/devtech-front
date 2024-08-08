import { IProductDetail } from "@/interfaces/products.interface";
import {
  IQueryParams,
  TProductsResponse,
  TProductResponse,
} from "@/interfaces/service.interface";

const API_URL_PRODUCTS = process.env.API_URL + "/v1/products";

export async function getProducts(
  params: IQueryParams
): Promise<TProductsResponse> {
  try {
    const response = await fetch(
      API_URL_PRODUCTS +
        "?" +
        new URLSearchParams(Object.entries(params)).toString()
    );
    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        data: [],
        error: data.message,
      };
    }

    return {
      success: true,
      data: data.products,
      error: "",
    };
  } catch (error) {
    return {
      success: false,
      data: [],
      error: (error as Error).message,
    };
  }
}

export async function getProductBySlug(
  slug: string
): Promise<TProductResponse> {
  try {
    const response = await fetch(`${API_URL_PRODUCTS}/${slug}`, {
      cache: "no-cache",
    });
    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        data: {} as IProductDetail,
        error: data.message,
      };
    }

    return {
      success: true,
      data,
      error: "",
    };
  } catch (error) {
    return {
      success: false,
      data: {} as IProductDetail,
      error: (error as Error).message,
    };
  }
}

export async function getFeaturedProducts(): Promise<TProductsResponse> {
  try {
    const response = await fetch(`${API_URL_PRODUCTS}/featured`);
    const data = await response.json();
    if (!response.ok) {
      return {
        success: false,
        data: [],
        error: data.message,
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
      data: [],
      error: (error as Error).message,
    };
  }
}
