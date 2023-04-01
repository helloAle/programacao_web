// Curso de Engenharia de Software - UniEVANGÉLICA 
// Disciplina de Programação Web 
// Dev: Alexandre 2111127
// 25/02/2023

function countWords(str) {
    return str.trim().split(/\s+/).length;
  }
  var phrase = "O rato roeu a roupa do rei de Roma";
  var wordCount = countWords(phrase);
  console.log(wordCount);