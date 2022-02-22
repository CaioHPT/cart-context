import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({children}){

    const [itensCart, setItensCart] = useState([]);

    return(
        <CartContext.Provider value={{itensCart, setItensCart}}>
            {children}
        </CartContext.Provider>
    )
}
