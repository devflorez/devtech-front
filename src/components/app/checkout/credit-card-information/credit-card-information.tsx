"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MONTHS, YEARS } from "@/lib/contants";

import CreditCardInput from "../credit-card-input";
import { errorMessages, findErrors } from "@/lib/utils";
import { ZodIssue } from "zod";

const CreditCardInformation = ({
  values,
  onChange,
  errors,
  onChangeSelect
}: {
  errors: ZodIssue[];
  values: {
    fullName: string;
    cardNumber: string;
    month: string;
    year: string;
    cvv: string;
  };
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeSelect: (value: string, name: string) => void;
}) => {
  const fullNameErrors = findErrors("fullName", errors);
  const cardNumberErrors = findErrors("cardNumber", errors);
  const monthErrors = findErrors("month", errors);
  const yearErrors = findErrors("year", errors);
  const cvvErrors = findErrors("cvv", errors);

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Información de la tarjeta de crédito
      </h2>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="fullName"
            className="text-sm font-semibold text-gray-800"
          >
            Nombre del titular de la tarjeta
          </label>
          <Input
            id="fullName"
            placeholder="Nombre del titular de la tarjeta"
            onChange={onChange}
            value={values.fullName}
            name="fullName"
          />
          {fullNameErrors.length > 0 && (
            <span className="text-red-500 text-sm">
              {errorMessages(fullNameErrors)}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="cardNumber"
            className="text-sm font-semibold text-gray-800"
          >
            Número de tarjeta
          </label>
          <CreditCardInput onChange={onChange} />
          {cardNumberErrors.length > 0 && (
            <span className="text-red-500 text-sm">
              {errorMessages(cardNumberErrors)}
            </span>
          )}
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="month"
              className="text-sm font-semibold text-gray-800"
            >
              Mes de expiración
            </label>
            <Select
              onValueChange={(value) => {
                onChangeSelect(value, "month");
              }}
              value={values.month}
              name="month"
            >
              <SelectTrigger>
                <SelectValue placeholder="Mes de expiración" />
              </SelectTrigger>
              <SelectContent>
                {MONTHS.map((month) => (
                  <SelectItem key={month.value} value={month.value}>
                    {month.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {monthErrors.length > 0 && (
              <span className="text-red-500 text-sm">
                {errorMessages(monthErrors)}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="year"
              className="text-sm font-semibold text-gray-800"
            >
              Año de expiración
            </label>
            <Select
              onValueChange={(value) => {
                onChangeSelect(value, "year");
              }}
              value={values.year}
            >
              <SelectTrigger>
                <SelectValue placeholder="Año de expiración" />
              </SelectTrigger>
              <SelectContent>
                {YEARS.map((year) => (
                  <SelectItem key={year.value} value={year.value}>
                    {year.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {yearErrors.length > 0 && (
              <span className="text-red-500 text-sm">
                {errorMessages(yearErrors)}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="cvv"
              className="text-sm font-semibold text-gray-800"
            >
              CVV
            </label>
            <Input
              id="cvv"
              placeholder="CVV"
              onChange={onChange}
              value={values.cvv}
              maxLength={3}
            />
            {cvvErrors.length > 0 && (
              <span className="text-red-500 text-sm">
                {errorMessages(cvvErrors)}
              </span>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreditCardInformation;
