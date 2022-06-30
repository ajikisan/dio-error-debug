<p>
<br>  Digital Innovation One 
<br>  Debugging e Error Handling
<br>  Instrutora: Stephany Nusch
<br>  Aluna: Mirian Ajiki Molicawa
<br>  Data:29/06/2022 
</p>

<h2> Tecnologias </h2>
<br> - [x] Visual Studio Code 
<br> - [x] Javascript 
<br> - [x] Node JS

<h1>Conceitos</h1>

<br> ECMAScript é uma especificação de linguagem, ou seja, ela define os padrões para uma <br> linguagem de programação, e o JavaScript é a implementação desses padrões.
<br>

<br> O Document Object Model ou simplesmente DOM é utilizado pelo navegador Web para <br> representar a sua página Web. Quando altera-se esse modelo com o uso do Javascript <br> altera-se também a página Web.
<br>


<h1>Tratamento de Erros</h1>

<br> O ECMAScript Error é um tipo de erro em tempo de execução e são compostos por:
<br> Mensagem, nome, linha e call stack.
<br>
<br> DOM Exception é um erro referente ao DOM - Document Object Model
<br>
<br> Throw lança um erro, enquanto Return retorna um valor.
<br>
<br> Dentro do bloco Try são executadas instruções e caso ocorra algum erro durante o <br> processo, ele será tratado no bloco catch.
<br>
<br> Bloco Catch é executado apenas quando ocorre um erro e possibilita a manipulação de um <br> objeto Error.
<br>
<br> Declaração Finally é executada sempre, independente de erros ocorrerem ou não.
<br>


<h2>Atividade: Validação de erros por tipo </h2>
<br> O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda
<br> ao número enviado como pârametro na função. Caso contrário, um erro será lançado.
<br>
<br> 1. Crie uma função que recebe um array e um número.
<br>
<br> 2. Realize as seguintes validações:
<br> a. Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
<br> b. Se o array não for do tipo 'object', lance um erro do tipo TypeError
<br> c. Se o número não for do tipo 'number', lance um erro do tipo TypeError
<br> d. Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro
<br> do tipo RangeError.
<br> e. Utilize a declaração Try...Catch
<br> f. Filtre as chamadas de Catch por cada tipo de erro utilizando o operador instanceof
<br>
