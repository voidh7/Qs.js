/*

*/

function newQBIT() {
  return {
    alpha: 1,
    beta: 0
  };
}

function newHADAMARD(qbit) {
  const newalpha = (qbit.alpha + qbit.beta) / Math.sqrt(2);  
  const newbeta = (qbit.alpha - qbit.beta) / Math.sqrt(2); 
  
  return {
    alpha: newalpha,
    beta: newbeta
  };
}

function mQbit(qubit) {
  const prob0 = Math.pow(Math.abs(qubit.alpha), 2); 
  const prob1 = Math.pow(Math.abs(qubit.beta), 2);  
  const soma = prob0 + prob1;
  
  if (Math.abs(soma - 1) > 0.0001) {
    console.warn(`Qubit não normalizado! |α|² + |β|² = ${soma}`);
  }

  const random = Math.random();
  let resultado;
  
  if (random < prob0) {
    resultado = 0;    
    qubit.alpha = 1;
    qubit.beta = 0;
  } else {
    resultado = 1; 
    qubit.alpha = 0;
    qubit.beta = 1;
  }
  
  return resultado;
}


function portx(qbit){
  
  return{
    alpha:qbit.beta,
    beta:qbit.alpha
  
  }
  
  function portz() {
    return{
      alpha: qbit.alpha,
      beta:-qbit.beta
    }

  }
  
  {
    
  }
 
}
