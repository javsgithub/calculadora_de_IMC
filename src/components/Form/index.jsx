import { useState } from "react";
import styles from "./Form.module.css"

const Form = (props) => {
    const [mass, setMass] = useState("");
    const [height, setHeight] = useState("");

    const calculateAndShow = e => {
        e.preventDefault();
        if (mass > 0 && height > 0) {    
            const IMC = mass / (height * height);
            props.updateResult(IMC);
            setMass("");
            setHeight("");        
        } 
    }

    const clearResults = e => {
        e.preventDefault();
        props.reset();
    }

    return (
        <>
            <form className={styles.form}>
                <div className={styles.mainDiv}>
                    <div className={styles.div}>
                        <input required className={styles.input} type="number" value={mass} onChange={({target}) => setMass(parseFloat(target.value))} placeholder='Digite aqui o seu peso em "kg"'/>
                    </div>
                    <div className={styles.div}>
                        <input required className={styles.input} type="number" value={height} onChange={({target}) => setHeight(parseFloat(target.value))} placeholder='Digite aqui a sua altura em "m"'/>
                    </div>
                    <div className={styles.div}>
                        <button className={styles.button} type="button" onClick={calculateAndShow}>Calcular IMC</button>  
                    </div>
                    {/* <div className={styles.div}>
                        <button className={styles.button} type="button" onClick={clearResults} >Novo</button>  
                    </div>                     */}
                </div>                    
            </form>
        </>
    )        
}

export default Form