// import theme from "./constants/themes";
import './App.css'
import { NotFound } from "./app/errors/NotFound";


function App() {
   {/* Ruta para manejar el 404, debe ir al final para capturar todas las rutas no definidas */}
  //  <Route path="*" element={<NotFound />} />
  return (
      <NotFound/>
  )
}

export default App
