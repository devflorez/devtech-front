import { IProduct } from "@/interfaces/products.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICartProduct extends IProduct {
  quantity: number;
}

export interface ICartState {
  cart: ICartProduct[];
  total: number;
  totalQuantity: number;
  creditCard: {
    fullName: string;
    cardNumber: string;
    month: string;
    year: string;
    cvv: string;
  };
  deliveryInformation: {
    fullName: string;
    address: string;
    addressDetails: string;
    city: string;
    state: string;
    postalCode: string;
    phone: string;
  };
}

export const INITIAL_STATE_CART: ICartState = {
  cart: [],
  total: 0,
  totalQuantity: 0,
  creditCard: {
    fullName: "",
    cardNumber: "",
    month: "",
    year: "",
    cvv: "",
  },
  deliveryInformation: {
    fullName: "",
    address: "",
    addressDetails: "",
    city: "",
    state: "",
    postalCode: "",
    phone: "",
  },
};

const loadCartFromLocalStorage = (): ICartState => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) {
      return INITIAL_STATE_CART;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("Could not load cart from localStorage", e);
    return INITIAL_STATE_CART;
  }
};

export const INITIAL_STATE: ICartState = loadCartFromLocalStorage();

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ product: IProduct; quantity: number }>
    ) => {
      const { product, quantity } = action.payload;
      const existingProduct = state.cart.find((item) => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.cart.push({ ...product, quantity });
      }

      state.total = state.cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      state.totalQuantity = state.cart.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const productIndex = state.cart.findIndex(
        (item) => item.id === action.payload
      );

      if (productIndex !== -1) {
        state.cart.splice(productIndex, 1);
        state.total = state.cart.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        );
        state.totalQuantity = state.cart.reduce(
          (acc, item) => acc + item.quantity,
          0
        );
      }
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const existingProduct = state.cart.find((item) => item.id === id);

      if (existingProduct) {
        existingProduct.quantity = quantity;
        state.total = state.cart.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        );
        state.totalQuantity = state.cart.reduce(
          (acc, item) => acc + item.quantity,
          0
        );
      }
    },
    clearCart: (state) => {
      state.cart = [];
      state.total = 0;
      state.totalQuantity = 0;
    },
    setCreditCard: (
      state,
      action: PayloadAction<ICartState["creditCard"]>
    ) => {
      state.creditCard = action.payload;
    },
    setDeliveryInformation: (
      state,
      action: PayloadAction<ICartState["deliveryInformation"]>
    ) => {
      state.deliveryInformation = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
