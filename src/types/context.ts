import {cartProductProps, productProps} from "./products";

export interface SignInProps{
    email: string;
    password: string
}

export interface requestOTPProps{
    email: string
}

export interface loginOTPProps extends requestOTPProps{
    token: string
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
    logout: () => void;
    requestOTP: (values: requestOTPProps) => void;
    loginOTP: (values: loginOTPProps) => void;
}

export interface CartContextProps {
    addToCart:(product: cartProductProps, quantity: number) => void;
    removeFromCart:(product: cartProductProps, quantity: number)=> void;
    clearCart:()=> void;
    cartProducts: cartProductProps[];
}