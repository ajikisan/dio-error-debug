/**
Atividade: validação de erros por tipo
O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda
ao número enviado como pârametro na função.
Caso contrário, um erro será lançado.
1 Crie uma função que recebe um array e um número.
   // function validaArray(arr, num)

2. Realize as seguintes validações:
a. Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
b. Se o array não for do tipo 'object', lance um erro do tipo TypeError
c. Se o número não for do tipo 'number', lance um erro do tipo TypeError
d. Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro
do tipo RangeError.
e. Utilize a declaração try...catch
f. Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof
 
* 
*/

function validaArray(arr, num) {
  try {
    if (!arr && !num)
      throw new ReferenceError('Por gentileza, envie os parâmetros arr e num') // a

    if (typeof arr !== 'object')
      throw new TypeError('arr - precisa ser do tipo object') // b

    if (typeof num !== 'number')
      throw new TypeError('num -  precisa ser do tipo number') // c

    if (arr.length !== num) throw new RangeError('Range - Tamanho inválido') //d

    return arr
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log('Este erro é um ReferenceError!')
      //console.log(e.name)
      //console.log(e.stack)
      console.log(e.message)
    } else if (e instanceof TypeError) {
      console.log('Este erro é um TypeError!')
      console.log(e.message)
    } else if (e instanceof RangeError) {
      console.log('Este erro é um RangeError!')
      console.log(e.message)
    } else {
      console.log('Tipo de erro não esperado' + e)
    }
  }
}

//chamar a função
console.log(validaArray())
//$ node error.js
//Este erro é um ReferenceError!
//Por gentileza, envie os parâmetros arr e num
//undefined

// tipo object
console.log(validaArray(9, 5))
//$ node error.js
//Este erro é um TypeError!
//arr - precisa ser do tipo object
//undefined

// tipo number
console.log(validaArray([], 'a'))
//$ node error.js
//Este erro é um TypeError!
//num -  precisa ser do tipo number
//undefined

// tipo range - está pedindo cinco elmentos, mas está vazio
console.log(validaArray([], 5))
//$ node error.js
//Este erro é um RangeError!
//Range - Tamanho inválido
//undefined

// Tudo certo
console.log('Tudo certo', validaArray([100, 3, 45, 98, 465, 12, 96], 7))
