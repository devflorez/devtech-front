import { Button } from "@/components/ui/button";
import { Trash } from "@phosphor-icons/react";
import { removeFromCart } from "@/redux/cart/slice-cart";
import { useAppDispatch } from "@/redux/hooks";
const DeleteCartItem = ({ id }: { id: number }) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <Button variant="destructive" onClick={handleDelete}>
      <Trash weight="bold" />
    </Button>
  );
};

export default DeleteCartItem;
