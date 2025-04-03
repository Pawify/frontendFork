import React, { useState } from "react";
import { Eye, EyeOff, PawPrint } from "lucide-react";
import theme from "../../../constants/themes";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./registerSchema";
import toast, { Toaster } from "react-hot-toast";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [progress, setProgress] = useState(100);
  const { background, primary, accent, deepRed } = theme.colors;
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);

    toast.success("!Registro completado!", {
      icon: "🐾",
    });

    reset();

    let currenProgress = 100;
    const interval = setInterval(() => {
      currenProgress -= 2;
      setProgress(currenProgress);

      if (currenProgress <= 0) {
        clearInterval(interval);
        navigate("/login");
      }
    }, 50);
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
            ¡Únete a nuestra comunidad!
          </h2>
        </div>

        {/* Mostramos errores de la API si existen */}
        {apiError && (
          <div className="mb-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
            {apiError}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700"
            >
              Nombre
            </label>
            <input
              id="name"
              type="text"
              placeholder="Tu nombre"
              className="w-full p-2 mt-2 border rounded-md"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-500 text-xs">{errors.name.message}</p>
            )}
          </div>

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
              {...register("email")}
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
                maxLength={15}
                {...register("password")}
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

          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-semibold text-gray-700"
            >
              Confirmar Contraseña
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full p-2 mt-2 border rounded-md"
                maxLength={15}
                {...register("confirmPassword")}
              />
              <button
                type="button"
                className="absolute right-2 top-5"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>

          <div style={{ marginBottom: 20 }}>
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="mr-2"
              {...register("terms")}
            />
            <label htmlFor="terms" className="text-sm">
              Acepto los términos y condiciones
            </label>
            {errors.terms && (
              <p className="text-red-500 text-xs">{errors.terms.message}</p>
            )}
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
              "Procesando..."
            ) : (
              <>
                <PawPrint size={20} /> Registrarse
              </>
            )}
          </button>
        </form>

        <div className="mt-4 text-center text-xs" style={{ color: deepRed }}>
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Inicia sesión
          </Link>
        </div>

        {progress < 100 && (
          <div className="w-full max-w-md mt-4 h-2 bg-gray-300 rounded-full overflow-hidden">
            <div
              className="h-full bg-orange-500 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>

      <Toaster position="top-center" />
    </div>
  );
}
