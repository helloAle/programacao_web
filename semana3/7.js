// Curso de Engenharia de Software - UniEVANGÉLICA 
// Disciplina de Programação Web 
// Dev: Alexandre 2111127
// 25/02/2023

function calcularMedia(nums) {
    if (nums.length === 0) {
      return null;
    }
    let soma = 0;
    for (let i = 0; i < nums.length; i++) {
      soma += nums[i];
    }
    const media = soma / nums.length;
    return media;
  }
  const numeros = [5, 10, 15, 20];
  const media = calcularMedia(numeros);
  console.log(media);