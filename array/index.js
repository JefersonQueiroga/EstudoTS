"use strict";
const people = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Jack', age: 35 },
    { name: 'John', age: 40 },
];
const filteredPeople = people.filter((person) => person.name !== 'John');
console.log(filteredPeople);
// Define um array de números
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((number) => number * number);
console.log(squares);
const produtos = [
    { nome: 'Notebook', preco: 1000, categoria: 'Notebook', },
    { nome: 'Tablet', preco: 2000, categoria: 'Tablet' },
    { nome: 'Mouse', preco: 3000, categoria: 'Acessório' },
    { nome: 'Teclado', preco: 4000, categoria: 'Acessório' },
];
const prod = produtos.map((produto) => {
    if (produto.categoria === 'Acessório') {
        return Object.assign(Object.assign({}, produto), { preco: produto.preco * 0.9 });
    }
    else {
        return produto;
    }
});
const prod2 = produtos.map(produto => produto.categoria === 'Acessório' ? Object.assign(Object.assign({}, produto), { preco: produto.preco * 0.9 }) : produto);
console.log("Produtos com desconto", prod);
// Array de pedidos
const pedidos = [
    { valor: 150, categoria: 'eletrônicos' },
    { valor: 200, categoria: 'eletrônicos' },
    { valor: 50, categoria: 'livros' },
    { valor: 90, categoria: 'livros' }
];
// Calcula o valor total para a categoria 'eletrônicos'
const totalEletronicos = pedidos.reduce((total, pedido) => {
    if (pedido.categoria === 'eletrônicos') {
        return total + pedido.valor;
    }
    else {
        return total;
    }
}, 0);
console.log(`Reduce - O valor total ${totalEletronicos}`);
