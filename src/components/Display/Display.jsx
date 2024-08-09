import styles from "./Display.module.css"

const Display = props => {
    const IMC = parseFloat(props.IMC);
    let displayOut = "";
    let IMCClassification = "";

    if (IMC !== 0) {
        displayOut = `Seu índice de massa corpórea é: ${IMC.toFixed(1)}`;

        if (IMC < 18.5) {
            IMCClassification = "Você está com baixo Peso.";

        } else if  (IMC >= 18.5 && IMC < 24.9) {
            IMCClassification = "Você está no peso adequado (Eutrofia).";

        } else if  (IMC >= 25.0 && IMC < 29.9) {
            IMCClassification = "Você está com sobrepeso.";

        } else if  (IMC >= 30.0 && IMC < 34.9) {
            IMCClassification = "Você está com obesidade grau 1.";

        } else if  (IMC >= 35.0 && IMC < 39.9) {
            IMCClassification = "Você está com obesidade grau 2.";

        } else {
            IMCClassification = "Você está com obesidade mórbida.";
        }
    }

    return ( 
        IMC > 0?
        <div className={styles.div}>
            <h2 className={styles.h2}>{IMCClassification}</h2>
            <p>{displayOut}</p>
        </div>: <p><b>Preencha os campos para que o cálculo seja efetuado.</b></p>
    )
}

export default Display