// Curso de Engenharia de Software - UniEVANGÉLICA 
// Disciplina de Programação Web 
// Dev: Alexandre 2111127
// 25/02/2023

function sumMatrix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {

      for (var j = 0; j < matrix[i].length; j++) {
        sum += matrix[i][j];
      }
    }
    return sum;
  }
  var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  var totalSum = sumMatrix(matrix);
  console.log(totalSum);