import { useState } from 'react';
import imgInsta from "../../assets/instagram-icon.png";
import imgGithub from "../../assets/github-icon.svg";
import './calculadora.css';

function Calculadora() {

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
            case imc > 25 && imc < 29.9:
                classificacao = "Sobrepeso";
                break;
            case imc >= 30 && imc < 34.9:
                classificacao = "Obesidade grau I";
                break;
            case imc >= 35 && imc < 39.9:
                classificacao = "Obesidade grau II";
                break;
            case imc >= 40 && imc <= 45:
                classificacao = 'Obesidade grau III'
                break;
            default:
                classificacao = 'Você está Muito acima do peso, preocure um médico urgentemente!'
                break;
        }

        setResultado(`Seu IMC é ${imc.toFixed(2)} (${classificacao}).`);
    };


    return (
        <div className='Calculadora'>
            <h1 className='calcTitle'>Calculadora de IMC</h1>
            <p className='Pcalc'>Insira seu peso e sua altura para calcular seu IMC</p>
            <div className='inputs'>
                <label>
                    Peso (kg):
                    <input
                        type="number"
                        value={peso}
                        onChange={(e) => setPeso(e.target.value)}
                        placeholder="Ex: 70"
                    />
                </label>
                <label>
                    Altura (m):
                    <input
                        type="number"
                        value={altura}
                        onChange={(e) => setAltura(e.target.value)}
                        placeholder="Ex: 1.75"
                    />
                </label>
                <button className='buttonCalc' onClick={calcularIMC}>
                    Calcular
                </button>
            </div>


            {resultado && (
                <div className='resultCalc'>
                    {resultado}
                </div>
            )}

            <div className='infos'>
                <div className='icons'>
                    <a href="https://www.instagram.com/eeriic_th?igsh=d3ZhbWxmNjYzcmxu&utm_source=qr" target='_blank'> <img src={imgInsta}/> </a>
                    <a href="https://github.com/eriicdev" target='_blank'> <img src={imgGithub}/> </a>
                </div>
                <p>Desenvolvido apenas para estudos de programação</p>
                <p>© Calculadora de IMC - Todos os direitos reservados - 2025. Desenvolvido por Erik costa</p>
            </div>
        </div>
    );
}

export default Calculadora;