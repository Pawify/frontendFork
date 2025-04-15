import * as z from "zod";
import { passwordRegex } from "@/constants/regex";

export const schema = z
  .object({
    name: z.string().min(1, "Este campo es obligatorio"),
    email: z.string().email("Correo inválido"),
    password: z
      .string()
      .min(8, "Debe tener al menos 8 caracteres")
      .regex(
        passwordRegex,
        "Debe incluir al menos una mayúscula, una minúscula y un número"
      ),
    confirmPassword: z.string(),
    terms: z.boolean().refine((val) => val, {
      message: "Debes aceptar los términos",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });
