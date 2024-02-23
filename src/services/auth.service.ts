import {SignInProps, SignUpProps} from "../types/context";
import {api} from "./api";

export const login = async (values: SignInProps) => {
    const {data} = await api.post("/login", values)

    return data
}

export const register = async (values: SignUpProps) => {
    const {data} = await api.post("/register", values)

    return data
}