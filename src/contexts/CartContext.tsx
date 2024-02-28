import React, {createContext, useContext, useState} from "react";
import {CartContextProps} from "../types/context";
import {cartProductProps, productProps} from "../types/products";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CartContext = createContext<CartContextProps>({} as CartContextProps)

const CartContextProvider = ({children} : {children: React.ReactNode}) => {
    const [cartProducts, setCartproducts] = useState<cartProductProps[]>([])
    const addToCart = (product: cartProductProps, quantity: number) => {
        const hasProduct = cartProducts.findIndex((i) => i.id === product.id)
        let productsCopy = [...cartProducts];
        if(hasProduct >= 0){
            const handleQuantity = quantity
            productsCopy[hasProduct].quantity += 1;
        }else{
            productsCopy = [...productsCopy, product]
        }
        setCartproducts(productsCopy)
        AsyncStorage.setItem("cart", JSON.stringify(productsCopy))
    }

    const removeFromCart = (product: cartProductProps, quantity: number) => {
        const hasProduct = cartProducts.findIndex(p => p.id === product.id)
        let productsCopy = [...cartProducts]

        if (hasProduct && cartProducts[hasProduct]?.quantity > 1){
            productsCopy[hasProduct].quantity -= 1;
            setCartproducts(productsCopy)
            return
        }
        setCartproducts(cartProducts.filter(p => p.id !== product.id));
    }

    const clearCart = () => {
        setCartproducts([])
    }

    const getCart = () => {
        return cartProducts
    }

    return(
        <CartContext.Provider value={{addToCart, removeFromCart, clearCart, cartProducts}}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider;

export const useCart = () => useContext(CartContext)