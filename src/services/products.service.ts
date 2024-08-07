import { IProduct, IProductDetail } from "@/interfaces/products.interface";
import {
  IQueryParams,
  TProductsResponse,
  TProductResponse,
} from "@/interfaces/service.interface";
import { PRODUCTS, PRODUCTS_WITH_CAROUSEL } from "@/lib/contants";

export async function getProducts(
  params: IQueryParams
): Promise<TProductsResponse> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const { page, limit, query } = params;
    const start = (parseInt(page) - 1) * parseInt(limit);
    const end = start + parseInt(limit);
    const data = PRODUCTS.filter((product) =>
      product.name.toLowerCase().includes(query?.toLowerCase() || "")
    );
    return {
      success: true,
      data: data.slice(start, end) as IProduct[],
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
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const product = PRODUCTS_WITH_CAROUSEL.find(
      (product) => product.slug === slug
    );
    if (!product) {
      return {
        success: false,
        data: {} as IProductDetail,
        error: "Product not found",
      };
    }
    return {
      success: true,
      data: product,
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
