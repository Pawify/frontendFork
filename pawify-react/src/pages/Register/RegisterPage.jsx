import React from "react";
import RegisterForm from "@/components/features/Auth/RegisterUser/RegisterForm";
import theme from "../../constants/themes";

export default function RegisterPage() {
    const { background } = theme.colors;

    return (
        <div
            className={`flex justify-center items-center min-h-screen`}
            style={{ backgroundColor: background }}
        >
            <div className={`w-full max-w-md rounded-2xl p-5`}>
                <RegisterForm />
            </div>
        </div>
    );
}
