/* // Tipos de função

//função declarativa

function funcao () {
    console.log("Sou uma mensagem de uma função declarativa!")
}
funcao();  */

/* // Expressão de função

//sem declaração do nome da função

var funcao = function () {
    console.log('sou uma mensagem de uma função de expressão!')
}

funcao()

//com declaração do nome da função
var funcao = function funcao () {
    console.log('sou uma mensagem de uma função de expressão!')
}

funcao() */

//Arrow function

/* var funcao = () => {
    console.log('Sou uma arrow function!')
}

funcao() */

function escopoLocal() {
	let escopoLocalInterno = “local”;
}
console.log(escopoLocalInterno);