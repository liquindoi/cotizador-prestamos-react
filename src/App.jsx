import { useState } from 'react'; // Importamos el useState desde react
import Header from "./components/Header";

function App() {
    // [] variable, funcion que modifica la variable; () valor inicial de la variable
    let [cantidad, setCantidad] = useState(10000); // Destructuring del arreglo propocionado por la función
    
    //console.log(cantidad);
    
    // por convención el nombre de la función comienza por 
    // handle + evento
    function handleChange(e) {
      //console.log(e.target.value);  // En la consola aparece en color negro los valores
                                    // lo que significa que son string. Si colocamos
      //console.log(+e.target.value+100); // el signo + entonces lo convierte en numérico
      //console.log(parseInt(e.target.value)+200);// o tambien podemos hacer typecasting
      //console.log(Number(e.target.value)+300);
      setCantidad(+e.target.value); // Atención!! La llamada a setCantidad es sin el '=' . Es una función!!!
    }

  return (
    // todo lo que se ponga aquí es lo que va a mostrarse en la pagina
    // En la sección del return no podemos añadir ninguna lógica de javascript
    // Es solo visualización   
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />

      <input type="range" 
             className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
          // onChange={ e => console.log(e.target.value)}
             onChange = {handleChange} // Como siempre, la llamada la realizamos sin los paréntesis, 
                                // para evitar su ejecución directa
      />

      <p className='text-center my-10 text-5xl font-extrabold text-indigo-600'>{cantidad}</p>
    </div>
  )
}

export default App
