const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "let x = 5;",
        "const x = 5;",
        "var x = 5;",
      ],
      correta: 1
    },
    {
      pergunta: "O que é NaN em JavaScript?",
      respostas: [
        "Not a Number",
        "New and Null",
        "Number and Null",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para imprimir algo no console em JavaScript?",
      respostas: [
        "console.print()",
        "log.console()",
        "console.log()",
      ],
      correta: 2
    },
    {
      pergunta: "O que o operador '===' faz em JavaScript?",
      respostas: [
        "Compara valores sem verificar o tipo",
        "Compara valores e verifica o tipo",
        "Atribui valores",
      ],
      correta: 1
    },
    {
      pergunta: "Como se chama a estrutura de controle que permite executar um bloco de código repetidamente enquanto uma condição for verdadeira?",
      respostas: [
        "if-else",
        "switch",
        "while",
      ],
      correta: 2
    },
    {
      pergunta: "Qual dos seguintes métodos é utilizado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "add()",
        "append()",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'parseInt()' faz?",
      respostas: [
        "Converte uma string para um número inteiro",
        "Converte um número para uma string",
        "Remove os espaços de uma string",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador lógico para 'OU' em JavaScript?",
      respostas: [
        "&&",
        "||",
        "!",
      ],
      correta: 1
    },
    {
      pergunta: "O que significa o acrônimo DOM em JavaScript?",
      respostas: [
        "Document Object Model",
        "Data Object Model",
        "Digital Output Module",
      ],
      correta: 0
    },
    {
      pergunta: "Como você declara uma função em JavaScript?",
      respostas: [
        "function myFunction()",
        "var myFunction()",
        "method myFunction()",
      ],
      correta: 0
    },
  ];
  
  // Exemplo de como exibir a resposta correta da primeira pergunta
  //alert(perguntas[0].respostas[perguntas[0].correta]);
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetiçao
  for(const item of perguntas) {
    //alert(item.pergunta)
    const quizItem = template.content.cloneNode(true)
  
    //mostra a pergunta devidamente na tela
    quizItem.querySelector('h3').textContent = item.pergunta
  
    //mostra as alternativas devidamente na tela
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      //fazendo input ser selecionavel em multiplas perguntas
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      //verifica input correto  (boolean = true/false)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta 
  
      corretas.delete(item) //muda total se mudar de certa pra errada
      if(estaCorreta) {
        corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas //muda tempo real "Acertos n de n"
    }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    //remove a primeira alternativa (do html)
    quizItem.querySelector('dl dt').remove()
  
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }