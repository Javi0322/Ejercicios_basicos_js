//Ejercicio 12

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]

function removeDuplicates(list) {
  let uniqueArray = []

  for (let i = 0; i < list.length; i++) {
    if (uniqueArray.indexOf(list[i]) === -1) {
      uniqueArray.push(list[i])
    }
  }

  return uniqueArray
}

console.log(removeDuplicates(duplicates))
