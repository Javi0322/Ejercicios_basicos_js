//Ejercicio 10
const numbers2 = [12, 21, 38, 5, 45, 37, 6]

function average(numberList) {
  let sum = sumNumbers(numberList)

  let average = sum / numberList.length

  return average
}

console.log(average(numbers2))
