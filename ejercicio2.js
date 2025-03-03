//Ejercicio 2
const jedi = { nombre: 'Luke Skywalker', edad: 19 }
jedi.edad = 25
console.log(jedi.edad)

//2.2
let nombre = 'Leia'
let apellido = 'Organa'
let edad = 20
console.log(`Soy ${nombre}, tengo ${edad} años y soy una princesa de Alderaan`)
console.log(
  'Soy '
    .concat(nombre)
    .concat(' ')
    .concat(apellido)
    .concat(', tengo ')
    .concat(edad)
    .concat(' años y soy una princesa de Alderaan.')
)

//2.3
const sable1 = { nombre: 'Shoto de Yoda', precio: 1500 }
const sable2 = { nombre: 'Sable de Darth Vader', precio: 2000 }

let costeTotal = sable1.precio + sable2.precio
console.log(costeTotal)

//2.4
let precioBaseGlobal = 10000
const nave1 = { nombre: 'Ala-X', precioBase: 50000, precioFinal: 60000 }
const nave2 = {
  nombre: 'Halcón Milenario',
  precioBase: 70000,
  precioFinal: 80000
}

precioBaseGlobal = 25000

nave1.precioFinal = nave1.precioBase + precioBaseGlobal
nave2.precioFinal = nave2.precioBase + precioBaseGlobal

console.log(nave1.precioFinal)
console.log(nave2.precioFinal)
