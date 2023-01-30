import React, { createContext, useContext, useState } from "react";

export type countCart = {
  id: number;
  name: string;
  price: number;  
  photo: string;
  quant: number;
  valorItem: number;



}

type CartContextData = {
  countCart:countCart[];
  setCountCart: (countCart: countCart[]) => void;
};


const CartContext = createContext<CartContextData>({} as CartContextData);

export const AuthProvider: React.FC<any> = ({ children }) => {
  const [countCart, setCountCart] = useState<countCart[]>([]);

  return (
    <CartContext.Provider value={{ setCountCart, countCart }}>
      {children}
    </CartContext.Provider>
  );
};

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
