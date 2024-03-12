"use strict";
function imprimirAluno(aluno) {
    console.log(`Olá, ${aluno.nome}!`);
    console.log(`Sua idade é de ${aluno.idade} anos!`);
    console.log(`Sua peso é de ${aluno.peso} kg!`);
}
imprimirAluno({ nome: 'Pedro', idade: 25, peso: 65, cpf: '123.456.789-10' });
let lista = [];
lista.push({ nome: 'Pedro', idade: 25, peso: 65, cpf: '123.456.789-10' });
lista.push({ nome: 'Maria', idade: 25, peso: 12, cpf: '123.456.789-11' });
console.log(lista[0]);
