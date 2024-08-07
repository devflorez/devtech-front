import { IProduct, IProductDetail } from "./products.interface";

export interface IQueryParams {
  page: string;
  limit: string;
  query?: string;
}

export interface IResponse<T> {
  success: boolean;
  data: T;
  error: string;
}

export type TProductsResponse = IResponse<IProduct[]>;

export type TProductResponse = IResponse<IProductDetail>;
