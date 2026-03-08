const nota1 = -2;
const nota2 = -2;
const nota3 = -2;

const soma = nota1 + nota2 + nota3;
const media = soma / 3;

if (media > 1 && media < 3) {
    console.log('horrivel');
} else if (media >= 3 && media < 7) {
    console.log('da pra melhorar');
} else if (media >= 7) {
    console.log('excelente');
} else {
    console.log('media invalida');
}