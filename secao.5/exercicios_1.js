// Importa o módulo nativo readline
const readline = require('node:readline');

// Cria a interface de entrada e saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Faz a pergunta
rl.question('Faça sua conta, operações disponivel -> (+), (-), (x), (/): ', (answer) => {
    const [v1, operador, v3] = answer.split(' ');
    switch (operador) {
        case '+':
            console.log(Number.parseInt(v1) + Number.parseInt(v3));
            break;
        case '-':
            console.log(Number.parseInt(v1) - Number.parseInt(v3));
            break;
        case 'x':
            console.log(Number.parseInt(v1) * Number.parseInt(v3))
            break;
        case '/':
            console.log(Number.parseFloat(v1) / Number.parseFloat(v3))
            break;

        default:
            console.log('Operação inválida!')
            break;
    }
    rl.close();
});
