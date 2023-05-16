// Curso de Engenharia de Software - UniEVANGÉLICA 
// Disciplina de Programação Web 
// Dev: Alexandre 2111127
// 25/02/2023

function encontrarPalavraMaisLonga(str) {
    const words = str.split(' ');
    let longestWord = words[0];
    for (let i = 1; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
    return longestWord;
  }
  const str = "O algoritmo que encontra a palavra mais longa em uma string fornecida pelo usuário.";
  const longestWord = encontrarPalavraMaisLonga(str);
  console.log(longestWord);
  