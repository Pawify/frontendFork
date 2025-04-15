import React, { useState } from "react";
import { Eye, EyeOff, LogIn, PawPrint } from "lucide-react";
import theme from "../../../constants/themes";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logo from "/Logo.png";

export default function Login() {
const {
register,
handleSubmit,
formState: { errors },
reset,
} = useForm();

const navigate = useNavigate();
const [showPassword, setShowPassword] = useState(false);
const { background, primary, accent, deepRed } = theme.colors;

const onSubmit = (data) => {
console.log(data);
reset();
navigate("/");
};

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

    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
        <label
            htmlFor="identifier"
            className="block text-sm font-semibold text-gray-700"
        >
            Email o Nombre de Usuario
        </label>
        <input
            id="identifier"
            type="text"
            placeholder="Tu email o nombre de usuario"
            className="w-full p-2 mt-2 border rounded-md"
            {...register("identifier", {
            required: "Este campo es obligatorio",
            })}
        />
        {errors.identifier && (
            <p className="text-red-500 text-xs">
            {errors.identifier.message}
            </p>
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

        <div className="text-right mb-4">
        <a href="#" className="text-blue-500 text-sm hover:underline">
            ¿Olvidaste tu contraseña?
        </a>
        </div>

        <button
        type="submit"
        className="w-full text-white py-2 px-4 rounded-md flex items-center justify-center gap-2"
        style={{ backgroundColor: accent, cursor: "pointer" }}
        >
        <PawPrint size={20} /> Iniciar sesión
        </button>

        <div className="mt-4 text-center text-xs" style={{ color: deepRed }}>
        ¿No tienes una cuenta?{" "}
        <Link to="/register" className="text-blue-500 hover:underline">
            Registrarse
        </Link>
        </div>
    </form>
    </div>
</div>
);
}
