import {cartProductProps, productProps} from "./products";

export interface SignInProps{
    email: string;
    password: string
}

export interface SignUpProps{
    name: string;
    email: string;
    password: string;
    password_confirmation: string
}

export interface AuthContextProps{
    signIn: (value: SignInProps) => void;
    signUp: (value: SignUpProps) => void;
    logout: () => void
}



export interface CartContextProps {
    addToCart:(product: cartProductProps) => void;
    removeFromCart:(product: cartProductProps, quantity: number)=> void;
    clearCart:(product: cartProductProps)=> void;
    getCart: () => void;
    finishPurchase: () => void;
}