"use client";
import { Input } from "@/components/ui/input";
import { useAppDispatch } from "@/redux/hooks";
import { updateQuantity } from "@/redux/cart/slice-cart";
import { useState } from "react";
export interface IModifyQuantityProps {
  id: number;
  quantity: number;
}

const ModifyQuantity = ({ id, quantity }: IModifyQuantityProps) => {
  const dispatch = useAppDispatch();
  const [newQuantity, setNewQuantity] = useState(quantity);

  const handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setNewQuantity(0);
      return;
    }

    setNewQuantity(+e.target.value);
    dispatch(updateQuantity({ id, quantity: +e.target.value }));
  };

  return (
    <div className="flex gap-2">
      <Input
        type="number"
        value={newQuantity}
        onChange={handleChangeQuantity}
        min={0}
      />
    </div>
  );
};

export default ModifyQuantity;
