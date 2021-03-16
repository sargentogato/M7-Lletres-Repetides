/* 
 * Ejercicios 1
 */

const arr = ['M', 'A', 'R', 'L', 'O','N']

for (const iterator of arr) {
  console.log(iterator)
}

/* 
 * Ejercicios 2
 */

const vowels = ['A', 'E', 'I', 'O', 'U']

for (const iterator of arr) {
  const vowelMessage = "He encontrado la VOCAL"
  const consonantMessage = "He encontrado la CONSONANTE"
  const callback = (letter) => letter === iterator

  if(vowels.some(callback)){
    console.log(`${vowelMessage} ${iterator}`)
  }else{
    console.log(`${consonantMessage} ${iterator}`)
  }
}

/* 
 * Ejercicios 3
 */

const result = {}
const arr2 = ['M', 'A', 'R', 'L', 'O','N']

for (const iterator of arr2) {
  //Es diferente result[iterator] a lo que hay en el objeto = true
  if(!result[iterator]){
    result[iterator] = 1
  }else{
/*Cuando el resultado sea falso, al ser un objeto el que estamos accediendo, si result[iterator], ya está dentro del objeto, le agregará un número más */
    result[iterator]++
  }
}

console.log(result)

/* 
 * Ejercicios 4
 */

const arrCognom = ['V', 'E', 'L', 'A', 'S', 'Q', 'U', 'E', 'Z'] 
const fullName = [arr, arrCognom].join('" "')
console.log(fullName)
