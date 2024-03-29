import * as yup from "yup"

export const loginValidation = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
})

export const registerValidation = yup.object().shape({
    name: yup.string().required("O nome é obrigatório"),
    email: yup
        .string()
        .email()
        .matches(
            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            "O formato de Email não é válido!"
        )
        .required("O email é obrigatório!"),
    password: yup
        .string()
        .required("A senha é obrigatória")
        .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
            "A senha precisa conter pelo menos um número, uma letra maiúscula e uma minúscula"
        ),
    password_confirmation: yup
        .string()
        .required()
        .oneOf([yup.ref("password")], "As senhas devem coincidir"),
});

export const emailValidation = yup.object().shape({
    email: yup.string().email().required()
})

export const codeValidation = yup.object().shape({
    email: yup.string().email().required(),
    token: yup.string().min(6).max(6).required()
})