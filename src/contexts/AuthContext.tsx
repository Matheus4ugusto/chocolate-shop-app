import React, { createContext, useContext, useEffect, useState } from "react";
import {AuthContextProps, loginOTPProps, requestOTPProps, SignInProps, SignUpProps} from "../types/context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {router} from "expo-router";
import { api } from "../services/api";
import {login, loginOTPRequest, register, requestOTPRequest} from "../services/auth.service";
import {useToast} from "react-native-toast-notifications";

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLogged, setIsLogged] = useState<boolean>(false);
    const toast = useToast();

    /*useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const storedToken = await AsyncStorage.getItem("@token");
                if (storedToken) {
                    api.defaults.headers.common.Authorization = `Bearer ${storedToken}`;
                    router.push("/main");
                } else if (!storedToken && isLogged) {
                    router.push("/");
                }
            } catch (error) {
                console.error("Error checking login status:", error);
            }
        };

        checkLoginStatus();
    }, []);*/


    const signIn = async (values: SignInProps) => {
        try {
            const data = await login(values);
            setIsLogged(true);
            await AsyncStorage.setItem("@token", data.token);
            api.defaults.headers.common.Authorization = `Bearer ${data.token}`;
            toast.show("Login efetuado com sucesso!",{
                type: "success",
                duration: 2500,
                placement: "top"
            })
            setTimeout(() => {router.push("/main");}, 500)
        } catch (e) {
            console.error("An unexpected error occurred:", e);
            toast.show("Falha ao realizar login, tente novamente",{
                type: "error",
                duration: 2500,
                placement: "top"
            })
        }
    };

    const signUp = async (values: SignUpProps) => {
        try {
            const handleRegister = await register(values);
            setIsLogged(true)
            await AsyncStorage.setItem("isLoged", "true")
            const handleLogin = await login(values);
            await AsyncStorage.setItem("@token", handleLogin.token);
            api.defaults.headers.common.Authorization = `Bearer ${handleLogin.token}`;
            router.push("/main");
            toast.show("Cadastro efetuado com sucesso!",{
                type: "success",
                duration: 2500,
                placement: "top",
            })
            setTimeout(() => {router.push("/main");}, 500)
        }catch (e){
            console.error("An unexpected error occurred:", e);
            toast.show("Falha ao realizar cadastro, tente novamente",{
                type: "error",
                duration: 2500,
                placement: "top"
            })
        }
    };

    const requestOTP = async (values: requestOTPProps) => {
        try {
            const data = await requestOTPRequest(values)
            router.push("/OTP/code")
        }catch (e){
            console.error(`Um erro inesperado ocorreu, ${e}`)
            router.push("/")
        }
    }

    const loginOTP = async (values: loginOTPProps) => {
        try {
            const data = await loginOTPRequest(values)
            router.push("/main")
        }catch (e){
            console.error(`Um erro inesperado ocorreu, ${e}`)
            router.push("/")
        }
    }

    const logout = async () => {
        try {
            setIsLogged(false);
            await AsyncStorage.removeItem("@token");
            api.defaults.headers.common.Authorization = "";
            toast.show("Saiu com sucesso",{
                type: "danger",
                duration: 2500,
                placement: "top",
                dangerColor: "#e30404"
            })
            setTimeout(() => {router.push("/");}, 500)
        } catch (error) {
            console.error("Error while logging out:", error);
        }
    };



    return (
        <AuthContext.Provider value={{ signIn, signUp, logout, requestOTP, loginOTP }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;

export const useAuth = () => useContext(AuthContext);
