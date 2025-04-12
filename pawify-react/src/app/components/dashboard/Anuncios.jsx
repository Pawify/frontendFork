import theme from '@/constants/themes';
import { FileText, FileCheck, FileX, Bell } from "lucide-react";

export default function Anuncios () {

  const { secondary } = theme.colors;

    return (
      <>
        {/* Input + Acción */}
        <div className="flex flex-col md:flex-row justify-around mb-8 gap-4">
            <input type="text" className="border rounded-2xl px-4 py-2 flex-1" placeholder="Buscar..." />
            <button
              style={{ backgroundColor: secondary }} // Asignación correcta del color de fondo
              className="bg-blue-500 text-white px-6 py-2 rounded-2xl flex-1"
            >
            Añadir anuncio</button>
        </div>
        {/* Estadísticas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div  className="flex items-center space-x-4">
                <FileText className="h-10 w-10" />
                <div>    
                  <p className="font-semibold">Todos los anuncios</p>
                  <p className="text-gray-600">8</p>
                </div>
            </div>
            <div  className="flex items-center space-x-4">
                <FileCheck className="h-10 w-10" />
                <div>
                  <p className="font-semibold">Anuncios publicados</p>
                  <p className="text-gray-600">8</p>
                </div>
            </div>
            <div  className="flex items-center space-x-4">
                <Bell className="h-10 w-10" />
                <div>
                  <p className="font-semibold">Anuncios pendientes</p>
                  <p className="text-gray-600">8</p>
                </div>
            </div>
            <div  className="flex items-center space-x-4">
                <FileX className="h-10 w-10" />
                <div>
                  <p className="font-semibold">Anuncios expirados</p>
                  <p className="text-gray-600">8</p>
                </div>
            </div>
        </div>
      </>
    );
  };