import Header from "./components/Header"
import Resultado from "./components/Resultado"
import { useEffect,useState } from "react"

function App(){

  const [peso,setPeso] = useState(0);
  const [altura,setAltura] = useState(0);
  const [resultado,setResultado] = useState(False);

  const calcularImc=()=> {
    const img = peso/(altura*peso)
    return setResultado(imc.toFixed(2))
  }

  useEffect(()=>{
    resultado > 0 ? setMostrarResultado(true):setMostrarResultado(false)
  },[resultado])

  return (

    <div className="container">
        <div className="box">
          <Header/>
          <form>
            <div>
              <label htmlFor="altura">Altura <span>(exemplo:1.8)</span></label>
              <input id="altura" type="number" placeholder="Digite sua altura" onBlur={({target})=>parseInt(setAltura(target.value))}/>
            </div>

            <div>
              <label htmlFor="peso">Peso <span>(exemplo:80)</span></label>
              <input id="peso" type="number" placeholder="Digite seu peso" onBlur={({target})=>parseInt(setPeso(target.value))}/>
            </div>

            <button onClick={calcularImc}>Calcular</button>

          </form>
        </div>

        {mostrarResultado && (
          <Resultado resultado={resultado}/>
        )}
    </div>
  )
}

export default App