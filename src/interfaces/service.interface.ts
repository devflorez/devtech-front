import { IProduct, IProductDetail } from "./products.interface";

export interface IQueryParams {
  page: string;
  limit: string;
  search?: string;
}

export interface ITokenCardData {
  card_holder: string;
  number: string;
  exp_month: string;
  exp_year: string;
  cvc: string;
}

export interface IResponse<T> {
  success: boolean;
  data: T;
  error: string;
}

export interface Customer {
  name: string;
  email: string;
}

export interface ProductTransaction {
  productId: number;
  quantity: number;
}

export interface Shipment {
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface ICreateTransaction {
  customer: Customer;
  productTransactions: ProductTransaction[];
  shipment: Shipment;
}

export interface IcreatePayment {
  acceptance_token: string;
  payment_method: {
    type: string;
    token: string;
    installments: number;
  }
  session_id: string;
  transaction_id: number;
}

export interface PaymentMethod {
  name: string;
  payment_processors: PaymentProcessor[];
}

export interface PaymentProcessor {
  name: string;
}

export interface IPresignedAcceptance {
  acceptance_token: string;
  permalink: string;
  type: string;
}

export type TProductsResponse = IResponse<IProduct[]>;

export type TProductResponse = IResponse<IProductDetail>;

export type TAcceptanceTokenResponse = IResponse<IPresignedAcceptance>;
