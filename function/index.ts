//Versão 1---------------------------------------------------
const sum = function (a:number, b:number) {
    return a + b;
}
console.log(sum(10, 20))

//Versão 2---------------------------------------------------
const sum2 = (a:number, b:number) => {
    return a + b
}
console.log(sum2(10, 20))

//Versão 3---------------------------------------------------
const arrowSum = (a:number, b:number) => a + b
console.log(arrowSum(10, 20))

const imprimirOla = (name?:string) =>{
    if (name ){
        console.log(`Olá ${name}`)
    }else{
        console.log('Olá')
    }
} 
imprimirOla("Jeferson")

