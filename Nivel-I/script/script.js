/*
 * Ejercicios 1
 */

const arr = ["M", "A", "R", "L", "O", "N"]

for (const iterator of arr) {
  console.log(iterator)
}

/*
 * Ejercicios 2
 */
console.log("=================Ejercicio 2================")

const vowels = ["A", "E", "I", "O", "U"]

for (const iterator of arr) {
  const vowelMessage = "He encontrado la VOCAL"
  const consonantMessage = "He encontrado la CONSONANTE"
  const callback = (letter) => letter === iterator

  if (vowels.some(callback)) {
    console.log(`${vowelMessage} ${iterator}`)
  } else {
    console.log(`${consonantMessage} ${iterator}`)
  }
}

/*
 * Ejercicios 3
 */

console.log("=================Ejercicio 3================")

const result = {}
const arr2 = ["M", "A", "R", "L", "O", "N"]

arr2.map((element) => {
  if (!result[element]) {
    result[element] = 1
  } else {
    result[element]++
  }
})
console.log(result)

/*
 * Ejercicios 4
 */
console.log("=================Ejercicio 4================")

const arrCognom = ["V", "E", "L", "A", "S", "Q", "U", "E", "Z"]
const fullName = [arr, arrCognom].join('" "')
console.log(fullName)
