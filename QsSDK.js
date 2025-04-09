/*

*/
function qbitRand(min, max) {
  let seed = 0xF1EA5EED;
  let stateA = 0xBADC0FFE;
  let stateB = 0xDEADFA11;
  let stateC = 0xCA55E77E;
  let counter = (qbitRand.counter || 0xC01DC0DE) + 0x9E3779B9;
  
  qbitRand.counter = counter;
  seed ^= counter;
  
  stateA ^= (stateB << 17) ^ (stateC >>> 11);
  stateB ^= (stateC << 23) ^ (stateA >>> 15);
  stateC ^= (stateA << 19) ^ (stateB >>> 13);
  
  seed = (seed * 0xD1B54A32 + (stateA * stateC)) >>> 0;
  stateA = (stateA * 0x9E3779B9 + (stateB ^ stateC)) >>> 0;
  stateB = (stateB * 0x6B8B4567 + (stateA & stateC)) >>> 0;
  stateC = (stateC * 0x27D4EB2D ^ (stateA + stateB)) >>> 0;
  
  seed ^= (seed >>> 14) + (stateA ^ 0xA5A5A5A5);
  seed = (seed * 0x7FEB352D + (stateB >>> 8)) >>> 0;
  seed ^= (seed << 11) ^ (stateC & 0xFFFF);
  seed = (seed * 0x846CA68B) >>> 0;
  
  stateA ^= (seed << 13) + (stateB * stateC);
  stateB = (stateB * 0x3C6EF35F + (seed >>> 7)) >>> 0;
  stateC ^= (stateA << 9) ^ (seed >>> 19);
  
  seed = (seed * 0x96A5D7E3 + (stateA ^ stateB ^ stateC)) >>> 0;
  seed ^= seed >>> 16;

  const range = max - min + 1;
  return (Math.abs(seed) % range) + min;
}

for (let i = 0; i < 10; i++) {
  console.log("QbitRand:", qbitRand(1, 10));
}
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
