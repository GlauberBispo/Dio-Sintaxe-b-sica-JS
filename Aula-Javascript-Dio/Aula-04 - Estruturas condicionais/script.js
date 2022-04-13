 /* var soma = 1 + 1
console.log(soma) */

/*var jogador01 = 1;
var jogador02 = 1;
var placar;

jogador01 != -1 && jogador02 != -1 ? console.log ('Os jogadores são válidos') : 
console.log ('Jogadores invalidos')

// usando if
if (jogador01 > 0 && jogador02 == 0) {
    console.log('Jogador 01 marcou ponto!')
    placar = jogador01 > jogador02
} 
    
//usando else if
else if (jogador02 > 0 && jogador01 == 0) {
        console.log('Jogador 02 marcou ponto!')
        placar = jogador02 > jogador01
    }

else if(jogador01 == jogador02 && jogador01 != 0 && jogador02 != 0) {
    console.log('Ambos os jogadores marcaram pontos!')
    placar = jogador01 == jogador02
}
    
//usando else
else {
    console.log("ninguem marcou ponto!")
} 

switch(placar){
    case placar = jogador01 > jogador02:
        console.log('jogador 1 ganhou!');
        break;
    case placar = jogador02 > jogador01:
        console.log('Jogador 2 ganhou!')
        break;
    case placar = jogador01 == jogador02:
        console.log('Jogo empatado')
        break
        default:
            console.log('Ninguém Ganhou')
} */

let array = ['valor1','valor2','valor3','valor4','valor5',];

let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3',}

// for - executa uma instrução até que ela seja falsa

/* for( let indice = 0; indice < array.length; indice++) {
    console.log(indice)
} */

// for/in - executa repetição a partir de uma propriedade
//com array

/* for (let i in array) {
    console.log(i)
} */

//Com object

/* for (i in object) {
    console.log(i)
} */

//for/of - executa repetição a partir de valor
//Com array

/* for (i of array) {
    console.log(i)
}

//Com object (não recomendado)

for (i of object.propriedade1) {
    console.log(i)
} */

var a = 0
while (a < 10 ) {
    a++;
    console.log(a)
}

do {
    a++;
    console.log(a)
} while (a < 10)