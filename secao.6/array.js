const numero = []

numero.push(10, 2, 5, 6, 11, 90);

const rmf = numero.pop();
const rmi = numero.shift();

console.log(rmf);
console.log(rmi);

const slice = numero.slice(2, 4);
const splice = numero.splice(2, 1);

console.log(slice)
console.log(splice)

let soma = 0;
numero.forEach(item => {
    soma += item;
});

console.log(soma)