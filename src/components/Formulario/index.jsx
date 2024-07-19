import { useState } from "react";

const Formulario = () => {
    const [Peso, setPeso] = useState("");
    const [Altura, setAltura] = useState("");
    const [Resultado, setResultado] = useState("")
    const [Classificacao, setClassificacao] = useState("")
    const [mostraImc, setMostraIMC] = useState("");

    const calculaIndice = () => {
        const IMC = Peso / (Altura*Altura);
        const IMCRounded = IMC.toFixed(1);
        return setResultado(IMCRounded);
    }

    const exibeIndice = () => {
        return setMostraIMC(`Seu índice de Massa Corpórea é: ${Resultado}`);
    }

    const classificaIndice = () => {
        if (Resultado < 18.5) {
            return  setClassificacao("Você está com baixo Peso.");

        } else if  (Resultado >= 18.5 && Resultado < 24.9) {
            return setClassificacao("Você está no peso adequado (Eutrofia).");

        } else if  (Resultado >= 25.0 && Resultado < 29.9) {
            return setClassificacao("Você está com sobrepeso.");

        } else if  (Resultado >= 30.0 && Resultado < 34.9) {
            return setClassificacao("Você está com obesidade grau 1.");

        } else if  (Resultado >= 35.0 && Resultado < 39.9) {
            return setClassificacao("Você está com obesidade grau 2.");

        } else {
            return setClassificacao("Você está com obesidade mórbida.");
        }
    }

    const limpaFormulario = () => {
        setPeso("");
        setAltura("");
        setMostraIMC("");
        setClassificacao("");
    }

    return (
        <>
            <form class="mt-5">
                <div class="row">
                    <div class="col-3">
                        <input required type="number" value={Peso} onChange={(e) => setPeso(parseFloat(e.target.value))} class="form-control" placeholder="Digite o seu peso"/>
                    </div>
                    <div class="col-3">
                        <input required type="number" value={Altura} onChange={(e) => setAltura(parseFloat(e.target.value))} class="form-control" placeholder="Digite a sua altura"/>
                    </div>
                    <div class="col-2">
                        <button type="button" onClick={(e) => {e.preventDefault(); calculaIndice(); classificaIndice(); exibeIndice()}} class="btn btn-primary form control">Calcular IMC</button>  
                    </div>
                    <div class="col-2">
                        <button type="button" onClick={(e) => {e.preventDefault(); limpaFormulario();}} class="btn btn-primary form control">Limpar</button>  
                    </div>                    
                </div>
                {
                    <div>
                        <p><b>{mostraImc}</b></p>
                        <p><b>{Classificacao}</b></p>
                    </div>
                }
            </form>
        </>
    )        
}

export default Formulario