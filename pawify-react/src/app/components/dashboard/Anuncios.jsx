import theme from "@/constants/themes";
import { FileText, FileCheck, FileX, Bell, Plus, Search } from "lucide-react";
import "../dashboard/Anuncios.css";

export default function Anuncios() {
  const { secondary } = theme.colors;

  return (
    <>
      {/* Input + Acción */}
      <div className="flex flex-col md:flex-row justify-around mb-8 gap-4">
        <div className="input-search relative w-1/2">
          {" "}
          <input
            type="text"
            className="border rounded-2xl  py-2 px-4 flex-1 w-full "
            placeholder="Buscar..."
          />
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 border-none rounded-tr-2xl rounded-br-2xl px-2.5 py-3 bg-amber-300 hover:bg-amber-400 transition-colors cursor-pointer">
            <Search size={"19px"} color={'white'}></Search>
          </button>
        </div>

        <button className="anuncios-btn text-white px-6 py-2 rounded-2xl flex flex-row gap-1">
          <Plus> </Plus>Añadir anuncio
        </button>
      </div>
      {/* Estadísticas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
        <div className="flex items-center space-x-4">
          <FileText className="border-none rounded-full p-3 h-auto w-18 bg-[rgb(222,246,255)]" />
          <div>
            <p className="font-semibold">Todos los anuncios</p>
            <p className="text-gray-600 text-2xl">8</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 ">
          <FileCheck className="border-none rounded-full p-3 h-auto w-18 bg-[rgb(219,246,230)]" />
          <div>
            <p className="font-semibold ">Anuncios publicados</p>
            <p className="text-gray-600 text-2xl">8</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Bell className="border-none rounded-full p-3 h-auto w-18 bg-[rgb(255,239,219)]" />
          <div>
            <p className="font-semibold">Anuncios pendientes</p>
            <p className="text-gray-600 text-2xl">8</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FileX className="border-none rounded-full p-3 h-auto w-18 bg-[rgb(255,243,244)]" />
          <div>
            <p className="font-semibold">Anuncios expirados</p>
            <p className="text-gray-600 text-2xl">8</p>
          </div>
        </div>
      </div>
    </>
  );
}
