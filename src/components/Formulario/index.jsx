import { useState } from "react";

const Formulario = () => {
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [resultado, setResultado] = useState("")
    const [mostraImc, setMostraIMC] = useState("");
    const [classificacaoTab, setClassificacaoTab] = useState("")

    const calculaIndice = () => {
        const IMC = peso / (altura * altura);
        const IMCRounded = IMC.toFixed(1);
        return setResultado(IMCRounded);
    }

    const exibeIndice = () => {
        return setMostraIMC(`Seu índice de Massa Corpórea é: ${resultado}`);
    }

    const classificaIndice = () => {
        if (resultado < 18.5) {
            return  setClassificacaoTab("Você está com baixo Peso.");

        } else if  (resultado >= 18.5 && resultado < 24.9) {
            return setClassificacaoTab("Você está no peso adequado (Eutrofia).");

        } else if  (resultado >= 25.0 && resultado < 29.9) {
            return setClassificacaoTab("Você está com sobrepeso.");

        } else if  (resultado >= 30.0 && resultado < 34.9) {
            return setClassificacaoTab("Você está com obesidade grau 1.");

        } else if  (resultado >= 35.0 && resultado < 39.9) {
            return setClassificacaoTab("Você está com obesidade grau 2.");

        } else {
            return setClassificacaoTab("Você está com obesidade mórbida.");
        }
    }

    const limpaFormulario = () => {
        setPeso("");
        setAltura("");
        setMostraIMC("");
        setClassificacaoTab("");
    }

    const calculaEMostra = (e) => {        
        e.preventDefault();

        if (peso && altura > 0) {
            calculaIndice(); 
            exibeIndice();
            classificaIndice();
            
        } else {
            setMostraIMC("Por favor, digite os valores para que o cálculo seja efetuado!");
            setClassificacaoTab("");
        }
    }

    return (
        <>
            <form>
                <div>
                    <div>
                        <input type="number" value={peso} onChange={({target}) => setPeso(parseFloat(target.value))} placeholder="Digite o seu peso em kg"/>
                    </div>
                    <div>
                        <input type="number" value={altura} onChange={({target}) => setAltura(parseFloat(target.value))} placeholder="Digite a sua altura em cm"/>
                    </div>
                    <div>
                        <button type="button" onClick={calculaEMostra}>Calcular IMC</button>  
                    </div>
                    <div>
                        <button type="button" onClick={(e) => {e.preventDefault(); limpaFormulario();}}>Limpar</button>  
                    </div>                    
                </div>
                {
                    <div>
                        <p><b>{mostraImc}</b></p>
                        <p><b>{classificacaoTab}</b></p>
                    </div>
                }
            </form>
        </>
    )        
}

export default Formulario