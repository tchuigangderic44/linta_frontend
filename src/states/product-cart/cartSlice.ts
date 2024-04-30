import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { cartProductType } from "../../utils/cartProductType";

const initialState: { cartList: cartProductType[] } = {
  cartList: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCard: (state, action: PayloadAction<cartProductType>) => {
      const item = state.cartList.find((s) => s.id === action.payload.id);
      if (item) {
        item.quantity = (item.quantity ?? 0) + 1;
      } else {
        state.cartList.push(action.payload);
      }
    },
    addToCardWithValue: (
      state,
      d: PayloadAction<{
        prod: cartProductType;
        data: { qty: number; duration: number };
      }>
    ) => {
      const item = state.cartList.find((s) => s.id === d.payload.prod.id);
      if (item) {
        item.quantity = (item.quantity ?? d.payload.data.qty) + 1;
        item.duration = (item.quantity ?? d.payload.data.duration) + 1;
      } else {
        d.payload.prod.quantity = d.payload.data.qty;
        d.payload.prod.duration = d.payload.data.duration;
        state.cartList.push(d.payload.prod);
      }
    },
    updateCart: (
      state,
      d: PayloadAction<{
        data: { qty: number; duration: number };
        id: string;
      }>
    ) => {
      const item = state.cartList.find((s) => s.id === d.payload.id);
      if (item) {
        item.quantity = d.payload.data.qty;
        item.duration = d.payload.data.duration;
      }
    },
    updateQuantity: (
      state,
      d: PayloadAction<{
        value: number;
        id: string;
      }>
    ) => {
      const item = state.cartList.find((s) => s.id === d.payload.id);
      if (item) {
        item.quantity = d.payload.value;
      }
    },
    updateDuration: (
      state,
      d: PayloadAction<{
        value: number;
        id: string;
      }>
    ) => {
      const item = state.cartList.find((s) => s.id === d.payload.id);
      if (item) {
        item.duration = d.payload.value;
      }
    },
    dicreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.cartList.find((s) => s.id === action.payload);
      if (item) {
        item.quantity = item.quantity! > 1 ? (item.quantity ?? 2) - 1 : 1;
      }
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.cartList.find((s) => s.id === action.payload);
      if (item) {
        item.quantity = (item.quantity ?? 0) + 1;
      }
    },
    dicreaseDuration: (state, action: PayloadAction<string>) => {
      const item = state.cartList.find((s) => s.id === action.payload);
      if (item) {
        item.duration = item.duration! > 1 ? (item.duration ?? 1) - 1 : 1;
      }
    },
    incrementDuration: (state, action: PayloadAction<string>) => {
      const item = state.cartList.find((s) => s.id === action.payload);
      if (item) {
        item.duration = (item.duration ?? 0) + 1;
      }
    },
    clearCart: (state) => {
      state.cartList.length = 0;
    },
    removeCartItem: (state, action: PayloadAction<string>) => {
      state.cartList = state.cartList.filter((s) => s.id !== action.payload);
    },
  },
});

export const {
  addToCard,
  dicreaseDuration,
  dicreaseQuantity,
  incrementDuration,
  incrementQuantity,
  addToCardWithValue,
  updateCart,
  updateDuration,
  updateQuantity,
  clearCart,
  removeCartItem,
} = cartSlice.actions;
export default cartSlice.reducer;
