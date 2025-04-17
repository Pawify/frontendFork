import React from "react";
import LoginForm from "@/components/features/Auth/Login/LoginForm";
import theme from "../../constants/themes";
import { Link } from "react-router-dom";
import Logo from "/Logo.png";

export default function LoginPage() {
    const { background, primary, deepRed } = theme.colors;

    return (
        <div
            className="flex justify-center items-center min-h-screen"
            style={{ backgroundColor: background }}
        >
            <div className="w-full max-w-md rounded-2xl p-5">
                <div className="flex flex-col items-center mb-5">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="w-20 h-20 mb-2 rounded-sm"
                    />
                    <h2
                        className="text-center text-3xl font-bold"
                        style={{ color: primary }}
                    >
                        Inicia sesión
                    </h2>
                </div>

                <LoginForm />
                <div className="mt-4 text-center text-xs" style={{ color: deepRed }}>
                    ¿No tienes una cuenta?{" "}
                    <Link to="/register" className="text-blue-500 hover:underline">
                        Registrarse
                    </Link>
                </div>
            </div>
        </div>
    );
}
