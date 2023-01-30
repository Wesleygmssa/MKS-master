import React, { createContext, useCallback, useContext, useState } from "react";

const CartContext = createContext<any>({} as any);

export const AuthProvider: React.FC<any> = ({ children }) => {
  const [countCart, setCountCart] = useState<any>([]);

  return (
    <CartContext.Provider value={{ setCountCart, countCart }}>
      {children}
    </CartContext.Provider>
  );
};

export function useCart(): any {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
