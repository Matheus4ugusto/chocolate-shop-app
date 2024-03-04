import {loginOTPProps, requestOTPProps, SignInProps, SignUpProps} from "../types/context";
import {api} from "./api";

export const login = async (values: SignInProps) => {
    const {data} = await api.post("/login", values);
    return data;
}

export const register = async (values: SignUpProps) => {
    const {data} = await api.post("/register", values)
    return data;
}

export const requestOTPRequest = async (values: requestOTPProps) => {
    const {data} = await  api.post("/send-code", values);
    return data;
}

export const loginOTPRequest = async (values: loginOTPProps) => {
    const {data} = await api.post("/verify-token", values);
    return data;
}