import { useState } from 'react'; // Isso quer dizer que o nosso componente vai ter memória.

function Smartcounter() {
    const [ quantity, upQuantity ] = useState(1); // primeiro colocamos o valor que será atualizado e segundo a função que atualizará este valor e nos parametros da função useState colocamos o valor inicial da propriedade, no caso 1.
    
    return (
        <>
            <h1>{quantity}</h1>
            <button onClick={() => upQuantity(quantity + 1)}>Aumentar</button>
        </>
    )
}

export default Smartcounter

// useState retorna um vetor/array 
// 1 variável statefull, ou seja, uma variavel que guarda o estado daquele elemento
// 2 função amarrada a esta variavel que atualiza esse valor automaticamente