import { create } from "zustand";

export interface ShoppingCartState {
  products: {
    id: string;
    title: string;
    image: string;
    price: number;
  }[];
  setProducts: (products: ShoppingCartState["products"]) => void;
  removeProductAll: (id: string) => void;
  removeProduct: (id: string) => void;
}

export const useShoppingCart = create<ShoppingCartState>((set) => ({
  products: [],
  setProducts: (products) => set((state) => ({ ...state, products })),
  removeProductAll: (id) =>
    set((state) => {
      const products = state.products.filter((product) => product.id !== id);
      return { ...state, products };
    }),
  removeProduct: (id) =>
    set((state) => {
      const index = state.products.findIndex((product) => product.id === id);

      if (index !== -1) {
        const updatedProducts = [...state.products];
        updatedProducts.splice(index, 1);

        return { ...state, products: updatedProducts };
      }

      return state;
    }),
}));
