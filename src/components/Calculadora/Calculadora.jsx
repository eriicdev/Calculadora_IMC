import { useState } from 'react';
import './calculadora.css';

function Calculadora () {

    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState('');

    const calcularIMC = () => {
        const alturaEmMtros = parseFloat(altura);
        const pesoEmKg = parseFloat(peso);

        if (!pesoEmKg || !alturaEmMtros) {
            setResultado("Por favor, Insira valores válidos.");
            return;
        }

        const imc = pesoEmKg / (alturaEmMtros * alturaEmMtros);
    
        let classificacao;
        switch (true) {
            case imc < 18.5:
                classificacao = "Abaixo do peso";
                break;
            case imc >= 18.5 && imc < 24.9:
                classificacao = "Peso normal";
                break;
            case imc > 25 && imc > 29.9:
                classificacao = "Sobrepeso";
                break;
            case imc >= 30 && imc < 34.9:
                classificacao = "Obesidade grau I";
                break;
            case imc >= 35 && imc < 39.9:
                classificacao = "Obesidade grau II";
                break;
            default:
                classificacao = "Obesidade grau III";
                break;
        }
    
        setResultado(`Seu IMC é ${imc.toFixed(2)} (${classificacao}).`);
    };


    return (
        <div className="calculadora">
            
        </div>
    )
}

export default Calculadora;