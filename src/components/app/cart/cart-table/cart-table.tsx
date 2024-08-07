import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ICartProduct } from "@/redux/cart/slice-cart";
import DeleteCartItem from "../delete-item-cart/delete-item-cart";
import ModifyQuantity from "../modify-quantity/modify-quantity";
import { Database } from "lucide-react";

interface ICCartTableProps {
  cart: ICartProduct[];
}

const CartTable = ({ cart }: ICCartTableProps) => {
  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-96 border border-dashed border-gray-200 rounded-md gap-2">
        <Database size={46} />
        <p className="text-lg font-light text-gray-800 ml-2">
          No hay productos en el carrito
        </p>
      </div>
    );
  }

  return (
    <div className="border border-gray-200 rounded-md  p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Producto</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Cantidad</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cart.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="flex items-center gap-2">
                <img
                  src={item.image.url}
                  alt={item.image.altText}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <span className="text-sm font-semibold text-gray-800">
                  {item.name}
                </span>
              </TableCell>
              <TableCell>
                {new Intl.NumberFormat("es-ES", {
                  style: "currency",
                  currency: "COP",
                }).format(item.price)}
              </TableCell>
              <TableCell>
                <ModifyQuantity id={item.id} quantity={item.quantity} />
              </TableCell>
              <TableCell>
                {new Intl.NumberFormat("es-ES", {
                  style: "currency",
                  currency: "COP",
                }).format(item.price * item.quantity)}
              </TableCell>

              <TableCell>
                <DeleteCartItem id={item.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CartTable;
