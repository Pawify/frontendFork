// Cambiar por la imagen dinamica del backend
import perfil from "/catdog404.png";

import theme from "@/constants/themes";
import { useState } from "react";
import Anuncios from "./Anuncios";
import Favoritos from "./Favoritos";
import Chat from "./Chat";
import Pagos from "./Pagos";
import { Power } from "lucide-react";
import Button from "../button/Button";

export default function Dashboard() {
  const [selector, setSelector] = useState("Anuncios");
  const { secondary } = theme.colors;

  return (
    <section className="bg-gray-300  md:mt-13">
      {/* botton Log out */}
      <div className="flex justify-end mr-[15px]">
        <Button className="text-white font-regular py-1 px-5 rounded flex items-center gap-1">
          {" "}
          <Power size={"15px"}></Power> Log out
        </Button>
      </div>
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-5 md:grid-rows-6  p-2 pt-8 gap-4 w-full">
        {/* Sidebar lado izquierdo selector de botones */}
        <div className="bg-gray-200 rounded-2xl md:row-span-4 order-2 md:order-1">
          <h1 className="text-xl font-bold mb-4 p-2">Mi cuenta</h1>
          <ul className="space-y-2">
            <li
              style={{
                backgroundColor: selector === "Anuncios" ? secondary : "",
              }} // Cambiar fondo según el selector
              className={`cursor-pointer p-2 transition duration-500 rounded hover:bg-[#98b0e5] ${
                selector === "Anuncios" ? "text-white" : ""
              }`}
              onClick={() => setSelector("Anuncios")}
            >
              Anuncios
            </li>
            <li
              style={{
                backgroundColor: selector === "Favoritos" ? secondary : "",
              }}
              className={`cursor-pointer p-2 transition duration-500 rounded hover:bg-[#98b0e5] ${
                selector === "Favoritos" ? "text-white" : ""
              }`}
              onClick={() => setSelector("Favoritos")}
            >
              Favoritos
            </li>
            <li
              style={{ backgroundColor: selector === "Chat" ? secondary : "" }}
              className={`cursor-pointer p-2 transition duration-500 rounded hover:bg-[#98b0e5] ${
                selector === "Chat" ? "text-white" : ""
              }`}
              onClick={() => setSelector("Chat")}
            >
              Chat
            </li>
            <li
              style={{ backgroundColor: selector === "Pagos" ? secondary : "" }}
              className={`cursor-pointer p-2 transition duration-500 rounded hover:bg-[#98b0e5] ${
                selector === "Pagos" ? "text-white" : ""
              }`}
              onClick={() => setSelector("Pagos")}
            >
              Pagos
            </li>
          </ul>
        </div>

        {/* Perfil arriba corresponde a nombre y email */}
        <div className="flex flex-col sm:flex-row items-center justify-between bg-gray-200 rounded-2xl p-6 md:col-span-5 order-1 md:order-2">
          <img
            src={perfil}
            className="object-contain rounded-full h-12 w-12 mb-2 sm:mb-0 sm:mr-4"
            alt="Perfil"
          />
          <div className="text-center sm:text-left">
            <p className="font-semibold">Juan</p>
            <p>
              <span className="font-medium">Email:</span> usuario@gmail.com
            </p>
          </div>
        </div>

        {/* Contenido Principal que cambia según el selector seleccionado */}
        <div className="bg-gray-200 rounded-2xl p-6 md:col-span-5 md:row-span-3 md:col-start-2 md:row-start-2 order-3">
          {selector == "Anuncios" && <Anuncios />}
          {selector == "Favoritos" && <Favoritos />}
          {selector == "Chat" && <Chat />}
          {selector == "Pagos" && <Pagos />}
          {selector == "Cuenta" && <Cuenta />}
        </div>
      </div>
    </section>
  );
}
