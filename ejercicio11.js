// Ejercicio 11

const mixedElements = [
  6,
  1,
  'Marvel',
  1,
  'hamburguesa',
  '10',
  'Prometeo',
  8,
  'Hola mundo'
]
function averageWord(list) {
  let sumaNumbers = 0
  let sumaChars = 0

  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === 'number') {
      sumaNumbers += list[i]
    } else {
      sumaChars += list[i].length
    }
  }

  let sumaTotal = sumaNumbers + sumaChars
  return sumaTotal
}

console.log(averageWord(mixedElements))
