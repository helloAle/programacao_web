// Curso de Engenharia de Software - UniEVANGÉLICA 
// Disciplina de Programação Web 
// Dev: Alexandre 2111127
// 25/02/2023

function fatorial(n) {
    if (n == 0 || n == 1) {
      return 1;
    } else {
      return n * fatorial(n - 1);
    }
  }
  console.log(fatorial(5));