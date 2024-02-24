import React, {createContext, useState} from "react";
import {CartContextProps} from "../types/context";
import {cartProductProps, productProps} from "../types/products";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CartContext = createContext<CartContextProps>({} as CartContextProps)

const CartContextProvider = ({children} : {children: React.ReactNode}) => {
    const [cartProducts, setCartproducts] = useState<cartProductProps[]>([])
    const AddtoCart = (product: cartProductProps, quantity: number) => {
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

    const RemoveFromCart = (product: cartProductProps, quantity: number) => {
        let productsCopy = [...cartProducts]
    }
}