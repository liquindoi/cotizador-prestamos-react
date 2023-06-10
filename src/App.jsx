import Header from "./components/Header";

function App() {

  const hola = "Hola mundo";

  const auth = true;
  
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
