import { useState } from 'react'; // Importamos el useState desde react
import Header from "./components/Header";
import Button from "./components/Button";

function App() {
    // [] variable, funcion que modifica la variable; () valor inicial de la variable
    const [cantidad, setCantidad] = useState(10000); // Destructuring del arreglo propocionado por la función
    
    const MIN = 0;
    const MAX = 20000;
    const STEP = 100;
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

    function handleClickDecremento() {
      const valor = cantidad - STEP;
      if(valor < MIN) {
        alert('Cantidad no válida');
        return;
      }
      setCantidad(valor);
    }

    function handleClickIncremento() {
      const valor = cantidad + STEP;
      if(valor > MAX) {
        alert('Cantidad no válida');
        return;
      }
      setCantidad(valor);
    }

  return (
    // todo lo que se ponga aquí es lo que va a mostrarse en la pagina
    // En la sección del return no podemos añadir ninguna lógica de javascript
    // Es solo visualización   
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />

      <div className='flex justify-between my-6'>
        <Button 
          operador='-'
          fn={handleClickDecremento}
          />
        <Button 
          operador='+'
          fn={handleClickIncremento}
          />
      </div>

      <input type="range" 
             className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
          // onChange={ e => console.log(e.target.value)}
             onChange = {handleChange} // Como siempre, la llamada la realizamos sin los paréntesis, 
                                // para evitar su ejecución directa
             min={MIN}
             max={MAX}
             step={STEP}
             value={cantidad}
      />

      <p className='text-center my-10 text-5xl font-extrabold text-indigo-600'>{cantidad}</p>
    </div>
  )
}

export default App
