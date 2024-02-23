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