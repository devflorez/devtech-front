import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ZodIssue } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number) {
  return price.toLocaleString("en", {
    style: "currency",
    currency: "COP",
  });
}

export function formatPriceShort(price: number) {
  if (price >= 1000000) {
    return `${price / 1000000}M`;
  }

  if (price >= 1000) {
    return `${price / 1000}K`;
  }

  return price;
}

export const errorMessages = (errors: string[]) => {
  if (errors.length === 0) return "";

  const text = errors.join(", ");

  return text;
};

export const findErrors = (
  fieldName: string,
  errors: ZodIssue[] | null | undefined
) => {
  if (!errors) return [];
  return errors
    .filter((item) => {
      return item.path.includes(fieldName);
    })
    .map((item) => item.message);
};
