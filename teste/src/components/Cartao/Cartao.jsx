import React, { Fragment } from "react";
//stateless
const Cartao = (   {nome, idade, options}   ) => {
  return (
    <Fragment>
      <h1>
         {nome} 
      </h1>
      <p>
          {idade}
      </p>
      <p>{options.trabalhando}</p>
    </Fragment>
  );
};

export default Cartao;
