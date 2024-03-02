import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthContextProps, SignInProps, SignUpProps } from "../types/context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {router} from "expo-router";
import { api } from "../services/api";
import {login, register} from "../services/auth.service";

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLogged, setIsLogged] = useState<boolean>(false);

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
            router.push("/main");
        } catch (e) {
            console.error("An unexpected error occurred:", e);
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
        }catch (e){
            console.error("An unexpected error occurred:", e);
        }
    };

    const logout = async () => {
        try {
            setIsLogged(false);
            await AsyncStorage.removeItem("@token");
            api.defaults.headers.common.Authorization = "";
            router.push("/");
        } catch (error) {
            console.error("Error while logging out:", error);
        }
    };



    return (
        <AuthContext.Provider value={{ signIn, signUp, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;

export const useAuth = () => useContext(AuthContext);
