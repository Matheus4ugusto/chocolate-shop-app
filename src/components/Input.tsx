import {TextInputProps, View} from "react-native";
import {AuthTextInput, AuthTextInputLabel} from "../styles/auth.style";
import React from "react";

interface inputProps extends TextInputProps{
    label: string,
    placeholder: string
}

const BaseStyle = ({label, placeholder, ...rest}: inputProps, ref:any) => {
    return(
        <View style={{width: "80%"}}>
            <AuthTextInputLabel>{label}</AuthTextInputLabel>
            <AuthTextInput ref={{ref}} {...ref} placeholder={placeholder} placeholderTextColor="#F2E0C5"/>
        </View>
    )
}

export const Input = React.forwardRef(BaseStyle);