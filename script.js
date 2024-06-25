console.log("probando")


let name1 = "bob";
let name2 = "patricio";


function saludar(name) {

  return `Hola ${name}`

} // ref 1234

console.log( saludar( name1 ) )
console.log( saludar( name2 ) )


function funcionQueRecibeUnCallback( otraFuncion ) {

  console.log(otraFuncion) // ref 1234
  console.log( otraFuncion("sarah") ) // ref 1234

}


funcionQueRecibeUnCallback( saludar ) // pasando un callback. // ref 1234


// para que aprendemos callbacks?

// 1. Existen logicas avanzadas de JS que usan este concepto (no  estamos a nivel de crearlo)
// 2. Existen muchos metodos en JS que utilizan este concepto de callback


// forEach


let arr = [1, 2, 3, 4, 5]

function imprimirAlgo() {
  console.log("patata")
}

arr.forEach( imprimirAlgo )

// pasar una funcion de callback anonima
arr.forEach( () => {
  console.log("patata pero con funcion anonima de flecha")
} )

arr.forEach( function() {
  console.log("patata pero con funcion anonima de expresion")
} )



let numbers = [4, 8, 15, 16, 23, 42];


numbers.forEach( (cadaElemento, index) => {
  // console.log(cadaElemento, index)
  console.log(`El numero es ${cadaElemento} y su posición es ${index}`)
  if (cadaElemento === 42) {
    console.log("La respuesta a la vida, el universo y todo lo demás")
  }
} )

// en el forEach no tenemos acceso a las palabras break y continue

numbers.forEach( (cadaElemento) => {
  if (cadaElemento === 8) {
    console.log("encontré el numero 8")
    // no podemos hacer break para detener el loop
  }
} )


let nuevoArray = numbers.map( (cadaElemento) => {
  console.log(cadaElemento)

  let cadaNuevoValor = cadaElemento * 100

  // obligatoriamente debe retornar lo que será cada nuevo valor
  return cadaNuevoValor
})

console.log(nuevoArray)



// filter

const cars = [
  { brand: "Mercedes-Benz", year: 2012, weight: 0.8 },
  { brand: "Porsche", year: 2020, weight: 1.3 },
  { brand: "Bugatti", year: 2003, weight: 0.5 },
  { brand: "Volvo", year: 2010, weight: 1.9 },
  { brand: "Smart", year: 2010, weight: 0.1 },
];


// filtrar todos los coches de año 2011
const filteredArr = cars.filter((eachCar) => {
  console.log(eachCar)

  if (eachCar.year > 2011) {
    return true // incluyelo
  } else {
    return false // ignoralo
  }

  // cada vez que veamos una condicion que retorna un booleano, podemos directamenre retornar la condicion
  // return eachCar.year > 2011

  // SIEMPRE DEBE RETORNAR UN BOOLEANO
  // true (añadelo al array)
  // false (no lo añadas al array)
})

console.log(filteredArr)


// reduce

let someNums = [1, 2, 3, 4, 5]

let total = someNums.reduce((acumulador, cadaElemento) => {
  console.log(acumulador, cadaElemento)

  // el reduce nos pide que retornemos lo que será en cada iteración el nuevo valor del acumulador
  return acumulador + cadaElemento

}, 0)
// como segundo argumento del reduce DEBERIAMOS agregar el valor inicial del acumulador

console.log(total)


let people = [
  { name: "Jorge", candy: 21 },
  { name: "Eva", candy: 18 },
  { name: "Juliette" },
  { name: "Caro", candy: 22 },
]


// sumar la cantidad de candy

let allCandy = people.reduce((acc, eachPerson) => {
  console.log(acc, eachPerson.candy)

  if (eachPerson.candy) {
    return acc + eachPerson.candy
  } else {
    return acc
  }

  // SIEMPRE debemos retornar algo. Lo que será el valor del proximo acumulador

}, 0)

console.log(allCandy)


// reverse o toReversed

const orderedNumbers = [1, 2, 3, 4, 5]

// const reversedNumbers = orderedNumbers.reverse()
const reversedNumbers = orderedNumbers.toReversed() // hace lo mismo que reverse pero NO muta el array original. Crea una copia con otra referencia.

console.log(reversedNumbers)
console.log(orderedNumbers)

// reverse y sort mutan el array original


// sort o toSorted

let someLetters = ["a", "e", "c", "b", "d"]

someLetters.sort()
console.log(someLetters)

let someNumbers = [1, 40, 6, 30, 800, 100]

someNumbers.sort((unElemento, otroElemento) => {
  console.log(unElemento, otroElemento)
  // indicar el algoritmo de orden

  // debemos retornar 3 posibles valores
  // - un valor positivo (el primero va antes que el segundo)
  // - un valor negativo (el segundo va antes que el primero)
  // - 0 estan en el orden correcto

  if (unElemento > otroElemento) {
    return 1
  } else if (otroElemento > unElemento) {
    return -1
  } else {
    return 0
  }


})
console.log(someNumbers)


let people2 = [
  { name: "Jorge", candy: 21 },
  { name: "Eva", candy: 18 },
  { name: "Juliette", candy: 10 },
  { name: "Caro", candy: 22 },
  { name: "Angel", candy: 22 },
  { name: "Águeda", candy: 22 },
]

people2.sort((elemA, elemB) => {

  // if (elemA.candy > elemB.candy) {
  //   return 1
  // } else if (elemB.candy > elemA.candy) {
  //   return -1
  // } else {
  //   return 0
  // }

  // if (elemA.name > elemB.name) {
  //   return 1
  // } else if (elemB.name > elemA.name) {
  //   return -1
  // } else {
  //   return 0
  // }

  return elemA.name.localeCompare(elemB.name)
  // localeCompare metodo perfecto para usar junto al sort para ordenar strings alfabeticamente

}) 

console.log(people2)