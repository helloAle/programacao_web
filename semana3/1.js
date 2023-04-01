// Curso de Engenharia de Software - UniEVANGÉLICA 
// Disciplina de Programação Web 
// Dev: Alexandre 2111127
// 25/02/2023

function bubbleSort(array) {
  var len = array.length;
  var swapped;
  for (var i = 0; i < len; i++) {
    swapped = false;
    for (var j = 0; j < len - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return array;
}

var arr = [5, 3, 8, 4, 2];
var sortedArr = bubbleSort(arr);
console.log(sortedArr);