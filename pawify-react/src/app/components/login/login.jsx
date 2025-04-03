import React, { useState } from "react";
import { Eye, EyeOff, PawPrint } from "lucide-react";
import theme from "../../../constants/themes";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Login() {
const {
register,
handleSubmit,
formState: { errors },
} = useForm();

const loginProperties = {
email: "",
password: "",
rememberMe: false,
};

const [data, setData] = useState(loginProperties);
const [showPassword, setShowPassword] = useState(false);
const [isLoading, setIsLoading] = useState(false);
const { background, primary, accent, deepRed } = theme.colors;

const onSubmit = async (formData) => {
// Simulamos el proceso de inicio de sesión
setIsLoading(true);

// Simulamos una espera de 1 segundo
setTimeout(() => {
    console.log("Datos de inicio de sesión:", formData);
    alert("Inicio de sesión simulado exitoso");
    setIsLoading(false);
}, 1000);
};

return (
<div
    className={`flex justify-center items-center min-h-screen`}
    style={{ backgroundColor: background }}
>
    <div className={`w-full max-w-md rounded-2xl p-5`}>
    <div className="flex flex-col items-center mb-5">
        <img
        src="/Logo.png"
        alt="Logo"
        className="w-20 h-20 mb-2 rounded-sm"
        />
        <h2
        className="text-center text-3xl font-bold"
        style={{ color: primary }}
        >
        ¡Bienvenido!
        </h2>
    </div>

    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
        <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700"
        >
            Email
        </label>
        <input
            id="email"
            name="email"
            type="email"
            placeholder="tucorreo@email.com"
            className="w-full p-2 mt-2 border rounded-md"
            {...register("email", { required: "Este campo es obligatorio" })}
        />
        {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
        )}
        </div>

        <div className="mb-4">
        <label
            htmlFor="password"
            className="block text-sm font-semibold text-gray-700"
        >
            Contraseña
        </label>
        <div className="relative">
            <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            className="w-full p-2 mt-2 border rounded-md"
            {...register("password", {
                required: "Este campo es obligatorio",
            })}
            />
            <button
            type="button"
            className="absolute right-2 top-5"
            onClick={() => setShowPassword(!showPassword)}
            >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
            {errors.password && (
            <p className="text-red-500 text-xs">
                {errors.password.message}
            </p>
            )}
        </div>
        </div>

        <div className="flex justify-between items-center mb-4">
        <div>
            <input
            id="rememberMe"
            name="rememberMe"
            type="checkbox"
            className="mr-2"
            {...register("rememberMe")}
            />
            <label htmlFor="rememberMe" className="text-sm">
            Recordarme
            </label>
        </div>
        <a href="#" className="text-sm text-blue-500 hover:underline">
            ¿Olvidaste tu contraseña?
        </a>
        </div>

        <button
        type="submit"
        className="w-full text-white py-2 px-4 rounded-md flex items-center justify-center gap-2"
        style={{ 
            backgroundColor: accent, 
            cursor: isLoading ? "wait" : "pointer",
            opacity: isLoading ? 0.7 : 1 
        }}
        disabled={isLoading}
        >
        {isLoading ? (
            "Iniciando sesión..."
        ) : (
            <>
            <PawPrint size={20} /> Iniciar Sesión
            </>
        )}
        </button>
    </form>

    <div className="mt-4 text-center text-xs" style={{ color: deepRed }}>
        ¿No tienes una cuenta?{" "}
        <Link to="/register" className="text-blue-500 hover:underline">
        Regístrate
        </Link>
    </div>
    </div>
</div>
);
}