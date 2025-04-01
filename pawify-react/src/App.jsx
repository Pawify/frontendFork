//Ejemplo de como usar las variable de colores
import theme from "./constants/themes"; //importacion

function App() {
  const { softBeige } = theme.colors; //desestructuracion

  return (
    <div>
      {/* implementacion */}
      <p style={{ color: softBeige }}>Changes</p> 
    </div>
  );
}

export default App;
