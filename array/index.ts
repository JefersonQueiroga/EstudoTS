interface Person {
    name: string;
    age: number;
  }
  
  const people: Person[] = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Jack', age: 35 },
    { name: 'John', age: 40 },
  ];
  
  const filteredPeople = people.filter((person) => person.name !== 'John');
  
  console.log(filteredPeople);

// Define um array de números
const numbers: number[] = [1, 2, 3, 4, 5];
const squares: number[] = numbers.map((number) => number * number);
console.log(squares);

interface Produto{
    nome: string;
    preco: number;
    categoria: string;
    temDesconto?: boolean;
}

const produtos: Produto[] = [
    { nome: 'Notebook', preco: 1000, categoria: 'Notebook',},
    { nome: 'Tablet', preco: 2000, categoria: 'Tablet' },
    { nome: 'Mouse', preco: 3000, categoria: 'Acessório' },
    { nome: 'Teclado', preco: 4000, categoria: 'Acessório' },
]

const prod: Produto[] = produtos.map((produto) => {
    if (produto.categoria === 'Acessório') {
        return {
            ...produto,
             preco: produto.preco * 0.9        }
    } else {
        return produto;
    }
});


const prod2: Produto[] = produtos.map(
        produto => produto.categoria === 'Acessório' ?
        { ...produto, preco: produto.preco * 0.9 }
         : produto);

console.log("Produtos com desconto",prod);

// reduce
interface Pedido {
    valor: number;
    categoria: string;
}

// Array de pedidos
const pedidos: Pedido[] = [
    { valor: 150, categoria: 'eletrônicos' },
    { valor: 200, categoria: 'eletrônicos' },
    { valor: 50, categoria: 'livros' },
    { valor: 90, categoria: 'livros' }
];

// Calcula o valor total para a categoria 'eletrônicos'
const totalEletronicos = pedidos.reduce((total, pedido) => {
    if (pedido.categoria === 'eletrônicos') {
        return total + pedido.valor;
    } else {
        return total;
    }
}, 0); 

console.log(`Reduce - O valor total ${totalEletronicos}`);



// Define um tipo para Pessoa
type Pessoa = {
    nome: string;
    idade: number;
};

// Cria um array de pessoas
const pessoas: Pessoa[] = [
    { nome: 'João', idade: 18 },
    { nome: 'Maria', idade: 22 },
    { nome: 'Ana', idade: 20 },
    { nome: 'Carlos', idade: 25 }
];

const pessoaComMaisDe20 = pessoas.find((pessoa) => pessoa.idade > 20);

console.log(pessoaComMaisDe20); 
