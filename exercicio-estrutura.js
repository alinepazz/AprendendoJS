//Faça um algoritmo que imprima números inteiros de n a 1;
//for(let n =10; n>= 1; n--){
// console.log(n);
//}


//Faça um algoritmo que imprima números inteiros de n a 1;
/*for (let n = 24; n >= 10; n--) {
    console.log(n);
}

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 1) {
        console.log(i)
    }
}



//Faça um algoritmo que imprima apenas os números ímpares de 1 a 100; (do-while)
let num = 1

do {
    if (num % 2 === 1) {
        console.log(num)
    }
    num++
}
while (num <= 100)*/

// Faça um programa que leia 5 números e informe o maior número.
// let ar = [2,5,4,7,8];
// let max =0
// for (let i =0; i<ar.length; i++) {
//     if(max<ar[i]){
//         max = ar[i]
//     }
//     console.log(ar[i]);
// }

//7. Faça um Programa que leia um array de 5 números inteiros e mostre-os. (Fazer com a mamãe)

/*let arr = [8, 5, 43, 97, 15];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}*/

// Faça um programa que peça um número inteiro e determine se ele é ou não um número primo.
// Um número primo é aquele que é divisível somente por ele mesmo e por 1.

/*let numero = 13;
let divisores = 0;

for(let i= 1; i <= numero; i++){
    if(numero % i === 0){
        divisores++;
    }
}

if(divisores === 2){
    console.log(numero + ' é primo');
}else{
    console.log(numero + ' não é primo');
}*/

/*O Sr. Manoel Joaquim possui uma grande loja de artigos de R$ 1,99, com cerca de 10 caixas. 
Para agilizar o cálculo de quanto cada cliente deve pagar ele desenvolveu um tabela que contém 
o número de itens que o cliente comprou e ao lado o valor da conta. Desta forma a atendente do caixa
 precisa apenas contar quantos itens o cliente está levando e olhar na tabela de preços.
  Você foi contratado para desenvolver o programa que monta esta tabela de preços, que conterá os preços
   de 1 até 50 produtos, conforme o exemplo abaixo:

Lojas Quase Dois - Tabela de preços

1 - R$ 1.99

2 - R$ 3.98

...

50 - R$ 99.50*/


/*let precoUnidade = 1.99;
let unidade = 1;


for(unidade = 1; unidade <=50; unidade++){
    let total = (precoUnidade*unidade);
    console.log(unidade + ' unidades' + ' = ' + total);
}*/

// A série de Fibonacci é formada pela seqüência 0,1,1,2,3,5,8,13,21,34,55,...
// Faça um programa capaz de gerar a série até o n−ésimo termo.

/*function calFibonacciSequence (qtdNumbers){
    if (qtdNumbers <=0){
        return[];
    }else if (qtdNumbers === 1){
    return[0];
    }else if (qtdNumbers === 2){
        return [0,1]
    }else{
        let fibonacciSeq = [0,1];
        let n1 = 0;
        let n2 = 1;
        for(let i = 3; i <= qtdNumbers; i++){
            let nextNumber = n1 + n2;
            n1 = n2;
            n2 = nextNumber;
        fibonacciSeq.push(nextNumber);    
        }
        return fibonacciSeq;
    }
}*/

//Para calcular o fatorial de um número, você multiplica todos os números menores que ele até 1.
 //Por exemplo, 10! = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1.
 //Faça um algoritmo que dado um número calcule o fatorial do mesmo.

//  function calcularFatorial(num){
//      for(let i =num-1; i>=1; i--){
//          num*=i;
//      }
//      return num;
//  }
//  console.log(calcularFatorial(7));

 //Faça uma função que receba uma quantidade x e retorne um array com x números randomicos.
 function randomico(quantidade){

    return Math.floor(Math.random() * quantidade)
 }
 let arr = [];
 for(let i=0; i<5; i++){
     arr.push(randomico(5));
 }
 console.log(arr);