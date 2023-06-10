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
    </div>
  )
}

export default App
