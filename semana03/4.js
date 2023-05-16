// Curso de Engenharia de Software - UniEVANGÉLICA 
// Disciplina de Programação Web 
// Dev: Alexandre 2111127
// 25/02/2023

function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  const number = 17;
  if (isPrime(number)) {
    console.log(`${number} é primo`);
  } else {
    console.log(`${number} não é primo`);
  }
