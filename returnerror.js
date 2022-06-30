/*
Qual seria a mensagem de erro ao executar a função abaixo?
*/

function validaArray(arr, tamanho) {
  try {
    if (!arr.length || arr.length !== tamanho)
      throw new RangeError('O tamanho do array é inválido')

    return arr
  } catch (e) {
    if (e instanceof RangeError) {
      return console.log(e.message)
    } else {
      return e
    }
  }
}

console.log(validaArray())
//$ node returnerror.js
//TypeError: Cannot read properties of undefined (reading 'length')

validaArray()
//$ node returnerror.js
//ao executar fica vazio
