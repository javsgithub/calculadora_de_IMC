import { useState } from "react";
import Header from "./components/Header"
import Form from "./components/Form"
import Display from "./components/Display/Display";

function App() {
  const [result, setResult] = useState("")

  const updateResult = r => {
    setResult(r);
  }

  return (
    <div className="container">
      <Header title="CÁLCULO DO ÍNDICE DE MASSA CÓRPOREA (IMC)"/>
      <Form updateResult={updateResult} />            
      <Display IMC={result} />
    </div>
  )
}

export default App
