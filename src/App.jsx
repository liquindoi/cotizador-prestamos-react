import { useState } from 'react'; // Importamos el useState desde react
import Header from "./components/Header";

function App() {
    // [] variable, funcion que modifica la variable; () valor inicial de la variable
    const [cantidad, setCantidad] = useState(10000); // Destructuring del arreglo propocionado por la función
    
    console.log(cantidad);
    
  return (
    // todo lo que se ponga aquí es lo que va a mostrarse en la pagina
    // En la sección del return no podemos añadir ninguna lógica de javascript
    // Es solo visualización
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />

      <input type="range" className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"/>
    </div>
  )
}

export default App
