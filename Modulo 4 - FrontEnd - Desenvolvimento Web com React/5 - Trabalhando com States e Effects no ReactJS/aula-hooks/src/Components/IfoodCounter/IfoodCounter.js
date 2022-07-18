import React, { useState, useEffect } from 'react';
import '../IfoodCounter/IfoodCounter.css';

function IFoodCounter() {
    
    const [ value, setValue] = useState(1); // uma boa prática é iniciar a segunda variável com um "set" na frente, justamente porque essa função vai setar a variável anterior.

    // vamos utilizar os estados no react para manipular o css
    const [ buttonStyle, setButtonStyle] = useState('counter-button-minus-active') // lembrando que o que vai entre parenteses no useState é o estado inicial 

    useEffect(() => {
        document.getElementById('moeda').innerHTML = 2.00  * value
    }, [value]) // o useEffetc pede qual função deve ser executada e que evento ou variável ele tem que vigiar para que toda alteração que aconteça ele execute a função.

    function down() {
        
        if(value <= 1) {
            // mudar o css para o sinal de menos ficar preto
            setButtonStyle('counter-button-minus-desactive')
        }

        if(value > 0) {
            setValue(value - 1)
        }
    }

    // quanto menos responsabilidades uma função tiver, melhor. Neste caso uma função para aumentar o valor e uma para dimiuir.

    function up() {
        setValue(value + 1)
        setButtonStyle('counter-button-minus-active')
    }
    
    return (
        <div className="countex-wrapper">
            <button
                className={buttonStyle}
                onClick={down}
            >
                -
            </button>
            <p>{value}</p>
            <button
                className='counter-button-plus-active'
                onClick={up}
            >
                +
            </button>
            <button id='moeda'>12,00</button>
        </div>
    )
}

export default IFoodCounter

// Resumo
// Sempre utilizar "set" antes da funçãoq que irá alterar a variável em useState 
// Podemos utilizar o useState para manipular estados de css ou textos também, não somente números.