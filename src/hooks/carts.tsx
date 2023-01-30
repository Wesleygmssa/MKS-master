import React, { createContext, useContext, useState } from "react";

interface CartContextData {
  countCart:{
    id: number;
    name: string;
    price: number;
    photo: string;
    description: string;
  }[]
  setCountCart: (countCart: any) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export const AuthProvider: React.FC<any> = ({ children }) => {
  const [countCart, setCountCart] = useState<{
    id: number;
    name: string;
    price: number;
    photo: string;
    description: string;
  }[]
  >([]);

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
