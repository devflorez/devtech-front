"use client";

import { Input } from "@/components/ui/input";
import { ZodIssue } from "zod";
import { errorMessages, findErrors } from "@/lib/utils";

const DeliveryInformation = ({
  values,
  onChange,
  errors,
}: {
  values: {
    fullName: string;
    address: string;
    addressDetails: string;
    city: string;
    state: string;
    postalCode: string;
    phone: string;
    email: string;
  };
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errors: ZodIssue[];
}) => {
  const fullNameErrors = findErrors("fullName", errors);
  const addressErrors = findErrors("address", errors);
  const addressDetailsErrors = findErrors("addressDetails", errors); 
  const cityErrors = findErrors("city", errors);
  const stateErrors = findErrors("state", errors);
  const postalCodeErrors = findErrors("postalCode", errors);
  const phoneErrors = findErrors("phone", errors);
  const emailErrors = findErrors("email", errors);

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Información de envío
      </h2>
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="fullName"
            className="text-sm font-semibold text-gray-800"
          >
            Nombre completo
          </label>
          <Input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={values.fullName}
            onChange={onChange}
          />
          {fullNameErrors.length > 0 && (
            <span className="text-red-500 text-sm">
              {errorMessages(fullNameErrors)}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="fullName"
            className="text-sm font-semibold text-gray-800"
          >
            Correo electrónico 
          </label>
          <Input
            type="text"
            id="email"
            name="email"
            required
            value={values.email}
            onChange={onChange}
          />
          {emailErrors.length > 0 && (
            <span className="text-red-500 text-sm">
              {errorMessages(emailErrors)}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="address"
            className="text-sm font-semibold text-gray-800"
          >
            Dirección
          </label>
          <Input
            type="text"
            id="address"
            name="address"
            required
            value={values.address}
            onChange={onChange}
          />
          {addressErrors.length > 0 && (
            <span className="text-red-500 text-sm">
              {errorMessages(addressErrors)}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="addressDetails"
            className="text-sm font-semibold text-gray-800"
          >
            Detalles de la dirección
          </label>
          <Input
            type="text"
            id="addressDetails"
            name="addressDetails"
            value={values.addressDetails}
            onChange={onChange}
          />
          {addressDetailsErrors.length > 0 && (
            <span className="text-red-500 text-sm">
              {errorMessages(addressDetailsErrors)}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="city" className="text-sm font-semibold text-gray-800">
            Ciudad
          </label>
          <Input
            type="text"
            id="city"
            name="city"
            required
            value={values.city}
            onChange={onChange}
          />
          {cityErrors.length > 0 && (
            <span className="text-red-500 text-sm">
              {errorMessages(cityErrors)}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="state"
            className="text-sm font-semibold text-gray-800"
          >
            Estado
          </label>
          <Input
            type="text"
            id="state"
            name="state"
            required
            onChange={onChange}
            value={values.state}
          />
          {stateErrors.length > 0 && (
            <span className="text-red-500 text-sm">
              {errorMessages(stateErrors)}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="postalCode"
            className="text-sm font-semibold text-gray-800"
          >
            Código postal
          </label>
          <Input
            type="text"
            id="postalCode"
            name="postalCode"
            required
            value={values.postalCode}
            onChange={onChange}
          />
          {postalCodeErrors.length > 0 && (
            <span className="text-red-500 text-sm">
              {errorMessages(postalCodeErrors)}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="phone"
            className="text-sm font-semibold text-gray-800"
          >
            Teléfono
          </label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            required
            value={values.phone}
            onChange={onChange}
          />
          {phoneErrors.length > 0 && (
            <span className="text-red-500 text-sm">
              {errorMessages(phoneErrors)}
            </span>
          )}
        </div>
      </form>
    </div>
  );
};

export default DeliveryInformation;
