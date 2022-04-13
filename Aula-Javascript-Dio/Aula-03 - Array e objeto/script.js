// O que são vetores ou arrays

/* let array = ["string", 1, true]
console.log(array) */

// Pode guardar vários tipos de dados

/* let array = ["string", 1, true, ["array1"], ["array2"], ["array3"], ["array4"]] */
/* console.log(array[4]) */

/*// for each

array.forEach(function(item,index){console.log(item, index)}) */

//Push
/* array.push('novo item');
console.log(array) */

//Pop

/* array.pop();
console.log (array) */

//Shift

/* array.shift()
console.log(array) */

//Unshift

/* array.unshift('novo item no inicio')
console.log(array) */

//indexOf

/* console.log(array.indexOf(true)) */

//splice

/* array.splice(0 , 3);
console.log(array) */

//Slice

/* let novoArray = array.slice(0, 3);
console.log(novoArray) */

let object = {string: "string", number: 1, boolean: true, array: ["array"], 
objectIntern: {objectIntern: "objeto interno"}};

/* console.log(object.objectIntern)

var string = object.objectIntern
console.log(string)

var arrayInterno = object.array
console.log(arrayInterno) */

var {string, boolean, objectIntern} = object
console.log(string, boolean, objectIntern)
