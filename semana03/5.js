// Curso de Engenharia de Software - UniEVANGÉLICA 
// Disciplina de Programação Web 
// Dev: Alexandre 2111127
// 25/02/2023


function reverseString(str) {
    var reversed = "";
    for (var i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  var str = "Olá, mundo!";
  var reversedStr = reverseString(str);
  console.log(reversedStr);
  