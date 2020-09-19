import React from 'react';


const Formulario = ({casdastrar}) => {
    return (  
        <form onSubmit={casdastrar}>
            <input type="text" name="nome"/>
            <input type="number" name="idade"/>
            <input type="checkbox" name="trabalha"/>
            <button type="submit">Cadastrar</button>

        </form>

    );
}
 
export default Formulario;